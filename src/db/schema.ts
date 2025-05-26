import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description"),
  price: text("price").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const orders = pgTable("orders", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id),
  status: text("status").notNull(),
  total: text("total").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});