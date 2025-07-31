# Rooster Print & Mail - Shipping Kiosk Application

## Overview

This is a full-stack web application for Rooster Print & Mail, a company that provides all-in-one shipping kiosk solutions. The application serves as a marketing website with interactive features for demo requests and ROI calculations. It showcases how their kiosks can replace traditional postage meters and provide comprehensive shipping services for businesses like coworking spaces, retail stores, and schools.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with a clear separation between client and server components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Development**: Hot module replacement via Vite integration

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Type-safe database schemas with Zod validation
- **Storage Strategy**: Dual storage implementation (in-memory for development, database-ready for production)

## Key Components

### Client-Side Components
1. **Landing Page Sections**:
   - Hero section with value proposition
   - Problem identification (postage meter issues)
   - Solution presentation (kiosk benefits)
   - Feature explanations and comparison tables
   - Industry-specific use cases
   - Interactive ROI calculator with genuine industry formulas
   - Demo request form

2. **Admin Dashboard** (`/admin`):
   - Real-time demo request monitoring
   - Auto-refresh every 30 seconds
   - Search and filter capabilities
   - One-click email and phone contact
   - Statistics overview and analytics
   - Mobile-responsive design

3. **UI Component Library**:
   - Complete shadcn/ui component set (40+ components)
   - Consistent design system with Radix UI accessibility
   - Responsive design with mobile-first approach

### Server-Side Components
1. **API Routes**:
   - `/api/demo-request` - POST endpoint for demo scheduling
   - `/api/roi-calculation` - POST endpoint for ROI calculations

2. **Storage Layer**:
   - Abstract storage interface for flexibility
   - In-memory implementation for development
   - Database-ready design for production scaling

3. **Data Models**:
   - Users (authentication ready)
   - Demo requests (lead capture)
   - ROI calculations (sales tool data)

## Data Flow

### Demo Request Flow
1. User fills out contact form (name, email, company, phone, message)
2. Client validates data using Zod schema
3. POST request to `/api/demo-request` with form data
4. Server validates and stores request
5. Success/error feedback via toast notifications

### ROI Calculator Flow
1. User inputs business metrics (monthly volume, current costs, time spent)
2. Client sends data to `/api/roi-calculation`
3. Server calculates potential savings, revenue generation, and time savings
4. Results displayed immediately with calculated benefits
5. Data stored for business analytics

### Development Workflow
1. Vite handles client-side hot reloading
2. Express serves API endpoints with request logging
3. Shared schemas ensure type safety between client and server
4. Development server integrates both frontend and backend

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Query for state management
- **UI Foundation**: Radix UI primitives for accessibility and behavior
- **Styling**: Tailwind CSS with PostCSS for processing
- **Forms**: React Hook Form with Hookform Resolvers for validation

### Database & Validation
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Validation**: Zod for runtime type checking and schema validation

### Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Full type safety across the stack
- **Replit Integration**: Custom plugins for development environment

### Utility Libraries
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation
- **Styling Utilities**: clsx and tailwind-merge for conditional classes
- **Carousel**: Embla Carousel for interactive components

## Deployment Strategy

### Development Environment
- Single command startup with `npm run dev`
- Integrated Vite development server with Express backend
- Hot module replacement for rapid development
- Replit-specific tooling for cloud development

### Production Build Process
1. **Frontend Build**: Vite compiles React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Setup**: Drizzle migrations via `npm run db:push`
4. **Static Serving**: Express serves built frontend assets

### Environment Configuration
- Database URL required via `DATABASE_URL` environment variable
- Production/development mode detection via `NODE_ENV`
- Replit-specific environment detection and tooling

### Scalability Considerations
- Storage interface allows easy database backend swapping
- Stateless server design for horizontal scaling
- CDN-ready static asset structure
- Environment-based configuration for different deployment targets

The application is designed to be a professional marketing tool that can capture leads through demo requests while providing immediate value through the ROI calculator. The architecture supports both rapid development and production deployment with clear separation of concerns and type safety throughout the stack.