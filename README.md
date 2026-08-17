# Slotly

Slotly is an appointment-booking platform for small businesses.

Owners can manage their business, services, availability, and appointments. Customers can browse services, view available slots, book appointments, and cancel their own appointments.

This project is also a full-stack learning simulation focused on understanding the complete request flow from the browser to PostgreSQL.

## Project goals

The project is designed to demonstrate:

- Next.js and React frontend development
- Fastify API development with Node.js
- PostgreSQL data modeling and constraints
- Drizzle ORM and database migrations
- Zod runtime validation
- Authentication and authorization
- Unit, integration, concurrency, and selected end-to-end testing
- Structured logging and production readiness
- CI, deployment, and technical communication

## Architecture

Slotly uses a modular monolith with separate frontend and API applications:

```text
apps/
  web/        Next.js frontend
  api/        Fastify API
packages/
  shared/     Shared schemas and types when useful
```

PostgreSQL is the source of truth. The project intentionally avoids microservices and distributed-system infrastructure until the product demonstrates a need for that complexity.

## Prerequisites

Install the following tools:

- Node.js 22 or a compatible current LTS version
- pnpm 10.15.1
- PostgreSQL, or Docker if PostgreSQL will run in a container

Check the installed versions:

```powershell
node --version
pnpm --version
```

## Installation

Clone the repository and move into the project directory:

```powershell
git clone <repository-url>
cd "fullstack simulation"
```

Install all workspace dependencies from the repository root:

```powershell
pnpm install
```

## Environment variables

Create `apps/api/.env`:

```env
NODE_ENV=development
PORT=4000
DATABASE_URL=postgresql://slotly:slotly@localhost:5432/slotly
SESSION_SECRET=replace-this-with-a-long-random-local-secret
CORS_ORIGIN=http://localhost:3000
```

Create `apps/web/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

Keep real `.env` files local. Commit `.env.example` files instead of secrets.

## Running locally

Start the frontend and API together:

```powershell
pnpm dev
```

The development applications are expected to be available at:

- Web: <http://localhost:3000>
- API: <http://localhost:4000>

Run an individual application when needed:

```powershell
pnpm --filter ./apps/web dev
pnpm --filter ./apps/api dev
```

## Root commands

```powershell
pnpm dev
```

Starts the web and API development servers in parallel.

```powershell
pnpm typecheck
```

Type-checks all workspace packages.

```powershell
pnpm test
```

Runs the workspace test suites.

```powershell
pnpm build
```

Builds all workspace packages for production.

```powershell
pnpm check
```

Runs type checking, tests, and production builds in sequence.

## Development workflow

Work on one vertical slice at a time:

1. Clarify the ticket and acceptance criteria.
2. Complete a design check before important backend work.
3. Implement the smallest useful increment.
4. Add runtime validation and expected error handling.
5. Consider authentication, authorization, and ownership boundaries.
6. Add focused automated tests.
7. Run the relevant checks and production build.
8. Document important decisions and remaining limitations.

Backend business logic should remain outside route handlers. Critical invariants, especially booking correctness, should be protected by database constraints rather than application code alone.

## Product roadmap

### Sprint 1 — Service catalogue

- Health endpoint
- User, business, and service schema
- Public service listing
- Owner service creation
- OpenAPI documentation
- Focused integration tests

### Sprint 2 — Identity and access

- Registration, login, logout, and current-user endpoints
- Server-side sessions
- Owner and customer roles
- Ownership authorization

### Sprint 3 — Reliable booking

- Availability and appointment models
- Public available slots
- Booking and cancellation
- Database-enforced double-booking protection
- Idempotent booking requests
- Concurrent booking tests

### Sprint 4 — Production readiness

- PostgreSQL-backed notification work
- Health and readiness checks
- Graceful shutdown
- CI and deployment
- Selected Playwright journeys
- Accessibility and performance review

## Testing expectations

Use the appropriate test level for each behavior:

- Unit tests for isolated business rules
- Integration tests for API routes and PostgreSQL behavior
- Concurrent-request tests for booking correctness
- Playwright tests for selected critical user journeys
- Manual checks for accessibility, responsive behavior, and failure states

Passing TypeScript alone is not sufficient evidence that a feature works. Important behavior should be supported by repeatable tests, inspected HTTP responses, database assertions, or relevant logs.

## Security notes

- Never commit passwords, session secrets, database credentials, or tokens.
- Server-side validation is required even when the frontend validates input.
- Authentication and authorization are separate concerns.
- Hiding a control in the UI is not authorization.
- Passwords and session identifiers must not appear in logs.
- Cross-owner access must be tested explicitly.

## Current status

The project is currently in Sprint 1, Service Catalogue. The initial setup ticket is `SETUP-001`.

Refer to the following documents for the full learning plan and decisions:

- [`roadmap.md`](./roadmap.md)
- [`backlog.md`](./backlog.md)
- [`context.md`](./context.md)
- [`progress.md`](./progress.md)
- [`decisions/`](./decisions/)

## Scope boundaries

The following are intentionally out of scope for the core project:

- Payments
- Social authentication
- Chat
- Native mobile applications
- Microservices
- Kubernetes
- Kafka
- Advanced analytics
- AI scheduling
