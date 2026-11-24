import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const reservations = sqliteTable('reservations', {
  giftId: text('gift_id').primaryKey(),
  tokenHash: text('token_hash').notNull(),
  createdAt: integer('created_at').notNull(),
});
