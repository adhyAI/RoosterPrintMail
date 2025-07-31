import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MemStorage } from '../server/storage';
import { demoRequestInsertSchema } from '../shared/schema';
// import { fromZodError } from 'zod-validation-error';

const storage = new MemStorage();

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
      const demoRequest = await storage.createDemoRequest(validatedData);
      
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
      const demoRequests = await storage.getDemoRequests();
      return res.json(demoRequests);
    } catch (error) {
      console.error('Error fetching demo requests:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}