# 📖 TPM Glossary of Key Terms

> **Purpose:** Quick lookup of every TPM-relevant term used across the study materials. Organized alphabetically. Each term has a one-sentence definition and a "why it matters" note.

---

## A

**Agile**
A philosophy of software development emphasizing iterative delivery, customer collaboration, and responding to change over following a fixed plan.
*Why it matters:* The default methodology for most modern software teams. TPMs must understand Agile principles to communicate with engineering teams.

**Agile Release Train (ART)**
In SAFe, a long-lived team of Agile teams (typically 5–12 teams, ~50–125 people) that plans, commits, and delivers together.
*Why it matters:* Relevant when working in large organizations that use SAFe.

**Architecture Decision Record (ADR)**
A document that captures an important architectural decision, including the context, alternatives considered, and rationale.
*Why it matters:* Prevents "why did we choose this?" conversations months later.

**Assumption (in RAID)**
Something believed to be true without proof. Unvalidated assumptions are ticking time bombs.
*Why it matters:* Every assumption is a potential risk. Validate assumptions before they become issues.

---

## B

**Backlog**
A prioritized list of work items (features, bugs, tasks) that need to be completed.
*Why it matters:* The TPM helps ensure the backlog is prioritized and aligned with program goals.

**BATNA (Best Alternative to a Negotiated Agreement)**
The best outcome you can achieve if the negotiation fails. Your walk-away power.
*Why it matters:* Knowing your BATNA gives you leverage and clarity in negotiations.

**Blue-Green Deployment**
A deployment strategy where two identical environments (blue and green) are maintained. Traffic is switched from one to the other.
*Why it matters:* Enables zero-downtime deployments and instant rollback.

**Buffer**
Extra time built into a schedule to absorb delays, unexpected work, and uncertainty.
*Why it matters:* Programs without buffer fail on schedule. Programs with too much buffer lose credibility.

**Burn-Down Chart**
A chart showing remaining work over time, with an ideal line (planned) and an actual line (completed).
*Why it matters:* The most common way to track sprint progress at a glance.

**Burndown (Sprint)**
The amount of work remaining in a sprint, tracked day by day against the ideal line.
*Why it matters:* Tells you if the sprint is on track by Day 3, not Day 10.

---

## C

**Canary Deployment**
A deployment strategy where a new version is rolled out to a small subset of users first, then gradually expanded.
*Why it matters:* Reduces the blast radius of deployment failures.

**Capacity Planning**
The process of determining how much work a team can deliver in a given timeframe.
*Why it matters:* Prevents the #1 cause of missed deadlines - overcommitting relative to available resources.

**Change Control Board (CCB)**
A group authorized to approve or reject scope changes.
*Why it matters:* Prevents scope creep by making tradeoffs visible and requiring approval.

**Change Management**
The systematic process of evaluating and implementing changes to a program's scope, timeline, or resources.
*Why it matters:* Changes are inevitable. Without a process, they derail programs.

**Continuous Integration / Continuous Delivery (CI/CD)**
CI: Automatically building and testing code changes. CD: Automatically deploying code changes to production.
*Why it matters:* CI/CD is the foundation of modern software delivery. TPMs must understand it to plan deployment strategies.

**Critical Path**
The longest sequence of dependent tasks in a program - determines the minimum completion time.
*Why it matters:* Any delay to a critical path task directly delays the entire program.

**Critical Path Analysis (CPA)**
A method for identifying the critical path and tasks with float.
*Why it matters:* Focuses management attention on the tasks that actually matter for the timeline.

---

## D

**Decision Log**
A running document recording every significant program decision with date, decision, rationale, alternatives, and decision-maker.
*Why it matters:* Prevents re-litigation of decisions and provides context for future team members.

**Definition of Done**
A shared agreement on what "complete" means for a work item (e.g., code reviewed, tested, deployed, documented).
*Why it matters:* Prevents the "I thought it was done" conflict between teams.

**Dependency**
Something a team needs from another team or external party before they can proceed.
*Why it matters:* Dependencies are the #1 source of program delays. Every dependency needs a named owner.

**Dependency Map**
A visual representation of dependencies between teams, systems, or workstreams.
*Why it matters:* Makes invisible dependencies visible. Without it, teams discover dependencies during integration - too late.

---

## E

**Epic**
A large body of work that spans multiple sprints. In JIRA, the highest-level work item.
*Why it matters:* Epics map to program workstreams. Each epic is a major deliverable.

**Escalation**
The act of raising an issue to a higher authority for resolution.
*Why it matters:* Poor escalation (too early, too late, to the wrong person) is as bad as no escalation.

**Escalation Ladder**
A defined hierarchy of decision-making levels (L1–L4).
*Why it matters:* Ensures decisions are made at the lowest appropriate level.

---

## F

**Feature Flag**
A configuration toggle that enables or disables a feature without deploying new code.
*Why it matters:* Enables safe rollouts, A/B testing, and instant feature toggling without redeployment.

**Float (Slack)**
The amount of time a task can be delayed without affecting the program's overall timeline.
*Why it matters:* Tasks with float are lower risk. Tasks without float (critical path) need daily monitoring.

---

## G

**Gantt Chart**
A bar chart showing tasks, durations, and dependencies over time.
*Why it matters:* Common visual for program timelines. Useful for milestone-based planning.

**Go/No-Go Decision**
A decision point where leadership decides whether to proceed with a launch or milestone.
*Why it matters:* Formalizes the launch decision and ensures all criteria are met before proceeding.

**Governance**
The structure of decision-making authority, roles, and processes for a program.
*Why it matters:* Without governance, every decision escalates to the highest level, creating bottlenecks.

---

## H

---

## I

**Incident Response**
The process of detecting, responding to, and recovering from production incidents.
*Why it matters:* TPMs are often involved in incident coordination, especially during launches.

**Issue (in RAID)**
Something that has already gone wrong and needs resolution. Different from a risk (might happen).
*Why it matters:* Issues need immediate action. Risks need monitoring and mitigation.

---

## J

**JQL (JIRA Query Language)**
A query language for searching and filtering issues in JIRA.
*Why it matters:* Being able to write JQL queries lets you answer any program status question in seconds.

**JIRA**
An issue and project tracking tool widely used by engineering teams.
*Why it matters:* The TPM's operational backbone. Most TPMs spend significant time in JIRA.

---

## K

**Kanban**
An Agile method focused on visualizing work, limiting work in progress, and continuous delivery (no fixed sprints).
*Why it matters:* Alternative to Scrum. Better for operations and support teams.

**Key Performance Indicator (KPI)**
A measurable value that shows how effectively a program is achieving key objectives.
*Why it matters:* Without KPIs, program health is subjective opinion.

**Key Result (KR)**
In OKRs, a quantitative measure of progress toward an Objective.
*Why it matters:* KRs make objectives measurable. A good KR has a number, a baseline, and a target.

---

## L

**Lagging Indicator**
A metric that confirms past performance (e.g., features shipped last quarter).
*Why it matters:* Useful for reviews, but can't be used for course correction.

**Launch Checklist**
A pre-defined list of items to verify before, during, and after a production launch.
*Why it matters:* Prevents "we forgot to..." failures during high-pressure launch moments.

**Leading Indicator**
A metric that predicts future performance (e.g., sprint velocity).
*Why it matters:* Enables early course correction before problems become crises.

---

## M

**Milestone**
A significant, measurable checkpoint in a program - a zero-duration event marking completion of a major deliverable.
*Why it matters:* Milestones give stakeholders a simple way to track progress without understanding every task.

**Mitigation**
An action taken to reduce the probability or impact of a risk.
*Why it matters:* Identifying a risk without mitigating it is just worrying.

**MoSCoW**
A prioritization framework: Must-have, Should-have, Could-have, Won't-have.
*Why it matters:* Forces tradeoff conversations. If everything is Must-have, nothing is.

---

## N

---

## O

**Objective (OKR)**
A qualitative, inspiring description of what you want to achieve.
*Why it matters:* Provides direction. Without an Objective, Key Results are just a list of metrics.

**OKR (Objectives and Key Results)**
A goal-setting framework that connects high-level ambition to measurable outcomes.
*Why it matters:* The most widely used goal-setting framework in tech. TPMs track OKRs across teams.

---

## P

**PERT (Program Evaluation and Review Technique)**
A probabilistic estimation method using three estimates: Optimistic, Most Likely, Pessimistic.
*Why it matters:* Provides realistic timelines that account for uncertainty.

**Phased Delivery**
A strategy of breaking a large program into multiple smaller releases, each delivering value independently.
*Why it matters:* Reduces risk, enables faster value delivery, and allows course correction from user feedback.

**PI Planning (Program Increment Planning)**
In SAFe, a 2-day event where all teams on an Agile Release Train plan the next 8–12 weeks.
*Why it matters:* The key coordination event in scaled Agile environments.

**Power-Interest Grid**
A stakeholder mapping tool that categorizes stakeholders by their power and interest in the program.
*Why it matters:* Tells you who needs close management vs. who just needs monitoring.

**Pre-Mortem**
A risk identification technique where the team imagines the program has failed and works backward to identify causes.
*Why it matters:* Overcomes optimism bias. Studies show it identifies 30–50% more risks than brainstorming.

**Product Backlog**
In Scrum, a prioritized list of everything that might need to be done.
*Why it matters:* The single source of truth for what the team could work on.

**Program Charter**
The founding document of a program: defines why, who, what, success metrics, and governance.
*Why it matters:* The document you pull out when scope debates arise.

**Program Health Dashboard**
A consolidated view of key metrics showing program status at a glance.
*Why it matters:* Answers the question "How is the program doing?" in 10 seconds.

---

## Q

---

## R

**RACI Matrix**
A responsibility assignment chart: Responsible, Accountable, Consulted, Informed.
*Why it matters:* Eliminates ambiguity about who does what and who decides.

**RAG Status**
Red/Amber/Green status indicator for program health.
*Why it matters:* Standard executive shorthand. A red with a plan is better than a green that hides problems.

**RAID Log**
A single document tracking Risks, Assumptions, Issues, and Dependencies.
*Why it matters:* Your central nervous system as a TPM. The most important ongoing artifact.

**Retrospective**
A meeting at the end of a sprint/milestone to reflect on what went well and what could improve.
*Why it matters:* The engine of continuous improvement. Without retros, teams repeat mistakes.

**Risk**
An uncertain event that could affect program objectives - it might happen.
*Why it matters:* Distinguishing risks (might happen) from issues (already happened) is critical.

**Risk Register**
A detailed register of risks with probability, impact, score, and mitigation plan.
*Why it matters:* More detailed than RAID log risk rows. Reviewed monthly.

**Roadmap**
A strategic visual timeline showing what a team plans to deliver over 3–12 months.
*Why it matters:* Aligns stakeholders, sets expectations, and drives strategic decisions.

**Rollback**
The process of reverting a deployment to a previous version.
*Why it matters:* Every launch must have a tested rollback plan. Without one, you're gambling.

**Runbook**
A documented set of procedures for performing a specific operation (deploy, incident response).
*Why it matters:* Enables consistency, reduces errors, and preserves knowledge.

---

## S

**SAFe (Scaled Agile Framework)**
A framework for applying Agile at large organizations (50+ teams).
*Why it matters:* Relevant for TPMs at large enterprises. Overkill for small organizations.

**Scrum**
A specific Agile method with defined roles, events, and artifacts.
*Why it matters:* The most widely used Agile framework. Every TPM should understand it thoroughly.

**Scrum Master**
The facilitator for a Scrum team - removes blockers, protects the process, coaches the team.
*Why it matters:* Not the same as a TPM. TPM coordinates across multiple teams; Scrum Master serves one.

**Scope Creep**
The uncontrolled expansion of a program's scope without corresponding adjustments to timeline or resources.
*Why it matters:* The most common cause of program delays. A good charter prevents it.

**Service Level Agreement (SLA)**
A commitment to a specific level of service or performance (e.g., "security review within 5 business days").
*Why it matters:* Creates predictability. Teams can plan around known SLAs.

**Sprint**
A time-boxed iteration (typically 2 weeks) in Scrum.
*Why it matters:* The basic rhythm of Agile delivery.

**Sprint Backlog**
The subset of the Product Backlog selected for the current sprint.
*Why it matters:* What the team has committed to deliver this sprint.

**Stakeholder**
Any individual or group with a vested interest in the program's outcome.
*Why it matters:* Unmanaged stakeholders become blockers. Allocate engagement effort by power and interest.

**Stakeholder Mapping**
The systematic process of identifying stakeholders and planning engagement strategies.
*Why it matters:* Without it, you discover critical stakeholders during crises.

**STAR (Situation, Task, Action, Result)**
A structured format for answering behavioral interview questions.
*Why it matters:* The standard for TPM interview answers. Keeps stories concise and impactful.

**Status Deck**
A presentation (typically 5–8 slides) communicating program status to stakeholders.
*Why it matters:* Your primary communication vehicle for executives.

**Steering Committee**
A governing body of senior stakeholders who provide oversight and make key decisions.
*Why it matters:* Not a status update forum - a decision-making body.

**Story (User Story)**
A user-valuable feature deliverable within a sprint.
*Why it matters:* The building block of sprint planning.

**Story Points**
A relative unit of measure for estimating effort in Agile.
*Why it matters:* Velocity is measured in story points. Used for planning, NOT performance evaluation.

---

## T

**T-Shirt Sizing**
A relative estimation technique: XS, S, M, L, XL, XXL.
*Why it matters:* Quick, low-pressure estimation for early planning when detail is low.

**Throughput**
The number of work items completed per unit of time (e.g., "5 stories per week").
*Why it matters:* Different from velocity (which measures effort). Throughput measures item count.

**TPM (Technical Program Manager)**
A role that owns the delivery of complex technical programs across multiple teams.
*Why it matters:* Combines technical understanding with program management skills.

---

## U

**User Acceptance Testing (UAT)**
The final testing phase where business stakeholders validate that the system meets their needs.
*Why it matters:* The last gate before production launch.

---

## V

**Velocity**
A measure of how much work a team completes in a sprint (in story points).
*Why it matters:* Used for capacity planning and forecasting. NEVER used for performance evaluation.

---

## W

**Waterfall**
A traditional project management approach where work flows sequentially through phases (Requirements → Design → Build → Test → Deploy).
*Why it matters:* Still appropriate for regulated industries and well-defined projects. Know when to use it.

**WBS (Work Breakdown Structure)**
A hierarchical decomposition of a program into smaller, manageable components.
*Why it matters:* Ensures nothing is missed. The foundation of good estimation.

**Workstream**
A major area of work within a program, typically owned by one team.
*Why it matters:* Programs are organized into workstreams. Each workstream has a lead, a timeline, and deliverables.

---

## X, Y, Z

---

*Built for Biren | TPM Transition | June 2026 | Fully offline*
