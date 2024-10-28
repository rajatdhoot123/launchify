import {
  timestamp,
  boolean,
  pgTable,
  text,
  serial,
  primaryKey,
  integer,
  jsonb,
  numeric,
} from "drizzle-orm/pg-core";

export const users = pgTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  created_at: timestamp("created_at"),
  email_id: text("email_id").notNull(),
  is_active: boolean("is_active").notNull(),
  product_id: boolean("product_id").notNull(),
  meta: jsonb("meta").notNull(),
});

export const templates = pgTable("templates", {
  id: serial("id").primaryKey(),
  created_at: timestamp("created_at"),
  email_id: text("email_id").notNull(),
  is_active: boolean("is_active").notNull(),
  product_id: boolean("product_id").notNull(),
  price: numeric("price").notNull(),
  meta: jsonb("meta").notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
);

export const document = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  site: text("site").notNull(),
  subtitle: text("subtitle").default(""),
  doc: jsonb("content").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});
