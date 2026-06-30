# 🛠️ TPM Tools & Artifacts: A Comprehensive Field Guide

> **Audience:** TPMs new to the role who need both foundational explanations and practical depth on the tools and artifacts they'll use daily  
> **Purpose:** Build mastery in 6 essential TPM tools and artifacts through structured guidance, core proficiencies, and detailed case studies  
> **Read time per section:** ~15–20 minutes | **Total:** ~90–120 minutes

---

## How to Use This Guide

This guide covers six tools and artifacts that TPMs use every day. Each section is self-contained and structured as a complete teaching module:

| Tool / Artifact | Primary Role | When You'll Use It |
|-----------------|--------------|-------------------|
| **JIRA** | Project tracking, sprint management, reporting | Daily - task tracking, sprint planning, dashboards |
| **Confluence** | Documentation, knowledge management, collaboration | Weekly - meeting notes, decision logs, program wikis, runbooks |
| **Miro** | Visual collaboration, diagramming, workshops | As needed - dependency mapping, retrospectives, design sprints |
| **Program Charters** | Program founding document, scope & governance | At kickoff - defines why, who, what, and how of a program |
| **Status Decks** | Executive & stakeholder communication | Weekly/monthly - RAG status, metrics, decisions, risks |
| **Runbooks** | Operational procedures, incident response, playbooks | Before go-live - codifies repeatable processes for consistency |

**What this guide is not:** This is not a user manual for each tool. You won't find step-by-step instructions for creating a JIRA ticket or a Confluence page. Instead, this guide covers the **TPM-specific mindset, habits, and proficiencies** needed to use these tools effectively in real program delivery.

---

## Table of Contents

1. [JIRA (Project Tracking)](#1-jira)
2. [Confluence (Documentation)](#2-confluence)
3. [Miro (Visual Collaboration)](#3-miro)
4. [Program Charters](#4-program-charters)
5. [Status Decks](#5-status-decks)
6. [Runbooks](#6-runbooks)

---

# 1. JIRA

## Overview

JIRA (or equivalents like Linear, Asana, Monday.com, ClickUp, Azure DevOps) is the operational backbone of a TPM's daily work. At its core, JIRA is an issue and project tracking system - but for a TPM, it's far more than that. It's your system of record for what's being built, who's building it, when it's expected, and where the blockers are.

The audience for JIRA data is broad:

| Audience | What They Care About | Where They See It |
|----------|---------------------|-------------------|
| **You (TPM)** | Cross-team progress, dependencies, blockers | Custom dashboards, filters, board swimlanes |
| **Engineering teams** | Their sprint backlog, tasks, estimates | Scrum/Kanban boards, sprint views |
| **Engineering managers** | Team velocity, capacity, burndown | Burndown charts, velocity reports, sprint reports |
| **Product managers** | Epic progress, feature completeness | Epic-level view, release roadmap |
| **Stakeholders / Executives** | Overall program health, milestone delivery | Rolled-up dashboards, portfolio view |

The TPM's challenge is not just using JIRA - it's **structuring JIRA so it scales** across multiple teams, workstreams, and reporting needs.

---

## Core Proficiencies

### 1. Structuring the Hierarchy (Epics → Stories → Subtasks)

The most important JIRA skill a TPM needs is understanding the hierarchy and how it maps to program structure:

| Level | TPM Purpose | Example |
|-------|-------------|---------|
| **Epic** | A significant body of work that spans multiple sprints - maps to a program workstream or major feature | "Payment Gateway Integration" |
| **Story** | A user-valuable piece of functionality deliverable within a sprint | "User can enter credit card details on checkout page" |
| **Task / Sub-task** | The individual technical steps to complete a story | "Create payment form UI", "Implement CC validation", "Write unit tests" |

**TPM rule:** Epics should map to your program's workstreams or major milestones. If your program has 5 workstreams, you should have 5 active epics. Every story in a sprint should roll up to an epic. This lets you produce a single JIRA dashboard that shows program-level progress.

### 2. Building Program-Level Dashboards

A TPM's JIRA dashboard should answer three questions at a glance:

1. **Are we on track?** - Milestone completion %, sprint burndown, epic progress
2. **Where are the problems?** - Open blockers, overdue issues, at-risk epics
3. **What's the capacity picture?** - Team velocity, sprint commitment vs. completion, open points

A well-designed program dashboard includes:

| Gadget | What It Shows |
|--------|---------------|
| **Filter results** (JQL-based) | All issues across all teams for this program |
| **Two-dimensional filter statistics** | Issues by status and assignee (or epic and status) |
| **Pie chart** | Issues by priority, status, or component |
| **Sprint burndown** (per team) | Whether each team is on track within their sprint |
| **Version/release burndown** | Overall program progress toward release |
| **Created vs. resolved** | Whether work is being completed faster than it's being created |

### 3. JQL (JIRA Query Language) Proficiency

JQL is the TPM's most powerful JIRA skill. It transforms JIRA from a tracking tool into a queryable system of record. You should be able to write JQL queries for:

```jql
// All open issues in a specific program
project = PAY AND "Program[Checkboxes]" = "Payments Migration" AND status != Done

// All blockers across all teams
project = PAY AND priority = Blocker AND status != Done

// Issues where a specific team is the dependency provider
project = PAY AND "Dependency Provider[Dropdown]" = "Platform Team" AND status != Done

// Sprint burndown for a specific team for the current sprint
project = PAY AND sprint in openSprints() AND assignee in membersOf("Platform Team")

// Epics that are behind schedule
project = PAY AND issuetype = Epic AND status != Done AND (duedate < now() OR duedate IS NULL)
```

**TPM rule:** If you can't query it in JIRA within 30 seconds, you don't have visibility into it. Invest time in learning JQL - it pays back 10x in saved reporting time.

### 4. Custom Fields and Workflows

Standard JIRA doesn't know about your program's specific data needs. The TPM should work with the JIRA admin to add custom fields for:

| Custom Field | Why It Matters |
|-------------|----------------|
| **Program** (single/multi-select) | Filter issues by program across multiple projects |
| **Workstream** (single-select) | Group issues within a program by workstream |
| **Dependency provider** (user/team picker) | Track who is providing what to whom |
| **Risk flag** (checkbox) | Mark issues that are at risk |
| **Target release** (version picker) | Associate issues with program milestones |
| **Blocked reason** (text) | Capture why an issue is blocked |

### 5. Sprint and Release Planning

| Activity | TPM Role |
|----------|----------|
| **Pre-sprint planning** | Review team capacity, flag cross-team dependencies, align priorities across teams |
| **Sprint planning** | Ensure stories are estimated, dependencies are visible, and the sprint aligns with program milestones |
| **Mid-sprint check** | Monitor burndown, escalate blockers, manage scope changes |
| **Sprint review/demo** | Track completed vs. committed, capture velocity data, update program dashboard |
| **Retrospective** | Capture lessons learned, update process for next sprint |

---

## Realistic Case Study

### Program Context

**Company:** FinovaPay - a payments processing company  
**Program:** "Payment Platform Modernization" - migrating from a monolithic payment system to a microservices-based architecture  
**Timeline:** 9 months (3 quarters)  
**Teams involved:** 4 engineering teams (PayCore, PayFront, PayInfra, PayData) + QA + Product + Security  
**JIRA setup:** Single JIRA project (`PAYMOD`) with separate boards per team, rolled up to a program-level dashboard

### The Challenge

The program had been running for 4 months when a new TPM, Amit, joined. He inherited a JIRA setup that was chaotic:

- Teams were using different issue types inconsistently
- There was no way to see cross-team dependencies in JIRA
- Epic progress was opaque - some epics had 50 stories, others had 2
- The program dashboard showed 83% completion but the program was actually only 50% done (because the remaining 50% was the hardest work)
- Status reports were being written manually each week - a time sink that took 3 hours every Friday

Amit needed to fix JIRA before he could fix the program's visibility problems.

### What Amit Did

**Step 1 - Standardized the hierarchy (Week 1).** Amit held a 60-minute session with all team leads and agreed on:

- **Epic = Program workstream** (6 epics: Auth Migration, Payment Processing, Reporting, Dashboard UI, Data Migration, Security Compliance)
- **Story = User-valuable feature** that fits in a sprint
- **Sub-task = Technical breakdown** of a story (only for stories that needed it)
- **All stories must belong to one epic** - this was enforced via a required custom field

**Step 2 - Added custom fields (Week 1).** Working with the JIRA admin, Amit added:

- `Workstream` (dropdown: Auth, Payment, Reporting, UI, Data, Security) - auto-populated from the epic
- `Depends On` (issue link type) - formal dependency tracking
- `Team` (single-select: PayCore, PayFront, PayInfra, PayData, QA, Security)
- `Blocked Reason` (text field) - required when status changes to Blocked

**Step 3 - Created the dependency view (Week 2).** Amit built a JIRA filter and dashboard that showed:

```
All issues linked as "Depends On" across the 4 teams
Status: Any status except Done
Grouped by: Providing Team → Requesting Team
```

This revealed 7 dependencies that were invisible before. Three of them were already late.

**Step 4 - Built a single program dashboard (Week 2).** Amit created a dashboard that answered the three core questions:

| Gadget | What It Showed |
|--------|---------------|
| Epic progress bars | 6 epics with % complete |
| Sprint burndown (× 4 teams) | Whether each team was on track |
| Pie chart (issues by status) | Overall: 45% Done, 25% In Progress, 15% To Do, 10% Blocked, 5% In Review |
| Created vs. resolved over time | Whether completion rate exceeded creation rate |
| Blocked issues list | All issues with `status = Blocked` |
| Overdue issues list | All issues past their due date |

**Step 5 - Eliminated manual status reporting (Week 3).** Instead of spending 3 hours writing a weekly status report, Amit:

1. Created a dashboard that showed everything executives needed
2. Set up a subscription to email the dashboard as a PDF every Friday
3. Wrote a 3-sentence narrative to accompany the dashboard
4. Reduced weekly reporting time from 3 hours to 20 minutes

**Step 6 - Built sprint planning checklists (Week 4).** Amit created a recurring checklist he used before every sprint:

```
☐ All stories for next sprint are estimated (story points)
☐ All cross-team dependencies are linked via "Depends On"
☐ No story in the sprint has "epic" = empty
☐ Team velocity from last 3 sprints is visible on the board
☐ The sprint's stories align with program milestone targets
```

### The Outcomes

| Metric | Before (Month 4) | After (Month 7) |
|--------|-----------------|-----------------|
| **Program visibility** | Opaque - no single source of truth | One dashboard answers all status questions |
| **Dependency awareness** | 0 dependencies tracked in JIRA | All 7 dependencies tracked, 4 resolved |
| **Blockers discovered** | When escalated by engineers | Immediately when status changes to Blocked |
| **Status report time** | 3 hours/week (manual) | 20 minutes/week (dashboard + narrative) |
| **JIRA reporting accuracy** | 83% claimed vs. 50% actual | 62% claimed vs. 60% actual - honest, evidence-based |
| **Sprint predictability** | Inconsistent - teams overcommitted regularly | Velocity-based planning improved completion rate |

### Lessons Learned

1. **JIRA setup is a program risk, not just an admin task.** Poor JIRA configuration creates visibility gaps that lead to bad decisions. Amit's first week was spent on JIRA, not on program work - and that was the right call.

2. **Standardization requires agreement, not mandate.** Amit didn't impose a structure. He facilitated a 60-minute conversation with team leads and got agreement. The teams enforced the structure because they understood why it mattered.

3. **Custom fields turn JIRA from a task tracker into a program management system.** Without "Depends On" links and "Blocked Reason" fields, Amit couldn't see dependencies and blockers. With them, problems became visible before they became crises.

4. **Dashboards should eliminate manual work, not add to it.** If your weekly status report requires manual data extraction from JIRA, your dashboard isn't good enough. Amit's dashboard subscription eliminated 2.5 hours of manual work per week.

5. **Honest data is more important than pretty data.** The previous dashboard showed 83% completion because it counted all issues equally. Amit's dashboard showed 62% because it weighted incomplete epics properly. The lower number was more useful for decision-making.

### Proficiencies Demonstrated

- **Hierarchy design:** Mapping program structure to JIRA's epic/story/sub-task hierarchy
- **Custom field design:** Adding the right fields to make program-level queries possible
- **Dashboard creation:** Rolling up 4 team boards into a single program view
- **JQL proficiency:** Creating filters that reveal dependencies, blockers, and overdue items
- **Process integration:** Embedding JIRA data into the weekly reporting cadence without manual work
- **Cross-team alignment:** Getting 4 teams to follow consistent JIRA conventions

---

# 2. Confluence

## Overview

Confluence (or equivalents like Notion, GitBook, Google Docs, Coda, Slab) is the central knowledge repository for TPMs. While JIRA tracks *what's happening*, Confluence captures *why it matters*, *what was decided*, and *how things work*.

For a TPM, Confluence serves several distinct purposes:

| Purpose | What It Contains | Update Cadence |
|---------|-----------------|----------------|
| **Program wiki** | Program charter, stakeholder map, RAID log, timeline, key decisions | Throughout program lifecycle |
| **Meeting notes** | Pre-read materials, decisions, action items | Per meeting |
| **Decision log** | Key decisions: what was decided, who decided, why, when | As decisions are made |
| **Runbooks** | Operational procedures, launch checklists, incident response | Before go-live, then as needed |
| **Post-mortems / retrospectives** | What went well, what went wrong, action items | Per milestone or incident |
| **Documentation hub** | Architecture docs, API specs, onboarding guides | As information is produced |

The critical distinction between Confluence and JIRA:

| JIRA | Confluence |
|------|------------|
| Operational - what's being done | Strategic - why it's being done |
| Transactional - individual tasks | Narrative - the story of the program |
| Structured - fields, statuses, assignments | Unstructured - pages, documents, diagrams |
| Time-bound - sprints, due dates | Persistent - lives beyond sprints |
| Audience: teams doing the work | Audience: everyone - teams, stakeholders, future TPMs |

---

## Core Proficiencies

### 1. Program Wiki Architecture

A well-organized program wiki is the TPM's most important Confluence artifact. New TPMs, new team members, and stakeholders should be able to land on the program's Confluence space and understand the program in 5 minutes.

**The standard program wiki structure:**

```
📁 [Program Name] - Program Hub (Landing Page)
├── 📄 Program Charter
├── 📄 Stakeholder Map
├── 📄 RAID Log (linked from JIRA or embedded)
├── 📄 Timeline & Milestones
├── 📁 Meeting Notes
│   ├── 📄 Kickoff Meeting - [Date]
│   ├── 📄 Steering Committee - [Date]
│   └── 📄 Weekly Sync - [Date]
├── 📁 Decisions
│   ├── 📄 Decision Log
│   └── 📄 Architecture Decision Records (ADRs)
├── 📁 Communication
│   ├── 📄 Status Decks
│   └── 📄 Executive Updates
├── 📁 Plans & Designs
│   ├── 📄 Architecture Overview
│   └── 📄 Launch Plan
└── 📁 Post-Program
    ├── 📄 Lessons Learned
    └── 📄 Retrospective Action Items
```

**TPM rule:** The landing page should contain a 3-sentence summary of the program status. Anyone who lands on the page should know immediately: (1) What this program is, (2) Whether it's on track, (3) Who to talk to for more information.

### 2. Meeting Notes as a Communication Tool

Meeting notes aren't just for the people in the room. They're an asynchronous communication tool for stakeholders who couldn't attend.

**The effective meeting notes template:**

```
# Meeting Name - [Date]

## Pre-read (sent 24 hours before)
- Link to the relevant document
- Key decisions needed

## Attendees
[Name], [Name], [Name]...

## Discussion Summary
### Topic 1 (10 min)
Key points discussed:
- Point 1
- Point 2
Decision: [What was decided]

### Topic 2 (15 min)
Key points discussed:
- Point 1
Decision: Deferred - [Owner] to investigate and report back by [Date]

## Action Items
| Action | Owner | Due Date |
|--------|-------|----------|
| [Action description] | [Name] | [Date] |
| [Action description] | [Name] | [Date] |

## Next Meeting
[Date] - [Agenda preview]
```

**TPM rule:** If a meeting happened but no notes were published, it didn't happen. Your meeting notes are the permanent record of decisions - they protect you from "I don't remember agreeing to that" conversations.

### 3. Decision Log as a Strategic Asset

A decision log is one of the most valuable documents a TPM maintains - and one of the most commonly neglected. It's a running list of every significant decision made during the program's lifecycle.

**What to log:**

| Field | Example |
|-------|---------|
| **Decision ID** | D-024 |
| **Date** | 2026-03-15 |
| **Decision** | Use AWS RDS Aurora over self-managed PostgreSQL |
| **Rationale** | Reduces operational overhead for database management; estimated 40% reduction in DBA effort |
| **Alternatives considered** | Self-managed PostgreSQL (lower cost, higher ops burden), Google Cloud SQL (vendor lock concern) |
| **Decided by** | Architecture Review Board (Priya, Raj, Amit) |
| **Impact** | +$2K/month in database costs, -20 hours/month in ops work, enables automated failover |
| **Revisited?** | No |

**TPM rule:** When someone asks "Why did we choose this approach?" the decision log should answer them in 30 seconds. If it doesn't, your decision log isn't good enough.

### 4. Cross-Referencing Confluence and JIRA

One of the most powerful practices is linking Confluence and JIRA so they form a connected system:

| In Confluence | Link to JIRA |
|---------------|-------------|
| Program timeline | Epic or version in JIRA |
| RAID log | Individual risk/issue/dependency JIRA tickets |
| Meeting notes | Sprint boards, specific stories discussed |
| Decision log | Stories or epics created as a result of decisions |
| Status deck | JIRA dashboard or filter showing current program data |

**TPM rule:** If a decision is made in a meeting and entered into Confluence, the resulting action should be an issue in JIRA linked back to the decision page. The two tools should be inseparable.

### 5. Writing for Asynchronous Consumption

Confluence is an async-first tool. Your audience may read your document hours, days, or weeks after you wrote it - without the context of the conversation that produced it.

**Writing principles for Confluence:**

| Principle | Before (poor) | After (good) |
|-----------|---------------|--------------|
| **Lead with the conclusion** | "We discussed three vendor options..." | "We chose Vendor A. Here's why." |
| **Provide context at the top** | (no context given) | "This page summarizes the vendor selection decision made in the Steering Committee on March 15." |
| **Use hyperlinks** | "See the JIRA issue for details." | "See JIRA-4241 for the vendor evaluation criteria." |
| **Include the "what" and the "why"** | "Decision: Extend vendor contract." | "Decision: Extend vendor contract by 3 months to cover the integration delay. Rationale: Switching vendors would add 6 weeks of transition time, pushing the program launch past the regulatory deadline." |
| **Write so someone 6 months from now can understand** | "Agreed to proceed with Option B." | "After evaluating cost, timeline, and risk, the steering committee selected Option B (vendor contract extension at $45K). Option A (vendor switch at $30K) was rejected because the 6-week transition delay would cause us to miss the regulatory deadline." |

---

## Realistic Case Study

### Program Context

**Company:** HealthBridge - a healthcare technology company  
**Program:** "Patient Portal 2.0" - a complete redesign of the patient-facing web portal  
**Timeline:** 6 months  
**Teams involved:** 3 engineering teams (Frontend, Backend, Mobile) + Product + Clinical Ops + Legal/Compliance + QA  
**Confluence setup:** A single program space with unstructured pages

### The Challenge

The program was in Month 3. The previous TPM had left, and a new TPM, Meera, took over. She inherited a Confluence program space that was chaotic:

- **30+ pages** with no organizational structure - all at the top level of the space
- **No landing page** - new readers had to browse pages to understand the program
- **Meeting notes were inconsistent** - some had decisions, many had no action items
- **There was no decision log** - decisions were scattered across meeting notes and email threads
- **Key documents were stale** - the program charter hadn't been updated in 2 months, even though scope had changed
- **No one trusted the Confluence space** - teams had started maintaining their own documents in Google Docs because Confluence was unreliable

Meera needed to rebuild trust in Confluence as the single source of truth.

### What Meera Did

**Step 1 - Created a landing page (Day 1).** Meera created a Program Hub landing page with:

```
# 🏥 Patient Portal 2.0 - Program Hub

**Status:** 🟡 AMBER - Backend workstream is 1 week behind; mitigation in progress
**Program duration:** April 2026 – September 2026 (Month 3 of 6)
**TPM:** Meera Sharma
**Sponsor:** Dr. Anjali Rao (VP of Digital Health)

## Quick Links
- 📄 [Program Charter] (last updated: Week 1 - needs review)
- 📊 [JIRA Dashboard](link) - real-time program progress
- 📋 [RAID Log](link)
- 🗓️ [Milestone Timeline](link)

## Program at a Glance
- **Objective:** Redesign patient portal to improve patient satisfaction scores (target: NPS 40 → 65)
- **Scope:** New appointment scheduling, lab results view, secure messaging, billing summary
- **Teams:** Frontend (4), Backend (4), Mobile (3), QA (2), Clinical Ops (2)
- **Key dates:** Alpha - Month 4 | Beta - Month 5 | GA - Month 6

## This Week's Focus
- Backend API integration testing (critical path)
- Mobile team completing patient profile feature
- Clinical Ops review of lab results display for compliance

See the [Weekly Status Deck](link) for full details.
```

**Step 2 - Organized the space structure (Day 2).** Meera created a folder/page hierarchy:

```
📁 Patient Portal 2.0
├── 📄 Program Hub (landing page)
├── 📁 1. Governance
│   ├── Program Charter
│   ├── Stakeholder Map
│   └── Decision Log
├── 📁 2. Tracking
│   ├── RAID Log
│   ├── Milestone Timeline
│   └── Dependency Map
├── 📁 3. Meetings
│   ├── 📁 2026-04
│   ├── 📁 2026-05
│   └── 📁 2026-06
├── 📁 4. Decisions
│   ├── Decision Log
│   └── 📁 Architecture Decisions
├── 📁 5. Communication
│   ├── 📁 Status Decks
│   └── 📁 Weekly Updates
├── 📁 6. Requirements
│   ├── PRD
│   └── User Stories (linked from JIRA)
├── 📁 7. Launch
│   ├── Launch Checklist
│   ├── Rollback Plan
│   └── Post-Launch Monitoring Plan
└── 📁 8. Post-Program
    ├── Retrospective Template
    └── Lessons Learned
```

**Step 3 - Established a decision log (Week 1).** Meera created a decision log for the program and populated it with the 12 most important decisions made so far (she did this by reading through old meeting notes and email threads - a 90-minute investment that saved future arguments).

The first entry:

```
| ID | Date | Decision | Rationale | Decided By | Impact |
|----|------|----------|-----------|------------|--------|
| D-001 | Apr 8 | Use Figma for all design artifacts | Enables real-time collaboration; clinical team can review without design tools | Design + Product | Standardizes design handoff |
```

**Step 4 - Created a meeting notes template and enforced it (Week 1).** Meera created a standard template and made it the required format for all program meetings:

```
# [Meeting Name] - [Date]

## Quick Summary
[2 sentences - what happened, what was decided, what's next]

## Attendees
[Names]

## Decisions Made
1. [Decision] - by [who]

## Action Items
| Action | Owner | Due |
|--------|-------|-----|

## Detailed Notes
[Optional - deeper context if needed]

## Next Meeting
[Date]
```

**Step 5 - Pruned stale content (Week 1).** Meera reviewed all 30+ pages. She:
- Archived 12 outdated pages into a "Historical" sub-folder
- Updated 5 pages with current information
- Merged 3 pages that duplicated content
- Deleted nothing (Confluence retains history) - but reorganized so the active pages were immediately findable

**Step 6 - Made Confluence the default home for decisions (Weeks 2-3).** Meera established a new workflow:

1. Every meeting produces notes in Confluence (not in Slack, not in email)
2. Every decision in the notes gets added to the decision log within 24 hours
3. Every action item in the notes gets linked to a JIRA ticket within 24 hours
4. If something was decided outside a meeting (Slack, email, hallway conversation), it gets logged retroactively

She didn't police this - she modeled it. After 2 weeks of consistent behavior, the team adopted the pattern.

### The Outcomes

| Metric | Before | After (Month 3+) |
|--------|--------|-----------------|
| **Program space organization** | 30+ flat pages, no structure | Logical hierarchy with landing page |
| **Decision traceability** | Decisions buried in email and meeting notes | Central decision log with 18 entries and growing |
| **Meeting notes consistency** | Inconsistent - 60% had action items | All notes use template - 100% have action items |
| **Trust in Confluence** | Low - teams used Google Docs instead | High - Confluence is the default source of truth |
| **Time to understand program** | 30+ minutes (browsing pages) | <5 minutes (from landing page) |
| **Page freshness** | Many pages 2+ months stale | Active pages reviewed and updated weekly |

### Lessons Learned

1. **The landing page is the most important page in your Confluence space.** A new stakeholder, team member, or TPM should be able to understand the program in 5 minutes from the landing page. Meera spent 45 minutes on it - and it saved hours of onboarding time.

2. **Structure is a form of communication.** Meera's hierarchy told readers what mattered: Governance first, then Tracking, then Meetings, then Decisions. The structure itself communicated priorities.

3. **A decision log is a risk mitigation tool, not a documentation chore.** Decisions that aren't logged will be revisited. The time Meera spent logging 12 historical decisions saved days of future re-litigation.

4. **Consistency builds trust faster than completeness.** Meera didn't need every page perfect. She needed the landing page, decision log, meeting notes, and program charter to be consistent and reliable. The rest could be built over time.

5. **Google Docs proliferation is a symptom of Confluence failure.** When teams stop using Confluence and start using Google Docs, it's because Confluence isn't serving their needs. Fix the tool, and the teams come back.

### Proficiencies Demonstrated

- **Information architecture:** Designing a logical page hierarchy that communicates program structure
- **Writing for async consumption:** Creating documents that are readable days or weeks after creation
- **Template design:** Creating reusable meeting notes and document templates
- **Decision documentation:** Building and maintaining a decision log
- **Content governance:** Pruning stale content and establishing freshness standards
- **Cross-tool linking:** Connecting Confluence decisions to JIRA actions

---

# 3. Miro

## Overview

Miro (or equivalents like Mural, FigJam, Lucidchart, Whimsical, Excalidraw) is a visual collaboration platform. While JIRA tracks tasks and Confluence captures knowledge, Miro enables real-time, visual, collaborative thinking.

For TPMs, Miro excels at five key activities:

| Activity | Why Miro | Typical Participants | Duration |
|----------|----------|---------------------|----------|
| **Dependency mapping** | Visualize cross-team and cross-system dependencies that are hard to describe in text | All team leads + TPM | 60–90 min |
| **Program timeline / roadmap creation** | Collaborative timeline building where participants can move and adjust | TPM + team leads | 60–90 min |
| **Retrospectives** | Structured space for post-sprint or post-milestone reflection | Full team | 45–60 min |
| **Design sprints / workshops** | Ideation, prioritization, and decision-making in structured sessions | Cross-functional team | 2–4 hours |
| **Stakeholder / org mapping** | Visualizing stakeholder power, influence, and relationships | TPM alone or with sponsor | 30–45 min |

The TPM's role in Miro is typically that of **facilitator** - designing the board structure, guiding the session, and synthesizing the output into actionable artifacts.

---

## Core Proficiencies

### 1. Facilitating Live Collaborative Sessions

Miro is most powerful when used in real-time collaboration. The TPM's facilitation skills are critical:

**Before the session:**
- Design the board structure - create templates, place sticky notes, and label areas
- Send a Miro board link with instructions: "We'll be working on Board X. You don't need to prepare anything - just bring your knowledge of [Topic]."
- Test the board on different devices - zoom levels, sticky note font sizes, frame visibility

**During the session:**
- Start with the objective: "Our goal for this session is to identify all dependencies between Team A and Team B."
- Set timeboxes for each activity: "We have 15 minutes for individual sticky note writing."
- Use the timer feature in Miro - timeboxing is the key to productive sessions
- Move between frames in a logical sequence. Don't let the session drift.
- Capture decisions and action items on the board as they happen - not afterward

**After the session:**
- Summarize the board into a Confluence page with key takeaways
- Export the board as a PDF or image for stakeholders who weren't present
- Transfer action items from Miro to JIRA within 24 hours
- Clean up the board for the next session (or archive it and start fresh)

### 2. Designing Dependency Mapping Workshops

Dependency mapping is one of the highest-value uses of Miro for TPMs. A well-facilitated dependency mapping session reveals invisible blockers before they become crises.

**The dependency mapping board structure:**

```
Frame 1: Objective & Context
- Goal statement: "Identify all cross-team dependencies for Q3 milestones"
- Program timeline at the top
- Ground rules for the session

Frame 2: Team Areas (each team gets a column)
| Team A | Team B | Team C | External/Vendor |
|--------|--------|--------|-----------------|
| [List of deliverables] | [List of deliverables] | [List of deliverables] | [List of dependencies] |

Frame 3: Dependency Arrows
- Teams draw arrows between their deliverables
- Arrow label: "Need [X] from [Team] by [Date]"
- Color coding: 🟢 Confirmed / 🟡 In discussion / 🔴 Not yet committed

Frame 4: Critical Path Identification
- Identify the longest chain of dependencies
- Highlight single points of failure
- Flag dependencies where one team is a blocker for multiple others

Frame 5: Action Items
- Each dependency that is 🟡 or 🔴 gets an action owner and due date
- Transfer to JIRA after the session
```

**TPM rule:** The dependency map is not a one-time artifact. It should be reviewed and updated at every sprint boundary. If you produce it in Miro and don't look at it again, you wasted everyone's time.

### 3. Facilitating Program Timeline / Roadmap Creation

Miro enables a "card on the wall" approach to timeline building that's more collaborative than a spreadsheet.

**The roadmap board structure:**

```
Frame 1: Current State
- Where we are now - what's in flight, what's been delivered, what's blocked

Frame 2: Key Milestones (header row)
| Q1 | Q2 | Q3 | Q4 |
|----|----|----|----|
| [Milestones] | [Milestones] | [Milestones] | [Milestones] |

Frame 3: Team Swimlanes
| Team A | [Sticky: Deliverable 1] | [Sticky: Deliverable 2] | [Sticky: Deliverable 3] |
| Team B | [Sticky: Deliverable 1] | [Sticky: Deliverable 2] | |
| Team C | | [Sticky: Deliverable 1] | [Sticky: Deliverable 2] |

Frame 4: Dependencies (arrows between swimlanes)

Frame 5: Risks
- Red stickers: critical risks
- Yellow stickers: moderate risks
- Each risk has a mitigation note attached
```

### 4. Running Structured Retrospectives

TPMs often facilitate retrospectives for their programs. Miro provides excellent templates for this.

**The retrospective board structure (Start/Stop/Continue format):**

```
Frame 1: Set the Stage
- Goal: "What can we improve for the next sprint/milestone?"
- Guidelines: "Assume good intent. Focus on processes, not people."

Frame 2: What Went Well (10 min - individual sticky note writing)
| Start | Stop | Continue |
|-------|------|----------|
| Things we should start doing | Things we should stop doing | Things we're already doing well |

Frame 3: Grouping and Voting (10 min)
- Group similar sticky notes
- Each person gets 3 votes (dot stickers)

Frame 4: Top Items Discussion (15 min)
- Discuss the top 3–5 items by vote count
- Surface root causes, not symptoms

Frame 5: Action Items (10 min)
- For each top item, define: What will we do? Who owns it? When will we check?
- Action items go to JIRA after the session
```

### 5. Miro as a Communication Artifact

A Miro board is a communication artifact, not just a working document. Consider who will view it after the session:

| Audience | What They Need |
|----------|---------------|
| **Session participants** | The ability to revisit and reference the board |
| **Stakeholders who couldn't attend** | A clear narrative of what happened, what was decided, and what's next |
| **Team members who join later** | Historical context - how dependencies were discovered, how timelines were decided |

**After every Miro session:**
1. **Export the board as a PDF** - for stakeholders who don't use Miro
2. **Summarize in Confluence** - key outcomes, decisions, and action items
3. **Transfer action items to JIRA** - within 24 hours
4. **Update the program RAID log** - any risks or issues surfaced during the session

---

## Realistic Case Study

### Program Context

**Company:** QuickCart - an e-commerce logistics platform  
**Program:** "Shipment Tracking Overhaul" - replacing a legacy tracking system with a real-time GPS-based system  
**Timeline:** 4 months  
**Teams involved:** 5 teams (Mobile App, Backend API, Data Pipeline, Dispatch Ops, Customer Support Systems) + 2 external vendors (GPS hardware provider, SMS notification gateway)  
**Session type:** Dependency mapping workshop using Miro

### The Challenge

The program was in Week 3. The TPM, Sanjay, could see that teams were making assumptions about what other teams were delivering - and those assumptions weren't being validated. The Backend team assumed the Mobile team would provide the push notification integration. The Mobile team assumed Backend would handle it. Neither had spoken to the other.

Sanjay had heard three versions of the dependency map:
- The Backend lead's version (3 dependencies)
- The Mobile lead's version (5 dependencies)
- The TPM's version (7 dependencies he'd pieced together from individual conversations)

None of them matched. Sanjay needed to get all five teams in a room and build a single, agreed-upon dependency map.

### What Sanjay Did

**Step 1 - Prepared the Miro board (1 hour before the session).** Sanjay created the board:

```
Frame 1: Session Objective
"Goal: Identify every cross-team dependency for the Shipment Tracking Overhaul program.
We will leave this session with:
1. A complete dependency map with all 5 teams
2. Confirmed deadlines for every dependency
3. An owner for each dependency
4. A critical path we all agree on"

Frame 2: Team Areas (5 columns, one per team + 1 for external vendors)
Each column had a stack of sticky notes labeled "Our Deliverables" for the team to write on.

Frame 3: Dependency Matrix
A grid where teams could draw arrows: [Team] needs [X] from [Team] by [Date]

Frame 4: Critical Path
A space to identify the longest dependency chain

Frame 5: Action Items
Table: Dependency | Owner | Action | Due Date
```

**Step 2 - Facilitated the 90-minute session.** Sanjay set ground rules:

- "Every team will list their deliverables first - no cross-talk during this phase."
- "Then, we'll go team by team and ask: 'What do you need from other teams?' and 'What do other teams need from you?'"
- "We have 90 minutes. No extensions."

**The session flow:**

| Time | Activity | Outcome |
|------|----------|---------|
| 0–10 min | Framing + individual sticky note writing | Each team listed 5–8 deliverables on their board |
| 10–30 min | Team-by-team dependency declaration | 12 dependencies identified (vs. 3–7 from individual estimates) |
| 30–50 min | Dependency confirmation | 7 dependencies confirmed, 3 needed further discussion, 2 were surprises to the providing team |
| 50–70 min | Critical path analysis | Identified that GPS vendor API integration was on the critical path - any delay there delays everything |
| 70–85 min | Action items | 5 actions created - each dependency needing confirmation got an owner and a deadline |
| 85–90 min | Wrap-up | Next steps: Sanjay would publish the map, transfer actions to JIRA, schedule follow-up for the 3 unconfirmed dependencies |

**Key discovery during the session:** The Data Pipeline team needed real-time GPS data from the vendor, but the vendor's API only supported 5-minute batch updates. This was a critical constraint that no one had identified before the workshop. The Backend team had been designing around real-time data that wouldn't be available. Without the Miro session, this would have been discovered in Week 10 of a 16-week program.

**Step 3 - Published the output (same day).** Sanjay:
1. Exported the Miro board as a PDF
2. Created a Confluence page with the dependency map, critical path, and action items
3. Created 5 JIRA tickets for the unconfirmed dependencies with the assigned owners
4. Sent a summary email to all participants and stakeholders

**Step 4 - Followed up on unconfirmed dependencies (next 3 days).** Sanjay scheduled 15-minute follow-ups with the three unconfirmed dependency pairs. All three were resolved within a week. The dependency map was updated in Miro and republished.

### The Outcomes

| Metric | Before Session | After Session |
|--------|---------------|---------------|
| **Known dependencies** | 3–7 (varies by who you asked) | 12 confirmed, all documented |
| **Unconfirmed handoffs** | At least 5 assumptions | 2 assumptions invalidated, all handoffs agreed |
| **Critical path visibility** | Opaque - no one knew which dependencies were most important | GPS vendor integration identified as critical path |
| **Hidden constraints discovered** | 0 | 1 (GPS vendor's 5-minute batch limitation) |
| **Cross-team alignment** | Low - teams had different mental models | Single shared mental model of the program |
| **Time to discover a critical issue** | Would have been Week 10 | Week 3 |

### Lessons Learned

1. **Everyone's individual dependency map is incomplete.** The Backend lead had 3 dependencies because they only thought about their direct handoffs. The session revealed 12 dependencies across all teams. The collective map is always more complete.

2. **Assumptions are invisible until they're surfaced in a shared space.** The Data Pipeline team had been designing around real-time GPS data. But when the Backend team showed the vendor's API spec in the Miro session, the Data team realized their assumption was wrong. The Miro board made the constraint visible.

3. **The TPM's role is to facilitate, not to draw the map.** Sanjay didn't tell the teams what their dependencies were. He created the space for them to discover it themselves. The map was more accurate because the teams built it.

4. **A dependency map without action items is just a nice picture.** Sanjay's session produced 5 concrete actions with owners and deadlines. The value of the session was in the actions, not the map.

5. **Miro is the medium, not the outcome.** The real outcome was alignment: 5 teams with a shared understanding of dependencies, constraints, and the critical path. The Miro board was the tool that enabled this, but the alignment was the deliverable.

### Proficiencies Demonstrated

- **Workshop design:** Structuring a 90-minute dependency mapping session with clear timeboxes and outcomes
- **Facilitation:** Guiding 5 teams through a collaborative process without imposing answers
- **Visual thinking:** Using Miro's visual capabilities to surface constraints and relationships that text couldn't capture
- **Output synthesis:** Converting a Miro board into actionable JIRA tickets and a permanent Confluence record
- **Follow-through:** Ensuring unconfirmed dependencies were resolved within the week

---

# 4. Program Charters

## Overview

A program charter is the founding document of any program. It establishes the shared understanding of why the program exists, what it will deliver, who is involved, and how success will be measured. It's created at the kickoff and signed off by all key stakeholders.

**What a program charter is not:**
- ❌ A project plan (that comes later, after the charter is approved)
- ❌ A requirements document (that's the PRD)
- ❌ A legal contract (though it should have approval signatures)
- ❌ A one-time document that lives in a drawer (it should be referenced throughout the program)

**What a program charter is:**
- ✅ A north star - the document you return to when scope debates arise
- ✅ An alignment tool - ensures all stakeholders share the same definition of success
- ✅ A governance document - defines decision rights, roles, and escalation paths
- ✅ A living document - updated when scope, timeline, or objectives materially change

---

## Core Proficiencies

### 1. Writing an Effective Executive Summary

The executive summary is the most-read part of the charter. It should be 2–4 sentences that answer:

1. **What is this program?** (One sentence)
2. **Why does it matter?** (One sentence - the business problem or opportunity)
3. **What will success look like?** (One sentence - the measurable outcome)
4. **What's the scope?** (One sentence - what's in and what's explicitly out)

**Example:**
> "The Customer Portal Redesign program will replace the legacy patient portal with a modern, mobile-responsive platform. This program exists because patient satisfaction scores have declined 15% over two years, driven primarily by poor portal usability. Success will be measured by achieving an NPS of 65+ (from current 40) and reducing support call volume related to portal issues by 30%. The program covers the appointment scheduling, lab results, and secure messaging features; it explicitly does NOT include billing or prescription refill functionality, which will be addressed in a separate initiative."

### 2. Defining Scope Boundaries Clearly

Scope creep is one of the biggest causes of program failure. A strong charter prevents it by defining both what's in scope and - **equally important** - what's explicitly out of scope.

**In Scope:**
- [Feature A]
- [Feature B]
- [Feature C]
- Integration with [System X]
- Support for [Platform/Region/User Type]

**Out of Scope (explicitly stated - these are the boundary lines):**
- [Feature D] - deferred to Phase 2
- Integration with [System Y] - not within this program's scope
- Support for [Platform/Region/User Type] - not required for launch
- [Non-goal] - e.g., "Performance optimization of existing features is not in scope"

**TPM rule:** When a stakeholder asks for something that's out of scope, the charter is your answer. It's not personal - it's what was agreed. If the charter doesn't explicitly exclude it, the stakeholder has a case. Be specific.

### 3. Defining Success Metrics

A program charter should define success in measurable terms. Without this, the program can never "finish" - and can never "succeed" - because no one agreed on what those terms mean.

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| On-time delivery | ≥95% milestone completion | Milestone tracker |
| Quality | <5% critical defect escape rate | QA report |
| Business outcome | NPS increase from 40 to 65 | Post-launch survey |
| Adoption | 40% of active patients use portal within 3 months | Analytics dashboard |
| Support impact | 30% reduction in portal-related support calls | Support system data |

**TPM rule:** Stakeholders can disagree on whether a program is "successful" if success wasn't defined upfront. The charter is the place to have that argument before it matters - not after.

### 4. Establishing Governance and Decision Rights

A program without clear governance will stall on even simple decisions. The charter should define:

| Decision Type | Who Decides | Escalation Path |
|---------------|-------------|-----------------|
| Scope changes within 10% effort | TPM | Escalate to sponsor if >10% |
| Resource allocation across teams | TPM + Engineering leads | Escalate to sponsor if unresolvable |
| Technical architecture | Architecture review board | CTO |
| Timeline shifts <2 weeks | TPM (with stakeholder communication) | Sponsor if >2 weeks |
| Budget changes | Sponsor | CFO if >10% |
| Go/no-go at launch | Steering committee | CEO |

### 5. Stakeholder Sign-off Process

The charter is only valuable if stakeholders have committed to it. Sign-off means:

- **Sponsor:** "I approve this program and I'm committing resources."
- **Engineering leads:** "We agree the scope and timeline are achievable."
- **Product lead:** "These objectives reflect the product priorities."
- **TPM:** "I will deliver this program within the defined constraints."

**The sign-off process:**
1. Draft charter → circulate for feedback (1 week)
2. Incorporate feedback → finalize (2–3 days)
3. Present at kickoff meeting → verbal agreement
4. Collect formal signatures (or Confluence "like" / approval stamp)
5. Publish as the program's governing document

---

## Realistic Case Study

### Program Context

**Company:** SecureBank - a regional bank  
**Program:** "Mobile Authentication Overhaul" - replacing SMS-based two-factor authentication with biometric + push notification authentication  
**Timeline:** 6 months  
**Stakeholders:** Product, Engineering (Mobile, Backend, Security), Compliance, Fraud Prevention, Customer Support, Marketing  
**Situation:** The previous TPM had left after 3 weeks, partly because stakeholders couldn't agree on scope. A new TPM, Priya, was asked to restart the program with a proper charter.

### The Challenge

The program had been discussed for 2 months before Priya joined. In those 2 months:

- Product had promised stakeholders that the new auth system would "solve all our fraud problems"
- Security wanted to add 3 additional authentication methods (facial recognition, fingerprint, hardware token)
- Compliance was worried about regulatory approval timelines
- Customer Support wanted the old system to remain available indefinitely (no forced migration)
- Marketing had already announced "biometric login coming soon" to customers

Everyone had a different mental model of what the program would deliver. No one had written down a shared definition. Priya's first task was to create a charter that got all stakeholders on the same page.

### What Priya Did

**Step 1 - Interviewed every key stakeholder (Week 1).** Priya scheduled 30-minute interviews with each stakeholder to understand what they wanted, what they needed, and what they were worried about. She asked three questions:

1. "What does success look like to you for this program?"
2. "What are you worried about?"
3. "What needs to be true for you to feel good about this program?"

**Step 2 - Drafted the charter (Week 2).** Using what she heard, Priya drafted the charter. She paid special attention to the points of disagreement:

**Executive Summary:**
> "The Mobile Authentication Overhaul program will replace SMS-based two-factor authentication with biometric (fingerprint + facial recognition) and push notification-based authentication for the SecureBank mobile app. This program exists to reduce account takeover fraud (currently costing $2M/year) while improving login completion rates (currently 58% for SMS-based 2FA). Success will be measured by a 50% reduction in account takeover incidents, 85%+ login completion rate, and regulatory compliance with the new Central Bank authentication guidelines taking effect in Q1 2027."

**Scope (where the previous disagreements were resolved):**

**In Scope:**
- Fingerprint authentication (Android + iOS)
- Facial recognition authentication (iOS Face ID, Android biometric prompt)
- Push notification-based authentication (user receives push, approves/denies)
- Fallback to SMS for devices that don't support biometrics
- Migration of existing users over 3 months post-launch
- Compliance certification with Central Bank guidelines

**Out of Scope (these resolved the key disagreements):**
- Hardware token authentication - deferred to Phase 2 (addressed Security's "wish list")
- Forced migration - users can keep SMS for 3 months post-launch (addressed Customer Support's concern)
- Desktop website authentication - out of scope entirely (addressed scope boundary)
- Fraud detection algorithms - not part of this program (addressed Product's expanded scope)

**Success Metrics:**
| Metric | Current | Target | Measurement |
|--------|---------|--------|-------------|
| Account takeover fraud | $2M/year | $1M/year (50% reduction) | Fraud team's monthly report |
| Login completion rate | 58% | 85%+ | Analytics dashboard |
| Biometric adoption | 0% | 60% of active users within 6 months | Analytics dashboard |
| Regulatory compliance | Not compliant | Fully compliant | Compliance audit |
| Customer support calls | 1,200/month (auth-related) | <400/month | Support system data |

**Governance:**
| Decision | Who Decides | Escalation |
|----------|-------------|------------|
| Auth method priorities | Product + Security | CTO |
| Migration timeline | TPM + Product | Sponsor |
| Regulatory interpretation | Compliance | Chief Risk Officer |
| Budget >5% variance | Sponsor | CFO |
| Launch decision | Steering committee | N/A |

**Step 3 - Circulated the draft and resolved the hard conversations (Week 2-3).** Priya sent the draft with a clear note:

> "I've tried to capture what I heard from each of you. Please review this charter for accuracy, especially the scope boundaries and success metrics. I've called out a few places where I heard different perspectives - those are marked with [DISCUSS] tags. Let's aim to resolve those in a 45-minute meeting this week."

The key disagreement was around migration timing. Customer Support wanted no forced migration. Security wanted immediate migration to close the fraud gap. Priya facilitated a 30-minute conversation where both sides presented their numbers. They agreed on a compromise: 3-month migration window with an incentive (reduced fraud liability) for early adopters.

**Step 4 - Got sign-off at the kickoff meeting (Week 3).** Priya presented the charter at the program kickoff. Key moment:

> "Before we talk about timelines or resources, I need us to agree on one thing: **this is what we're doing.** This charter defines our scope, our success metrics, and how we'll make decisions. If we disagree on scope now, it will only be harder 3 months from now."

All stakeholders signed off. The charter was published in Confluence as the program's governing document.

### The Outcomes

| Metric | Before Charter | After Charter |
|--------|---------------|---------------|
| **Shared understanding** | 7 different mental models of the program | Single documented charter, agreed by all |
| **Scope disagreements resolved** | Ongoing - no resolution mechanism | Clear scope boundaries and decision rights |
| **Success criteria defined** | "Solve all our fraud problems" - vague and unmeasurable | 5 specific metrics with current values, targets, and measurement methods |
| **Decision-making velocity** | Slow - every decision required re-litigation | Clear who decides what - faster decisions |
| **Program timeline** | Hadn't started - stuck in alignment | Started with charter sign-off |
| **Stakeholder trust in TPM** | Low (previous TPM left after 3 weeks) | Strong - Priya had listened and produced a document everyone could support |

### Lessons Learned

1. **The charter is an alignment tool, not a requirements document.** Priya didn't try to write down every feature or requirement. She wrote down the boundaries, the metrics, and the decision rights. This was enough to get everyone aligned.

2. **Scope disagreements are best resolved before the charter, not after.** Priya spent a week interviewing stakeholders and another week resolving disagreements. That investment saved months of rework.

3. **A charter without sign-off is just a wish list.** The sign-off process forced stakeholders to commit. Once signed, the charter became the reference point for scope discussions. When Marketing later asked to add a feature, Priya could point to the charter: "That's out of scope for this program. Let's discuss it for Phase 2."

4. **Listen before you write.** Priya's interviews informed the charter. By understanding each stakeholder's perspective, she could write scope boundaries that addressed everyone's concerns. If she had written the charter in isolation, it would have missed the real points of disagreement.

5. **The charter should be referenced throughout the program, not filed away.** Priya referenced the charter in the first scope change request. She referenced it at the monthly steering committee. The charter wasn't a one-time document - it was the program's constitution.

### Proficiencies Demonstrated

- **Stakeholder interviewing:** Surfacing hidden disagreements through structured conversations
- **Scope definition:** Writing clear "in scope" and "out of scope" boundaries
- **Success metric definition:** Converting vague goals into measurable targets
- **Governance design:** Defining decision rights and escalation paths
- **Consensus building:** Resolving hard disagreements through structured conversations
- **Documentation:** Writing a charter that is specific enough to prevent scope creep but flexible enough to allow execution

---

# 5. Status Decks

## Overview

A status deck (or executive summary deck, program update, or monthly business review) is the TPM's primary communication vehicle for stakeholders and executives. It is not a detailed project report. It is a decision-support document designed to be read in 60 seconds and discussed in 15 minutes.

Status decks come in several flavors:

| Type | Audience | Frequency | Length | Format |
|------|----------|-----------|--------|--------|
| **Weekly update** | Direct stakeholders (manager, product lead) | Weekly | 1 page | Confluence page or email |
| **Monthly steering committee** | Steering committee | Monthly | 5–8 slides | Slide deck |
| **Quarterly business review** | Leadership team | Quarterly | 10–15 slides | Presentation deck |
| **Ad-hoc / milestone update** | Executive sponsor | As needed | 1–3 slides | Slide deck or email |

The common thread across all formats: **status decks should lead with the headline, support it with evidence, and end with a clear ask.**

---

## Core Proficiencies

### 1. The RAG Status as a Communication Tool

RAG (Red, Amber, Green) is the universal shorthand for program health. But it's frequently misused:

| Status | Meaning | Correct Use | Common Misuse |
|--------|---------|-------------|---------------|
| 🟢 **Green** | On track. No issues requiring attention. | Use most weeks. Even green needs a one-sentence narrative. | Using green to avoid uncomfortable conversations. |
| 🟡 **Amber** | At risk. May need executive attention if not resolved. | Use when there's a known issue with a mitigation plan. | Using amber to signal "everything is fine but we're busy." |
| 🔴 **Red** | Off track. Executive attention needed now. | Use when there's a significant problem requiring a decision or resource change. | Using red so rarely that no one takes it seriously - or so often that no one reads beyond it. |

**TPM rule:** Never hide bad news. Executives trust TPMs who surface problems early. A red that you caught early and are handling is better than a green that turns into a crisis.

### 2. Designing for 60-Second Reading

Executives have limited time. Your status deck should communicate everything they need in 60 seconds.

**The 60-second test:** If someone reads your status deck for 60 seconds, can they answer:
1. Is the program on track?
2. What's the most important thing happening right now?
3. Is there anything they need to do?

If they can answer all three, your deck passes the test.

**The inverted pyramid structure:**

```
┌─────────────────────────────────────────────────┐
│  SLIDE 1: PROGRAM HEALTH (10 seconds to read)   │
│                                                  │
│  Status: 🟢 GREEN                                │
│  Headline: "Portal redesign is on track for      │
│  September launch. All 5 workstreams delivering  │
│  within sprint commitments."                     │
│                                                  │
│  Key metrics:                                    │
│  • Milestones: 8/10 on track                     │
│  • Risks: 2 active (1 critical, 1 moderate)      │
│  • Budget: 45% spent at 50% timeline             │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SLIDE 2: WHAT HAPPENED (20 seconds to read)    │
│                                                  │
│  • Backend API integration completed (on track)  │
│  • User testing began - 10 users, positive       │
│  • Security review passed without findings       │
│  • Vendor X certification delayed by 1 week      │
│    (impact: moderate, mitigation: active)        │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SLIDE 3: RISKS & DECISIONS (30 seconds to read) │
│                                                  │
│  RISKS:                                          │
│  • [Critical] Vendor cert delay: escalation      │
│    to VP Engineering needed if not resolved      │
│    within 1 week                                 │
│  • [Moderate] Scope creep: 2 feature requests    │
│    received, assessed against charter            │
│                                                  │
│  DECISIONS NEEDED:                                │
│  1. Approve Phase 2 scope freeze?                │
│     Recommend: Yes, with exception process       │
│     Deadline: This Friday                        │
└─────────────────────────────────────────────────┘
```

### 3. Data Visualization Best Practices

Status decks are not the place for comprehensive data dumps. Use visuals to communicate quickly:

| Visual | Best For | Example |
|--------|----------|---------|
| **RAG bar** | Overall program health | A simple bar or circle showing 🟢🟡🔴 |
| **Burndown chart** | Sprint/progress against timeline | Actual vs. planned completion over time |
| **Gantt-style milestone bar** | Milestone progress and upcoming dates | Timeline view of 10 milestones with status |
| **Pie chart** | Distribution (issues by status, budget by category) | Open issues by priority: 10 critical, 20 high, 15 medium |
| **Trend line** | Metrics over time (velocity, defect rate) | Velocity trend over 6 sprints |
| **Table** | Structured data (risks, decisions) | Top 5 risks with RAG status, owner, mitigation |

**TPM rule:** One visual can replace 10 sentences of text. But one bad visual can confuse more than 10 sentences can clarify. Choose the simplest visual that communicates the data accurately.

### 4. Structuring Narrative for Decisions

Every status deck should end with clear decisions that stakeholders need to make. Never present a problem without presenting options.

**The decision slide structure:**

```
DECISION NEEDED: [Decision Title]
──────────────────────────────────────────
Context: [1–2 sentences - why this decision is needed]

Options:
A) [Option A] - [Cost/benefit/tradeoff]
B) [Option B] - [Cost/benefit/tradeoff]
C) [Option C] - [Cost/benefit/tradeoff]

TPM Recommendation: [Option A]
Rationale: [1–2 sentences - why this option is best]

Deadline: [Date - by when this decision must be made]
```

### 5. Tailoring to Different Audiences

The same program has different status needs depending on the audience:

| Audience | What They Care About | Format | Frequency |
|----------|---------------------|--------|-----------|
| **Engineering leads** | Specific blockers, dependency status, sprint progress | Board + brief slack | Daily/standup |
| **Product lead** | Feature completion, scope changes, launch timeline | 1-page Confluence | Weekly |
| **Program sponsor** | Budget, timeline, top risks, decisions needed | 3-slide deck | Bi-weekly |
| **Steering committee** | Program health, key decisions, strategic risks | 5–8 slide deck | Monthly |
| **Executive leadership** | Strategic impact, cross-program dependencies | 1-page executive summary | Quarterly |

**TPM rule:** Different audiences need different levels of detail. The steering committee doesn't need to know that a specific unit test failed. The engineering lead doesn't need to know the budget variance percentage. Tailor your communication to your audience.

---

## Realistic Case Study

### Program Context

**Company:** DataStream - a cloud data warehousing company  
**Program:** "Query Performance Initiative" - a 6-month program to improve query performance by 3x across the product  
**Timeline:** 6 months (3 months completed)  
**Audience:** Monthly steering committee (VP Engineering, VP Product, CTO, Program Sponsor)  
**Situation:** The TPM, Raj, had been presenting detailed, text-heavy status decks (15+ slides, 30+ data points per slide). The steering committee was losing attention. Decisions weren't being made. Raj needed to redesign his status deck from scratch.

### The Challenge

Raj's status deck had three problems:

1. **Too long.** 15 slides for a 45-minute meeting. The first 20 minutes were spent reviewing what happened instead of making decisions.
2. **No clear headline.** Every slide was data-heavy. The committee had to read everything to understand the program's health.
3. **No clear ask.** Decisions were embedded in slide text. Committee members didn't know what they needed to decide until Raj said "We need a decision" in the meeting itself.

The CTO had pulled Raj aside after the last meeting: "I look at your deck every month and I still can't tell you in 30 seconds whether this program is healthy. Fix that."

### What Raj Did

**Step 1 - Restructured to 7 slides (next deck).** Raj reduced the deck from 15 slides to 7:

| Before (15 slides) | After (7 slides) |
|--------------------|------------------|
| Program overview (3 slides) | 1. Program health (RAG + headline + key metrics) |
| Team-by-team updates (5 slides) | 2. Milestone progress (Gantt-style view) |
| Risk details (3 slides) | 3. What we delivered this month |
| Budget breakdown (2 slides) | 4. What we're delivering next month |
| Decision items (2 slides) | 5. Top 3 risks (with RAG status + mitigation) |
| 6. Decisions needed (with options + recommendation) |
| 7. Appendix (detailed data - only if asked) |

**Step 2 - Led every slide with a headline (next deck).** Every slide now started with a clear conclusion:

| Before (no headline) | After (clear headline) |
|---------------------|----------------------|
| Slide showed a table of milestones with status | **"8 of 10 milestones on track. The 2 at-risk milestones have clear mitigations."** |
| Slide showed a burndown chart | **"Backend team is ahead of schedule. Infrastructure team is 4 days behind - we've added 1 extra engineer to recover."** |
| Slide showed a list of risks | **"One risk needs your attention today: vendor certification delay."** |

**Step 3 - Created a "decisions needed" slide with structured options (next deck).** No more burying decisions in text:

```
DECISION 1: Extend Phase 2 by 2 weeks?
──────────────────────────────────────────
Context: The Infrastructure team needs 2 more weeks for
database migration testing.

Options:
A) Extend Phase 2 by 2 weeks - pushes GA launch by 1 week,
   but reduces launch risk
B) Proceed without full migration testing - maintains launch
   date, but risk of post-launch issues is HIGH
C) Reduce Phase 2 scope to remove database migration -
   maintains launch date, defers migration to Phase 3

TPM Recommendation: Option A - the 1-week launch delay is
acceptable given the risk reduction.

Decision needed by: Today (impacts next sprint planning)
```

**Step 4 - Introduced a "pre-read" culture (before the meeting).** Raj sent the 7-slide deck 48 hours before the steering committee with this note:

> "Pre-read attached. Three things to note:
> 1. Program is GREEN - on track for GA launch.
> 2. One decision needed (Phase 2 extension - I've shared my recommendation).
> 3. The meeting will focus on discussion and decisions, not status review."

This meant the steering committee had already seen the status and could discuss it instead of reading it for the first time in the meeting.

**Step 5 - Added a "nothing to report" discipline (ongoing).** Raj established a new rule for himself: if there's nothing new to say about a workstream, don't say anything. The slides were now shorter, focused, and every sentence carried weight.

### The Outcomes

| Metric | Before (15-slide deck) | After (7-slide deck) |
|--------|----------------------|---------------------|
| **Deck length** | 15 slides | 7 slides |
| **Meeting time spent on decisions** | 10 minutes | 25 minutes |
| **Time to understand program health** | 5–10 minutes scanning | 10 seconds (headline on slide 1) |
| **Decisions per meeting** | 0–1 (many deferred) | 2–3 (most made in meeting) |
| **Pre-read read rate** | ~30% | ~80% |
| **Stakeholder satisfaction** | Low - "I can't tell if we're on track" | High - "This is clear and decision-focused" |

### Lessons Learned

1. **Lead with the conclusion, not the data.** Raj's old decks buried the conclusion in data. His new decks led with it. Executives trust TPMs who can synthesize data into a clear status.

2. **A 7-slide deck can communicate more than a 15-slide deck.** The old deck had more slides but less clarity. The new deck had fewer slides but more impact. Every slide had a purpose.

3. **Pre-reads transform meetings.** Sending the deck 48 hours ahead meant stakeholders arrived informed. Meetings shifted from status review to decision-making. This was the single highest-impact change Raj made.

4. **Decisions need options, not just requests.** Presenting "We need to decide whether to extend Phase 2" invites open-ended debate. Presenting "Option A (extend), Option B (proceed with risk), Option C (descope)" with a recommendation structures the decision.

5. **Be disciplined about "nothing to report."** Stakeholder attention is the scarcest resource in the room. Don't waste it on workstreams that are perfectly fine. Trust is built by communicating what matters, not by covering everything.

### Proficiencies Demonstrated

- **Deck design:** Reducing 15 slides to 7 without losing meaningful content
- **Headline writing:** Leading every slide with a clear, data-backed conclusion
- **Decision framing:** Presenting options with recommendations, not open-ended questions
- **Pre-read discipline:** Sending materials in advance to transform meeting dynamics
- **Audience awareness:** Designing for 60-second reading and 15-minute discussion
- **Brevity under pressure:** Writing concisely enough that every sentence serves a purpose

---

# 6. Runbooks

## Overview

A runbook is a documented set of procedures for performing a specific operation, handling a specific scenario, or executing a specific process. For TPMs, runbooks ensure consistency, reduce errors, and enable knowledge transfer.

Runbooks serve several critical purposes:

| Purpose | Example | When It's Created |
|---------|---------|-------------------|
| **Operational procedures** | "How to deploy the new release" | Before go-live |
| **Incident response** | "What to do when the payment system goes down" | Before go-live, or after first incident |
| **Launch checklists** | "Steps to complete before production launch" | Before every launch |
| **On-call procedures** | "What to do when you're the TPM on call" | When on-call rotation is established |
| **Recurring processes** | "How to run the monthly steering committee" | Before first instance |
| **Rollback procedures** | "How to roll back a failed deployment" | Before go-live |

---

## Core Proficiencies

### 1. Writing Actionable, Step-by-Step Procedures

A runbook must be executable by someone who has never done the procedure before. This requires a specific writing style:

| Poor Runbook | Good Runbook |
|-------------|--------------|
| "Deploy the release to production." | **Step 1:** Log into Jenkins at [URL] using your SSO credentials. |
| "If there's an issue, roll back." | **Step 2:** Navigate to the [Pipeline Name] pipeline. |
| "Notify the team." | **Step 3:** Click "Build with Parameters" and enter: `version = v2.4.1`, `environment = production` |
| "Check monitoring." | **Step 4:** After deployment, verify: (a) Health endpoint returns 200, (b) Error rate <0.1%, (c) Key metrics in [Dashboard URL] |

**The Runbook Writing Framework:**

| Element | What to Include | Example |
|---------|----------------|---------|
| **Prerequisites** | What must be true before starting | "You need: Production database access, VPN connection, and the release artifact URL." |
| **Step-by-step instructions** | Exact commands, URLs, and parameters | "Run: `kubectl apply -f deployment-v2.4.1.yaml`" |
| **Expected outputs** | What should happen at each step | "You should see: 'deployment.apps/payment-service created'" |
| **Verification steps** | How to confirm the step worked | "Check: Dashboard URL shows new version number" |
| **Error handling** | What to do if something goes wrong | "If the deployment fails, run the rollback script (see Section 4)" |
| **Roles and responsibilities** | Who does what | "Step 3 is performed by the SRE on call. Step 4 is performed by the TPM." |

### 2. Launch Checklists

The launch checklist is the TPM's most important pre-go-live artifact. It ensures nothing is forgotten in the pressure of launch day.

**A comprehensive launch checklist might include:**

```
☐ PRE-LAUNCH (T-2 weeks)
  ☐ All P0 and P1 bugs resolved
  ☐ Security review signed off
  ☐ Legal/Compliance review signed off
  ☐ Performance testing completed (latency, load, stress)
  ☐ Rollback plan tested and documented
  ☐ Monitoring dashboards created and tested
  ☐ Communication plan finalized

☐ PRE-LAUNCH (T-1 week)
  ☐ Code freeze in effect
  ☐ Stakeholder approval received
  ☐ Customer communication drafted (if applicable)
  ☐ Internal team notified (all-hands, Slack)
  ☐ On-call schedule confirmed for launch week

☐ LAUNCH DAY
  ☐ Final dress rehearsal completed (24h before)
  ☐ Go/no-go decision made
  ☐ Feature flag flipped / deployment initiated
  ☐ Monitoring team online and watching
  ☐ Rollback criteria defined (what metric triggers a rollback)
  ☐ Communication sent (internal + external)

☐ POST-LAUNCH (T+1 hour)
  ☐ Health metrics verified (error rate, latency, traffic)
  ☐ Customer-facing systems operational
  ☐ No critical issues detected

☐ POST-LAUNCH (T+24 hours)
  ☐ Post-launch review scheduled
  ☐ Incident reports filed for any issues
  ☐ Monitoring dashboards handed off to BAU team
```

**TPM rule:** A launch checklist is not a theoretical document. It should be tested before launch day. Run a dry run of the checklist with the launch team. Missing steps found in the dry run are learning opportunities. Missing steps found during launch are failures.

### 3. Incident Response Runbooks

TPMs often create or contribute to incident response runbooks, especially for programs that are in production.

**The incident response runbook structure:**

```
# [System Name] Incident Response Runbook

## 1. Incident Severity Classification
| Severity | Definition | Response Time | Example |
|----------|------------|---------------|---------|
| P0 | Complete system outage | 15 min | Payment system down |
| P1 | Major feature unavailable | 30 min | Login broken |
| P2 | Minor feature degraded | 2 hours | Slow page load |
| P3 | Cosmetic issue | Next business day | Misaligned button |

## 2. Escalation Contacts
| Role | Name | Primary Contact | Backup Contact |
|------|------|-----------------|----------------|
| TPM on call | [Name] | [Phone] | [Phone] |
| SRE on call | [Name] | [Phone] | [Phone] |
| Engineering lead | [Name] | [Phone] | [Phone] |

## 3. Incident Response Steps
### Step 1: Acknowledge
- [ ] Verify the alert (is it real?)
- [ ] Acknowledge in the on-call tool
- [ ] Create a Slack channel: #incident-[system]-[date]

### Step 2: Assess
- [ ] Determine severity (P0/P1/P2/P3)
- [ ] Who needs to be involved?
- [ ] What is the impact? (users affected, revenue impact, time elapsed)

### Step 3: Mitigate
- [ ] Follow the specific resolution steps for the issue type:
  - [System not responding]: See Section 4.1
  - [Data corruption]: See Section 4.2
  - [Deployment failure]: See Section 4.3

### Step 4: Communicate
- [ ] Update status page (if customer-facing)
- [ ] Post update in #incident channel every 30 min
- [ ] For P0/P1: notify TPM lead and engineering director

### Step 5: Resolve
- [ ] Verify fix
- [ ] Monitor for 30 min post-resolution
- [ ] Schedule post-mortem within 48 hours

## 4. Specific Resolution Procedures
### 4.1 [System not responding]
... (detailed steps)

### 4.2 [Data corruption]
... (detailed steps)
```

### 4. Knowledge Transfer and Scalability

Runbooks enable knowledge transfer. When a team member leaves, the runbook preserves their knowledge. When the TPM is on vacation, the runbook enables someone else to handle the program.

**Runbook ownership and maintenance:**

| Phase | Activity | Frequency |
|-------|----------|-----------|
| **Creation** | Write the runbook during program execution | Before go-live |
| **Validation** | Test the runbook with someone who hasn't done it before | After creation |
| **Revision** | Update the runbook based on lessons learned | After each use |
| **Review** | Ensure the runbook is still accurate | Quarterly |
| **Retirement** | Archive runbooks for decommissioned systems | When system is retired |

### 5. Runbook vs. Playbook vs. Checklist

These terms are sometimes used interchangeably, but there are distinctions:

| Artifact | Purpose | When to Use |
|----------|---------|-------------|
| **Runbook** | Detailed technical procedures for operations and incident response | For systems, deployments, and operations |
| **Playbook** | Strategic approach to a specific scenario | For negotiations, stakeholder interactions, and repeated management scenarios |
| **Checklist** | A set of items to verify before, during, or after an event | For launches, migrations, and events |

All three are valuable. TPMs should have access to all three types for their programs.

---

## Realistic Case Study

### Program Context

**Company:** CloudServe - a SaaS company providing cloud infrastructure management tools  
**Program:** "Multi-Region Deployment" - enabling the product to run in 3 additional geographic regions (EU, APAC, Middle East)  
**Timeline:** 8 months  
**Teams:** Infrastructure, Platform Engineering, Security, Compliance, Customer Support, SRE  
**Situation:** The first region launch (EU) was rocky. The team discovered during the launch that no one had documented the deployment procedure. Steps were forgotten, communication was unclear, and the launch took 6 hours instead of the planned 2 hours. The program had 2 more region launches scheduled in the next 4 months.

### The Challenge

After the EU launch, the post-mortem revealed:

- The deployment sequence hadn't been agreed upon - 3 teams had different assumptions about the order of operations
- The launch notification wasn't sent to customer support - they found out from customer calls
- The rollback procedure was discovered during the launch (by reading source code comments)
- The SRE on call had never been trained on this system
- Key configuration values were stored in an engineer's personal notes

The TPM, Anita, knew that without a runbook, the APAC and Middle East launches would repeat the same failures. She needed a runbook that could be used for any region launch - repeatable, testable, and trainable.

### What Anita Did

**Step 1 - Wrote the Multi-Region Launch Runbook (2 weeks).** Anita worked with the Infrastructure lead to document every step of the EU launch as a runbook. She followed the "someone who has never done this" standard:

**Runbook extract:**

```
# Multi-Region Launch Runbook

## Prerequisites
Before starting this runbook, ensure:
1. All P0 and P1 bugs for this region are resolved (verify in JIRA query: [link])
2. Regional compliance certification is complete (see Compliance checklist in Section 5)
3. SRE on-call schedule is confirmed for launch week
4. Regional load testing completed with results meeting thresholds (see Section 6)
5. Rollback procedure has been tested (see Section 7)

## Launch Procedure
### Phase 1: Infrastructure Provisioning (T-1 week)
Owner: Infrastructure Team | Duration: 2–4 hours

Step 1.1: Run the infrastructure provisioning script
- Command: `terraform apply -var-file=region-[REGION].tfvars`
- Expected output: "Apply complete! Resources: 24 added, 0 changed, 0 destroyed."
- If failed: Check AWS service limits for this region. Run `terraform plan` to identify the failure.

Step 1.2: Verify infrastructure health
- Navigate to [Dashboard URL]
- Verify: All 24 resources show "healthy" status
- If not: Contact [Infrastructure lead] immediately

Step 1.3: Configure DNS routing
- Go to [DNS management console]
- Add A records for: [list of 5 endpoints]
- Verify: `nslookup [endpoint].[region].cloudserve.com` returns the expected IP

### Phase 2: Application Deployment (T-1 day)
Owner: Platform Engineering | Duration: 1–2 hours

Step 2.1: Deploy application services
- Run Jenkins pipeline: [pipeline URL]
- Parameters: `version = [latest], region = [REGION], config = [region-config]`
- Expected output: All services show "Running" status
- Verify: [Health endpoint] returns HTTP 200

Step 2.2: Run smoke tests
- Run the automated smoke test suite: `./scripts/smoke-test.sh [REGION]`
- Expected output: "All smoke tests passed (25/25)"
- If failed: Review test output, identify failed tests, decide go/no-go
```

The runbook covered all 4 phases across 2 weeks. Each phase had clear owners, explicit commands, expected outputs, and error handling.

**Step 2 - Created a companion launch checklist (1 day).** Anita extracted a 1-page checklist from the runbook for quick reference during the launch:

```
☐ MULTI-REGION LAUNCH CHECKLIST - [REGION NAME]

PRE-LAUNCH (T-2 WEEKS)
☐ All P0/P1 bugs resolved
☐ Compliance certification received
☐ Load testing completed (thresholds met)
☐ SRE on-call schedule confirmed
☐ Rollback procedure tested

PRE-LAUNCH (T-1 WEEK)
☐ Infrastructure provisioned and verified
☐ Application deployed and smoke tested
☐ Communication sent to internal teams
☐ Customer support team briefed

LAUNCH DAY
☐ Go/no-go decision made (sign-off: [Sponsor])
☐ DNS routing activated
☐ Monitoring dashboards verified
☐ Rollback criteria defined
☐ Launch notification sent

POST-LAUNCH
☐ Health metrics verified (T+1 hour)
☐ No critical issues (T+4 hours)
☐ Post-launch review scheduled (T+24 hours)
☐ Runbook updated with lessons learned
```

**Step 3 - Tested the runbook with a dry run (1 week before APAC launch).** Anita ran a 2-hour dry run with the launch team. They simulated the entire launch process using the runbook. They found:

- 3 steps where the expected output didn't match reality (fixed)
- 2 steps where the owner was unclear (clarified)
- 1 missing step (configuration validation - added)

**Step 4 - Used the runbook for the APAC launch (Week 6).** The APAC launch using the runbook:

- **Planned time:** 2 hours
- **Actual time:** 2 hours 15 minutes
- **Issues encountered:** 1 (a configuration file path was incorrect - handled via the runbook's error handling section)
- **Rollback triggered:** No
- **Customer support notified:** Yes - 30 minutes before launch
- **Post-launch review:** Scheduled and held

**Step 5 - Updated the runbook based on APAC lessons (Week 7).** Anita added a "Configuration Validation" step and updated the troubleshooting section for the configuration path issue.

### The Outcomes

| Metric | EU Launch (No Runbook) | APAC Launch (With Runbook) |
|--------|------------------------|---------------------------|
| **Launch duration** | 6 hours | 2 hours 15 minutes |
| **Issues encountered** | 7 (3 were known steps that were forgotten) | 1 (minor - handled via runbook error handling) |
| **Rollback triggered** | No (should have been - 1 issue required it) | No (not needed) |
| **Customer support notified** | No - they found out from customer calls | Yes - 30 minutes before launch |
| **Post-launch review** | Held - but no documentation produced | Held - runbook updated with lessons |
| **Knowledge transfer time** | N/A - knowledge was in 1 engineer's head | Runbook enables anyone to run the launch |
| **Team confidence** | Low - "hope it works" | High - "we've done this before and documented it" |

### Lessons Learned

1. **Without a runbook, your launch is a chaotic improvisation.** The EU launch took 6 hours because no one had written down what needed to happen. The APAC launch took 2 hours 15 minutes because the runbook eliminated uncertainty.

2. **A runbook must be tested before it's used.** The dry run found 6 issues in the runbook. If those issues had been discovered during the APAC launch, the runbook would have lost credibility. Testing the runbook before the launch was critical.

3. **Checklists complement runbooks.** The runbook contains the detailed procedures. The checklist provides a quick reference during the launch. Both are needed.

4. **Runbooks should be updated after every use.** The APAC launch revealed a missing step (configuration validation). Anita updated the runbook immediately. The Middle East launch would benefit from that lesson.

5. **Runbooks are knowledge preservation tools.** After the EU launch, the knowledge was in one Infrastructure engineer's head. After the runbook was created, the knowledge was in a document that anyone could use. This is especially important when team members leave or rotate.

### Proficiencies Demonstrated

- **Procedural documentation:** Writing step-by-step instructions that are executable by someone who has never done the procedure
- **Checklist design:** Creating a 1-page quick-reference checklist from a detailed runbook
- **Testing and validation:** Running a dry run to validate the runbook before the actual launch
- **Knowledge preservation:** Converting tacit knowledge (in an engineer's head) into explicit knowledge (documented procedure)
- **Continuous improvement:** Updating the runbook based on lessons learned from each use
- **Cross-team coordination:** Creating a runbook that spans Infrastructure, Platform Engineering, Security, Compliance, Customer Support, and SRE

---

# Conclusion: How These Tools Work Together

These six tools and artifacts are not independent. They form an interconnected system that a TPM uses daily:

```
                ┌─────────────────────────────────────┐
                │        PROGRAM CHARTER              │
                │  Defines: why, who, what, success   │
                │  Created: at kickoff                │
                └────────────┬────────────────────────┘
                             │
        ┌────────────────────┴────────────────────┐
        │                                         │
        ▼                                         ▼
┌──────────────────┐                    ┌──────────────────┐
│    CONFLUENCE    │                    │      JIRA        │
│  Knowledge hub   │◄──── Links ───────►│  System of record│
│  Decisions, docs,│                    │  Tasks, sprints, │
│  runbooks, notes │                    │  dashboards      │
└────────┬─────────┘                    └────────┬─────────┘
         │                                      │
         │           ┌──────────────┐            │
         └──────────►│    MIRO      │◄───────────┘
                     │  Workshops   │
                     │  Dependency  │
                     │  mapping     │
                     └──────┬───────┘
                            │
                            ▼
               ┌─────────────────────┐
               │    STATUS DECKS     │
               │  Communicate health │
               │  Drive decisions    │
               └─────────────────────┘
                            │
                            ▼
               ┌─────────────────────┐
               │     RUNBOOKS        │
               │  Operationalize     │
               │  Document procedures│
               └─────────────────────┘
```

**How it flows in practice:**

1. **Program Charter** defines the program's scope, success metrics, and governance
2. **Confluence** hosts the charter, decision log, meeting notes, and program wiki
3. **JIRA** tracks the tasks, epics, sprints, and dependencies that execute the charter
4. **Miro** enables workshops for dependency mapping, timeline creation, and collaborative problem-solving
5. **Status Decks** communicate progress, risks, and decisions to stakeholders using data from JIRA and decisions from Confluence
6. **Runbooks** operationalize the program - launch procedures, incident response, and recurring processes are documented for consistency

**The TPM's role in this system:**

| Responsibility | Tool/Artifact | Frequency |
|---------------|---------------|-----------|
| Define the program | Program Charter | Once (updated on scope change) |
| Maintain the knowledge base | Confluence | Weekly |
| Track execution | JIRA | Daily |
| Facilitate collaboration | Miro | As needed |
| Communicate status | Status Decks | Weekly/monthly |
| Operationalize procedures | Runbooks | Before go-live, updated after each use |

---

## Beginner's Learning Path

**Month 1:** Master **JIRA** - learn JQL, build a program dashboard, structure epics and stories properly. This is the operational foundation of your daily work.

**Month 2:** Master **Confluence** - create a program space, establish meeting notes templates, start a decision log, and link everything to JIRA.

**Month 3:** Practice **Status Decks** - redesign your weekly update using the 60-second test. Get feedback from a stakeholder: "Can you tell the program health in 10 seconds?"

**Month 4:** Learn **Miro** - facilitate one workshop (dependency mapping or retrospective). Focus on the facilitation skills, not the tool mechanics.

**Month 5:** Write a **Program Charter** - even if it's for a hypothetical program. Practice scope definition and success metric writing.

**Month 6:** Create a **Runbook** - document a procedure you do regularly. Test it by having someone else follow it.

---

*This field guide was developed for TPMs new to the role who need practical, actionable guidance on the tools and artifacts they'll use daily. All case studies are representative composites grounded in real TPM experience across multiple organizations and program contexts.*
