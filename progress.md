# Full-stack Transition Progress

## Program

- Start: 17 August 2026
- Target: 15 September 2026
- Current sprint: Sprint 1 — Service Catalogue
- Current primary ticket: SETUP-001
- Status: In Progress
- Current blocker: None recorded

## Capability scale

- 0: Cannot explain
- 1: Recognizes terminology
- 2: Explains the basic mental model
- 3: Implements with guidance
- 4: Implements and tests independently
- 5: Evaluates trade-offs and diagnoses failures

## Initial baseline

| Capability | Score | Evidence |
|---|---:|---|
| JavaScript fundamentals | 3 | Professional frontend experience |
| TypeScript | 3 | Professional frontend experience |
| React | 4 | Professional production experience |
| Next.js | 3 | Professional production experience |
| Vue | 3 | Professional production experience |
| Browser fundamentals | 3 | Comfortable with common questions |
| Accessibility | 2 | Needs structured review |
| Frontend system design | 2 | Not confident in interviews |
| HTTP and API design | 2 | Exposure with AI assistance |
| Node.js | 1 | Limited independent implementation |
| PostgreSQL and SQL | 1 | Limited independent implementation |
| Data modeling | 1 | Limited independent implementation |
| Authentication | 1 | Exposure without confidence |
| Authorization | 1 | Exposure without confidence |
| Transactions | 1 | Requires deliberate practice |
| Concurrency | 1 | Requires deliberate practice |
| Backend testing | 1 | Requires deliberate practice |
| Observability | 1 | Requires deliberate practice |
| Deployment | 1 | Requires deliberate practice |
| English technical explanation | 2 | Requires spoken practice |

## Sprint scorecard

| Sprint | Product target | Communication target | Result |
|---|---|---|---|
| 1 | Service catalogue vertical slice | Three-minute API flow explanation | Not assessed |
| 2 | Secure identity and ownership | Session and authorization explanation | Not assessed |
| 3 | Reliable concurrent booking | Double-booking explanation | Not assessed |
| 4 | Deployed and documented product | Five-minute project demo | Not assessed |

## Daily stand-up template

### Date

17 August 2026

### Yesterday

- Completed work: No assigned delivery before the first session.
- Verification evidence: Simulation context, roadmap, backlog, and progress reviewed.
- Most important learning: Node.js is the runtime; pnpm is the package manager being considered for Slotly's workspace.

### Today

- Primary ticket: SETUP-001 — Initialize the monorepo.
- Intended outcome: Define and begin the workspace structure and root commands.
- Definition of done: Workspace folders, root developer commands, environment-variable documentation, and clean-checkout setup instructions are verifiably present.

### Blockers

- Technical uncertainty: Needs to articulate pnpm workspace benefits and trade-offs before committing to it.
- Product uncertainty: None recorded.
- External dependency: None recorded.

### English voice summary

The learner communicated the overall status clearly but should reduce filler words and replace vague phrases such as "do something" with a concrete outcome. Useful correction: "pnpm is lighter than other package managers," not "more slightly."

## Design check template

### Ticket and user problem

Record the ticket and describe the problem.

### Data affected

Record data being read, created, updated, or deleted.

### Business rules and invariants

Record rules that must always remain true.

### Authentication and authorization

Record required identity, role, ownership, and resource policy.

### Expected failures

Record validation, not-found, conflict, authentication, authorization, dependency, and unexpected failures.

### Proposed implementation and database strategy

Describe the smallest solution, queries, constraints, indexes, and transactions.

### Testing strategy

Describe unit, integration, end-to-end, concurrency, and manual checks.

### Open questions

Record questions that could change the implementation.

## Pull-request handoff template

### Ticket

Record identifier and title.

### What changed and why

Describe behavior and reason.

### Verification

List exact tests, builds, API responses, database checks, or screenshots.

### Database and security considerations

Describe migrations, validation, authentication, authorization, and sensitive-data handling.

### Risks, out-of-scope work, and follow-up

Record known risks and intentional exclusions.

## Daily retrospective template

### Completed and evidence

Record reviewable outcomes and proof.

### Learning and remaining uncertainty

Record the mental model learned and anything still unclear.

### AI usage review

- What did AI assist with?
- Which code was generated?
- Which decisions remained mine?
- Can I explain every important generated section?
- Did AI improve or reduce my understanding?

### Interview explanation

Write a short English explanation of the day's most important decision.

### Next recommended ticket

Record the next ticket and reason.

## Learning ledger

| Date | Topic | Evidence | Confidence |
|---|---|---|---|
| 17 Aug 2026 | Program setup | Context, roadmap, and backlog | Initial |

## Decision ledger

| ADR | Decision | Status | Date |
|---|---|---|---|
| Unassigned | ORM selection: Drizzle proposed | Proposed | Not decided |
| Unassigned | Session strategy | Pending | Not decided |
| Unassigned | Booking invariant protection | Pending | Not decided |
| Unassigned | PostgreSQL-backed jobs proposed | Proposed | Not decided |

## Interview practice ledger

| Date | Question | Duration | Clarity | Accuracy | Improvement |
|---|---|---:|---:|---:|---|
| Not started | Professional introduction | Not assessed | Not assessed | Not assessed | Record first attempt |
| Not started | Browser-to-database request | Not assessed | Not assessed | Not assessed | Complete Sprint 1 |
| Not started | Authentication flow | Not assessed | Not assessed | Not assessed | Complete Sprint 2 |
| Not started | Double-booking prevention | Not assessed | Not assessed | Not assessed | Complete Sprint 3 |
| Not started | Product demonstration | Not assessed | Not assessed | Not assessed | Complete Sprint 4 |

## Final readiness

### Product

- [ ] Public service catalogue
- [ ] Registration, login, and logout
- [ ] Owner authorization
- [ ] Availability management
- [ ] Booking and cancellation
- [ ] Double-booking protection
- [ ] Resilient notification work
- [ ] Deployed application

### Engineering evidence

- [ ] Clean-database migrations
- [ ] Integration tests
- [ ] Concurrent booking test
- [ ] Critical E2E tests
- [ ] Passing CI and production builds
- [ ] Structured logs
- [ ] Health and readiness
- [ ] No committed secrets

### Documentation and interview

- [ ] English README and architecture diagram
- [ ] OpenAPI documentation
- [ ] Important ADRs
- [ ] 30-second introduction
- [ ] Two-minute career summary
- [ ] Five-minute demo
- [ ] Frontend and backend mock interviews
- [ ] At least six STAR stories
