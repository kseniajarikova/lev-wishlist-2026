'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { gifts, type Gift } from './wishlist-data';

type Filter = 'all' | 'free' | 'creative' | 'nado' | 'sport';
const key = (id: string) => `lev-wishlist-2026:${id}`;
const posterLabel = (category: Gift['category']) => ({'Творчество':'придумай сам','Nado':'волчки в бой!','Одежда и спорт':'для приключений'})[category];
const money = (amount?: number) => amount ? `${new Intl.NumberFormat('ru-RU').format(amount)} ₽` : 'До 2000 ₽ — проверь цену';

export default function Home() {
  const [taken, setTaken] = useState<Set<string>>(new Set());
  const [mine, setMine] = useState<Set<string>>(() => typeof window === 'undefined' ? new Set() : new Set(gifts.filter(g => localStorage.getItem(key(g.id))).map(g => g.id)));
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>('all');
  const [notice, setNotice] = useState('');
  const refresh = useCallback(async () => {
    try {
      const response = await fetch('/api/reservations', { cache: 'no-store' });
      if (!response.ok) throw Error('Нет связи');
      const data = await response.json() as { reserved: string[] };
      setTaken(new Set(data.reserved.filter(id => gifts.some(g => g.id === id)))); setReady(true);
    } catch { setReady(false); setNotice('Не удалось обновить брони. Проверь интернет и попробуй ещё раз.'); }
  }, []);
  useEffect(() => {
    const initial = window.setTimeout(() => void refresh(), 0);
    const timer = window.setInterval(() => void refresh(), 12000);
    const onFocus = () => void refresh();
    window.addEventListener('focus', onFocus);
    return () => { clearTimeout(initial); clearInterval(timer); window.removeEventListener('focus', onFocus); };
  }, [refresh]);
  const shown = useMemo(() => gifts.filter(g => filter === 'all' || (filter === 'free' && !taken.has(g.id)) || (filter === 'creative' && g.category === 'Творчество') || (filter === 'nado' && g.category === 'Nado') || (filter === 'sport' && g.category === 'Одежда и спорт')), [filter, taken]);

  async function choose(g: Gift) {
    if (!ready || busy || (taken.has(g.id) && !mine.has(g.id))) return;
    const release = taken.has(g.id) && mine.has(g.id);
    const token = release ? localStorage.getItem(key(g.id)) : crypto.randomUUID();
    if (!token) return;
    setBusy(g.id); setNotice('');
    if (!release) localStorage.setItem(key(g.id), token);
    try {
      const result = await fetch('/api/reservations', { method: release ? 'DELETE' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: g.id, token }) });
      if (result.status === 409) { localStorage.removeItem(key(g.id)); setMine(old => { const s = new Set(old); s.delete(g.id); return s; }); setNotice('Этот подарок только что выбрали. Посмотри другие варианты.'); }
      else if (!result.ok) throw Error('Не получилось сохранить выбор. Попробуй ещё раз.');
      else {
        if (release) localStorage.removeItem(key(g.id));
        setMine(old => { const s = new Set(old); release ? s.delete(g.id) : s.add(g.id); return s; });
        setNotice(release ? 'Бронь снята — подарок снова свободен.' : 'Готово! Теперь все видят, что подарок выбран.');
      }
      await refresh();
    } catch (e) { setNotice(e instanceof Error ? e.message : 'Ошибка сохранения'); await refresh(); }
    finally { setBusy(null); }
  }

  return <main>
    <div className="topline"><span>ЛЁВИН ВИШ-ЛИСТ</span><span>✳</span><span>7 ЛЕТ · 2026</span></div>
    <section className="hero"><div className="hero-copy"><p className="eyebrow">✦ ПОДАРКИ ОТ ДРУЗЕЙ ✦</p><h1>Что подарить<br/><em>Лёве?</em></h1><p className="lead">Он любит головоломки, настолки, покемонов, волчки и всякие штуки, с которыми можно экспериментировать.</p><div className="hero-note"><span>✳</span><p>Выбери подарок и нажми <strong>«Забронировать»</strong> — остальные сразу увидят, что он занят. Вход не нужен.</p></div></div><div className="hero-art" aria-hidden="true"><i className="orbit a"/><i className="orbit b"/><span className="star a">✦</span><span className="star b">✳</span><strong>7</strong><small>LET’S PLAY!</small></div></section>
    <section className="content"><div className="intro"><div><p className="kicker">МНОГО ХОРОШИХ ИДЕЙ</p><h2>Выбирай, что нравится</h2></div><div className="count">{ready ? `${gifts.length - taken.size} свободно из ${gifts.length}` : 'Обновляем брони…'}</div></div><p className="deadline">Подарки нужны в Петербурге <strong>к 4 декабря</strong>. Цены ориентировочные: проверь размер, наличие и доставку в магазине.</p>
    <div className="filters" role="group" aria-label="Фильтр подарков">{([['all','Все'],['free','Свободные'],['creative','Творчество'],['nado','Волчки'],['sport','Для спорта']] as const).map(([id,title]) => <button key={id} className={filter === id ? 'filter active' : 'filter'} onClick={() => setFilter(id)} aria-pressed={filter === id}>{title}</button>)}</div>
    {notice && <div className="notice" role="status">{notice}<button onClick={() => setNotice('')} aria-label="Закрыть сообщение">×</button></div>}
    <div className="grid">{shown.map((g, index) => { const selected = taken.has(g.id); const own = selected && mine.has(g.id); return <article className={`card ${selected ? 'selected' : ''}`} key={g.id}><div className={`visual ${g.color}`} aria-hidden="true"><span className="number">{String(index+1).padStart(2,'0')}</span><span className="symbol">{g.symbol}</span><span className="corner">✳</span><span className="poster-label">{posterLabel(g.category)}</span></div><div className="card-body"><div className="badges"><span>{g.category}</span></div><h3>{g.title}</h3><p className="detail">{g.detail}</p><p className="price">{money(g.price)}{g.approx && <small> ориентир</small>}</p><a className="shop" href={g.url} target="_blank" rel="noopener noreferrer">{g.search ? 'Поиск подходящей модели' : 'Посмотреть товар'}</a><div className="reservation"><button className={own ? 'reserve own' : 'reserve'} disabled={!ready || !!busy || (selected && !own)} onClick={() => void choose(g)}>{busy === g.id ? 'Сохраняем…' : own ? 'Отменить мой выбор' : selected ? 'Уже выбрали' : 'Забронировать'}</button><span className={selected ? 'status taken' : 'status free'}>{own ? 'Твой выбор' : selected ? 'Занято' : 'Свободно'}</span></div></div></article>; })}</div>
    {!shown.length && <p className="empty">Здесь пока пусто. Выбери другой фильтр.</p>}</section>
    <footer><span>✳</span><p>Если выбрал подарок, пожалуйста, купи его до 4 декабря. Отменить бронь можно с того же устройства и браузера.</p><span>Для Лёвы · с любовью</span></footer>
  </main>;
}
