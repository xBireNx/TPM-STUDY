# 📐 TPM Planning & Estimation: A Practical Guide

> **Audience:** Beginners new to TPM who need to understand and apply planning and estimation frameworks immediately
> **Purpose:** Build practical skills in 8 essential planning and estimation methodologies
> **Read time per section:** ~12–18 minutes | **Total:** ~100–140 minutes

---

## How to Use This Guide

This guide teaches you the **planning and estimation methods** that Technical Program Managers use daily. These are not theoretical concepts-they are practical tools you can apply in your next planning cycle.

**Eight frameworks, organized by when you'd use them:**

| Phase of Planning | Framework | What It Helps You Do |
|-------------------|-----------|---------------------|
| **Setting direction** | Roadmapping | Visualize the big-picture timeline and strategy |
| **Defining checkpoints** | Milestones | Identify key delivery points and manage dependencies |
| **Knowing your limits** | Capacity Planning | Determine how much work your team can actually handle |
| **Estimating roughly** | T-Shirt Sizing | Make quick, relative estimates without overthinking |
| **Estimating with rigor** | PERT | Calculate probabilistic estimates that account for uncertainty |
| **Finding bottlenecks** | Critical Path Analysis | Identify the sequence of tasks that determines your timeline |
| **Delivering safely** | Phased Delivery | Break large releases into staged rollouts |
| **Seeing it all together** | Case Studies | Real-world examples of these frameworks working together |

**How to read this guide:**
- If you're completely new, read in order-the frameworks build on each other
- If you need a specific tool (e.g., "how do I estimate?"), jump to that section
- Pay special attention to the "How Frameworks Connect" notes-they show you how to combine tools for maximum effect

---

## Table of Contents

1. [Roadmapping](#1-roadmapping)
2. [Milestones](#2-milestones)
3. [Capacity Planning](#3-capacity-planning)
4. [T-Shirt Sizing](#4-t-shirt-sizing)
5. [PERT (Program Evaluation and Review Technique)](#5-pert-program-evaluation-and-review-technique)
6. [Critical Path Analysis](#6-critical-path-analysis)
7. [Phased Delivery](#7-phased-delivery)
8. [Case Studies: Putting It All Together](#8-case-studies-putting-it-all-together)

---

# 1. Roadmapping

## Definition & Relevance

A **roadmap** is a strategic visual timeline that shows what a team or program plans to deliver over a period of time-typically 3–12 months. It answers the question: **"Where are we going, and what do we need to do to get there?"**

Think of a roadmap like the route map you'd use for a cross-country road trip:
- You know your final destination (the business goal)
- You know the major cities you'll pass through (major milestones)
- You have alternative routes if one road is closed (contingency plans)
- You don't map every single turn (you don't need that level of detail far in advance)

Roadmaps are different from project plans. A project plan says "here are the exact tasks, in order, by date." A roadmap says "here's the direction we're heading, the major phases, and what we expect to deliver each quarter." Roadmaps are **strategic**; project plans are **tactical**.

### Why Roadmapping Matters in TPM

| Reason | Explanation |
|--------|-------------|
| **Alignment** | A roadmap ensures everyone-executives, engineers, product managers, customers-has the same picture of what's coming |
| **Communication** | A visual roadmap is the most effective way to communicate direction to stakeholders |
| **Decision-making** | When new requests come in, the roadmap helps you evaluate: "Where would this fit? What would we need to deprioritize?" |
| **Expectation management** | A realistic roadmap prevents stakeholders from imagining a delivery timeline that isn't possible |
| **Strategic thinking** | Building a roadmap forces you and your team to think about the big picture, not just the next sprint |

### Core Principles

| Principle | What It Means |
|-----------|---------------|
| **Roadmaps show direction, not commitment** | Items further out on the roadmap are "intent," not "promises." Be clear about the level of certainty at each time horizon. |
| **Time horizons have different levels of detail** | The next 1–2 months should be fairly detailed. Months 3–6 should be high-level. Months 6–12 should be directional. |
| **Roadmaps must be living documents** | A roadmap created in January and ignored until December is worse than no roadmap at all. Review and update it monthly. |
| **Focus on outcomes, not features** | A good roadmap shows what you want to achieve (e.g., "Improve onboarding completion rate"), not just what you'll build (e.g., "Redesign sign-up page"). |
| **Tradeoffs are explicit** | If something goes on the roadmap, something else comes off. A roadmap that tries to include everything is not a roadmap-it's a wish list. |

## How It Works

### Step 1: Define Your Strategic Context

Before you draw anything, gather three inputs:

| Input | Questions to Answer |
|-------|-------------------|
| **Business goals** | What is the company trying to achieve this year? (Revenue targets, customer acquisition, market expansion) |
| **Product strategy** | What product initiatives support those goals? (New features, platform improvements, integrations) |
| **Capacity constraints** | How many teams? How much time? Any major dependencies or risks? |

**Example:** A fintech company's strategic context for the year:
- **Goal:** Increase monthly active users from 500K to 1M
- **Strategy:** Launch in 2 new countries, improve onboarding, add local payment methods
- **Capacity:** 3 engineering teams (~30 engineers), 12-month timeframe

### Step 2: Identify Major Initiatives

List the 3–7 major initiatives that will drive your strategic goals. Each initiative should be:
- **Big enough** to matter (months of work, not weeks)
- **Small enough** to be understandable (a stakeholder can grasp it in 30 seconds)
- **Outcome-oriented** (what will be different when it's done?)

**Example initiatives:**
1. Launch in Country A (Brazil)
2. Launch in Country B (Mexico)
3. Redesign onboarding flow
4. Implement PIX payment integration (Brazil's payment system)
5. Achieve SOC-2 compliance certification

### Step 3: Assign to Time Horizons

Place each initiative on a timeline. Be honest about uncertainty:

| Time Horizon | Certainty Level | Detail | What You're Showing |
|--------------|----------------|--------|---------------------|
| **Now** (next 1–2 months) | High confidence | Specific features/epics | "This is what we're working on now" |
| **Next** (months 3–6) | Medium confidence | Initiative-level | "This is what we plan to prioritize next" |
| **Later** (months 7–12) | Lower confidence | Themes/directions | "This is where we're heading, but specifics may change" |

### Step 4: Visualize

Create a visual representation. Common formats include:

**Time-based (horizontal bar chart):**
```
Q1 (Jan-Mar)        | Q2 (Apr-Jun)       | Q3 (Jul-Sep)      | Q4 (Oct-Dec)
Brazil Launch [=====]                                   |
Mexico Launch                          |==================|
Onboarding Redesign  |===============]                  |
PIX Integration      |================|                 |
SOC-2 Compliance                       |=================|
```

**Theme-based (grouped by category):**
```
GROWTH:     [Brazil Launch]   [Mexico Launch]
RETENTION:  [Onboarding Redesign]
PLATFORM:   [PIX Integration] [SOC-2 Compliance]
```

### Step 5: Socialize and Get Feedback

Share the roadmap with stakeholders. Ask: "Does this align with your understanding of our priorities? Is anything missing? Does anything have the wrong timeline?"

### Step 6: Review and Update Regularly

Schedule a monthly roadmap review. At each review:
1. What has changed in our strategic context?
2. Are we on track for the current quarter's items?
3. Do we need to adjust anything in the "Next" or "Later" horizons?
4. Any new initiatives that need to be added (and correspondingly, anything that needs to be removed)?

> **🔗 How Roadmapping Connects to Other Frameworks:** A good roadmap sets the stage for all other planning activities. The initiatives on your roadmap are broken into **milestones**, estimated using **T-Shirt Sizing** or **PERT**, and evaluated for **capacity** feasibility. **Phased Delivery** decisions are reflected in how you sequence initiatives across quarters.

## Realistic Example

**Scenario:** A health-tech startup ("VitalCare") is building a telemedicine platform. The product has been live for 18 months with basic video consultation features. The company has raised a Series A and needs to expand to meet enterprise client demands.

**The Team:**
- 3 engineering teams (12 engineers total)
- 1 product manager
- 1 TPM (you)
- 1 design lead
- 1 compliance officer (part-time)

**The Strategic Context:**
1. A major hospital chain wants to sign a contract, but they require: EHR integration, scheduling system, and HIPAA compliance documentation
2. Two competitors have launched prescription delivery features
3. The current platform crashes when >200 concurrent consultations are happening
4. Investors want to see path to 5x user growth in 12 months

**The Roadmapping Process:**

**Step 1 - Identify initiatives.** Based on stakeholder interviews (CEO, Head of Product, Engineering Lead, Head of Sales), you identify 8 potential initiatives for the year. After prioritization discussion, you narrow to 5:

| Initiative | Business Driver | Estimated Effort |
|------------|----------------|------------------|
| EHR Integration | Hospital deal ($2M contract) | 5 months, 2 teams |
| Infrastructure Scaling | Platform stability (prevent crashes) | 2 months, 1 team |
| Prescription Delivery | Competitive pressure | 4 months, 1 team |
| Scheduling System | Hospital deal requirement | 3 months, 1 team |
| Patient Mobile App | Growth & retention | 6 months, 1 team |

**Step 2 - Build the roadmap.** You create a time-based roadmap:

```
Q1 (Jan-Mar)     | Q2 (Apr-Jun)    | Q3 (Jul-Sep)    | Q4 (Oct-Dec)
Infra Scaling [==]                  |                 |
EHR Integration    |===================|             |
Scheduling                          |========|       |
Prescription Delivery                 |==============|
Patient App                                           |==============]
```

**Step 3 - Address the capacity constraint.** You quickly notice a problem: prescriptive delivery and EHR integration overlap in Q2–Q3 with only 3 teams available. You can't do both simultaneously at full speed. You adjust:

> "The hospital deal requires EHR + Scheduling. That's our highest revenue priority. Prescription Delivery is competitive pressure but less urgent. We'll start Prescription Delivery in Q3 after EHR Integration wraps up, using the freed-up teams."

Revised roadmap:
```
Q1 (Jan-Mar)     | Q2 (Apr-Jun)    | Q3 (Jul-Sep)    | Q4 (Oct-Dec)
Infra Scaling [==]                  |                 |
EHR Integration    |===================|             |
Scheduling                          |========|       |
Prescription Delivery                 |==============| (starts later)
Patient App (deferred to next year)                  |
```

**Step 4 - Communicate uncertainty.** In the roadmap, you clearly mark:
- Infra Scaling and EHR Integration (Q1–Q2): "Committed"
- Scheduling and Prescription Delivery (Q3): "Targeting"
- Patient App: "Exploring" (not formally committed)

**The Outcome:** The roadmap aligns the entire company. Sales knows when EHR integration will be ready. Engineering knows which teams to allocate and when. The CEO sees the Patient App deferred and challenges the team to find a way to accelerate it-but the roadmap makes the tradeoff visible so it becomes a strategic decision, not a surprise.

## Case Study

**Organization:** A mid-size e-commerce company ("ShopFast") with 800 employees was seeing stagnant growth. The company had 4 product teams and a platform team. The previous roadmap (if you could call it that) was a list of 40+ features stored in a spreadsheet with no timeline, no prioritization, and no connection to business goals.

**The Problem:** Every quarter, the CEO would ask: "Why haven't we launched X yet?" And the product teams would respond: "We didn't know X was a priority." Or worse: "We've been working on Y because that's what we thought was important."

There was no shared picture of where the company was heading. Teams were building in different directions. The company was spending engineering time on features that didn't move business metrics.

**The Roadmap Intervention:**

A new TPM, Maria, was hired to fix this. Her first action: build a company roadmap.

**Phase 1 - Discovery (2 weeks).** Maria interviewed 15 stakeholders:
- CEO, CTO, CPO (strategic direction)
- Engineering leads (capacity, technical constraints)
- Product managers (what they were building and why)
- Sales director (what customers were asking for)
- Customer support director (what customers were complaining about)

Key discovery: Sales was promising features that Product didn't know about. Product was building features Sales couldn't sell. Engineering was working on technical improvements that no other team understood the value of.

**Phase 2 - Roadmap creation (1 week).** Maria synthesized her findings into a first draft roadmap:

| Theme | Q1 | Q2 | Q3 | Q4 |
|-------|----|----|----|----|
| **Growth** | Checkout optimization | Referral program | International shipping | B2B wholesale |
| **Retention** | Order tracking | Returns portal | Loyalty program | Subscription model |
| **Platform** | Search upgrade | Payment processor migration | Inventory system rewrite | Mobile app v2 |

**Phase 3 - The hard conversations (1 week).** Maria presented the roadmap to the leadership team. Immediate pushback:

- **VP of Sales:** "B2B wholesale should be Q1, not Q4. We're losing enterprise deals every month."
- **VP of Product:** "We can't do B2B wholesale without the inventory system rewrite first. That's a dependency."
- **CTO:** "We can't migrate payment processors while also rewriting the inventory system-same two teams."

Maria facilitated the tradeoff conversation. The group agreed:
- Replace "International shipping" (Q3) with "B2B wholesale prep work"
- Move "Payment processor migration" to align with inventory rewrite timing
- Accept that the timeline would be 18 months, not 12, for the full vision

**Phase 4 - Monthly reviews.** Maria established a monthly roadmap review. Each month, the leadership team spent 1 hour reviewing:
- Are we on track for this quarter's commitments?
- Any changes in the market or competitive landscape that require adjustment?
- Any new opportunities that should be added (and correspondingly, what gets removed)?

**The Outcomes (measured after 12 months):**

- **Engineering alignment improved:** Teams could see how their work connected to company priorities
- **Sales-customer promises stopped:** Sales started referencing the roadmap: "That feature is planned for Q3"
- **Feature completion rate increased 40%:** Because teams stopped building things that weren't on the roadmap
- **Stakeholder satisfaction improved:** Executive survey showed a 50% improvement in "I understand what the engineering organization is building and why"
- **The company hit its growth targets for the first time in 2 years:** The roadmap focused effort on the highest-impact initiatives

**Lessons Learned:**

1. **The roadmap is a negotiation tool.** The hardest part wasn't drawing the timeline-it was facilitating the conversations about what mattered most. The roadmap made tradeoffs visible, which made them debatable and resolvable.

2. **Don't let the roadmap become a political document.** Some VPs initially saw the roadmap as a competition: "My initiative got Q1 and yours got Q3." Maria had to reinforce that the roadmap was a strategic alignment tool, not a status award.

3. **Share the roadmap widely.** Maria published the roadmap to the entire company. Transparency built trust, even for teams whose initiatives were in Q4 or "Later." They understood how their work fit into the plan.

4. **Roadmaps create accountability.** Once something was on the roadmap, teams felt responsible for delivering it. This was good-but it also meant teams were reluctant to de-prioritize items when circumstances changed. Maria had to actively encourage re-prioritization.

5. **A roadmap without owner commitment is a dream board.** The monthly review became a commitment check: "Are we still committed to this timeline? If not, let's adjust before it becomes a problem."

---

# 2. Milestones

## Definition & Relevance

A **milestone** is a significant, measurable checkpoint in a program that marks the completion of a major deliverable, decision point, or phase. Unlike tasks (which have durations), milestones are **zero-duration events**-they happen at a point in time.

Think of milestones as the "scenes" in your program's story:
- Scene 1: Kickoff completed
- Scene 2: Design approved
- Scene 3: Alpha release ready
- Scene 4: User acceptance testing passed
- Scene 5: Production launch

Each scene is a moment when you can pause, check if you're on track, and decide what to do next.

### Why Milestones Matter in TPM

| Reason | Explanation |
|--------|-------------|
| **Progress visibility** | Milestones provide clear, objective markers of progress. "We've hit 4 of 8 milestones" is more meaningful than "We're about 50% done." |
| **Decision points** | Key milestones serve as natural decision gates: "Should we proceed to the next phase based on what we've learned?" |
| **Stakeholder communication** | Milestones give stakeholders a simple way to track progress without needing to understand every task |
| **Momentum** | Celebrating milestone completions maintains team motivation over long programs |
| **Risk early warning** | If a milestone is missed, it's a clear signal that something needs attention |

### Core Principles

| Principle | What It Means |
|-----------|---------------|
| **Milestones are events, not tasks** | A milestone takes zero time to "complete." You've either achieved it or you haven't. |
| **Milestones must be objectively verifiable** | "Design complete" is ambiguous. "Design signed off by all stakeholders" is verifiable. |
| **Milestones should be meaningful, not bureaucratic** | A milestone that doesn't inform a decision or represent real progress is worthless. |
| **Milestones create accountability** | Each milestone should have a named owner who is responsible for achieving it. |
| **Missed milestones are signals, not failures** | A missed milestone tells you something about your plan, your assumptions, or your execution. Investigate, don't punish. |

## How It Works

### Step 1: Derive Milestones from Your Roadmap

Look at your roadmap and identify the natural "chapters" of your program. For each major initiative, ask:
- "What needs to happen before we can move to the next phase?"
- "What would we count as a meaningful checkpoint?"
- "What decision points exist in this program?"

### Step 2: Make Each Milestone SMART

| Criteria | Question | Bad Example | Good Example |
|----------|----------|-------------|--------------|
| **S**pecific | Is it clear what "done" means? | "Design complete" | "Design signed off by Product, Engineering, and UX" |
| **M**easurable | Can we objectively verify it? | "Backend progress" | "All 12 API endpoints passing integration tests" |
| **A**chievable | Is it realistic within constraints? | "Launch to 1M users in 1 month" | "Launch to beta users (100 users)" |
| **R**elevant | Does it represent real progress? | "Code repository created" | "Core checkout flow functional in staging" |
| **T**ime-bound | Does it have a date? | "Integration testing" | "Integration testing complete by March 15" |

### Step 3: Create a Milestone Timeline

Map your milestones on a timeline. Show dependencies between milestones where they exist.

**Example - Mobile App Launch:**
```
Jan 15  M1: App design approved
Feb 1   M2: Backend API complete
Feb 15  M3: iOS app ready for internal testing
Mar 1   M4: Android app ready for internal testing
Mar 15  M5: Internal testing passed (iOS + Android)
Apr 1   M6: Beta launch (100 testers)
Apr 15  M7: Beta feedback incorporated
May 1   M8: App store submission
May 15  M9: App approved and published
```

### Step 4: Assign Milestone Owners

Each milestone needs a named person who is responsible for achieving it. This doesn't mean they do all the work-it means they own the outcome.

| Milestone | Owner | Team |
|-----------|-------|------|
| M1: Design approved | Sarah (Design Lead) | Design |
| M2: Backend API complete | Raj (Backend Lead) | Backend |
| M3: iOS app ready | Tom (iOS Lead) | iOS |

### Step 5: Track and Communicate

Review milestone progress at every program sync. A simple milestone tracker:

| Milestone | Target Date | Status | Actual Date | Notes |
|-----------|-------------|--------|-------------|-------|
| M1: Design approved | Jan 15 | ✅ Complete | Jan 12 | Ahead of schedule |
| M2: Backend API complete | Feb 1 | 🟡 At Risk | - | 2 APIs behind; team added capacity |
| M3: iOS app ready | Feb 15 | 🟢 On Track | - | - |

> **🔗 How Milestones Connect to Other Frameworks:** Milestones are the **what** and **when**. **Critical Path Analysis** helps you identify which milestones are on the critical path (a delay here delays the whole program). **Phased Delivery** decisions are expressed as "Phase 1 ends at Milestone X, Phase 2 begins at Milestone Y." **Roadmaps** show the big picture; milestones make it concrete.

## Realistic Example

**Scenario:** A team at a logistics company is building a real-time package tracking feature for their mobile app. The feature will allow customers to see their package location on a map, get estimated delivery windows, and receive proactive delay notifications.

**The Milestones:**

The TPM (James) identifies 8 milestones for the 4-month program:

| ID | Milestone | Target Date | Success Criteria |
|----|-----------|-------------|------------------|
| M1 | Tracking API contract signed | Week 2 | Engineering leads from Mobile, Backend, and Ops agree on API spec |
| M2 | GPS integration verified | Week 4 | Tracking devices return accurate location data in test environment |
| M3 | Backend tracking service complete | Week 8 | Tracking data pipeline ingests, processes, and stores location data |
| M4 | iOS tracking UI complete | Week 10 | Map view shows package location; ETA displayed; tested on 3 device types |
| M5 | Android tracking UI complete | Week 12 | Same as M4 on Android |
| M6 | Integration testing passed | Week 14 | End-to-end test: device → API → map display works on both platforms |
| M7 | Beta release to 500 internal users | Week 15 | Tracking feature live in production behind feature flag |
| M8 | Public launch | Week 17 | Feature enabled for all users; monitoring shows <0.1% error rate |

**What happens when milestones are tracked:**

**Week 6 check-in:** GPS integration verification (M2) is behind. The GPS hardware vendor changed their API without notice. James works with the vendor team, escalates to the vendor account manager, and gets the issue resolved with a 1-week delay. Milestone 2 is updated: actual date = Week 5.

**Week 8 check-in:** Because M2 slipped 1 week, M3 (Backend service) is also at risk. James and the Backend Lead agree to add 1 person from another team temporarily. M3 hits its target date.

**Week 10 check-in:** iOS team hits M4 on time. Android team is worried about M5-they're finding more device compatibility issues than expected. James asks: "Do you need to slip M5? If so, M6 (integration testing) also slips, and we need to decide: delay launch or reduce scope." The Android lead says they can make it with 2 extra days. James approves the overtime (as a one-time exception) and updates the milestone tracker.

**The Outcome:** All 8 milestones were achieved. Two milestones slipped slightly, but because they were tracked and discussed, the team could make proactive decisions rather than discovering problems at launch time.

## Case Study

**Organization:** A government transportation agency was implementing a new fare collection system for a city's bus and rail network. The project had a fixed deadline: the old fare system's support contract expired on a specific date, and the new system had to be operational by then.

**The Problem:** The project was 18 months long, involved 6 vendors, 4 internal teams, and 35+ workstreams. Without milestones, there was no way to track whether the project was actually on schedule. Status reports said "we're making progress" but no one could say how much progress or whether the deadline was at risk.

**The Milestone Approach:**

A senior TPM (Elena) was brought in at month 6. Her first action: establish a milestone framework.

**Step 1 - Identify mandatory milestones.** Elena worked with each vendor and internal team to identify the non-negotiable milestones that had to be achieved for the system to go live. She identified 22 critical milestones across:

- Hardware installation (7 milestones)
- Software development (8 milestones)
- Testing & certification (4 milestones)
- Training & change management (3 milestones)

**Step 2 - Map dependencies.** Elena discovered that the milestone timeline was more complex than anyone had realized. For example:
- "Vendor A's API integration" couldn't start until "Vendor B's hardware certification" was complete
- "Station agent training" couldn't happen until "Hardware installed in all stations"
- "System cutover" depended on all 3 "Certification" milestones

She created a milestone dependency diagram that made these relationships visible.

**Step 3 - Establish a milestone review cadence.** Elena implemented a weekly "milestone watch" meeting:
- 30 minutes, every Friday
- Review each milestone's status (on track / at risk / missed)
- For at-risk milestones: what action is being taken?
- For missed milestones: what's the recovery plan and impact on downstream milestones?

**Step 4 - The critical moment.** At month 12 (6 months before the deadline), Elena noticed that Milestone 14 ("Vendor B hardware certification") was at risk. The vendor was 3 weeks behind on their testing. Elena calculated the impact: this would push 4 downstream milestones, including the "System cutover" milestone, which was tied to the deadline.

She escalated immediately to the program director and the vendor's regional VP. The vendor assigned 2 additional test engineers. The milestone was achieved 1 week late-not 3 weeks late. The downstream milestones absorbed the 1-week slip, and the overall project timeline was saved.

**The Outcomes:**

- The system launched on the deadline date with all required functionality
- 20 of 22 milestones were achieved on time; 2 slipped but were managed without affecting the final deadline
- The milestone framework was adopted as standard practice for all transportation agency technology projects
- Elena's "milestone watch" process became a template used by other TPMs in the agency

**Lessons Learned:**

1. **Milestones make the invisible visible.** Before milestones, the project's status was "we're making progress." After milestones, it was "we've hit 8 of 22 milestones, and milestone 14 is at risk." The difference in clarity was enormous.

2. **Milestone dependencies are where the hidden risk lives.** Elena's dependency diagram revealed that 4 downstream milestones depended on a single milestone (Vendor B certification). This concentrated risk was invisible before the mapping exercise.

3. **Without milestones, problems are discovered too late.** The vendor's testing delay was discovered at week 12 because the milestone target made it visible. Without milestones, the problem might not have been discovered until the vendor missed their delivery date-at week 16, with only 8 weeks to the deadline.

4. **Celebrating milestones builds momentum.** When Milestone 8 ("First station hardware installed") was completed, Elena sent a company-wide email celebrating the achievement. This was the first tangible sign of progress in 8 months, and it energized the broader team.

5. **Leading indicators are better than lagging ones.** "Milestone achieved" is a lagging indicator. Elena also tracked "milestone health" (is this milestone on track?) as a leading indicator, which gave her earlier warning of problems.

---

# 3. Capacity Planning

## Definition & Relevance

**Capacity planning** is the process of determining how much work a team or organization can actually deliver within a given timeframe, and then allocating that capacity to the highest-priority initiatives. It answers the question: **"Can we actually do all of this with the people we have?"**

Imagine you run a small bakery:
- You have 5 bakers who work 8-hour shifts
- That's 40 hours of baking capacity per day
- A wedding cake takes 8 hours, 200 croissants take 4 hours, 50 loaves of bread take 6 hours
- Capacity planning helps you decide: can we accept the wedding cake order AND fulfill our daily bread delivery?

In TPM, capacity planning is how you avoid the most common program failure: **overcommitting relative to available resources.**

### Why Capacity Planning Matters in TPM

| Reason | Explanation |
|--------|-------------|
| **Prevents overcommitment** | The #1 cause of missed deadlines is committing to more work than the team can realistically deliver |
| **Enables data-driven decisions** | Instead of "I think we can do this," you have data: "Based on our capacity, we can commit to these 3 initiatives" |
| **Exposes hidden constraints** | Capacity planning reveals bottlenecks: "We have enough developers, but only 1 QA engineer-testing is our constraint" |
| **Improves prediction accuracy** | Over time, capacity data helps you make better predictions about future work |
| **Protects team health** | Sustainable capacity planning prevents burnout by ensuring teams aren't consistently overloaded |

### Core Principles

| Principle | What It Means |
|-----------|---------------|
| **Capacity is not 100% utilization** | No one works productively 8 hours a day. Meetings, emails, context-switching, and breaks consume 20–40% of time. Plan for ~60–75% productive capacity. |
| **Different work has different capacity profiles** | New feature development, maintenance, bug fixes, tech debt, and meetings all consume capacity. Track them separately. |
| **Capacity changes over time** | Holidays, training, PTO, and team changes all affect capacity. Build these into your plan. |
| **Explicitly account for unplanned work** | Every team has urgent issues, production incidents, and ad-hoc requests. Reserve 20–30% capacity for unplanned work. |
| **Capacity planning is a continuous conversation** | It's not a one-time exercise. Capacity should be reviewed and adjusted at each planning cycle. |

## How It Works

### Step 1: Calculate Available Capacity

**Formula:** Available capacity = Number of people × Available hours per person × Utilization rate

**Example - A team of 8 engineers in a 2-week sprint:**

| Factor | Calculation |
|--------|-------------|
| Engineers | 8 |
| Working days per sprint (2 weeks) | 10 days |
| Daily productive hours (after meetings, email, etc.) | 6 hours |
| Total person-hours available | 8 × 10 × 6 = 480 hours |
| Utilization rate (realistic: 70–80%) | 75% |
| **Effective capacity** | 480 × 75% = **360 hours** |

**Important:** Always model different types of capacity:

| Category | Percentage | Hours | Purpose |
|----------|------------|-------|---------|
| New features | 50% | 180 hours | Primary delivery work |
| Maintenance & bugs | 20% | 72 hours | Keeping existing systems running |
| Tech debt & improvements | 10% | 36 hours | Long-term health |
| Unplanned work (buffer) | 20% | 72 hours | Emergencies, ad-hoc requests |

### Step 2: Estimate Demand

For each initiative or feature on your roadmap, estimate the effort required. This can be:
- **Hours** (if you have detailed estimates)
- **Story points** (if you use Agile estimation)
- **T-Shirt sizes** (if you're at the early planning stage)

**Example - Demand for the next quarter:**

| Initiative | Estimated Effort (hours) | Priority |
|------------|-------------------------|----------|
| User profile redesign | 240 hours (6 person-weeks) | High |
| Search feature upgrade | 400 hours (10 person-weeks) | High |
| Payment integration | 320 hours (8 person-weeks) | Medium |
| Analytics dashboard | 160 hours (4 person-weeks) | Low |

**Total demand:** 1,120 hours

### Step 3: Compare Capacity to Demand

Available capacity (one team, one quarter): 360 hours/sprint × 6 sprints = **2,160 hours**

But from that 2,160 hours, we need to account for:
- Maintenance/bugs: 20% × 2,160 = 432 hours
- Unplanned work: 20% × 2,160 = 432 hours
- Available for new initiatives: 1,296 hours

Our demand is 1,120 hours. That fits within 1,296 available hours. But if we only had one team total, we'd be at 86% utilization-which is tight. Adding the lower-priority initiatives would push us over.

### Step 4: Identify and Address Gaps

| Scenario | Action |
|----------|--------|
| Demand > Capacity (overcommitted) | De-scope, delay, or add resources |
| Demand < Capacity (underutilized) | Add more initiatives, start tech debt reduction, or reduce team size |
| Demand ≈ Capacity (balanced) | This is ideal-but still monitor closely |

### Step 5: Monitor and Adjust

Track actual capacity usage against planned usage each sprint or month. If you consistently exceed your planned capacity, your team is overworked and estimates are wrong. If you're consistently under capacity, your team has more room than you thought.

> **🔗 How Capacity Planning Connects to Other Frameworks:** Capacity planning is the **reality check** for your **roadmap**. It tells you if your roadmap ambitions are feasible. **T-Shirt Sizing** and **PERT** provide the effort estimates that feed into capacity planning. **Milestones** should be set based on realistic capacity, not optimistic wishes.

## Realistic Example

**Scenario:** A fintech company's platform team (6 engineers, 1 QA, 1 engineering manager) needs to plan the next quarter. The roadmap has 3 major initiatives:

| Initiative | Description | PM's Priority |
|------------|-------------|---------------|
| **API Rate Limiting** | Implement rate limiting to prevent abuse (compliance requirement) | Must-do (regulatory deadline) |
| **Dashboard Refresh** | Redesign the customer analytics dashboard | High (customer demand) |
| **Webhook System** | Allow customers to receive real-time notifications via webhooks | Medium (competitive pressure) |

**The Capacity Calculation:**

**Step 1 - Available capacity per sprint (2 weeks):**
- 8 people × 10 days × 6 productive hours/day = 480 hours/sprint
- At 75% utilization: 360 effective hours/sprint
- For the quarter (6 sprints): 2,160 effective hours

**Step 2 - Deduct non-negotiable overhead:**
- Maintenance & bugs: 20% × 2,160 = 432 hours
- Unplanned work buffer: 20% × 2,160 = 432 hours
- Available for new initiatives: **1,296 hours** for the quarter

**Step 3 - Estimate each initiative:**
- T-Shirt Sizing results: Rate Limiting = Large (3 sprints), Dashboard = Medium (2 sprints), Webhook = Large (3 sprints)
- Converted to hours: Rate Limiting (360h), Dashboard (240h), Webhook (360h)
- **Total demand: 960 hours**

**Step 4 - Check fit:**
- Available: 1,296 hours
- Demand: 960 hours
- Buffer remaining: 336 hours

Looks good! But wait-the TPM notices a constraint issue: the Webhook System requires the same senior engineer who's also needed for the API Rate Limiting (both involve building external-facing APIs). If we run them in parallel, that engineer is a bottleneck.

**Step 5 - Adjust sequencing.** The TPM revises the plan:

| Sprint | Initiative | Team Allocation |
|--------|------------|-----------------|
| Sprints 1–3 | API Rate Limiting (regulatory deadline) | 5 engineers + 1 senior (the bottleneck) |
| Sprints 3–5 | Dashboard Refresh (customer demand) | 3 engineers (freed from Rate Limiting) |
| Sprints 4–6 | Webhook System (if time permits) | Remaining engineers after Dashboard wraps |

**The Outcome:** By planning capacity explicitly, the team:
1. Ensured the regulatory deadline for Rate Limiting was met
2. Started the Dashboard mid-quarter (2 months ahead of original plan)
3. Clearly communicated to stakeholders that Webhook System was "at risk" for the quarter

## Case Study

**Organization:** A SaaS company ("DataViz") with 120 employees had 5 engineering teams building a business intelligence platform. The company was experiencing a pattern: every quarter, teams committed to more work than they could deliver, and every quarter, they missed deadlines.

**The Problem:** The VP of Engineering was frustrated. "We keep missing our commitments. Are my teams not working hard enough? Are we bad at estimating? What's going on?"

A TPM (Aiko) was asked to investigate. She found:

1. **Zero capacity planning.** Teams were given work based on what stakeholders wanted, not what the teams could actually deliver.
2. **No buffer for unplanned work.** The company had frequent production incidents, but the plan never accounted for them. When incidents happened, planned work slipped.
3. **Context-switching was destroying productivity.** Engineers were assigned to 3–4 initiatives simultaneously. The overhead of switching between contexts was enormous.
4. **No visibility into capacity utilization.** No one could answer the question: "How much of our capacity is going to new features vs. maintenance vs. unplanned work?"

**The Capacity Planning Implementation:**

**Phase 1 - Measure current state (1 quarter).** Aiko tracked actual capacity usage across all 5 teams for one quarter:

| Team | Planned feature work | Actual feature work | Maintenance | Unplanned | Context-switch overhead |
|------|---------------------|--------------------|-------------|-----------|------------------------|
| Visualization | 80% | 42% | 18% | 28% | 12% |
| Data Pipeline | 80% | 38% | 22% | 30% | 10% |
| API | 80% | 45% | 15% | 25% | 15% |
| Reports | 80% | 40% | 20% | 32% | 8% |
| Mobile | 80% | 44% | 16% | 30% | 10% |

The data was shocking. **Teams were only spending 38–45% of their time on planned feature work.** The rest was consumed by maintenance, unplanned incidents, and the productivity loss from context-switching across multiple initiatives.

**Phase 2 - Implement capacity model (2 weeks).** Aiko introduced a standardized capacity model:

1. **Every team tracks capacity by category** (using a simple spreadsheet shared in each sprint planning)
2. **Planned feature work: 50% of capacity max** (instead of the unrealistic 80%)
3. **Maintenance: 20%** (realistic floor)
4. **Unplanned work buffer: 20%** (based on historical data)
5. **Innovation/improvement time: 10%** (previously zero-this was the first time teams had time budgeted for paying down tech debt)

**Phase 3 - Align commitments to capacity (ongoing).** For quarterly planning, Aiko facilitated a "capacity check" session:
- Stakeholders presented what they wanted
- Engineering leads calculated whether it fit within the team's 50% feature capacity
- If demand exceeded capacity, stakeholders had to prioritize: "Which of these is most important?"
- The result was a quarterly plan that fit within the team's actual delivery capability

**Phase 4 - Monitor and adjust (monthly).** Each month, Aiko reviewed:
- Is the team sticking to the 50/20/20/10 split?
- Any trends in unplanned work that need addressing?
- Is the team's actual velocity matching the plan?

**The Outcomes (after 3 quarters):**

- **Feature delivery predictability improved:** Teams hit their quarterly commitments 90% of the time (up from 40%)
- **The 50% feature capacity rule prevented overcommitment** - stakeholders learned to prioritize ruthlessly
- **Unplanned work dropped from 28–32% to 18–22%** - because the team started tracking it, they identified the root causes (poor monitoring, insufficient testing) and addressed them
- **Engineer satisfaction scores improved 35%** - engineers felt the workload was manageable and they could focus on meaningful work
- **The company stopped missing quarterly revenue targets** - because product commitments were actually met

**Lessons Learned:**

1. **80% feature capacity is a fantasy.** Aiko's data proved that even in a well-run organization, only 40–50% of capacity goes to new features. The rest is consumed by essential overhead.

2. **Measure before you plan.** The capacity model would have been rejected if it were theoretical. Because Aiko had data from the measurement quarter, she could show: "Here's where our time actually goes. Let's build a realistic plan based on this."

3. **Capacity planning is unpopular before it's essential.** Stakeholders initially resisted: "You're telling me I can only have 50% of the team's time? That's absurd." The first quarter was hard. By the second quarter, when teams actually delivered what they committed to, stakeholders became believers.

4. **Unplanned work needs a named allocation, not a wish.** Before the 20% unplanned buffer, anything unplanned simply ate into planned feature time. The buffer made unplanned work visible and expected, not a crisis.

5. **Context-switching is the hidden capacity killer.** Engineers assigned to 3+ initiatives simultaneously lost 10–15% productivity to context switching. Limiting engineers to 1–2 initiatives was one of the highest-leverage changes.

---

# 4. T-Shirt Sizing

## Definition & Relevance

**T-Shirt sizing** is a relative estimation technique where you assign a size category to a task or feature instead of a specific time estimate. The sizes correspond to t-shirt sizes: **XS, S, M, L, XL**, and sometimes **XXL**.

It's like sorting clothes by size without measuring each garment individually:
- You look at a shirt and think "that's probably a medium"
- You might compare it to another shirt: "this one is smaller than that one"
- You don't need to measure the exact chest, length, and sleeve size

In TPM, t-shirt sizing is most useful in the early stages of planning, when you don't have enough detail to give precise estimates, but you need a rough sense of effort to inform decisions.

### Why T-Shirt Sizing Matters in TPM

| Reason | Explanation |
|--------|-------------|
| **Speed** | You can size an entire initiative in minutes, not hours |
| **Low pressure** | "It's a Large" feels less committing than "It's 3 weeks" |
| **Built-in uncertainty** | The size category implicitly acknowledges a range: a Large might be 2–4 weeks |
| **Relative accuracy** | Humans are better at comparing things than at absolute estimation. "Is A bigger than B?" is easier than "How many hours is A?" |
| **Decision support** | Roadmap prioritization often only needs rough sizes, not precise estimates |

### Core Principles

| Principle | What It Means |
|-----------|---------------|
| **It's relative, not absolute** | A "Medium" means "medium relative to other things we're sizing," not "exactly 2 weeks." |
| **It's approximate** | The goal is a ballpark, not a guarantee. Larger sizes have wider ranges. |
| **It's collaborative** | T-shirt sizing works best as a team exercise where people discuss and agree on sizes. |
| **It's not a commitment** | T-shirt sizes should be refined into more specific estimates before they become commitments. |
| **Size includes total effort** | A rating of "L" means all the work: design, development, testing, documentation, deployment, etc. |

**Typical Size Ranges (for a single team):**

| Size | Effort Range | Example |
|------|--------------|---------|
| **XS** | A few hours to 1 day | A small bug fix, a text change |
| **S** | 1–3 days | A simple API endpoint, a small UI component |
| **M** | 1 week | A moderately complex feature |
| **L** | 2–4 weeks | A significant feature with multiple components |
| **XL** | 1–2 months | A major initiative involving multiple teams |
| **XXL** | 3+ months | A program-level effort (may need to be broken down) |

> ⚠️ **Important:** These ranges are guidelines, not rules. Your team should calibrate its own scale based on experience. A "Medium" for one team might be a "Large" for another.

## How It Works

### Step 1: Prepare

- Gather the team (developers, QA, product, design, TPM)
- Have a list of features, user stories, or initiatives to be sized
- Create a visible scale (whiteboard, spreadsheet, or digital board) with XS through XXL

### Step 2: Describe Each Item

For each item, the product owner or TPM provides a brief description: what it is, what it needs to do, and any relevant context. The team can ask clarifying questions but should not get into detailed technical design.

### Step 3: Team Votes on Size

**Simple Method:** Everyone holds up fingers (1–5 fingers for XS–XL) or uses sticky notes. Discussion follows if opinions differ widely.

**More Structured Method (Planning Poker-Style):** Everyone privately selects a t-shirt size. All sizes are revealed simultaneously. If there's a wide spread (e.g., 3 people say M and 2 say XL), the team discusses:

- "Sarah, why did you say XL?"
- "The integration with the legacy database could be complex. That's why I went bigger."
- "Ah, we already have a tool that handles that. So I'd say M."

After discussion, the team re-votes until they reach consensus. Don't force it-a difference of one size (M vs. L) is fine. A difference of three sizes (S vs. XL) indicates missing information that needs to be resolved.

### Step 4: Record and Move On

Record the agreed size. Don't spend more than 5–10 minutes per item. If you can't reach consensus, note the range and flag the item for deeper analysis.

### Step 5: Convert to Rough Timeline (Optional)

Once all items are sized, you can convert sizes to a rough timeline using your team's calibration:

| Size | Your Team's Calibration | Quarter Planning |
|------|------------------------|------------------|
| XS | 1–2 hours | Counts as "noise" |
| S | 1–2 days | 2 = 1 person-week |
| M | 1 week | 4 = 1 person-month |
| L | 2–3 weeks | 2 = 1 person-month |
| XL | 1 month | 1 = 1 person-month |

Multiply by number of team members needed. Compare to your **capacity plan**.

> **🔗 How T-Shirt Sizing Connects to Other Frameworks:** T-Shirt Sizing provides the rough effort estimates that feed into **Capacity Planning** and **Roadmapping**. Items sized as XL or XXL are candidates for **Phased Delivery** (break them into smaller chunks). The sizing exercise itself can be informed by **WBS** thinking (breaking work down to size it).

## Realistic Example

**Scenario:** A product team at a travel booking company is planning the next quarter. They have 12 feature candidates and need to decide which to commit to. The TPM, Priya, facilitates a t-shirt sizing session.

**The Team:** 5 engineers (2 senior, 3 mid-level), 1 QA engineer, 1 product manager, 1 TPM.

**The Features to Size:**

| Feature | Description |
|---------|-------------|
| F1: Multi-city flight search | Allow users to search flights with 3+ stops |
| F2: Price alert emails | Notify users when flight prices drop |
| F3: Seat map display | Show seat availability on flight selection |
| F4: Loyalty points integration | Show points balance and allow points-based booking |
| F5: Guest checkout | Allow booking without creating an account |
| F6: Cancelation insurance add-on | Offer insurance during checkout |

**The Sizing Session:**

Priya presents each feature. The team discusses and votes:

**F1: Multi-city flight search** - Discussion reveals this integrates with 3 different flight APIs, each with different multi-city support. "This could be really complex if the APIs don't align." Vote: 1 person says L, 4 say XL. Consensus: XL.

**F2: Price alert emails** - "We already have email infrastructure. The main work is building the monitoring logic and user preferences UI." Vote: 4 say M, 1 says L. Consensus: M.

**F3: Seat map display** - "We need to integrate with yet another external API for seat data. Not technically hard, but the API contract negotiation might take time." Vote: 2 say M, 3 say L. Consensus: L.

**F4: Loyalty points integration** - "This requires backend changes to the points system and frontend changes. Also needs legal review." Vote: All 5 say L. Consensus: L.

**F5: Guest checkout** - "We've discussed this before. It touches the entire checkout flow. Could be months." Vote: All 5 say XL. Consensus: XL.

**F6: Cancelation insurance add-on** - "Mostly a UI change-add a checkbox during checkout and route to insurance partner API." Vote: 4 say S, 1 says M. Consensus: S.

**The Results:**

| Feature | Size | Rough Estimate |
|---------|------|----------------|
| F6: Cancelation insurance | S | 2–3 days |
| F2: Price alert emails | M | 1 week |
| F3: Seat map display | L | 2–3 weeks |
| F4: Loyalty points integration | L | 2–3 weeks |
| F1: Multi-city flight search | XL | 1 month |
| F5: Guest checkout | XL | 1 month |

**The Decision:** The team has 6 people × 6 sprints × 75% utilization = ~27 person-weeks of capacity. The XL items alone would consume 8 person-weeks each (16 total). Adding L items (5–6 weeks each) would exceed capacity.

The team decides: commit to F6, F2, F3, and F4. Start F1 if time permits. Defer F5.

> **🔑 Key Insight:** Notice how quickly the team sized 6 features-about 30 minutes total. A traditional estimation session (where each feature is estimated in hours or days) could have taken 2–3 hours and would have produced estimates that felt more precise but were no more accurate. T-shirt sizing gave them enough information to make the priority decision in a fraction of the time.

## Case Study

**Organization:** A Series A startup ("Nourish") was building a meal planning and grocery delivery app. The company had 8 engineers, 2 designers, and 3 product managers. They were planning their first major feature release and needed to decide what to build in the next 3 months.

**The Problem:** The product team had a vision document with 40+ features. The CEO wanted everything built "as fast as possible." The engineering lead said "we can't estimate this accurately-there are too many unknowns." The result was paralysis: no one could agree on what to build first.

**The T-Shirt Sizing Solution:**

The TPM, Malik, introduced t-shirt sizing as a way to break the impasse.

**Phase 1 - Calibration session (1 hour).** Malik ran a calibration session where the team sized 5 features they had recently completed. This established a shared understanding: "That feature that took us 1 week-that's a Medium. That feature that took 3 weeks-that's a Large." The team now had a reference for future sizing.

**Phase 2 - The big sizing session (2 hours).** The team sized all 40 features in a single afternoon. Many features were quickly identified as XXL (too big to estimate reliably) and were broken down into smaller pieces on the spot. At the end of the session, the team had:

- 6 XS items (bug fixes, small tweaks)
- 10 S items (simple features)
- 12 M items (moderate features)
- 8 L items (significant features)
- 4 XL items (major initiatives)

**Phase 3 - Capacity check.** Malik compared the sizes to available capacity:

- Team capacity for the quarter: ~10 person-weeks of feature work per sprint × 6 sprints = 60 person-weeks
- All 40 features combined: ~130 person-weeks (more than 2x capacity)

This was the reality check the CEO needed. "If we want to ship in 3 months, we can only do about half of what's on this list. Let's pick the most important ones."

**Phase 4 - Prioritization.** Using the size data, the CEO and product team prioritized:
- Quarter 1: 3 M features + 4 S features + 2 XS fixes = ~8 person-weeks (well within capacity)
- Quarter 2: 2 L features + 2 M features + remaining S features
- Deferred: XL items (to be broken down further)

**The Outcomes:**

- **The first release shipped on time** with core functionality
- **The CEO stopped asking "why can't we build everything?"** - the t-shirt sizes gave him a concrete, visual answer
- **Investor demos were impressive** because the team shipped working features every sprint
- **The t-shirt sizing framework was adopted for all future planning cycles**

**Lessons Learned:**

1. **Calibration is critical.** Without the calibration session, the team would have had no shared understanding of what "Medium" meant. The calibration created a common reference that made sizing consistent.

2. **T-shirt sizes naturally highlight items that need breakdown.** The 4 XL items were immediately flagged: "We can't size this accurately because it's too big." The team broke them down into smaller features, which could be sized individually.

3. **The data (not the TPM) convinced the CEO.** Malik didn't say "we can't build everything." The data said it: the total size was 130 person-weeks against 60 available. The CEO could see it for himself.

4. **T-shirt sizing reduces estimation anxiety.** Engineers who felt pressure to give "accurate" day-level estimates were comfortable giving t-shirt sizes. The relative, approximate nature was less stressful and led to more honest assessments.

5. **Sizes should be revisited as uncertainty decreases.** A feature sized as "L" in January might be discovered to be "M" once the team starts working on it and learns more. The team refined their sizes each quarter as their understanding deepened.

---

# 5. PERT (Program Evaluation and Review Technique)

## Definition & Relevance

**PERT** (Program Evaluation and Review Technique) is a probabilistic estimation method that accounts for uncertainty by using three estimates instead of one: an optimistic estimate, a most likely estimate, and a pessimistic estimate.

The key insight of PERT is: **a single-point estimate is almost always wrong.** By providing a range, PERT gives you a more realistic picture of when work might actually be completed.

Think of it like planning a drive to the airport:
- **Optimistic:** 20 minutes (no traffic, green lights all the way)
- **Most likely:** 35 minutes (typical traffic)
- **Pessimistic:** 60 minutes (accident on the highway, rush hour)

You wouldn't plan to leave 20 minutes before your flight. You'd plan for the most likely scenario (35 minutes) with a buffer for the pessimistic one (leave 60 minutes early if you can't miss the flight).

### Why PERT Matters in TPM

| Reason | Explanation |
|--------|-------------|
| **Honesty about uncertainty** | PERT explicitly acknowledges that estimates are ranges, not precise predictions |
| **Risk-adjusted timelines** | By using the pessimistic estimate, PERT naturally builds in a risk buffer |
| **Better decision-making** | With PERT, you can say "there's an 85% chance we'll complete this in 6 weeks" instead of "it'll take 4–6 weeks" |
| **De-biasing estimates** | Humans are naturally optimistic. PERT's three-estimate approach counteracts this bias. |
| **Defensible planning** | PERT-generated timelines are harder to dismiss as "too conservative" because they're based on structured reasoning |

### Core Principles

| Principle | What It Means |
|-----------|---------------|
| **Three estimates are better than one** | A range acknowledges uncertainty; a single point denies it |
| **Estimates are probability distributions, not predictions** | PERT tells you the likely range, not the exact date |
| **The pessimistic estimate is the most important** | It captures the risks and unknowns that the optimistic and most likely estimates ignore |
| **PERT helps prioritize which estimates need refinement** | Items with a wide spread (optimistic vs. pessimistic) need more analysis |
| **PERT is a tool, not a replacement for judgment** | Use the formula, but also use your experience to adjust |

## How It Works

### Step 1: Get Three Estimates for Each Task

For each task or work package, estimate:

| Estimate | Symbol | Definition | Mindset |
|----------|--------|------------|---------|
| **Optimistic** | O | Best-case scenario | "Everything goes perfectly, no delays" |
| **Most Likely** | M | Realistic scenario | "Normal conditions, typical challenges" |
| **Pessimistic** | P | Worst-case scenario | "Multiple things go wrong, but not catastrophic" |

**Example - "Build user registration API":**
- Optimistic (O): 3 days (API is straightforward, no integration issues)
- Most likely (M): 6 days (typical issues, some back-and-forth with frontend team)
- Pessimistic (P): 14 days (API spec changes, security review required, database migration issues)

### Step 2: Calculate the PERT Expected Duration

The standard PERT formula is:

**Expected Duration = (O + 4M + P) / 6**

This formula gives more weight to the "most likely" estimate (4×) while still accounting for optimistic and pessimistic scenarios.

**Example:**
- Expected = (3 + 4×6 + 14) / 6 = (3 + 24 + 14) / 6 = 41 / 6 = **6.8 days**

Notice that the expected duration (6.8 days) is higher than the "most likely" (6 days). This reflects the influence of the pessimistic scenario-the risk that things could go wrong.

### Step 3: Calculate Standard Deviation (Optional, But Useful)

**Standard Deviation = (P - O) / 6**

This tells you how much uncertainty exists in the estimate.

**Example:** (14 - 3) / 6 = 11 / 6 = **1.8 days**

A larger standard deviation means more uncertainty. If your standard deviation is large, you might want to:
- Break the task down further for better estimates
- Investigate the sources of uncertainty
- Build more buffer into the schedule

### Step 4: Calculate the PERT Timeline

For a sequence of tasks, sum the expected durations to get the total project duration:

| Task | O | M | P | Expected (E) | Std Dev |
|------|---|---|---|--------------|---------|
| A: Build API | 3 | 6 | 14 | 6.8 days | 1.8 days |
| B: Build UI | 5 | 10 | 20 | 10.8 days | 2.5 days |
| C: Integration testing | 2 | 4 | 8 | 4.3 days | 1.0 days |
| D: Deploy | 1 | 1 | 2 | 1.2 days | 0.2 days |
| **Total** | | | | **23.1 days** | **3.3 days** |

**Total project duration:** 23.1 days
**Project standard deviation:** √(1.8² + 2.5² + 1.0² + 0.2²) = √(3.24 + 6.25 + 1.0 + 0.04) = √10.53 = **3.2 days**

### Step 5: Estimate Confidence

Using the total and standard deviation:
- **68% chance** of completing within ±1 standard deviation: 23.1 ± 3.2 = 19.9 to 26.3 days
- **95% chance** of completing within ±2 standard deviations: 23.1 ± 6.4 = 16.7 to 29.5 days
- **99.7% chance** of completing within ±3 standard deviations: 23.1 ± 9.6 = 13.5 to 32.7 days

So if you commit to 30 days, you can say with ~97% confidence that the work will be done within that timeframe. This is much more defensible than saying "it'll take 3 weeks" when you actually have substantial uncertainty.

> **🔗 How PERT Connects to Other Frameworks:** PERT estimates feed directly into **Capacity Planning** (you now have probabilistic, not point, estimates). The tasks you estimate with PERT come from your **WBS** (you need a good breakdown to estimate properly). PERT also complements **Critical Path Analysis**-you can apply PERT estimates to critical path tasks to calculate a probabilistic project timeline.

## Realistic Example

**Scenario:** A team needs to build a new "document signing" feature for their SaaS platform. The feature will allow users to upload contracts, add signature fields, and sign electronically. The TPM, David, uses PERT to estimate the timeline.

**The Tasks and PERT Estimates:**

| Task | O | M | P | Expected | Std Dev | Notes |
|------|---|---|--------|---------|---------|-------|
| 1. Research e-signature APIs | 2d | 4d | 8d | 4.3d | 1.0d | Need to compare 3 vendors |
| 2. Sign vendor contract | 1d | 5d | 15d | 6.0d | 2.3d | Legal review is unpredictable |
| 3. Build signature placement UI | 5d | 8d | 14d | 8.5d | 1.5d | Interactions are complex |
| 4. Build document upload flow | 3d | 5d | 10d | 5.5d | 1.2d | File size limits need testing |
| 5. Build signing workflow | 8d | 12d | 20d | 12.7d | 2.0d | Core logic, multiple edge cases |
| 6. Integrate with storage backend | 2d | 3d | 6d | 3.3d | 0.7d | Well-defined |
| 7. Testing and QA | 5d | 8d | 15d | 8.7d | 1.7d | Legal scenarios are complex |
| 8. Security review | 1d | 3d | 10d | 3.8d | 1.5d | Compliance dependency |

**Total expected duration:** 52.8 working days ≈ 10.5 weeks
**Total standard deviation:** √(1.0² + 2.3² + 1.5² + 1.2² + 2.0² + 0.7² + 1.7² + 1.5²) = √(1 + 5.3 + 2.25 + 1.44 + 4 + 0.49 + 2.89 + 2.25) = √19.62 = 4.4 days

**What David learns:**

1. **Most likely timeline: ~10.5 weeks.** But the range is wide.
2. **68% confidence range:** 6.1 to 14.9 weeks. There's significant uncertainty.
3. **Biggest uncertainty drivers:** Signing vendor contract (std dev 2.3) and signing workflow (std dev 2.0). These items deserve more attention.
4. **Action item:** David assigns someone to start the vendor contract process early (before other tasks are complete) to reduce the timeline. He also schedules a technical design review for the signing workflow to reduce its uncertainty.

**The Outcome:** David presents the estimate to stakeholders as: "We expect this to take 10–11 weeks, with a realistic range of 8–14 weeks. The biggest uncertainty is the vendor contract process-we're starting that immediately to reduce the risk."

By using PERT, David gives an honest assessment that accounts for uncertainty, while also showing what he's doing to manage it.

## Case Study

**Organization:** A cloud infrastructure company ("CloudStack") was building a major new feature: multi-region disaster recovery for their enterprise customers. The program involved 4 teams, 6 months timeline, and significant technical uncertainty.

**The Problem:** The initial timeline was built using single-point estimates: "It'll take 6 months." When asked "how confident are you?" the engineering lead said "fairly confident" - but couldn't say what "fairly confident" meant. Was it 50%? 80%? 95%?

The VP of Engineering had been burned before by overconfident estimates. She asked the TPM, Nia, to develop a more rigorous estimate.

**The PERT Analysis:**

Nia led the team through a PERT analysis for the 12 major work packages:

| Work Package | O (weeks) | M (weeks) | P (weeks) | Expected | Std Dev |
|--------------|-----------|-----------|-----------|----------|---------|
| Configure replication | 2 | 4 | 8 | 4.3 | 1.0 |
| Data sync mechanism | 4 | 8 | 16 | 8.7 | 2.0 |
| Failover automation | 3 | 6 | 12 | 6.5 | 1.5 |
| Health monitoring | 2 | 3 | 6 | 3.3 | 0.7 |
| Testing framework | 3 | 5 | 10 | 5.5 | 1.2 |
| Security hardening | 2 | 4 | 8 | 4.3 | 1.0 |
| Documentation | 2 | 3 | 5 | 3.2 | 0.5 |
| ... (5 more packages) | | | | | |

**Total expected:** 32 weeks (about 8 months)
**Total standard deviation:** 5.2 weeks

**Critical Insight:** The PERT analysis showed that:
- There was only a 15% chance of completing in 6 months (the original estimate)
- There was a 50% chance of completing in 8 months (the PERT expected value)
- For 90% confidence, the timeline was 10 months

**The Conversation with Leadership:** Nia presented this as:
> "Our single-point estimate of '6 months' actually represents the most optimistic scenario. Based on PERT analysis, we have:
> - 15% chance of completing in 6 months
> - 50% chance of completing in 8 months
> - 85% chance of completing in 10 months
>
> I recommend we plan for 10 months with de-scoping options at month 8. This gives us a realistic timeline without overcommitting."

**The Response:** The VP of Engineering and CEO accepted the PERT-based timeline. They committed to 10 months with a checkpoint at month 8: "If we're not on track for month 10 delivery, we'll reduce scope."

**The Outcome (6 months later):** At the month 6 checkpoint, the team was on track for month 9 delivery-slower than the original 6-month estimate, but faster than the most pessimistic PERT scenario. Because the realistic timeline had been set, stakeholders weren't surprised or disappointed.

**The feature launched in month 9** - within the PERT-predicted range.

**Lessons Learned:**

1. **Single-point estimates hide the truth.** The original "6 months" estimate was technically true (there was a 15% chance of achieving it), but it was highly misleading. PERT revealed the full picture.

2. **The PERT conversation is more valuable than the PERT numbers.** The process of discussing optimistic, most likely, and pessimistic scenarios forced the team to surface assumptions and risks that had been unspoken.

3. **Wide ranges are not failures-they're honest assessments.** Some team members felt embarrassed that their pessimistic estimates were so much higher than optimistic ones. Nia had to normalize this: "A wide range means there are real uncertainties. That's not a problem with your estimate-it's a fact about the work."

4. **PERT builds trust with leadership.** When the VP of Engineering saw the PERT analysis, she said: "This is the first estimate I actually believe." The willingness to show uncertainty increased her confidence in the plan.

5. **PERT is most valuable for high-uncertainty projects.** If the work is well-understood and the team has done it before, PERT adds less value. For novel, complex, or high-risk work, PERT is essential.

---

# 6. Critical Path Analysis

## Definition & Relevance

**Critical Path Analysis (CPA)** is a method for identifying the longest sequence of dependent tasks in a project-the path that determines the project's minimum completion time. Any delay to a task on the critical path directly delays the entire project.

Imagine making a cup of tea:
- Boil water (3 min)
- Put tea bag in cup (30 sec)
- Pour water into cup (10 sec)
- Let steep (3 min)
- Add milk and sugar (30 sec)

You can put the tea bag in the cup while the water is boiling (parallel tasks). But you can't pour the water until the water is boiled, and you can't steep until the water is poured. The longest dependent sequence-boil → pour → steep → add milk-takes 6 minutes 40 seconds. That's your critical path.

If it takes 5 minutes to boil the water instead of 3, your tea is 2 minutes later. If it takes 30 seconds to add milk instead of 10, your tea is only 20 seconds later-because the milk isn't on the critical path (you can catch up while the tea steeps).

### Why Critical Path Analysis Matters in TPM

| Reason | Explanation |
|--------|-------------|
| **Identifies what actually matters** | The critical path tells you which tasks, if delayed, will delay the entire project. Everything else has some flexibility. |
| **Focuses management attention** | Instead of trying to track everything, you can focus on the 10–20% of tasks that are on the critical path. |
| **Enables strategic compression** | If you need to speed up the project, you know exactly which tasks to target: the ones on the critical path. |
| **Reveals dependency risks** | The critical path is where dependency risks are concentrated. If a task on the critical path has high uncertainty, the whole project is at risk. |
| **Supports what-if analysis** | "What if we add 2 more people to Task X?" The critical path tells you whether that would actually shorten the project. |

### Core Principles

| Principle | What It Means |
|-----------|---------------|
| **The critical path is the longest path** | Not the most important path-the longest path through the dependency network |
| **The critical path can change** | If a task on the non-critical path slips enough, it can become the new critical path. Monitor dynamic paths. |
| **Tasks not on the critical path have "float"** | Float (or slack) is the amount of time a task can be delayed without affecting the project. Tasks with float are less risky. |
| **Shortening the critical path is the only way to speed up the project** | Adding resources to non-critical tasks won't make the project finish faster |
| **Critical path is about dependencies, not priorities** | A low-priority task can be on the critical path simply because of where it falls in the dependency chain |

## How It Works

### Step 1: List All Tasks and Dependencies

| Task | Dependencies | Duration |
|------|--------------|----------|
| A: Requirements | None | 5 days |
| B: Design | A | 10 days |
| C: Database Setup | A | 3 days |
| D: Frontend Development | B, C | 15 days |
| E: Backend Development | B, C | 12 days |
| F: API Integration | E | 5 days |
| G: Testing | D, F | 8 days |
| H: Deployment | G | 2 days |

### Step 2: Draw the Dependency Network

```
A(5d) ────── B(10d) ────┐
   \                      ├── D(15d) ── G(8d) ── H(2d)
    └── C(3d) ───────────┤
                          └── E(12d) ── F(5d) ──┘
```

### Step 3: Calculate Forward Pass (Earliest Start and Finish)

| Task | Earliest Start | Duration | Earliest Finish |
|------|---------------|----------|-----------------|
| A | Day 0 | 5 | Day 5 |
| B | Day 5 | 10 | Day 15 |
| C | Day 5 | 3 | Day 8 |
| D | Day 15 (after B) | 15 | Day 30 |
| E | Day 15 (after B) | 12 | Day 27 |
| F | Day 27 (after E) | 5 | Day 32 |
| G | Day 32 (after D and F) | 8 | Day 40 |
| H | Day 40 | 2 | Day 42 |

**Wait:** D finishes at day 30 but F finishes at day 32. Since G depends on both D and F, it can't start until day 32 (when F is done). So D has 2 days of float-it could take 2 days longer without delaying G. But F has zero float.

### Step 4: Calculate Backward Pass (Latest Start and Finish)

Working backward from the end:

| Task | Latest Start | Latest Finish | Float |
|------|-------------|---------------|-------|
| H | Day 40 | Day 42 | 0 |
| G | Day 32 | Day 40 | 0 |
| F | Day 27 | Day 32 | 0 |
| E | Day 15 | Day 27 | 0 |
| D | Day 17 | Day 32 | 2 |
| C | Day 4 | Day 8 | 1 |
| B | Day 5 | Day 15 | 0 |
| A | Day 0 | Day 5 | 0 |

### Step 5: Identify the Critical Path

Tasks with zero float form the critical path:

**A → B → E → F → G → H** (duration: 5 + 10 + 12 + 5 + 8 + 2 = 42 days)

Any delay to these tasks directly delays the project by the same amount.

### Step 6: Manage the Critical Path

- **Monitor critical path tasks more closely** - Daily status for D (which has float), but hourly for E and F (which have no float)
- **Reduce uncertainty on critical path** - If task E has high uncertainty, allocate your best engineer or create a mitigation plan
- **Consider "crashing" the critical path** - Adding resources to critical path tasks to shorten them (but this costs money)
- **Look for "fast tracking" opportunities** - Can any critical path tasks be done partially in parallel?
- **Watch for the critical path to shift** - If D slips by 3 days (exceeding its 2-day float), it becomes the new critical path

> **🔗 How Critical Path Analysis Connects to Other Frameworks:** Your critical path should be informed by **PERT** estimates (apply PERT to critical path tasks for a probabilistic timeline). **Phased Delivery** decisions often involve breaking the critical path at a milestone. **Milestones** are typically placed at critical path junctions. **Capacity Planning** tells you if you have enough resources to "crash" the critical path.

## Realistic Example

**Scenario:** A team is building a new "refer a friend" feature for a mobile banking app. The feature allows users to send referral links to friends, track referral status, and receive rewards when referrals convert.

**The Tasks:**

| ID | Task | Depends On | Duration |
|----|------|------------|----------|
| A | Design referral flow | - | 5 days |
| B | Build referral link generation API | A | 8 days |
| C | Build referral tracking dashboard | A | 10 days |
| D | Build referral reward system | A | 6 days |
| E | Build share-to-social features | B | 4 days |
| F | Legal review of terms | A | 8 days |
| G | QA - referral link flow | B, E | 5 days |
| H | QA - reward redemption | D | 4 days |
| I | Compliance sign-off | F | 3 days |
| J | Production deployment | G, H, I | 2 days |

**Critical Path Analysis:**

The TPM, Ravi, maps the dependencies:

```
           B(8d) ── E(4d) ── G(5d) ──┐
          /                            │
A(5d) ─── C(10d)                      ├── J(2d)
          \                            │
           D(6d) ── H(4d) ────────────┤
           │
           F(8d) ── I(3d) ────────────┘
```

**Forward pass:**
- Path 1: A → B → E → G → J = 5 + 8 + 4 + 5 + 2 = **24 days**
- Path 2: A → C → G → J = 5 + 10 + 5 + 2 = **22 days** (C has float)
- Path 3: A → D → H → J = 5 + 6 + 4 + 2 = **17 days** (D, H have float)
- Path 4: A → F → I → J = 5 + 8 + 3 + 2 = **18 days** (F, I have float)

**Critical path: A → B → E → G → J = 24 days**

**What Ravi learns:**

1. **The referral link generation API (B), share-to-social (E), and QA (G) are the tightest constraints.** Any delay to these tasks directly delays the launch.

2. **The tracking dashboard (C) has 2 days of float.** It could be completed 2 days late without affecting the launch date. (But not more-if C slips by 3 days, G can't start on time, and the critical path shifts.)

3. **The reward system (D) and legal review (F) have significant float.** They're not urgent-but if they slip too much, they could become critical.

4. **Actionable decision:** Ravi should:
    - Allocate the strongest engineers to tasks B, E, and G (the critical path)
    - Monitor float consumption for tasks C, D, H, F, and I weekly
    - If any task has consumed more than 50% of its float, escalate

## Case Study

**Organization:** A telecommunications company was building a new customer self-service portal that would allow customers to manage their accounts, upgrade plans, and troubleshoot issues without calling support.

**The Problem:** The project was 3 months behind schedule. The leadership team was frustrated. The project manager kept saying "we're making progress" but the launch date kept slipping. A TPM, Carlos, was brought in to diagnose the issue.

**Carlos's Diagnosis:** He mapped the project's tasks and dependencies. The original project plan had 45 tasks. No one had identified the critical path.

When Carlos mapped the dependencies, he found:

**The Critical Path:**
1. Design customer account API (8 weeks)
2. Build account API with billing integration (12 weeks)
3. Build plan upgrade flow (6 weeks)
4. Integration testing (4 weeks)
5. Deployment (2 weeks)

**Total: 32 weeks**

**The bottleneck:** Task 2 (build account API with billing integration) was on the critical path. It was assigned to a single engineer who was also responsible for maintaining the existing billing system. Every time a production billing issue came up (which was frequent), this engineer was pulled away from the API work.

**The problem was compounded because:**
- No one had identified this task as critical-path
- The engineer's dual responsibilities weren't reflected in the plan
- The schedule assumed 100% availability for critical path tasks

**The Intervention:**

Carlos made three changes:

1. **Reassigned maintenance duties.** A second engineer was trained to handle billing system maintenance, freeing the senior engineer to focus on the critical path work.

2. **Added buffer.** Based on historical data showing the billing system generated 1–2 urgent issues per week, Carlos added a 2-week buffer to the critical path.

3. **Changed tracking.** The 5 critical path milestones were tracked weekly instead of monthly. A "critical path health" metric was added to the program dashboard.

**The Outcomes:**

- The project launched 4 months after Carlos's intervention (original timeline was 32 weeks; Carlos's revised timeline was 36 weeks with buffer)
- The critical path tasks were completed without delay once the resource constraint was addressed
- The add-work-billing maintenance tasks had no owner, so the TPM convinced the engineering manager to assign a dedicated engineer to handle billing fixes so the critical path engineer could stay focused on their tasks.
- The critical path analysis was adopted as standard practice for all major programs at the company

**Lessons Learned:**

1. **The critical path is often invisible without explicit analysis.** The team had been tracking all 45 tasks equally. No one noticed that a single engineer's capacity was the binding constraint on the entire project.

2. **Resource contention is a critical path risk.** The senior engineer's dual role (building + maintaining) was a ticking time bomb. Critical path analysis revealed it.

3. **Tracking everything equally means tracking nothing effectively.** After the critical path was identified, Carlos told the team: "If a non-critical path task slips by a day, I don't care-as long as it doesn't use up its float. If a critical path task slips by an hour, I want to know about it."

4. **Float is a precious resource.** The team started tracking float consumption weekly. When a task had consumed 80% of its float, it was escalated. This prevented the "everything is fine until it's not" pattern.

5. **The critical path is not static.** After resource reassignment, the critical path shifted: task C (plan upgrade flow) became the new constraint because it depended on an external vendor's API that was experiencing delays. Carlos's weekly monitoring caught this shift within 2 weeks.

---

# 7. Phased Delivery

## Definition & Relevance

**Phased delivery** is a strategy of breaking a large program into multiple smaller releases, each delivering a subset of the full functionality. Instead of one big "big bang" launch, you deliver value incrementally.

Think of it like renovating a kitchen. You could:
- **Big bang approach:** Close the kitchen for 3 months, do all the work at once, and reopen with a fully renovated kitchen. During those 3 months, you have no kitchen.
- **Phased approach:** Phase 1 (week 1): Replace the refrigerator (you still have a functioning kitchen). Phase 2 (week 2): Replace the stove. Phase 3 (weeks 3–4): Replace countertops and cabinets. Your kitchen works throughout, just with some areas under construction.

In software, phased delivery works the same way. Instead of launching with 100 features after 12 months, you launch with 20 features after 4 months, then add features every month after that.

### Why Phased Delivery Matters in TPM

| Benefit | Explanation |
|---------|-------------|
| **Faster time-to-value** | Users and stakeholders see results sooner, building momentum and trust |
| **Reduced risk** | Each phase is smaller, so each has less risk of failure. If Phase 1 has issues, you learn before Phase 2. |
| **Better feedback loops** | Real user feedback from Phase 1 informs Phase 2, reducing the chance of building the wrong thing |
| **Easier planning** | You only need to plan Phase 1 in detail. Later phases are high-level until you get closer. |
| **Organizational alignment** | Shorter delivery cycles keep stakeholders engaged and aligned. Twelve-month cycles lose alignment. |
| **Sustainable pace** | Teams aren't sprinting toward a single, distant deadline. They deliver at a steady cadence. |

### Core Principles

| Principle | What It Means |
|-----------|---------------|
| **Each phase must deliver value independently** | Phase 1 should be useful on its own, not just "infrastructure that enables later phases." |
| **Phase boundaries are natural decision points** | After each phase, assess: should we proceed as planned, adjust, or stop? |
| **Phasing should follow dependencies, not convenience** | Build foundational capabilities first. Don't build Phase 3 features that depend on Phase 2 infrastructure. |
| **"Good enough" is the right quality for early phases** | Phase 1 needs to be stable and useful, not feature-complete. Perfection can come later. |
| **Communicate the phase plan early** | Stakeholders need to know what they'll get in each phase. Otherwise, everyone expects everything immediately. |

## How It Works

### Step 1: Define Your "North Star" (Full Vision)

Start by defining what the complete product would look like. This gives you a destination. **Do NOT plan to deliver the full vision in one release.**

**Example: E-commerce platform vision:**
- Product catalog with search and filters
- Shopping cart and checkout
- User accounts and order history
- Payment processing (credit cards, PayPal, BNPL)
- Inventory management
- Analytics dashboard for merchants
- Mobile app (iOS and Android)
- Multi-language support
- Recommendation engine

### Step 2: Identify the Minimum Valuable Release (Phase 1)

Ask: "What is the smallest set of features that delivers real value to users and proves the concept?" This is often called the **MVP (Minimum Viable Product)** or **MVR (Minimum Valuable Release)** .

**Phase 1 - Core Shopping Experience (3 months):**
- Product catalog (search, filter by category, product detail page)
- Shopping cart (add/remove items, view total)
- Checkout (basic: name, address, payment)
- Payment via credit cards (single processor)
- Order confirmation email

Without these features, the platform doesn't do anything useful. With them, customers can shop.

### Step 3: Plan Subsequent Phases

Each phase builds on the previous one, adding more value:

**Phase 2 - Account & History (2 months):**
- User account creation
- Order history and tracking
- Saved addresses
- PayPal payment option

**Phase 3 - Merchant Tools (3 months):**
- Inventory management dashboard
- Order management
- Basic analytics

**Phase 4 - Advanced Features (3 months):**
- Mobile app (iOS)
- Multi-language support
- Buy-now-pay-later options

**Phase 5 - Intelligence (3 months):**
- Recommendation engine
- Advanced analytics
- Android app

### Step 4: Define Phase Gates

Each phase ends with a "go/no-go" decision point. The criteria for proceeding to the next phase might include:

| Criteria | Phase 1 Example |
|----------|-----------------|
| **Business metrics** | 100+ orders completed, <2% payment failure rate |
| **Quality metrics** | <5 critical bugs, 99.5% uptime |
| **User feedback** | Net Promoter Score ≥ 40 |
| **Technical readiness** | Platform can support Phase 2's additional load |

### Step 5: Build, Launch, Learn, Iterate

After each phase launch:
1. Collect data (usage, revenue, satisfaction)
2. Gather feedback (user interviews, support tickets, analytics)
3. Adjust the plan for subsequent phases based on learning
4. Proceed to next phase or adjust direction

> **🔗 How Phased Delivery Connects to Other Frameworks:** Phased delivery is how you operationalize your **Roadmap** (each phase is a roadmap initiative). **Milestones** mark the end of each phase. **Capacity Planning** determines how much you can deliver per phase. **MoSCoW** prioritization helps you decide what goes in Phase 1 (Must and Should) vs. later phases (Could, Won't). **T-Shirt Sizing** helps you decide if a phase is too big.

## Realistic Example

**Scenario:** A company ("SecureHealth") is building a patient-facing health records portal. The full vision is ambitious: patients can view lab results, message doctors, schedule appointments, request prescription refills, view medical history, and pay bills online.

**The Challenge:** The company has a regulatory deadline: patients must have access to their lab results within 9 months. Building everything in 9 months is impossible. The TPM, Amara, proposes a phased approach.

**Phase Planning:**

| Phase | Duration | Features | Value |
|-------|----------|----------|-------|
| **Phase 1: Results Access** | 3 months | Lab results viewing, secure login, basic profile | Meets regulatory requirement. Patients can see results. |
| **Phase 2: Communication** | 2 months | Secure messaging with providers, appointment viewing | Patients can communicate with their care team |
| **Phase 3: Convenience** | 2 months | Appointment scheduling, prescription refill requests | Reduces phone call volume for the clinic |
| **Phase 4: Billing & History** | 2 months | Bill payment, full medical history, document download | Complete patient portal experience |

**Phase 1 Details:**

Within Phase 1, the team further phases the work:

| Sprint | Deliverables |
|--------|--------------|
| Sprint 1-2: Foundation | Authentication system, patient data API, basic user profile |
| Sprint 3-4: Lab Results | Lab result data ingestion from hospital system, result display |
| Sprint 5-6: Notifications | Email/SMS notification when new results are available |
| **Launch: Phase 1** | Soft launch to 500 patients, then full rollout |

**What Amara learned after Phase 1:**
- Patients loved seeing results online (satisfaction: 4.6/5)
- But 40% of support calls were about "I can't find my results from last year" (only recent results were available)
- Patients wanted push notifications, not just email

Amara adjusted Phase 2 to include:
- Historical results (added based on feedback)
- Mobile push notifications (added based on feedback)
- Messaging (original plan, still included)

**The Outcome:** The regulatory deadline was met. Each phase built on validated learning from the previous phase. The team never built anything patients didn't need. The full portal was operational in 9 months-the same timeline they would have needed for a "big bang" approach, but with real value delivered every 2–3 months instead of only at the end.

## Case Study

**Organization:** A large online retailer ("MarketMax") was planning to launch a subscription service (similar to Amazon Prime or Walmart+) that would offer free shipping, exclusive deals, and streaming content.

**The Problem:** The full vision was enormous: membership management, shipping integration, exclusive pricing engine, streaming platform, partner benefits, family sharing, annual billing, international expansion. The executive team wanted "everything at once" to "make a big splash."

The VP of Operations argued for a phased approach. The CEO was skeptical: "If we launch with only free shipping and no streaming, customers won't see the value."

**The Phased Delivery Plan:**

The VP of Operations and TPM (James) built a phased plan that addressed the CEO's concerns:

**Phase 1: "Shipping Plus" (3 months)**
- Membership sign-up and management
- Free shipping on all orders (core value proposition)
- Exclusive member pricing on select items
- **Membership price: $49/year** (later phases would justify price increases)
- **Marketing message:** "Get free shipping and exclusive deals for $49/year"

**Phase 2: "Entertainment Added" (4 months)**
- Streaming content (licensed movies and TV shows)
- Early access to deals
- Birthday rewards
- **Price: $79/year** (or $49 existing members upgrade for $30)

**Phase 3: "Premium" (5 months)**
- Partner benefits (gas discounts, restaurant deals)
- Family sharing (up to 5 accounts)
- Priority customer service
- **Price: $99/year**

**Phase 4: "International" (6 months)**
- Launch in 3 additional countries
- Localized content and benefits

**Addressing the CEO's Concerns:**

James showed the CEO that:
1. Phase 1's "free shipping + exclusive deals" was already compelling-other companies had launched similar services with just free shipping
2. Each phase would increase the price, so early adopters got a better deal
3. The staggered launch allowed the company to test the subscription model before investing in the most expensive features (streaming)
4. Streaming content could be launched in Phase 2 based on what Phase 1 members actually wanted

**The Outcomes:**

- **Phase 1 launched in 3 months.** Within 2 months, 500,000 members had signed up at $49/year. The core value proposition was validated.
- **Phase 2 launched on schedule.** Streaming was well-received but not the primary reason members joined-confirming that the phased approach was correct.
- **Phase 3 added partner benefits.** This drove the next wave of membership growth.
- **After 18 months, MarketMax had 3 million members** generating $240M in annual recurring revenue.
- **The CEO's concern about "not making a big splash" was unfounded.** The press covered each phase launch as a major announcement, generating more total attention than a single big launch would have.

**Lessons Learned:**

1. **Phased delivery doesn't mean "less ambitious."** MarketMax launched incrementally but ended up with the same full vision-just delivered over 18 months instead of 18 months of development and then a single launch.

2. **Each phase should be a viable business on its own.** Phase 1's $49/year membership was profitable before Phase 2 added costs. This de-risked the entire program.

3. **Phase 4 may not be necessary.** MarketMax had planned an international expansion as Phase 4. After Phase 3, they discovered the domestic market still had significant growth potential. Phase 4 was delayed by 6 months-a decision that was only possible with a phased approach.

4. **The phase plan must account for marketing and operations, not just engineering.** Each phase required updates to the website, customer support training, marketing campaigns, and operational processes. Phasing actually made this easier because each phase was smaller.

5. **Phasing builds organizational confidence.** After Phase 1's success, the organization had much more confidence to invest in Phase 2. The "prove it" cycle de-risked each subsequent investment decision.

---

# 8. Case Studies: Putting It All Together

This section shows how multiple planning and estimation frameworks work together in real-world scenarios. Each case study demonstrates a specific combination of frameworks addressing a concrete challenge.

## Case Study 1: The Mobile Banking App

**Organization:** A regional bank (2,000 employees) launching a mobile banking app for 500,000 existing customers.

**The Challenge:** The bank had never built a mobile app. The engineering team was new to modern development practices. The regulatory deadline was fixed (new EU payment regulations taking effect in 14 months). The CEO wanted to "match the features of our competitors' apps" which had 100+ features.

**The initial approach:** Plan all 100+ features, build for 14 months, launch everything at once. The TPM, Elena, knew this would fail.

### Frameworks Applied

**1. Roadmapping - Set the strategic direction.** Elena created a 14-month roadmap with 4 phases:

| Time | Phase | Focus |
|------|-------|-------|
| Months 1–5 | Phase 1 | Core banking: balance, transactions, transfers |
| Months 5–8 | Phase 2 | Convenience: mobile check deposit, bill pay |
| Months 8–11 | Phase 3 | Advanced: budgeting tools, spending insights |
| Months 11–14 | Phase 4 | Ecosystem: credit card management, loan applications |

**2. MoSCoW - Prioritize each phase.** Within Phase 1, the team identified:

| Category | Features |
|----------|----------|
| **Must have** | Secure login, account balance, transaction history, fund transfers, regulatory compliance |
| **Should have** | Biometric login, mobile check deposit |
| **Could have** | Custom alerts, spending categories |
| **Won't have** | Budgeting tools, credit card management |

**3. T-Shirt Sizing + Capacity Planning - Validate feasibility.** The team sized Phase 1 features:

| Feature | Size | Person-Weeks |
|---------|------|--------------|
| Secure login & auth | L | 6 |
| Account balance | M | 2 |
| Transaction history | M | 3 |
| Fund transfers | XL | 8 |
| Regulatory compliance | L | 4 |
| Biometric login | S | 1 |
| Total | | 24 |

**Team capacity:** 2 teams of 5 engineers × 75% utilization × 20 weeks = 150 person-weeks available for Phase 1.
**Demand:** 24 person-weeks.
**Result:** Phase 1 is easily achievable within 5 months. The team can add more Should and Could features.

**4. PERT - Estimate the highest-risk items.** Fund transfers was the riskiest feature (new integration with core banking system). The team used PERT:

| Estimate | Days |
|----------|------|
| Optimistic | 20 |
| Most Likely | 40 |
| Pessimistic | 80 |
| **Expected** | **43.3** |

The wide spread (20–80 days) indicated high uncertainty. Elena added a 2-week buffer specifically for this feature and assigned the two most senior engineers to it.

**5. Critical Path Analysis - Find the bottleneck.** Elena mapped the Phase 1 dependencies:

```
Login → Account Balance → Transaction History → Fund Transfers → Compliance Review → Launch
```

Fund transfers was on the critical path. Any delay there directly delayed the launch. Elena monitored this task daily.

**6. Milestones - Track progress.** Phase 1 had 6 milestones:

| M# | Milestone | Date | Status |
|----|-----------|------|--------|
| M1 | Design approved | Month 1 | ✅ |
| M2 | Login + balance complete | Month 2 | ✅ |
| M3 | Transaction history complete | Month 2.5 | ✅ |
| M4 | Fund transfers complete | Month 4 | 🟡 (2 days late, absorbed by buffer) |
| M5 | Compliance sign-off | Month 4.5 | ✅ |
| M6 | App store approved | Month 5 | ✅ |

**7. Phased Delivery - The overarching structure.** The phased approach meant:
- Phase 1 launched on time with 12 features (not 100, but enough to be useful)
- 40,000 customers downloaded the app in the first month
- User feedback from Phase 1 directly shaped Phase 2 priorities
- Phase 2 added mobile check deposit (the #1 user request)
- The regulatory deadline was met with Phase 1

**The Outcome:**
- The app launched on the regulatory deadline
- 95% of customers rated the app 4+ stars
- The full 100-feature vision was delivered in 18 months (not 14, but with real value delivered every 3–5 months)
- The phased approach was adopted as the standard for all bank technology projects

## Case Study 2: The Data Center Migration

**Organization:** A SaaS company ("CloudFirst") needed to migrate its entire infrastructure from a legacy data center to AWS. The migration involved 200+ servers, 50+ databases, 30+ microservices, and 8 engineering teams.

**The Challenge:** The data center lease was expiring in 18 months. The migration had to be complete by then. Previous partial migrations at the company had gone badly-one took 6 months longer than estimated. The CTO wanted a realistic, defensible plan.

### Frameworks Applied

**1. WBS - Define all the work.** The TPM, Marcus, first created a high-level WBS:

```
Data Center Migration
├── 1. Assessment & Planning
│   ├── 1.1 Inventory all systems
│   ├── 1.2 Map dependencies
│   ├── 1.3 Define migration patterns
│   └── 1.4 Create migration plan
├── 2. Foundation Setup (AWS)
│   ├── 2.1 Set up networking & VPC
│   ├── 2.2 Set up security & IAM
│   ├── 2.3 Set up monitoring & logging
│   └── 2.4 Set up CI/CD pipelines
├── 3. Application Migrations (Phased)
│   ├── 3.1 Wave 1: Low-risk apps (10)
│   ├── 3.2 Wave 2: Medium-risk apps (12)
│   ├── 3.3 Wave 3: High-risk apps (8)
├── 4. Database Migrations
├── 5. Testing & Validation
├── 6. Cutover & Decommissioning
└── 7. Post-Migration Optimization
```

**2. Capacity Planning - Determine realistic throughput.** Marcus calculated:
- 8 teams, but only 5 could work on migration at a time (3 were needed for ongoing product development)
- 5 teams × 75% utilization × 75 weeks = 281 team-weeks of capacity
- Each application migration required roughly 2–4 team-weeks
- With 30 applications (in scope), that used 60–120 team-weeks
- Plus foundation setup, testing, cutover, and buffer

The capacity check showed the plan was tight but feasible-if they maintained focus.

**3. T-Shirt Sizing - Categorize application complexity.** Each application was sized:

| Complexity | Count | Migration Effort | Risk |
|------------|-------|------------------|------|
| **S** | 6 | 1 week each | Low (simple stateless apps) |
| **M** | 12 | 2 weeks each | Medium (standard microservices) |
| **L** | 8 | 4 weeks each | High (complex stateful systems) |
| **XL** | 4 | 8 weeks each | Very high (core databases, legacy systems) |

**4. PERT - Estimate the highest-risk migrations.** The most complex migration-the core customer database-was estimated using PERT:

| Estimate | Weeks |
|----------|-------|
| Optimistic | 6 |
| Most Likely | 10 |
| Pessimistic | 20 |
| **Expected** | **11** |

The wide spread reflected unknowns about data volume, schema changes, and downtime requirements. Marcus assigned this to the most experienced team and required a detailed migration plan before execution.

**5. Critical Path Analysis - Identify the binding sequence.** Marcus identified the critical path:

```
Foundation Setup → Wave 1 migration → Wave 2 → Database Migrations → Integration Testing → Cutover
```

The database migrations were on the critical path. Any delay there would delay the entire program. Marcus created weekly status monitoring for database migration progress.

**6. Milestones - Create go/no-go checkpoints.** Marcus established 10 milestones:

| M# | Milestone | Target | Decision Gate |
|----|-----------|--------|---------------|
| M1 | Assessment complete | Month 3 | Proceed to foundation setup |
| M2 | Foundation ready | Month 5 | Proceed to Wave 1 |
| M3 | Wave 1 complete | Month 7 | Validate approach; adjust for Waves 2–3 |
| M4 | Wave 2 complete | Month 10 | Validate at scale |
| M5 | Database migration complete | Month 13 | Critical gate: if late, cutover slips |
| M6 | Integration testing passed | Month 15 | Proceed to cutover |
| M7 | Cutover complete | Month 17 | 🎉 |
| M8 | Data center decommissioned | Month 18 | ✅ |

**7. Roadmapping - Visualize the plan.** Marcus created a roadmap showing the full 18-month timeline, with each wave and milestone clearly marked. This roadmap was shared with the CTO, engineering VPs, and the external stakeholders who needed to know the status.

**The Outcome:**
- The cutover completed in **month 16.5** (1.5 months before the lease expired)
- Zero data loss during the migration
- 2 applications had to be "re-platformed" (moved differently than planned) due to unexpected technical issues
- The PERT analysis had identified this risk and the 2-week buffer absorbed the delay
- The post-mortem identified 12 lessons that were applied to the company's next infrastructure migration

**Lessons Learned:**

1. **The WBS was the most valuable framework.** Without identifying all 30 applications and 7 workstreams, the team would have missed important migration tasks. The WBS ensured completeness.

2. **T-Shirt sizing accelerated planning.** Instead of estimating each application in detail, the team spent 2 hours sizing all 30 applications. This was 80% as accurate as detailed estimation but took 10% of the time.

3. **The critical path shifted twice during the program.** Marcus's weekly monitoring caught both shifts within 2 weeks, allowing proactive adjustments.

4. **Phased waves (Wave 1 → Wave 2 → Wave 3) dramatically reduced risk.** Wave 1 used a simplified "lift and shift" approach. After learning from 10 successful low-risk migrations, the team optimized the process for Wave 2. By Wave 3, they were migrating 2× faster with fewer issues.

5. **Over-communicating the plan built trust.** The roadmap, milestone tracker, and critical path dashboard were shared with all 8 teams and executive stakeholders. When problems arose, the context was already in place for fast decision-making.

---

# Conclusion: Choosing and Combining Frameworks

You don't need to use all eight frameworks on every program. The art of TPM planning is knowing **which framework to apply when.** Here's a quick decision guide:

| If you need to... | Use this framework |
|-------------------|-------------------|
| Align stakeholders on the big picture | Roadmapping |
| Define checkpoints and track progress | Milestones |
| Know if your plan is realistic | Capacity Planning |
| Roughly estimate size of features | T-Shirt Sizing |
| Accurately estimate uncertain work | PERT |
| Find the tasks that matter most | Critical Path Analysis |
| Reduce risk by delivering incrementally | Phased Delivery |

### Common Framework Combinations

| Scenario | Typical Stack |
|----------|---------------|
| **New product launch** | Roadmapping → T-Shirt Sizing → Capacity Planning → Phased Delivery → Milestones |
| **Infrastructure migration** | WBS → T-Shirt Sizing (for components) → Capacity Planning → Critical Path → Milestones |
| **Large feature development** | MoSCoW (prioritize features) → PERT (estimate uncertain work) → Milestones |
| **Quarterly planning** | Roadmapping → T-Shirt Sizing → Capacity Planning → Commitment |

### Building Your Practice

**Week 1:** Start with **Milestones**. Pick your current project and identify 5–8 meaningful milestones. Track them weekly.

**Week 2:** Add **T-Shirt Sizing.** Run a sizing session for upcoming work. Notice how much faster it is than detailed estimation.

**Week 3:** Try **Capacity Planning.** Calculate your team's available capacity for the next month. Compare it to what you've committed to deliver.

**Month 2:** Practice **Roadmapping.** Create a simple roadmap for the next quarter. Share it with stakeholders. Revise based on feedback.

**Month 3:** Learn **Critical Path Analysis.** Map the dependencies for a small project. Identify the critical path. Monitor it for one month.

**Month 4+:** Layer in **PERT** and **Phased Delivery** as your planning maturity grows. These frameworks are most valuable for complex, high-risk programs.

The best TPM planners use all eight frameworks fluidly-not because they always need all of them, but because each framework provides a different lens on the planning problem. With practice, selecting the right framework becomes instinctive.

---

*This guide was developed for practitioners new to TPM planning and estimation. It reflects practices used across software, infrastructure, and systems integration programs at organizations ranging from startups to large enterprises. All examples are representative composites drawn from real program management experience.*
