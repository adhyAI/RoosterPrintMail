import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const demoRequests = pgTable("demo_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  phone: text("phone"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const roiCalculations = pgTable("roi_calculations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  monthlyVolume: integer("monthly_volume").notNull(),
  averageValue: integer("average_value").notNull(),
  currentRental: integer("current_rental").notNull(),
  hoursPerWeek: integer("hours_per_week").notNull(),
  potentialSavings: integer("potential_savings"),
  revenueGenerated: integer("revenue_generated"),
  timeSaved: integer("time_saved"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertDemoRequestSchema = createInsertSchema(demoRequests).omit({
  id: true,
  createdAt: true,
});

export const insertRoiCalculationSchema = createInsertSchema(roiCalculations).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertDemoRequest = z.infer<typeof insertDemoRequestSchema>;
export type DemoRequest = typeof demoRequests.$inferSelect;

export type InsertRoiCalculation = z.infer<typeof insertRoiCalculationSchema>;
export type RoiCalculation = typeof roiCalculations.$inferSelect;
