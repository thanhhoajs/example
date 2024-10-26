import { int, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';
import { v4 as uuidv4 } from 'uuid';

import { users } from './users.schema';

export const sessions = mysqlTable('sessions', {
  id: varchar({ length: 36 }).primaryKey().default(uuidv4()),
  expiresAt: timestamp({ mode: 'date' }).notNull(),
  userId: int()
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  createdAt: timestamp({ mode: 'date' }).notNull().defaultNow(),
  updatedAt: timestamp({ mode: 'date' }).notNull().defaultNow(),
});
