# Full-stack Simulation Roadmap

## Timeline

- Start: 17 August 2026
- Target completion: 15 September 2026
- Product: Slotly appointment-booking platform

## Success criteria

The learner can explain a request from browser to PostgreSQL, design a relational schema, build a validated API, implement authentication and authorization, protect booking correctness under concurrency, test important behavior, diagnose errors with evidence, deploy the system, and demonstrate it in English.

## Sprint 1 — Service Catalogue

**Dates:** 17–23 August 2026

**Goal:** Deliver the first vertical slice from Next.js through Fastify to PostgreSQL.

Backend focus:

- Node.js and Fastify structure
- HTTP methods, status codes, headers, and REST resources
- Runtime validation and consistent errors
- PostgreSQL tables, relationships, constraints, migrations, and indexes
- Integration testing against a real database

Frontend focus:

- Server and Client Component boundaries
- Server state and request behavior
- Loading, error, and empty states
- Semantic HTML and accessible forms
- Responsive presentation

Deliverables:

- Monorepo and local PostgreSQL
- Health endpoint
- User, business, and service schema
- Public service-list endpoint and page
- Owner service-create endpoint and form
- OpenAPI documentation
- Focused integration tests
- English sprint demo

Interview outcomes:

- Explain API separation, validation, database constraints, integration testing, pagination, and frontend failure states.

## Sprint 2 — Identity and Access

**Dates:** 24–30 August 2026

**Goal:** Implement secure identity and owner-resource boundaries.

Backend focus:

- Password hashing
- Session lifecycle and secure cookies
- Authentication versus authorization
- Role and ownership checks
- CSRF, user enumeration, brute force, and sensitive logging awareness

Frontend focus:

- Authentication forms and pending states
- Protected navigation
- Expired-session behavior
- Accessible validation summaries

Deliverables:

- Registration, login, logout, and current-user endpoints
- Server-side sessions
- Owner and customer roles
- Authentication middleware
- Cross-owner authorization policies and tests
- Authentication interface and protected owner dashboard
- Authentication threat review
- English sprint demo

Interview outcomes:

- Explain sessions, cookies, password storage, HTTP 401 versus 403, and why UI hiding is not authorization.

## Sprint 3 — Reliable Booking

**Dates:** 31 August–6 September 2026

**Goal:** Implement availability and booking while preventing double booking.

Primary invariant:

> At most one active appointment may own a specific bookable slot.

Backend focus:

- Transactions and unique constraints
- Atomic operations and race conditions
- Idempotency and duplicate requests
- UTC and timezone strategy
- Structured logging and request correlation

Frontend focus:

- Timezone presentation
- Stale server state
- Conflict recovery
- Request race conditions
- Accessible booking confirmation and errors

Deliverables:

- Availability, slot, and appointment models
- Owner availability management
- Public available-slot endpoint
- Booking and cancellation endpoints
- Database-enforced double-booking protection
- Concurrent-request test
- Booking-request idempotency
- Customer and owner booking interfaces
- Correlated structured logs
- English sprint demo

Interview outcomes:

- Explain race conditions, transaction boundaries, database invariants, idempotency, UTC storage, and concurrency testing.

## Sprint 4 — Production Readiness

**Dates:** 7–13 September 2026

**Goal:** Make Slotly deployable, observable, demonstrable, and interview-ready.

Backend focus:

- Background work, retry, and job idempotency
- Health and readiness
- Graceful shutdown
- Environment configuration and migrations
- CI and deployment

Frontend focus:

- Accessibility audit
- Performance and SEO review
- Error boundaries
- Critical end-to-end journeys

Deliverables:

- PostgreSQL-backed notification job
- Health and readiness endpoints
- Graceful shutdown
- GitHub Actions quality checks
- Selected Playwright tests
- Accessibility and performance review
- Deployed frontend, API, and database
- Seeded demo account
- English README, OpenAPI, and architecture diagram
- Five-minute project demonstration

Interview outcomes:

- Explain deployment, secrets, migration workflow, notification failure, logging, readiness, testing strategy, limitations, and scaling priorities.

## Final review

**Dates:** 14–15 September 2026

- Remove misleading or unfinished features
- Run all tests and production builds
- Verify migrations from a clean database
- Verify deployed authentication and booking
- Verify demo account and seed data
- Review GitHub presentation and README
- Practice frontend, backend, and behavioral interviews
- Practice the five-minute demo and architecture explanation
- Prepare frontend and frontend-focused full-stack CV positioning

## Final communication deliverables

- 30-second professional introduction
- Two-minute career summary
- Five-minute product demonstration
- Five-minute architecture explanation
- Two-minute authentication explanation
- Two-minute double-booking explanation
- At least six behavioral stories using Situation, Task, Action, and Result
