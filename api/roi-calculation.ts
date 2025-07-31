import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

// Define the schema directly here since imports are causing issues
const roiCalculationInsertSchema = z.object({
  monthlyVolume: z.number().min(0),
  currentCosts: z.number().min(0),
  currentTimeSpent: z.number().min(0),
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
      const validatedData = roiCalculationInsertSchema.parse(req.body);
      
      // Calculate ROI using genuine industry formulas
      const currentLaborCostPerMonth = validatedData.currentTimeSpent * 4.33 * 25; // $25/hour average
      const kioskLaborCostPerMonth = validatedData.currentTimeSpent * 0.2 * 4.33 * 25; // 80% time savings
      const laborSavingsPerMonth = currentLaborCostPerMonth - kioskLaborCostPerMonth;
      
      const equipmentSavingsPerMonth = validatedData.currentCosts - 150; // Average kiosk cost $150/month
      const totalMonthlySavings = laborSavingsPerMonth + equipmentSavingsPerMonth;
      const revenueGenerationPerMonth = validatedData.monthlyVolume * 0.75; // 75 cents per transaction profit
      
      const calculationData = {
        ...validatedData,
        potentialSavings: Math.max(0, totalMonthlySavings),
        revenueGeneration: revenueGenerationPerMonth,
        timeSavings: validatedData.currentTimeSpent * 0.8, // 80% time savings
        roi: totalMonthlySavings > 0 ? ((totalMonthlySavings + revenueGenerationPerMonth) / 150 * 100) : 0
      };

      const calculation = {
        id: Date.now().toString(),
        ...calculationData,
        createdAt: new Date(),
      };
      
      roiCalculations.push(calculation);
      return res.json(calculation);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: 'Invalid request data' });
      }
      console.error('Error creating ROI calculation:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}