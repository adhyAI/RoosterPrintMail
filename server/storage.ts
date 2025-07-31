import { type User, type InsertUser, type DemoRequest, type InsertDemoRequest, type RoiCalculation, type InsertRoiCalculation } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createDemoRequest(request: InsertDemoRequest): Promise<DemoRequest>;
  createRoiCalculation(calculation: InsertRoiCalculation): Promise<RoiCalculation>;
  getDemoRequests(): Promise<DemoRequest[]>;
  getRoiCalculations(): Promise<RoiCalculation[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private demoRequests: Map<string, DemoRequest>;
  private roiCalculations: Map<string, RoiCalculation>;

  constructor() {
    this.users = new Map();
    this.demoRequests = new Map();
    this.roiCalculations = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createDemoRequest(insertRequest: InsertDemoRequest): Promise<DemoRequest> {
    const id = randomUUID();
    const request: DemoRequest = { 
      ...insertRequest, 
      id,
      createdAt: new Date()
    };
    this.demoRequests.set(id, request);
    return request;
  }

  async createRoiCalculation(insertCalculation: InsertRoiCalculation): Promise<RoiCalculation> {
    const id = randomUUID();
    const calculation: RoiCalculation = { 
      ...insertCalculation, 
      id,
      createdAt: new Date()
    };
    this.roiCalculations.set(id, calculation);
    return calculation;
  }

  async getDemoRequests(): Promise<DemoRequest[]> {
    return Array.from(this.demoRequests.values());
  }

  async getRoiCalculations(): Promise<RoiCalculation[]> {
    return Array.from(this.roiCalculations.values());
  }
}

export const storage = new MemStorage();
