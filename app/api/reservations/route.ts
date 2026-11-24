import { env } from 'cloudflare:workers';
import { NextRequest, NextResponse } from 'next/server';
import { gifts } from '../../wishlist-data';

export const dynamic = 'force-dynamic';
const valid = new Set(gifts.map(g => g.id));
const headers = {
  'Cache-Control': 'no-store, max-age=0',
  'Access-Control-Allow-Origin': 'https://kseniajarikova.github.io',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Vary': 'Origin',
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers });
}

async function parse(request: NextRequest) {
  const value = await request.json() as { id?: unknown; token?: unknown };
  if (typeof value.id !== 'string' || !valid.has(value.id) || typeof value.token !== 'string' || !/^[0-9a-f-]{36}$/.test(value.token)) return null;
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value.token));
  const tokenHash = [...new Uint8Array(digest)].map(n => n.toString(16).padStart(2, '0')).join('');
  return { id: value.id, tokenHash };
}

export async function GET() {
  try {
    const rows = await env.DB.prepare('SELECT gift_id FROM reservations').all<{ gift_id: string }>();
    return NextResponse.json({ reserved: rows.results.map(r => r.gift_id).filter(id => valid.has(id)) }, { headers });
  } catch {
    return NextResponse.json({ error: 'Временно недоступно' }, { status: 503, headers });
  }
}
export async function POST(request: NextRequest) {
  try {
    const value = await parse(request);
    if (!value) return NextResponse.json({ error: 'Некорректный запрос' }, { status: 400, headers });
    const result = await env.DB.prepare('INSERT OR IGNORE INTO reservations (gift_id, token_hash, created_at) VALUES (?, ?, ?)').bind(value.id, value.tokenHash, Date.now()).run();
    if (!result.meta.changes) return NextResponse.json({ error: 'Подарок уже выбран' }, { status: 409, headers });
    return NextResponse.json({ reserved: true }, { status: 201, headers });
  } catch {
    return NextResponse.json({ error: 'Временно недоступно' }, { status: 503, headers });
  }
}
export async function DELETE(request: NextRequest) {
  try {
    const value = await parse(request);
    if (!value) return NextResponse.json({ error: 'Некорректный запрос' }, { status: 400, headers });
    const result = await env.DB.prepare('DELETE FROM reservations WHERE gift_id = ? AND token_hash = ?').bind(value.id, value.tokenHash).run();
    if (!result.meta.changes) return NextResponse.json({ error: 'Бронь не найдена' }, { status: 404, headers });
    return NextResponse.json({ reserved: false }, { headers });
  } catch {
    return NextResponse.json({ error: 'Временно недоступно' }, { status: 503, headers });
  }
}
