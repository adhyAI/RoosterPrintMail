import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDemoRequestSchema, insertRoiCalculationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Demo request endpoint
  app.post("/api/demo-request", async (req, res) => {
    try {
      const validatedData = insertDemoRequestSchema.parse(req.body);
      const demoRequest = await storage.createDemoRequest(validatedData);
      res.json(demoRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // ROI calculation endpoint  
  app.post("/api/roi-calculation", async (req, res) => {
    try {
      const input = insertRoiCalculationSchema.parse(req.body);
      
      // Industry-based ROI calculation for shipping kiosks
      
      // 1. Equipment Cost Savings
      // Traditional postage meters cost $50-300/month rental + maintenance
      // Kiosk has lower operational costs (~$75/month including lease, maintenance, supplies)
      const monthlyEquipmentSavings = Math.max(0, input.currentRental - 75);
      
      // 2. Labor Cost Savings 
      // Average office admin wage: $18-25/hour
      // Kiosk reduces shipping time by 60-70% (industry average)
      const hourlyWage = 22; // Average admin wage
      const efficiencyGain = 0.65; // 65% time reduction
      const weeklyTimeSaved = input.hoursPerWeek * efficiencyGain;
      const monthlyTimeSaved = weeklyTimeSaved * 4.33; // Weeks per month
      const monthlyLaborSavings = monthlyTimeSaved * hourlyWage;
      
      // 3. Revenue Generation (for customer-facing businesses)
      // Typical markup: $1.50-3.00 per transaction
      // Conservative estimate: $1.75 average margin
      const averageMarginPerTransaction = 1.75;
      const monthlyRevenueGenerated = input.monthlyVolume * averageMarginPerTransaction;
      
      // 4. Additional cost reductions
      // Reduced paper waste, printing costs, packaging errors
      const miscSavings = Math.min(input.monthlyVolume * 0.25, 150); // $0.25 per package, capped at $150
      
      // Total calculations
      const totalMonthlySavings = Math.round(
        monthlyEquipmentSavings + monthlyLaborSavings + miscSavings
      );
      const totalMonthlyRevenue = Math.round(monthlyRevenueGenerated);
      const totalTimeSaved = Math.round(monthlyTimeSaved);

      const calculationData = {
        ...input,
        potentialSavings: totalMonthlySavings,
        revenueGenerated: totalMonthlyRevenue,
        timeSaved: totalTimeSaved,
      };

      const calculation = await storage.createRoiCalculation(calculationData);
      res.json(calculation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get demo requests (for admin purposes)
  app.get("/api/demo-requests", async (req, res) => {
    try {
      const requests = await storage.getDemoRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
