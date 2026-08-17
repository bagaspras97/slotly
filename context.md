# Full-stack Simulation Context

## Candidate profile

The learner has more than five years of professional frontend experience with React, Next.js, Vue, TypeScript, technical SEO, web performance, and delivering features from requirements to production.

The target deadline is 15 September 2026. The target market is Sydney, Australia.

Target roles:

1. Mid-level Frontend Engineer
2. Frontend-focused Full-stack Engineer
3. Junior or mid-level Full-stack Engineer where strong frontend experience is valuable

Primary positioning:

> Frontend Engineer with more than five years of production experience and practical end-to-end capability across React, Node.js, PostgreSQL, testing, and deployment.

Do not present the learner as a senior backend engineer or claim five years of full-stack experience.

## Program goal

By 15 September 2026, the learner should be able to design, implement, test, deploy, and explain an end-to-end product feature using:

- React and Next.js
- TypeScript and Node.js
- Fastify
- PostgreSQL and Drizzle ORM
- HTTP and REST APIs
- Authentication and authorization
- Automated testing
- Basic observability
- Continuous integration and deployment

The learner must be able to explain important implementation decisions without depending on an AI-generated explanation.

## Product

The product is **Slotly**, an appointment-booking platform for small businesses.

Owners can manage a business, services, availability, and appointments. Customers can browse services, view available slots, create appointments, and cancel their own appointments.

Core capabilities:

- Registration, login, logout, and sessions
- Owner and customer roles
- Business profiles and services
- Availability management
- Appointment booking and cancellation
- Double-booking prevention
- Resource ownership and authorization
- Pagination and filtering
- Background notification work
- Structured logging
- Automated tests, CI, and deployment

## Architecture

Use a modular monolith with separate web and API applications:

```text
apps/
  web/        Next.js frontend
  api/        Fastify API
packages/
  shared/     Shared schemas and types when valuable
```

PostgreSQL is the source of truth. Do not introduce microservices, Kubernetes, Kafka, or distributed-system complexity without a demonstrated need.

## Technical constraints

- TypeScript across frontend and backend
- Next.js and React for the web application
- Node.js and Fastify for the API
- PostgreSQL and Drizzle ORM for persistence
- Zod for runtime input validation
- Vitest for unit and integration tests
- Testing Library for focused component tests
- Playwright for selected critical journeys
- Docker Compose for local PostgreSQL
- OpenAPI for API documentation
- GitHub Actions for continuous integration
- Prefer explicit, understandable code over clever abstractions
- Keep business logic out of route handlers
- Protect critical invariants with database constraints
- Add dependencies only for demonstrated requirements
- Build and review one vertical slice at a time

## Simulation roles

The learner is the assigned software engineer. The AI may act as Product Manager, Engineering Manager, Tech Lead, Senior Backend Engineer, Reviewer, QA Engineer, Incident Coordinator, or Interviewer. The AI should state its active role when assigning an activity.

## Daily workflow

1. Daily stand-up
2. Ticket review and requirement clarification
3. Design check before important backend work
4. Small implementation increment
5. Automated and manual verification
6. Pull-request handoff
7. Code review
8. Daily retrospective and progress update

### Daily stand-up

The learner reports:

- Yesterday: completed work and important learning
- Today: primary ticket and intended result
- Blockers: uncertainties or dependencies
- Definition of done for the session

Daily stand-ups, sprint demos, project walkthroughs, and mock interviews should use voice when available. Stand-ups should take approximately three to five minutes. Accent is not evaluated. Grammar is corrected only when it affects clarity or professionalism.

After a voice stand-up, the AI should ask relevant follow-up questions and produce a concise written summary for `progress.md`.

## Design check

Before important backend implementation, the learner explains:

- User problem
- Data being read or changed
- Business rules and invariants
- Authentication requirement
- Authorization boundary
- Expected failure scenarios
- Proposed database strategy
- Proposed testing strategy
- Open questions

## AI usage rules

AI may explain concepts, inspect the codebase, locate documentation, generate routine boilerplate, suggest tests, diagnose errors, review code, challenge a design, and simulate interviews.

AI must not silently own business-rule design, database modeling, authentication decisions, authorization boundaries, transaction design, concurrency protection, security-sensitive decisions, or final validation.

Before generating critical backend logic, the AI should first test the learner's mental model. Direct assistance is appropriate after the learner proposes an approach or clearly identifies a blocker.

All AI-generated code must be read, executed where applicable, tested, reviewed, and explainable by the learner.

## Evidence rule

The following are not sufficient evidence:

- The code looks correct
- AI said it should work
- TypeScript passed
- The happy path worked once
- The framework should handle it

Acceptable evidence includes focused tests, integration tests, reproduced failure scenarios, database constraints, inspected HTTP responses, relevant logs, query plans, documented framework behavior, and repeatable manual verification.

## Definition of ready

A ticket is ready when the user problem is understood, acceptance criteria are testable, major ambiguity has been resolved, dependencies are known, out-of-scope behavior is stated, and the learner can describe an initial implementation direction.

## Definition of done

A feature is complete when:

- Acceptance criteria are satisfied
- Runtime input validation exists
- Authentication and authorization are considered
- Expected failure cases are handled
- Relevant tests pass
- The production build remains valid
- The code has been reviewed
- Documentation is updated where necessary
- The learner can explain the request flow, data changes, and a trade-off
- No critical generated code remains unexplained

UI work must also cover loading, error, empty, keyboard, responsive, and semantic behavior where applicable.

## Weekly workflow

- Sprint planning: clarify the goal, risks, scope, and tickets
- Delivery: daily stand-ups, design checks, implementation, and review
- Production readiness: testing, security, accessibility, performance, and documentation
- Sprint demo: demonstrate working software and evidence in English
- Retrospective: evaluate delivery, understanding, AI use, and next improvements

## Evaluation rubric

| Area | Weight |
|---|---:|
| Correctness | 25% |
| Backend understanding | 20% |
| Testing and evidence | 15% |
| Security and authorization | 10% |
| Frontend quality | 10% |
| Technical communication | 10% |
| Scope and maintainability | 10% |

## Final evidence

By the deadline, the repository should contain a working and deployed web application and API, PostgreSQL schema and migrations, authentication and authorization, reliable booking flow, automated tests, CI, API documentation, architecture explanation, decision records, an English README, a rehearsed demo, and prepared frontend, backend, and behavioral interview explanations.
