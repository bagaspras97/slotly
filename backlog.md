# Slotly Backlog

## Workflow

Statuses: Ready, In Progress, In Review, Blocked, Done.

Priorities:

- P0 blocks the program or critical correctness
- P1 is required for the final demonstration
- P2 is optional after core outcomes
- P3 is outside the deadline

Keep one primary implementation ticket in progress.

## Sprint 1

### SETUP-001 — Initialize the monorepo

**Priority:** P0  
**Status:** In Progress

Acceptance criteria:

- Workspace monorepo contains `apps/web`, `apps/api`, and `packages/shared`
- Root commands cover development, type checking, testing, and building
- Required environment variables are documented without secrets
- Setup instructions work from a clean checkout

### DATA-001 — Run PostgreSQL locally

**Priority:** P0  
**Status:** Ready

Acceptance criteria:

- PostgreSQL runs through Docker Compose
- API connection is configurable
- Invalid or unavailable database configuration fails clearly
- Setup and reset workflow is documented

### API-001 — Add health endpoint

**Priority:** P0  
**Status:** Ready

Acceptance criteria:

- `GET /health` returns HTTP 200 and a stable status
- No secrets are exposed
- Automated test and OpenAPI documentation exist

### DATA-002 — Create initial business schema

**Priority:** P0  
**Status:** Ready

Entities: User, Business, Service.

Acceptance criteria:

- Stable primary keys, required fields, foreign keys, timestamps, and appropriate constraints
- Price and duration use deliberate data types
- Migration creates the schema from an empty database
- Schema decisions are explained

Design questions:

- Can one owner manage multiple businesses?
- How is money represented?
- Are services deleted or deactivated?
- Which values are unique and within which scope?

### API-002 — List public business services

**Priority:** P1  
**Status:** Ready

Acceptance criteria:

- `GET /businesses/:businessId/services` returns active services
- Unknown business and invalid pagination produce documented errors
- Ordering is deterministic and internal data is excluded
- Integration tests and OpenAPI documentation exist

### API-003 — Create a business service

**Priority:** P1  
**Status:** Ready

Acceptance criteria:

- Name, price, and duration are validated at runtime
- Created data is persisted and returned with an appropriate status
- Consistent validation errors and integration tests exist
- Temporary seeded-owner identity is removed during Sprint 2

### WEB-001 — Display public services

**Priority:** P1  
**Status:** Ready

Acceptance criteria:

- Page loads from the API
- Loading, error, and empty states are implemented
- Service information is semantic, accessible, responsive, and tested

### WEB-002 — Create service from owner interface

**Priority:** P1  
**Status:** Ready

Acceptance criteria:

- Accessible name, duration, and price form
- Pending, server-validation, and success states
- Successful submission updates visible data
- Repeated submission is prevented or safely handled

### TEST-001 — Establish integration-test infrastructure

**Priority:** P0  
**Status:** Ready

Acceptance criteria:

- Tests use isolated PostgreSQL data
- Migrations run before tests
- Tests do not depend on order
- At least one API test proves database persistence

## Sprint 2

### AUTH-001 — Register a user

**Priority:** P1  
**Status:** Ready

- Validate email and password
- Protect email uniqueness in the database
- Hash passwords and never expose hashes
- Test valid and duplicate registration
- Exclude credentials from logs

### AUTH-002 — Sign in and establish a session

**Priority:** P1  
**Status:** Ready

- Correct credentials establish a server-side session
- Invalid credentials return a generic error
- Session identifier uses an HttpOnly cookie
- Expiration and production cookie attributes are defined
- Tests cover success, wrong password, and unknown user

### AUTH-003 — Sign out and invalidate session

**Priority:** P1  
**Status:** Ready

- Server invalidates the session and clears the cookie
- Reuse does not authenticate
- Repeated logout is safe and tested

### AUTH-004 — Return current authenticated user

**Priority:** P1  
**Status:** Ready

- `GET /me` returns a safe user profile
- Anonymous requests receive the documented response
- Sensitive fields are excluded and behavior is tested

### AUTHZ-001 — Protect owner-only operations

**Priority:** P0  
**Status:** Ready

- Anonymous users and customers cannot manage services
- Owners cannot modify another owner's business
- Ownership is enforced server-side
- Cross-owner integration tests prove the boundary

### WEB-003 — Add registration and login interfaces

**Priority:** P1  
**Status:** Ready

- Accessible forms and pending states
- Safe authentication and validation errors
- Correct redirect and refresh behavior
- Credentials are not stored in local storage

### WEB-004 — Protect owner dashboard

**Priority:** P1  
**Status:** Ready

- Anonymous and customer access is rejected appropriately
- Expired sessions are handled
- UI visibility is not the only authorization control

### SEC-001 — Authentication threat review

**Priority:** P1  
**Status:** Ready

Review password storage, brute force, session theft and invalidation, cookie security, CSRF, user enumeration, sensitive logs, and cross-owner access. Record mitigations and create tickets for critical gaps.

## Sprint 3

### DATA-003 — Model availability and appointments

**Priority:** P0  
**Status:** Ready

- Model availability, bookable slots, appointments, status, ownership, and timezone context
- Store timestamps using a documented UTC strategy
- Database design can enforce one active appointment per slot
- Migration and decision record exist

### API-004 — Manage owner availability

**Priority:** P1  
**Status:** Ready

- Only the owner manages availability
- Start and end are validated and ordered correctly
- Conflicts and timezone handling are consistent and tested

### API-005 — List public available slots

**Priority:** P1  
**Status:** Ready

- Return future bookable slots only
- Filter by service and date range
- Validate filters, order deterministically, and test queries

### BOOK-001 — Create an appointment

**Priority:** P0  
**Status:** Ready

Invariant: at most one active appointment may own one slot.

- Authenticated customers can book valid, available slots
- Service, business, and slot relationships are validated
- Database protects the invariant
- Duplicate attempts return HTTP conflict
- Normal and duplicate cases are tested

Before coding, explain why read-then-insert is unsafe, the database protection, transaction need, error mapping, and concurrency-test plan.

### BOOK-002 — Prove concurrent booking safety

**Priority:** P0  
**Status:** Ready

- Send concurrent booking attempts for the same slot
- Only one active appointment exists
- Remaining attempts receive documented conflict responses
- Assert final database state
- Verify the test fails if invariant protection is removed

### BOOK-003 — Add booking idempotency

**Priority:** P1  
**Status:** Ready

- Client may provide an idempotency key
- Same key and request return the original logical result
- Same key with conflicting input is rejected
- Lifecycle and concurrent behavior are documented and tested

### BOOK-004 — Cancel an appointment

**Priority:** P1  
**Status:** Ready

- Only the customer or authorized owner may cancel
- State transition and slot policy are documented
- Repeated cancellation is safe and tested

### WEB-005 — Customer booking flow

**Priority:** P1  
**Status:** Ready

- Show available slots in the intended timezone
- Implement pending, conflict, error, and confirmation behavior
- Support keyboard and mobile use
- Cover a critical flow with an automated test

### OBS-001 — Correlated structured logging

**Priority:** P1  
**Status:** Ready

- Each request has a correlation identifier
- Structured logs include method, route, status, duration, and safe context
- Sensitive values are excluded
- One request can be traced across its logs

## Sprint 4

### JOB-001 — Process booking notifications asynchronously

**Priority:** P1  
**Status:** Ready

- Booking creates durable notification work
- Email failure does not reverse a confirmed booking
- Retry, status, and idempotency exist
- Prefer a PostgreSQL-backed job unless another dependency is justified

### OPS-001 — Add health and readiness checks

**Priority:** P1  
**Status:** Ready

- Health reports process liveness
- Readiness checks required dependencies
- Dependency failure returns not-ready without exposing secrets
- Behavior is tested

### OPS-002 — Graceful shutdown

**Priority:** P1  
**Status:** Ready

- Handle termination signals
- Stop new traffic, allow active work to complete, close database resources, log shutdown, and enforce a timeout

### CI-001 — Continuous integration

**Priority:** P0  
**Status:** Ready

- Install from lockfile
- Verify formatting, linting, type checking, tests, and production builds
- Any failed check fails the workflow

### E2E-001 — Critical user journeys

**Priority:** P1  
**Status:** Ready

Cover owner authentication and service creation, customer booking, unauthorized owner-resource access, and booking conflict. Test data is deterministic and failures produce useful artifacts.

### QA-001 — Accessibility review

**Priority:** P1  
**Status:** Ready

Review keyboard navigation, labels, error announcements, focus, headings, contrast, dialogs, and loading communication. Run automated and manual checks.

### PERF-001 — Frontend performance review

**Priority:** P1  
**Status:** Ready

Measure production behavior, investigate one evidence-based hypothesis, and document remaining limitations. Review JavaScript, images, waterfalls, caching, Core Web Vitals, and component boundaries.

### DEPLOY-001 — Deploy Slotly

**Priority:** P0  
**Status:** Ready

- Public frontend, API, and hosted PostgreSQL
- Secure secrets and safe migrations
- Working production cookies and CORS
- Seeded demonstration account
- Documented deployment workflow

### DOC-001 — English README and architecture documentation

**Priority:** P0  
**Status:** Ready

Document product, features, architecture, technology choices, setup, environment variables, migrations, tests, deployment, authentication, double-booking protection, limitations, and future improvements.

### INT-001 — Frontend interview preparation

**Priority:** P0  
**Status:** Ready

Prepare explanations and examples for JavaScript, TypeScript, React rendering, state, effects, Next.js, hydration, accessibility, performance, SEO, testing, and frontend system design.

### INT-002 — Backend interview preparation

**Priority:** P0  
**Status:** Ready

Prepare project-backed explanations for HTTP, REST, validation, relational modeling, constraints, indexes, authentication, authorization, transactions, concurrency, idempotency, tests, logs, background jobs, and deployment.

### INT-003 — Behavioral interview preparation

**Priority:** P0  
**Status:** Ready

Prepare concise STAR stories about feature ownership, performance, ambiguity, debugging, technical disagreement, collaboration, learning, and production responsibility.

## P2 only after core completion

- Cursor pagination
- Application metrics
- Appointment rescheduling

## Explicitly out of scope

- Payment
- Social authentication
- Chat
- Native mobile app
- Microservices
- Kubernetes
- Kafka
- Advanced analytics
- AI scheduling
