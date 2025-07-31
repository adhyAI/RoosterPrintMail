import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

// Define the schema to match what the frontend sends
const roiCalculationInsertSchema = z.object({
  monthlyVolume: z.number().min(0),
  averageValue: z.number().min(0),
  currentRental: z.number().min(0),
  hoursPerWeek: z.number().min(0),
});

// Simple in-memory storage for demo purposes
const roiCalculations: any[] = [];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      console.log('Received ROI calculation request:', JSON.stringify(req.body));
      const validatedData = roiCalculationInsertSchema.parse(req.body);
      
      // Calculate ROI using genuine industry formulas (matching preview logic)
      
      // 1. Equipment Cost Comparison
      // Current equipment cost vs $150/month kiosk cost
      const monthlyEquipmentSavings = Math.max(0, validatedData.currentRental - 150);
      
      // 2. Labor Cost Savings 
      // Average office admin wage: $18-25/hour
      // Kiosk reduces shipping time by 60-70% (industry average)
      const hourlyWage = 22; // Average admin wage
      const efficiencyGain = 0.65; // 65% time reduction
      const weeklyTimeSaved = validatedData.hoursPerWeek * efficiencyGain;
      const monthlyTimeSaved = weeklyTimeSaved * 4.33; // Weeks per month
      const monthlyLaborSavings = monthlyTimeSaved * hourlyWage;
      
      // 3. Revenue Generation (for customer-facing businesses)
      // Typical markup: $1.50-3.00 per transaction
      // Conservative estimate: $1.75 average margin
      const averageMarginPerTransaction = 1.75;
      const monthlyRevenueGenerated = validatedData.monthlyVolume * averageMarginPerTransaction;
      
      // 4. Additional cost reductions
      // Reduced paper waste, printing costs, packaging errors
      const miscSavings = Math.min(validatedData.monthlyVolume * 0.25, 150); // $0.25 per package, capped at $150
      
      // Total calculations
      const totalMonthlySavings = Math.round(
        monthlyEquipmentSavings + monthlyLaborSavings + miscSavings
      );
      const totalMonthlyRevenue = Math.round(monthlyRevenueGenerated);
      const totalTimeSaved = Math.round(monthlyTimeSaved);

      const calculationData = {
        ...validatedData,
        potentialSavings: totalMonthlySavings,
        revenueGeneration: totalMonthlyRevenue,
        timeSavings: totalTimeSaved,
      };

      const calculation = {
        id: Date.now().toString(),
        ...calculationData,
        createdAt: new Date(),
      };
      
      roiCalculations.push(calculation);
      return res.json(calculation);
    } catch (error: any) {
      console.error('Error in ROI calculation:', error);
      if (error.name === 'ZodError') {
        console.error('Validation error details:', error.errors);
        return res.status(400).json({ 
          error: 'Invalid request data',
          details: error.errors
        });
      }
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}