# Zapier Clone

A personal project to build a clone of Zapier, focusing on automating workflows between various apps and services.

## Overview

This project is a web application built with Next.js that aims to replicate the functionality of Zapier. It allows users to create automated workflows (zaps) that connect different applications and automate tasks.

## Project Structure

- `web/`: Contains the Next.js web application, including the frontend UI and backend API routes.

## Features

- **Workflow Automation**: Create custom zaps to automate repetitive tasks.
- **App Integrations**: Connect with popular apps and services (planned for future development).
- **User-Friendly Interface**: Simple and intuitive UI for building workflows.
- **Real-Time Execution**: Trigger and execute workflows in real-time (planned).

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (via Neon)
- **ORM**: Drizzle ORM
- **UI Components**: Radix UI, Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd zapierClone
   ```

2. Navigate to the web directory:
   ```bash
   cd web
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Environment Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and set your database connection string:
   ```env
   DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"
   ```
   *Note: You will need a PostgreSQL database. This project is configured to use Neon.*

### Running the Application

1. Run database migrations (if applicable):
   ```bash
   npm run db:push
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## License

This project is licensed under the MIT License.
