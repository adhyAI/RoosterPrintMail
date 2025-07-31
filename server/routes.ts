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
      
      // Calculate ROI based on input
      const monthlySavings = Math.max(0, input.currentRental - 50); // Assume $50/month for kiosk
      const hourlyRate = 25; // Assume $25/hour labor cost
      const timeSavedMonthly = input.hoursPerWeek * 4.33; // Convert weekly to monthly
      const laborSavings = timeSavedMonthly * hourlyRate;
      
      const potentialSavings = Math.round(monthlySavings + laborSavings);
      const revenueGenerated = Math.round(input.monthlyVolume * 2); // Assume $2 margin per transaction
      const timeSaved = Math.round(timeSavedMonthly);

      const calculationData = {
        ...input,
        potentialSavings,
        revenueGenerated,
        timeSaved,
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
