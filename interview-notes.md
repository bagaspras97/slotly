# Interview Notes

## Usage

Use these as answer structures, not scripts. Explain simply, connect the answer to project evidence or professional experience, mention a trade-off, and state limitations honestly.

## Professional introduction

> I am a frontend engineer with more than five years of experience working with React, Next.js, Vue, and TypeScript. My strongest areas include delivering features from requirements to production, web performance, and technical SEO. I have been expanding my backend capability with Node.js and PostgreSQL so I can own features end to end. I am looking for a mid-level frontend or frontend-focused full-stack role where I can contribute immediately on the frontend while continuing to grow across the stack.

## Honest backend positioning

> My professional depth is stronger on the frontend. I have worked with backend functionality before, but I wanted to strengthen my independent understanding rather than rely on generated implementations. I built Slotly using Fastify and PostgreSQL, with particular attention to authentication, authorization, testing, and booking concurrency.

## Project walkthrough

Slotly is an appointment-booking platform. Owners manage businesses, services, availability, and appointments. Customers browse services, view available slots, book, and cancel appointments.

Architecture:

- Next.js frontend
- Fastify API
- PostgreSQL source of truth
- Drizzle schema and queries
- Zod runtime validation
- Vitest integration tests
- Playwright critical user journeys

The system begins as a modular monolith because the product and team size do not justify distributed-system complexity.

Five-minute demo:

1. Problem and users
2. Frontend service and booking flow
3. Validation, authentication, authorization, and persistence
4. Booking conflict and database invariant
5. Tests, CI, logs, architecture, and limitations

## Frontend answer outlines

### JavaScript event loop

- Synchronous work executes on the call stack
- Runtime APIs handle timers and network operations
- Completed callbacks enter task queues
- Promise callbacks enter the microtask queue
- Microtasks run after the current stack and before the next task
- Long synchronous work and unbounded microtasks delay rendering

### Closure

- A function retains access to its lexical environment
- Useful for callbacks, factories, and encapsulation
- Can retain memory or capture stale values
- Connect to React handlers while distinguishing closures from state

### React rendering

- Initial mount, state updates, parent rendering, context changes, and store subscriptions can trigger rendering
- Rendering does not guarantee a DOM change
- React calculates the next tree and commits required changes
- Memoization has comparison and complexity costs; measure first

### Reconciliation and keys

- React compares element trees
- Type and key determine identity
- Stable keys preserve intended state
- Index keys can associate state incorrectly when lists change
- Reconciliation differs from browser layout and paint

### State ownership

- Keep state near consumers
- Lift state for a shared source of truth
- Separate server state from interaction state
- Avoid duplicated derived state
- Use the URL for navigable or shareable state
- Use global state only when genuinely cross-cutting

### `useEffect`

- Effects synchronize with external systems
- Avoid using effects for ordinary derivation
- Manage dependencies and cleanup
- Prevent stale requests from committing state
- Separate unrelated synchronization concerns

### Hydration

- Server sends rendered HTML
- Client React reconstructs and attaches behavior
- Mismatch occurs when initial server and client output differs
- Common causes include browser-only, time-dependent, and random values
- Keep initial output deterministic or isolate client-only behavior

### Server and Client Components

- Server Components execute on the server and reduce browser JavaScript
- Client Components enable state, effects, handlers, and browser APIs
- Boundaries affect interactivity, caching, serialization, and bundle size
- Choose boundaries deliberately

### Performance

1. Measure the user problem
2. Identify network, server, JavaScript, rendering, image, or third-party bottleneck
3. Form a hypothesis
4. Make a focused change
5. Measure again

Discuss request waterfalls, client JavaScript, caching, image handling, expensive rendering, and real-user metrics.

### Accessibility

- Semantic HTML first
- Keyboard support
- Programmatic labels
- Focus management
- Validation and status announcements
- Contrast
- Automated checks plus manual keyboard and screen-reader review

### Technical SEO

- Crawlable content and correct rendering
- Accurate metadata and canonical URLs
- Structured data when useful
- Sitemap and robots behavior
- Duplicate-page control
- Performance
- Verify rendered output

### Frontend system design

- Begin with product and team boundaries
- Organize by domain
- Separate server access, domain behavior, and presentation
- Establish design-system primitives
- Define state, caching, tests, error reporting, and performance monitoring
- Introduce complexity only when required

## Backend answer outlines

### Browser-to-database request

1. Browser resolves the destination and connects
2. HTTP request is sent
3. Server routes the request
4. Hooks process cross-cutting concerns
5. Runtime input validation executes
6. Authentication establishes identity
7. Authorization checks permission
8. Business logic executes
9. Database is queried or changed
10. Errors map to HTTP responses
11. Frontend updates server state and UI

### Runtime validation

- Untrusted input is checked at the boundary
- TypeScript does not validate runtime data
- Client validation improves UX
- Server validation protects the system
- Database constraints protect critical invariants

### Authentication and authorization

- Authentication determines identity
- Authorization determines permitted actions
- A session establishes identity
- Role, ownership, and policy establish permission
- Hidden UI is never sufficient authorization

### PostgreSQL

- Domain data is relational
- Transactions, constraints, indexes, and SQL support integrity and queries
- Booking correctness benefits from database guarantees
- Reconsider only when requirements materially change

### Constraints

- Database-enforced rules include non-null, foreign key, unique, and check constraints
- Constraints protect every write path
- API validation improves errors but does not replace invariant protection

### Indexes

- Indexes accelerate relevant lookup, join, and ordering patterns
- They cost storage and write overhead
- Choose from actual queries and validate with query plans
- Do not index every column by default

### Transactions

- Group operations into one logical unit
- Commit or roll back together
- Protect related changes
- Do not automatically solve every concurrency issue
- Isolation and constraints still matter

### Race conditions and double booking

- Correctness depends on timing of concurrent operations
- Two requests can both read a slot as available
- Read-then-insert alone is unsafe
- Define one active appointment per slot as a database invariant
- Use an appropriate unique or atomic mechanism
- Map conflicts to HTTP 409
- Prove behavior with concurrent requests and final-state assertions

### Idempotency

- Repeating a request creates the same logical effect as once
- Network retries can duplicate mutations
- An idempotency key associates retries with an original result
- Conflicting reuse must be rejected
- Storage lifetime and concurrent behavior must be defined

### HTTP 401 and 403

- 401 means valid authentication is required
- 403 means identity is known but action is not permitted
- Some systems intentionally hide resource existence, so response policy should be deliberate

### Backend testing

- Unit tests for isolated business rules
- Integration tests for routes and PostgreSQL behavior
- E2E tests for selected critical journeys
- Use real PostgreSQL for database behavior
- Replace external providers only at their boundary
- Explicitly test failures, authorization, and concurrency

### Logging

Include timestamp, severity, request ID, operation, status, duration, safe identifiers, and error classification. Exclude passwords, session tokens, secrets, and unnecessary personal data.

### Background jobs

- Move non-immediate work outside the user request
- Persist work before acknowledging success when required
- Define retry, status, idempotency, and failure visibility
- A queue changes failure behavior; it does not remove failure

### Increased traffic

1. Measure the bottleneck
2. Inspect latency and database queries
3. Fix indexes and inefficient queries
4. Cache appropriate reads
5. Scale stateless instances
6. Review database connections
7. Move expensive work out of requests
8. Revisit architecture only with evidence

## Behavioral stories to prepare

Prepare STAR stories for:

1. Feature from requirement to production
2. Frontend performance improvement
3. Ambiguous requirement
4. Difficult bug
5. Technical disagreement
6. Cross-functional collaboration
7. Learning backend fundamentals
8. Ownership of a production outcome

Each story should clarify personal contribution, constraints, decisions, evidence, outcome, and learning. Prepare a version under two minutes.

## Questions for interviewers

- How is ownership divided between frontend and backend engineers?
- What does success look like in the first three months?
- How are technical decisions reviewed?
- What is the testing strategy?
- How are frontend performance and production errors monitored?
- What are the largest current technical challenges?
- How do engineers participate in requirement discovery?
- How does the team balance delivery speed and technical quality?
- What distinguishes a strong mid-level engineer on this team?
- Are engineers encouraged to work across stack boundaries?
