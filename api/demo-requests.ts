import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

// Define the schema directly here since imports are causing issues
const demoRequestInsertSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().optional(),
});

// Simple in-memory storage for demo purposes
const demoRequests: any[] = [];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const validatedData = demoRequestInsertSchema.parse(req.body);
      const demoRequest = {
        id: Date.now().toString(),
        ...validatedData,
        createdAt: new Date(),
      };
      
      demoRequests.push(demoRequest);
      
      // Log to console for notifications
      console.log(`🎯 NEW DEMO REQUEST RECEIVED:
Name: ${demoRequest.name}
Email: ${demoRequest.email}
Company: ${demoRequest.company || 'Not provided'}
Phone: ${demoRequest.phone || 'Not provided'}
Message: ${demoRequest.message || 'No message'}
Time: ${new Date().toLocaleString()}
==================================================`);
      
      return res.json(demoRequest);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: 'Invalid request data' });
      }
      console.error('Error creating demo request:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  if (req.method === 'GET') {
    try {
      return res.json(demoRequests);
    } catch (error) {
      console.error('Error fetching demo requests:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}