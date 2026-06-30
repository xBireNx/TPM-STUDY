# 📊 TPM Metrics & Execution Tracking: A Practical Guide

> **Audience:** Beginners new to TPM metrics, frameworks, and execution tracking
> **Purpose:** Build foundational knowledge of 6 essential metrics frameworks with practical applications
> **Read time per framework:** ~15–20 minutes | **Total:** ~90–120 minutes

---

## How to Use This Guide

This guide covers six core metrics and execution tracking frameworks that every TPM needs. Each framework is designed to help you answer a specific question:

| Framework | Question It Answers |
|-----------|-------------------|
| **KPIs** | "Are we moving in the right direction?" |
| **OKR Tracking** | "Are we achieving what we set out to do?" |
| **Burn-Down Charts** | "Are we on track to finish when we planned?" |
| **Velocity & Throughput** | "How much can we deliver in a given time?" |
| **SLAs** | "Are we meeting our promises to customers and stakeholders?" |
| **Program Health Dashboards** | "What's the overall state of our program at a glance?" |

**Two critical concepts to understand before you start:**

**Leading vs. Lagging Indicators:**

| Type | What It Does | Example |
|------|-------------|---------|
| **Leading** | Predicts future performance | Sprint velocity (tells you future delivery capacity) |
| **Lagging** | Confirms past performance | Number of features shipped (tells you what already happened) |

Good TPMs track both. Leading indicators help you course-correct early. Lagging indicators help you measure results.

**Output vs. Outcome:**

| Type | Definition | Example |
|------|------------|---------|
| **Output** | What you produced | "We shipped 5 features this quarter" |
| **Outcome** | The result of what you produced | "Customer onboarding time decreased 40%" |

Outputs are easier to measure but less meaningful. Outcomes are harder to measure but ultimately what matters. A good metrics practice tracks both but prioritizes outcomes.

---

## Table of Contents

1. [Key Performance Indicators (KPIs)](#1-key-performance-indicators-kpis)
2. [OKR Tracking and Alignment](#2-okr-tracking-and-alignment)
3. [Burn-Down Charts and Capacity Planning](#3-burn-down-charts-and-capacity-planning)
4. [Velocity Metrics and Throughput](#4-velocity-metrics-and-throughput)
5. [Service Level Agreements (SLAs)](#5-service-level-agreements-slas)
6. [Delivery Cadence and Program Health Dashboards](#6-delivery-cadence-and-program-health-dashboards)

---

## 📌 A Note on Cross-References

Throughout this guide, you'll see references like "[See: Velocity Metrics]". These cross-references show how the frameworks interact. For example:
- Velocity data feeds into burn-down chart projections
- OKR progress often depends on delivery velocity
- SLAs should be reflected in your program health dashboard
- KPI targets can inform OKR key results

---

# 1. Key Performance Indicators (KPIs)

## Conceptual Foundation

A **Key Performance Indicator (KPI)** is a measurable value that shows how effectively a program, team, or organization is achieving key business objectives. KPIs answer the question: **"How do we know we're making progress?"**

Think of KPIs like the dashboard in your car. You don't need to check every gauge every second, but you need the right ones to tell you:
- How fast you're going (speed)
- How much fuel you have (fuel level)
- If the engine is overheating (engine temperature)
- If something is wrong (check engine light)

A good KPI dashboard has the same quality: it gives you the essential signals you need to make decisions, without overwhelming you with data.

### Why KPIs Matter for TPMs

| Reason | Explanation |
|--------|-------------|
| **Objectivity** | KPIs replace opinions ("I think we're making good progress") with facts ("We've completed 62% of planned milestones") |
| **Focus** | The KPIs you choose determine what the team pays attention to. Choose carefully. |
| **Early warning** | Leading KPIs can alert you to problems before they become crises |
| **Alignment** | When everyone tracks the same KPIs, teams naturally align around shared priorities |
| **Accountability** | KPI targets create clear expectations: "We committed to X by Y date. Are we on track?" |

### The Key Principles of Good KPIs

| Principle | What It Means | Bad Example | Good Example |
|-----------|---------------|-------------|--------------|
| **Measurable** | Can be objectively quantified | "Improve customer satisfaction" | "Increase Net Promoter Score from 42 to 55" |
| **Actionable** | Teams can influence the number | "Stock price" (team can't control it) | "Feature adoption rate" (team can influence it) |
| **Timely** | Can be measured frequently enough to act | "Annual revenue" (too slow) | "Weekly active users" (fast enough) |
| **Relevant** | Connected to actual program goals | "Lines of code written" (output, not outcome) | "Story points delivered per sprint" (delivery progress) |
| **Simple** | Easy to understand and communicate | "Weighted composite index of 12 factors" | "Percentage of milestones on track" |

### Leading vs. Lagging KPIs for TPMs

| Type | Example KPIs | Use |
|------|-------------|-----|
| **Leading** | Sprint velocity, open risk count, milestone health, team satisfaction | Course correction during the program |
| **Lagging** | Features shipped, defects found, time-to-market, budget variance | Performance review, retrospective analysis |

A balanced KPI set includes both types.

## How to Track It

### Step 1: Define 5–7 KPIs for Your Program

More than 7 and you lose focus. Fewer than 3 and you miss important signals. For each KPI, define:

| Field | Example |
|-------|---------|
| **KPI Name** | Milestone Completion Rate |
| **Definition** | Percentage of planned milestones achieved on time |
| **Formula** | (Milestones completed on time / Total milestones planned) × 100 |
| **Target** | ≥85% |
| **Data Source** | Milestone tracker (updated weekly) |
| **Owner** | TPM |
| **Review Frequency** | Weekly |
| **Leading or Lagging** | Lagging (but can be leading if tracked early enough) |

### Step 2: Establish Baselines

Before you set targets, understand where you are today. If you've never tracked milestone completion rate, you don't know if 85% is realistic or aspirational.

- **Historical data:** What was the rate on similar past programs?
- **Industry benchmarks:** What do comparable teams achieve? (Be careful-context matters)
- **First measurement:** If you have no data, measure for 2–4 weeks to establish a baseline, then set targets

### Step 3: Set Targets

Good targets are ambitious but achievable:

| Target Type | Definition | Example |
|-------------|------------|---------|
| **Minimum threshold** | Below this is unacceptable | Milestone completion <70% triggers escalation |
| **Target** | What you're aiming for | 85% milestone completion |
| **Stretch goal** | Ambitious; may not be achieved | 95% milestone completion |

### Step 4: Collect Data Regularly

The best KPI system fails if data isn't collected consistently. Establish a data collection rhythm:

| Data Type | Collection Frequency | Method |
|-----------|---------------------|--------|
| Milestone status | Weekly | Update milestone tracker in program sync |
| Risk count | Weekly | Review risk register |
| Velocity | Per sprint | Extract from project management tool (Jira, etc.) |
| Team satisfaction | Monthly | Quick survey (1 question: "How are you feeling about the program?") |

### Step 5: Visualize and Share

Create a simple visual dashboard:

```
KPI DASHBOARD - Q1 2026
╔═══════════════════════════════════════════════════════╗
║ KPI                    Target    Current    Status    ║
║───────────────────────────────────────────────────────║
║ Milestone completion    ≥85%      78%        🟡      ║
║ Active risks            <15      22          🔴      ║
║ Sprint velocity trend   Steady    -12%       🔴      ║
║ Open blocker count      <3        1          🟢      ║
║ Stakeholder satisfact.  ≥4/5     4.2/5      🟢      ║
╚═══════════════════════════════════════════════════════╝
```

### Common Pitfalls

1. **Vanity metrics.** KPIs that look good but don't tell you anything useful. Example: "Total lines of code written." Who cares? Track what matters.
2. **Too many KPIs.** If you have 20 KPIs, you have none. Prioritize ruthlessly.
3. **Measuring what's easy instead of what's important.** It's easy to measure output (features shipped). It's harder to measure outcomes (customer impact). Measure both.
4. **Setting targets without baselines.** "Let's achieve 90% milestone completion" is meaningless if you don't know your current rate.
5. **Not reviewing KPIs regularly.** A KPI dashboard that's reviewed quarterly is a post-mortem tool, not a management tool.

## Realistic Example

**Scenario:** You're the TPM for a program building a new search feature for an e-commerce platform. The program is 3 months into a 6-month timeline. You want to establish KPIs to track progress.

**Your KPI Selection:**

| KPI | Why It Matters | Target | Current | Leading/Lagging |
|-----|---------------|--------|---------|-----------------|
| **Feature completion rate** | Are we building what we planned? | 100% of M must-haves by launch | 55% | Lagging |
| **Sprint velocity trend** | Is our delivery speed stable, improving, or declining? | ±5% per sprint | -8% (declining) | Leading |
| **Open critical risks** | How much uncertainty are we carrying? | <3 critical risks | 5 | Leading |
| **Test pass rate** | Is quality keeping up with velocity? | >95% | 92% | Leading |
| **Stakeholder satisfaction** | Are stakeholders aligned and confident? | >4/5 | 3.8/5 | Lagging (survey) |

**What the KPIs reveal:**

The sprint velocity trend (leading indicator) is declining-down 8% from the program average. This could predict a missed deadline. You investigate and discover: the backend team is being pulled into production support for the existing search system, reducing their capacity for new development.

You escalate to the engineering manager, who agrees to shift production support to a different team. The velocity decline is addressed before it affects the launch date.

Meanwhile, open critical risks (5 vs. target of 3) are a concern. Two of the risks are new: the search indexing vendor changed their pricing mid-program, and a key engineer gave notice. You add mitigation plans for both.

**The Outcome:** The leading indicators (velocity, risks) alerted you to problems early enough to act. The program launched on schedule. The KPI dashboard was referenced in every weekly program sync and became the primary tool for communicating program health to stakeholders.

## Case Study

**Organization:** A B2B SaaS company ("ContractHub") was building a new contract management platform-a major product rewrite affecting 4 engineering teams over 12 months.

**The Problem:** The program had been running for 6 months without any formal KPIs. Stakeholders received a weekly "status update" that was mostly narrative: "Team A is making good progress on the API. Team B encountered some challenges but is working through them. Overall, we're on track."

The CEO was frustrated: "I don't know what 'on track' means. I need numbers."

**The KPI Implementation:**

A TPM, Anika, was asked to establish a KPI framework. She started by interviewing each team lead and key stakeholder:

- **CEO:** "I need to know: will we ship on time? Are we within budget? Are customers going to be happy?"
- **VP of Engineering:** "I need to know: is the team healthy? Are we burning out? Are we accumulating tech debt?"
- **VP of Product:** "I need to know: are we building the right things? Is the scope under control?"
- **VP of Sales:** "I need to know: when can I start selling this? Is the feature set competitive?"

**The KPI Set Anika Created:**

| KPI | Target | Data Source | For Whom |
|-----|--------|-------------|----------|
| Milestone completion rate | ≥85% | Milestone tracker | CEO, VP Eng |
| Budget variance | ±5% | Finance system | CEO |
| Sprint commitment completion | ≥80% | Jira | VP Eng |
| Open critical defects | <5 | Bug tracker | VP Eng, VP Product |
| Scope change requests per month | <3 | Change log | VP Product |
| Team satisfaction score | ≥4/5 | Monthly survey | VP Eng |
| Customer referenceability | ≥3 referenceable customers | Sales feedback | VP Sales |

**The Dashboard:**

Anika created a simple Google Sheets dashboard updated weekly. Each KPI had:
- Current value
- Target
- Trend arrow (↑ improving, ↓ declining, → stable)
- Status color (🟢 🟡 🔴)

**What the KPIs Revealed:**

After 4 weeks of tracking, a pattern emerged:

1. **Milestone completion rate was 68%** (below the 85% target) - and declining for 3 consecutive weeks
2. **Sprint commitment completion was 72%** (below 80% target)
3. **Team satisfaction was 3.2/5** (well below 4/5)
4. **Scope change requests were 6/month** (double the 3/month target)

Anika investigated and found a root cause: scope creep. The VP of Product was approving mid-sprint changes, which disrupted team focus, reduced completion rates, and frustrated engineers.

**The Intervention:**

Anika presented the KPI data to the VP of Product and VP of Engineering in a joint meeting:

> "The data shows a clear pattern. Scope changes are causing our completion rates to drop and team satisfaction to decline. We have two options:
>
> Option A: Enforce a scope freeze for the next 2 sprints. No mid-sprint changes. The change log shows 70% of recent changes could have waited.
>
> Option B: Accept that scope changes will continue and adjust our sprint commitments downward to reflect the disruption."

The VPs chose Option A. Scope changes dropped to 2/month. After 4 weeks, milestone completion rose to 82%, sprint completion to 86%, and team satisfaction to 3.8/5.

**The Outcomes:**

- **Milestone completion stabilized at 82–88%** for the remainder of the program
- **The program launched in Month 12** (within the original timeline)
- **The KPI dashboard** became the primary communication tool for the steering committee
- **The "scope change" KPI** was particularly valuable-it surfaced a problem that had been invisible for 6 months
- **The CEO's frustration was addressed:** "Now I know exactly where we stand. I trust these numbers."

**Lessons Learned:**

1. **KPIs are not just for executives.** Anika designed KPIs for different audiences. The CEO got high-level health. The VP of Engineering got operational detail. The team got their satisfaction measured.

2. **The right KPIs surface problems that narratives hide.** The narrative status reports had said "things are going okay." The KPIs revealed a program in distress: declining completion, declining satisfaction, and excessive scope changes.

3. **KPIs need action, not just observation.** Anika didn't just track KPIs-she used them to drive a conversation and a decision. That's the difference between data collection and data-driven management.

4. **Start simple, then refine.** Anika's first dashboard had 8 KPIs. After 2 months, she dropped 2 that weren't useful and added 1 (defect escape rate) that revealed a quality trend.

5. **KPI targets should be revisited.** The 85% milestone completion target was set arbitrarily. After 3 months of data, Anika realized 80% was a more realistic target for this team, given the complexity of the work. The target was adjusted, and the team hit it consistently.

---

# 2. OKR Tracking and Alignment

## Conceptual Foundation

**OKRs** (Objectives and Key Results) are a goal-setting framework that connects high-level ambitions to measurable outcomes. As a TPM, you're often responsible for tracking OKR progress across teams and ensuring alignment between individual team OKRs and program-level goals.

[See: The OKRs section in the TPM Frameworks Guide for a full explanation of how OKRs work.]

This section focuses specifically on **tracking** OKRs-how to measure progress, identify when you're off track, and use OKR data to drive decisions.

### Why OKR Tracking Matters for TPMs

| Reason | Explanation |
|--------|-------------|
| **Alignment verification** | Tracking confirms that teams are actually working toward the stated objectives, not drifting |
| **Early course correction** | If a Key Result is at 20% in Week 6 of a 12-week quarter, you need to act |
| **Cross-team coordination** | When OKRs span multiple teams, tracking reveals dependency gaps |
| **Confidence calibration** | Is leadership confident in delivery? The data should support or challenge that confidence |
| **Learning for next quarter** | What worked? What didn't? OKR tracking data informs future planning |

### The Key Principles of OKR Tracking

| Principle | What It Means |
|-----------|---------------|
| **Track weekly, review monthly** | Weekly: quick status check. Monthly: deeper conversation |
| **Focus on the "why" behind the number** | OKR tracking isn't just about "red vs. green." Understand why progress is off track. |
| **Leading KRs are better than lagging KRs** | "Complete 10 user interviews" (leading) vs. "Achieve 90% satisfaction" (lagging). Both matter, but leading KRs let you course-correct. |
| **Not all KRs need to be 100% achieved** | OKRs are aspirational. 70% achievement on a stretch goal is success. But the tracking data should tell you that story. |
| **Cross-team KRs need explicit dependency management** | If KR progress depends on multiple teams, track those dependencies alongside the KR |

## How to Track It

### Step 1: Establish the Tracking Rhythm

| Cadence | What to Do | Duration |
|---------|------------|----------|
| **Weekly** | Team checks KR progress. Update status (on track / at risk / off track). Identify blockers. | 15 min in team sync |
| **Bi-weekly** | Cross-functional OKR review. Align on progress, identify interdependencies. | 30 min |
| **Monthly** | Formal OKR health check. Review all KRs. Discuss what's working and what's not. | 45 min |
| **End of quarter** | Score all KRs. Retrospective. Set next quarter's OKRs. | 2 hours |

### Step 2: Create an OKR Tracking Dashboard

For each Key Result, track:

| Field | Example |
|-------|---------|
| **Objective** | Deliver a world-class onboarding experience |
| **Key Result** | Reduce onboarding time from 7 days to 24 hours |
| **Owner** | Sarah (Product Manager) |
| **Baseline** | 7 days |
| **Target** | 24 hours |
| **Current** | 3.5 days |
| **Progress** | 47% (current vs. target from baseline) |
| **Status** | 🟡 At Risk |
| **Confidence** | Medium |
| **Notes** | Blocked by identity verification vendor integration |
| **Week-over-Week Trend** | ↑ (improving, but slowly) |

### Step 3: Use a Simple Scoring System

At the end of the quarter, score each KR:

| Score | Meaning | What It Tells You |
|-------|---------|-------------------|
| 0.0–0.3 | We made little progress | Objectives were too ambitious or team was misaligned |
| 0.3–0.6 | We made meaningful progress but fell short | Ambition was right but execution had gaps |
| 0.6–0.7 | We achieved the target | The "sweet spot" for stretch goals |
| 0.7–1.0 | We significantly exceeded expectations | Target may have been too easy |

**The grade is less important than the conversation.** A 0.4 with a clear lesson ("we learned that the vendor integration is a bottleneck") is more valuable than a 1.0 that was achieved by setting an easy target.

### Step 4: Track Confidence Weekly

A powerful practice is tracking **confidence** alongside progress:

| Week | Progress | Confidence | Comment |
|------|----------|------------|---------|
| 1 | 0% | 7/10 | "We're starting, feels achievable" |
| 3 | 15% | 6/10 | "Integration is more complex than expected" |
| 6 | 32% | 4/10 | "Blocked on vendor API; may need to descope" |
| 9 | 55% | 6/10 | "Found workaround; confidence improving" |
| 12 | 68% | 8/10 | "On track to hit 70-80% of target" |

Tracking confidence separately from progress reveals the **emotional reality** behind the numbers. A KR at 55% with confidence 9/10 is different from the same progress with confidence 3/10.

### Common Pitfalls

1. **Treating OKRs as a checklist.** "We wrote OKRs in January; now let's check them in March." OKRs need weekly attention.
2. **Setting and forgetting.** If you only look at OKRs at the end of the quarter, they're not a management tool-they're a report card.
3. **Equating activity with progress.** "We completed 10 onboarding interviews" doesn't mean you're making progress toward your onboarding satisfaction KR. The interviews are an input, not an outcome.
4. **Not escalating when a KR is stuck.** If tracking reveals a KR is at risk for 3+ consecutive weeks and no action is taken, the tracking is pointless.
5. **Conflicting KRs across teams.** Team A's KR is "increase feature count" while Team B's KR is "reduce complexity." Tracking reveals these conflicts.

## Realistic Example

**Scenario:** You're the TPM for a consumer banking app. Your company's Q2 OKR is "Deliver a faster, more reliable mobile banking experience." You track 4 Key Results:

| KR | Baseline | Target | Owner | Current (Week 6) | Status |
|----|----------|--------|-------|------------------|--------|
| KR1: Reduce app launch time | 4.2 sec | <2 sec | iOS Team | 3.1 sec | 🟡 |
| KR2: Achieve 99.95% uptime | 99.8% | 99.95% | Platform Team | 99.91% | 🟢 |
| KR3: Reduce transaction failure rate | 2.1% | <0.5% | Backend Team | 1.8% | 🔴 |
| KR4: Launch biometric login | Not started | Live in prod | Auth Team | In QA | 🟡 |

**The Weekly Check (15 minutes in team sync):**

- **KR1:** iOS Team is making progress (4.2 → 3.1 seconds). They've identified a caching optimization that should get them to 2.0 seconds. Confidence: 7/10. Still at risk but trending positive.
- **KR2:** Uptime is already at 99.91%. On track to hit 99.95% by end of quarter. Confidence: 8/10. No blockers.
- **KR3:** Transaction failure rate is 1.8% - barely moved from the 2.1% baseline. The Backend Lead explains: "We thought the issue was database timeouts, but after investigation, it's actually an API compatibility issue with one of our payment processors." This is a significant finding-the root cause was wrong. Confidence: 3/10.
- **KR4:** Biometric login is in QA. On track for launch by Week 8. Confidence: 7/10.

**The Action:**

KR3 is the concern. The team needs to revise their approach. You ask:
- "What's the new estimate to fix the API compatibility issue?"
- "Do we need to involve the payment processor vendor?"
- "Should we escalate this to the VP of Engineering for support?"

The Backend Lead estimates: "4–6 more weeks with the new approach. That puts us past the end of the quarter." You make a decision: "Let's escalate to the VP of Engineering this week and see if we can get dedicated vendor support. If not, we'll need to decide: descope KR3 or extend it into Q3."

**End of Quarter Scoring:**

| KR | Result | Score | Lesson |
|----|--------|-------|--------|
| KR1 | 1.9 sec | 0.7 ✅ | Caching optimization worked; slightly ahead of target |
| KR2 | 99.94% | 0.6 ✅ | Missed target by 0.01%-still highly successful |
| KR3 | 1.2% | 0.3 🟡 | Improved but didn't hit target; escalated to Q3 |
| KR4 | Launched | 1.0 ✅ | On time, within scope |

**Overall Q2 score: 0.65** - solid for stretch goals. KR3 carried forward to Q3 with a revised approach informed by the tracking data.

## Case Study

**Organization:** A mid-size SaaS company ("DataFlow") was rebuilding its data integration platform. The program had 5 teams, a 9-month timeline, and was the company's top strategic priority. The CEO had set ambitious company OKRs for the year.

**The Problem:** The program's second quarter had just ended, and the CEO reviewed the OKR scores. They were all green-0.7, 0.8, 0.9. "This is great!" the CEO said.

But the TPM, Viktor, was suspicious. The program didn't *feel* like it was performing that well. Teams were working hard, but progress seemed slower than expected. How could all OKRs be green?

**Investigation:** Viktor dug into the OKR tracking data. He found:

1. **The targets were set too low.** For example, KR under "Improve data processing speed" was "Process 1M records per day." The team had already been processing 800K records per day before the program started. The improvement was only 25%-not ambitious enough for a stretch goal.

2. **Progress was self-reported without verification.** One team reported "Feature X is 80% complete" based on their own assessment. But when Viktor checked with QA, the feature had only passed 40% of the test cases. The self-reported progress was overly optimistic.

3. **Leading KRs were missing.** All the KRs were lagging outcomes (e.g., "processing speed," "uptime percentage"). There were no leading KRs that would have revealed problems early (e.g., "API integrations completed," "test coverage percentage").

4. **Confidence wasn't tracked.** No one had been asking "how confident are we in this number?" The green scores hid a team that was actually struggling.

**The OKR Tracking Overhaul:**

**Phase 1 - Add leading KRs.** Viktor worked with each team to add 1–2 leading KRs per objective:

| Objective | Added Leading KR | Why |
|-----------|-----------------|-----|
| Improve data processing | "Complete 3 of 5 core API integrations" | These are prerequisites for processing speed |
| Enhance reliability | "Achieve 90% automated test coverage" | Test coverage predicts reliability |
| Reduce customer onboarding time | "Deliver 3 onboarding workflow modules" | Must build modules before onboarding time improves |

**Phase 2 - Require verification.** Viktor established a verification rule: KR progress over 50% must be accompanied by evidence before it's recorded in the tracking system. For example:
- "Integration complete" → demo of the working integration
- "Feature X 80% done" → QA test pass rate
- "Processing speed improved" → benchmark results

**Phase 3 - Add confidence tracking.** Every weekly OKR check included: "On a scale of 1–10, how confident are you that we'll achieve this KR by end of quarter?" Confidence below 6 triggered a discussion.

**Phase 4 - Calibrate OKR ambition.** Viktor presented the data to the CEO: "Our Q2 OKRs averaged 0.8. That sounds great, but it means our targets weren't ambitious enough. Let's make Q3's targets 30% harder. If we hit 0.6–0.7, that's success."

**The Outcomes (Q3, after the overhaul):**

- **Average OKR score dropped to 0.6** - which was actually a *better* result because the targets were more ambitious
- **Confidence tracking caught 2 KRs early** that were predicted to miss at Week 4 (instead of discovering it at Week 12)
- **The verification rule prevented 3 inaccurate progress reports** - teams had overestimated their progress by 20–40%
- **The CEO's understanding of OKRs matured:** "I used to think 1.0 meant success. Now I understand that 0.6 with the right targets is more valuable."

**Lessons Learned:**

1. **Green OKRs are not always good.** Viktor's program looked great on paper (0.8 average) but was actually failing to set ambitious goals. The tracking system was measuring compliance, not progress.

2. **Self-reported progress is unreliable without verification.** The verification rule was unpopular at first ("we have to demo everything?") but quickly proved its value. Teams started tracking their progress more rigorously because they knew they'd need to prove it.

3. **Leading KRs are essential for course correction.** The original OKR set had only lagging indicators. By the time they showed results, it was too late to act. Leading KRs gave Viktor 4–6 weeks of early warning.

4. **Confidence tracking adds a critical emotional dimension.** The number alone (55%) tells you current status. The confidence score (4/10) tells you how the team *feels* about achieving the target. Both are important.

5. **OKR tracking data should inform target setting.** Viktor's Q2 data showed targets were too easy. He used this data to calibrate Q3 targets. Without the tracking, the targets would have stayed easy and the program would have continued to under-deliver on its potential.

---

# 3. Burn-Down Charts and Capacity Planning

## Conceptual Foundation

A **burn-down chart** is a visual tool that shows the amount of work remaining over time. It answers the question: **"Are we on track to finish this work when we planned to?"**

Think of it like a road trip:
- You have 500 miles to drive
- You plan to drive 100 miles per day
- After 3 days, you've driven 250 miles
- You should have 200 miles left (500 - 3×100 = 200)
- But you have 250 miles left

The burn-down chart would show you're behind schedule-you've been doing 83 miles per day instead of 100. You can either drive faster (unlikely) or adjust your plan.

### How Burn-Down Charts Work

A burn-down chart has two lines:

| Line | What It Shows | How to Read It |
|------|---------------|----------------|
| **Ideal line** | The planned rate of work completion (straight line from start to finish) | This is the "on schedule" reference |
| **Actual line** | The actual work remaining (updated daily or sprint-by-sprint) | If it's above the ideal line, you're behind. If below, you're ahead. |

**Simple example - A 4-week sprint with 100 story points:**

```
Work Remaining
100 | X (start)
 75 | X (planned)    X (actual)
 50 |                X (planned)    X (actual)
 25 |                               X (planned)
  0 |                                            X (planned)
    ────────────────────────────────────────
      Week 1         Week 2         Week 3         Week 4
```

In this chart, the actual line is above the ideal line throughout-the team is consistently behind schedule.

### Why Burn-Down Charts Matter for TPMs

| Reason | Explanation |
|--------|-------------|
| **Early warning** | By Week 2, you can see if you're on track-not waiting until Week 4 to discover the truth |
| **Simple communication** | A burn-down chart communicates progress in 5 seconds, no explanation needed |
| **Identifies estimation problems** | If the actual line consistently differs from the ideal, your estimation is off |
| **Supports capacity planning** | Burn-down data from past sprints informs how much work to commit to in future sprints |
| **Prevents the "90% done" trap** | Burn-down charts show *remaining* work, not *completed* work, which is more honest |

### Capacity Planning Connection

Burn-down charts show **current sprint progress.** Capacity planning determines **how much work to put in a sprint.** They work together:

[See: Capacity Planning in the TPM Planning Guide for the full framework.]

- **Sprint capacity** → Maximum story points per sprint
- **Actual burn-down rate** → How many points the team actually completes
- **Projected completion** → Estimated remaining sprints based on actual rate

## How to Track It

### Step 1: Set Up the Sprint

- Define total work in story points or estimated hours
- Define sprint duration (typically 2 weeks)
- Calculate the ideal burn-down rate: Total work ÷ Sprint days

**Example:**
- Sprint total: 120 story points
- Sprint duration: 10 working days
- Ideal burn-down rate: 12 points per day
- Ideal line: Day 0 = 120 points, Day 10 = 0 points

### Step 2: Track Remaining Work Daily

Each day, update: "How many story points are still not completed?"

**Important:** Remaining work is not "total points minus completed." It's "what's left, including points added or removed during the sprint."

### Step 3: Plot the Actual Line

| Day | Planned Remaining | Actual Remaining |
|-----|------------------|------------------|
| 0 | 120 | 120 |
| 1 | 108 | 108 |
| 2 | 96 | 102 |
| 3 | 84 | 88 |
| 4 | 72 | 70 |
| 5 | 60 | 55 |
| 6 | 48 | 45 |
| 7 | 36 | 30 |
| 8 | 24 | 20 |
| 9 | 12 | 8 |
| 10 | 0 | 0 |

### Step 4: Interpret the Chart

| Pattern | What It Means | Action |
|---------|---------------|--------|
| Actual above ideal | Behind schedule | Investigate blockers, adjust scope, or add resources |
| Actual below ideal | Ahead of schedule | Consider adding more work to the sprint (or celebrate) |
| Actual parallels ideal but shifted | Consistent pace, started late or had early delay | Accept the delay or adjust timeline |
| Actual line flattens mid-sprint | No progress being made | Critical blocker-immediate escalation needed |

### Step 5: Use the Data for Capacity Planning

After 3–5 sprints, you'll have a reliable **velocity** number:

- Average points completed per sprint: 47 (actual from sprint data)
- Planned capacity per sprint: 50 (what you estimated)
- **Recommendation for next sprint:** 47 points (use actual velocity, not planned capacity)

### Common Pitfalls

1. **Unrealistic ideal lines.** A straight line assumes work is completed evenly every day. Real work is lumpy. Early days may be slower (investigation, setup) and later days may be faster. A slight "S-curve" is normal.
2. **Not updating daily.** A burn-down chart updated weekly is of limited value. It should be updated at least daily.
3. **Gaming the chart.** Adding points to "make progress look better" undermines the entire tool. The chart is only useful if the data is honest.
4. **Not accounting for scope changes.** If a sprint adds 20 points mid-sprint, the remaining work jumps up. This should be visible on the chart, not hidden.
5. **Using burn-down for the wrong type of work.** Burn-down charts work best for well-defined work with reliable estimates. Discovery work (learning, prototyping, research) is harder to track this way.

## Realistic Example

**Scenario:** Your team is in Sprint 5 of a 12-sprint program building a new payment processing system. The sprint has 120 story points planned.

**Week 1 Progress:**

| Day | Planned Remaining | Actual Remaining | Observations |
|-----|------------------|------------------|--------------|
| Mon | 120 | 120 | Sprint started. Team working through setup. |
| Tue | 108 | 115 | Slow start-team spent half the day in a dependency alignment meeting |
| Wed | 96 | 105 | |
| Thu | 84 | 95 | |
| Fri | 72 | 80 | 40 points completed in week 1. Pace is 8/day (target: 12/day). |

**Analysis at Week 1:** Actual is 8 points above ideal. At current pace (8/day), the team will complete 80 points by end of sprint-they're on track to miss 40 points.

**Action:**

You investigate. The team says: "The payment processor integration is taking longer than expected. The vendor changed their API last week, and we had to redo some work."

You ask: "How much longer will the integration take?"
"I estimate by Wednesday of next week."

You adjust: "Let's track this daily. If it's not resolved by Wednesday, we'll escalate to the vendor account manager."

**Week 2 Progress:**

| Day | Planned Remaining | Actual Remaining | Observations |
|-----|------------------|------------------|--------------|
| Mon | 60 | 75 | Integration still ongoing |
| Tue | 48 | 70 | |
| Wed | 36 | 45 | Integration resolved! Team can now accelerate. |
| Thu | 24 | 25 | Good progress-15 points completed yesterday |
| Fri | 12 | 10 | Finished the sprint at 110 points (vs. 120 planned) |

**Sprint Result:** 110 out of 120 points completed. The team fell 10 points short, but the burn-down chart showed this from Week 1. You were able to:
1. Identify the issue in Week 1 (not at the end of the sprint)
2. Track it daily until resolution
3. Understand the true team velocity (110 points/sprint actual vs. 120 estimated)

**Future Sprint Planning:** Based on this data, you plan the next sprint for 110 points-using actual velocity instead of planned capacity. This is more realistic and prevents overcommitment.

## Case Study

**Organization:** A mobile game development studio ("PlayCraft") was developing a new multiplayer game. The program had 3 engineering teams, a design team, and a QA team. The production deadline was fixed: the game had to be ready for the holiday season.

**The Problem:** The studio used burn-down charts, but they weren't being used effectively. The charts were updated weekly (not daily), and the "ideal line" was never adjusted based on actual velocity. The result: every sprint, the actual line was above the ideal line, and every sprint, the team fell short. The burn-down charts were demoralizing because they always showed the team "behind."

**The TPM's Diagnosis:** The TPM, Lena, investigated:

1. **The ideal line assumed 100% utilization.** The team had 8 engineers × 10 days × 8 hours = 640 hours per sprint. But the team spent 20% of their time in meetings, code reviews, and unplanned bug fixes. The actual capacity was ~500 hours, but the ideal line used 640.

2. **The charts were updated weekly, not daily.** By the time a problem was visible on the chart, a full week (25% of the sprint) had passed.

3. **Scope was being added mid-sprint without updating the burn-down.** The chart showed "progress" (work completed) but didn't show "work added," making it look like the team was performing worse than reality.

**The Overhaul:**

**Step 1 - Calibrate the ideal line.** Lena analyzed the last 4 sprints and found the team's true velocity was 82 points per sprint (not 100). She adjusted the ideal line to 82 points:

| Before | After |
|--------|-------|
| Sprint planned: 100 points | Sprint planned: 82 points |
| Ideal line: 10 points/day | Ideal line: 8.2 points/day |
| Actual completion: 80 points | Actual completion: 78 points |
| Result: "Behind" 🟡 | Result: "Close to plan" 🟢 |

The same team, the same work-but the calibrated ideal line showed a much more accurate picture.

**Step 2 - Daily updates.** Lena made burn-down updates a part of the daily standup. The Scrum Master updated the chart each morning based on the previous day's progress. This took 2 minutes and revealed problems within 24 hours instead of 1 week.

**Step 3 - Track scope changes visibly.** Lena modified the burn-down chart to show scope additions:

```
Points
100 |                                   + [New feature added: +15 pts]
 85 |                               (actual remaining after addition)
 80 | X (start)   X (after addition)
    ───────────────────────
      Day 0      Day 5
```

Now the team could see: "We didn't lose 15 points of progress-we gained 15 points of scope." The burn-down chart told a more honest story.

**Step 4 - Use burn-down data for sprint planning.** After 3 sprints with the new system, Lena had reliable velocity data:

| Sprint | Planned | Completed | Velocity |
|--------|---------|-----------|----------|
| Sprint 5 | 80 | 78 | 78 |
| Sprint 6 | 82 | 85 | 85 |
| Sprint 7 | 82 | 80 | 80 |

**Average velocity: 81 points/sprint**

For Sprint 8, the team planned 80 points-and completed 82. For the first time in months, the actual line was *below* the ideal line.

**The Outcomes:**

- **The game shipped on time** for the holiday season
- **Sprint commitment accuracy improved** from 60% to 88% (percentage of sprints where completion was within 10% of commitment)
- **The burn-down chart became a useful tool** instead of a demoralizing one
- **The team's relationship with their velocity improved** - they stopped feeling "behind" and started understanding their real capacity
- **Lena's calibrated ideal line** was adopted as the standard across all studio projects

**Lessons Learned:**

1. **The ideal line must be based on actual data, not theoretical capacity.** Lena's 100-point sprint plans were set based on what the team *should* be able to do, not what they *actually* did. Using historical velocity data transformed the burn-down chart from an aspirational target into a realistic tracking tool.

2. **Daily updates are essential by the time you see a problem on a weekly burn-down, a week has already passed.** In a 2-week sprint, that's 50% of your window to act.

3. **Scope changes must be visible on the chart.** Mid-sprint scope additions are a reality in most programs. Hiding them makes the burn-down chart inaccurate. Making them visible makes the chart honest and starts important conversations about scope creep.

4. **Consistently being "behind" on the burn-down is usually a planning problem, not an execution problem.** If every sprint shows the actual line above the ideal, the ideal line is wrong. Adjust the plan.

5. **Burn-down charts should inform capacity planning, not the other way around.** Instead of saying "we need to complete 100 points" and hoping, use historical burn-down data to determine a realistic capacity. Plan to that capacity.

---

# 4. Velocity Metrics and Throughput

## Conceptual Foundation

**Velocity** is a measure of how much work a team completes in a given time period (typically a sprint). In Agile contexts, it's measured in story points. **Throughput** is a related but distinct concept-it measures the number of work items completed per unit of time (e.g., "5 user stories per week").

Think of velocity as **speed** and throughput as **volume**:

| Metric | What It Measures | Analogy |
|--------|-----------------|---------|
| **Velocity** | How much *effort* a team completes | Miles per hour |
| **Throughput** | How many *items* a team completes | Packages delivered |

For example:
- A team might have a velocity of 50 story points per sprint
- A different team might have a throughput of 8 user stories per sprint
- Team A's stories are larger (6.25 points each), Team B's are smaller

**Neither is better** - they're different measures for different purposes.

### Why Velocity and Throughput Matter for TPMs

| Reason | Explanation |
|--------|-------------|
| **Capacity planning** | [See: Capacity Planning] Historical velocity tells you how much to plan for in future sprints |
| **Predictability** | A stable velocity means predictable delivery. Unstable velocity means you're not in control. |
| **Team health** | Dropping velocity is often the first sign of team problems (burnout, technical debt, context-switching) |
| **Process improvement** | Tracking velocity over time shows whether process changes (e.g., new tools, team structure) are working |
| **Stakeholder communication** | "We deliver 50 points per sprint on average" is more credible than "We'll try to get it done as fast as possible" |

### The Key Principles of Velocity Tracking

| Principle | What It Means |
|-----------|---------------|
| **Velocity is a planning tool, not a performance metric** | If you use velocity to evaluate team performance, teams will inflate their estimates. It becomes a meaningless number. |
| **Compare a team to itself, not to others** | One team's 50 points is not comparable to another team's 50 points. Story points are relative, not absolute. |
| **Use historical data, not guessing** | A team's velocity for Sprint 6 should be based on Sprints 1–5, not on what you hope they can do. |
| **Expect velocity to stabilize over time** | New teams fluctuate. After 4–6 sprints, velocity typically stabilizes within ±15%. |
| **Track trends, not single sprints** | One sprint of low velocity is a data point. Three sprints of declining velocity is a pattern. |

## How to Track It

### Step 1: Establish Consistent Estimation

Velocity tracking only works if estimates are consistent. If the team uses story points:
- Agree on what different point values mean (e.g., 1 = trivial, 3 = small, 5 = medium, 8 = large, 13 = very large)
- Use relative sizing (compare to a reference story)
- Recalibrate if estimates drift over time

### Step 2: Track Completed Work Each Sprint

At the end of each sprint, count the story points of work that meets the team's definition of "Done." This is your sprint velocity.

| Sprint | Planned Points | Completed Points | Velocity | Notes |
|--------|---------------|------------------|----------|-------|
| 1 | 40 | 35 | 35 | Team still forming, learning to estimate |
| 2 | 40 | 42 | 42 | |
| 3 | 45 | 48 | 48 | |
| 4 | 50 | 40 | 40 | One team member was on PTO |
| 5 | 45 | 43 | 43 | |
| 6 | 45 | 46 | 46 | |

**Average velocity after 6 sprints:** (35 + 42 + 48 + 40 + 43 + 46) ÷ 6 = **42.3 points/sprint**

**Rolling average (last 3 sprints):** (40 + 43 + 46) ÷ 3 = **43 points/sprint** - more current, less influenced by early sprints

### Step 3: Calculate Throughput Separately

While velocity tracks effort (story points), throughput tracks item count:

| Sprint | Stories Completed | Average Points/Story |
|--------|------------------|---------------------|
| 1 | 8 | 4.4 |
| 2 | 10 | 4.2 |
| 3 | 11 | 4.4 |
| 4 | 9 | 4.4 |
| 5 | 10 | 4.3 |
| 6 | 11 | 4.2 |

**Average throughput:** 9.8 stories/sprint
**Average story size:** 4.3 points

### Step 4: Visualize Velocity Trends

Create a simple chart:

```
Velocity per Sprint
50 |              X
45 |     X     X        X     X
40 |  X              X
35 |
    ─────────────────────────
      S1   S2   S3   S4   S5   S6
```

Look for patterns:
- **Consistent** (±15%): Healthy team, reliable planning
- **Declining trend**: Investigate-burnout? Tech debt? Scope creep?
- **Increasing trend**: Team is improving-or estimates are getting inflated
- **Highly erratic**: Unstable team, process issues, inconsistent estimation

### Step 5: Use Velocity for Forecasting

With an average velocity of 42 points/sprint and 250 points of remaining work:

- **Expected remaining sprints:** 250 ÷ 42 = **5.9 sprints** (~12 weeks)
- **Optimistic (highest 3):** 250 ÷ 48 = **5.2 sprints** (~10.5 weeks)
- **Pessimistic (lowest 3):** 250 ÷ 35 = **7.1 sprints** (~14 weeks)

This range (10.5–14 weeks) is more useful than a single-point estimate ("it'll take 12 weeks"). It communicates uncertainty honestly.

### Common Pitfalls

1. **Using velocity for performance evaluation.** If you tell the team "Your velocity must increase 20% next quarter," they will start inflating estimates. The number loses meaning. Use velocity for planning, not evaluation.
2. **Comparing velocity across teams.** "Team A has velocity 50, Team B has velocity 30. Team A is better." Wrong. They estimate differently. Compare trends, not absolute numbers.
3. **Underestimating the impact of team changes.** A new team member joining or leaving affects velocity for 2–3 sprints as the team recalibrates.
4. **Not accounting for "sprint maintenance."** Some sprint capacity always goes to bug fixes, tech debt, and unplanned work. If velocity is dropping, check whether maintenance load is increasing.
5. **Ignoring variation.** A single sprint of 30 points when the average is 45 is not a crisis. But three consecutive sprints below 35 is.

## Realistic Example

**Scenario:** You're the TPM for a team building a new customer support ticketing system. The team has completed 6 sprints. You want to forecast when the remaining work will be done.

**Velocity History:**

| Sprint | Planned | Completed | Notes |
|--------|---------|-----------|-------|
| Sprint 1 | 45 | 38 | Team formation, estimation learning |
| Sprint 2 | 45 | 42 | More stable |
| Sprint 3 | 45 | 46 | Good sprint |
| Sprint 4 | 45 | 36 | Holiday week, reduced capacity |
| Sprint 5 | 45 | 44 | Back to normal |
| Sprint 6 | 48 | 47 | Team is improving |

**Analysis:**
- Average velocity: 42.2
- Rolling average (last 3): 42.3
- Lowest: 36 (holiday week)
- Highest: 47
- Range: 36–47 (22% variation - normal for a new team)

**Remaining work:** 280 story points in the backlog (items identified for the MVP)

**Forecast:**

| Scenario | Calculation | Result |
|----------|-------------|--------|
| Average velocity | 280 ÷ 42.2 | 6.6 sprints (~13 weeks) |
| Rolling velocity | 280 ÷ 42.3 | 6.6 sprints (~13 weeks) |
| Optimistic | 280 ÷ 47 | 6.0 sprints (~12 weeks) |
| Pessimistic (normalized) | 280 ÷ 38 | 7.4 sprints (~15 weeks) |

**Your report to stakeholders:**

> "Based on our current velocity of ~42 points per sprint, we expect to complete the remaining 280 points in approximately 13 weeks (late May). With normal variation, the realistic range is 12–15 weeks. We'll have a clearer picture after 2 more sprints as the team's velocity continues to stabilize. We're currently tracking against the late-May projection."

**This is more useful than saying "We'll be done in 13 weeks"** because it acknowledges uncertainty and sets a realistic range.

## Case Study

**Organization:** A fintech startup ("PayFlow") was building a new payment processing API. The company had 4 engineering teams, each with different velocity patterns. The CTO wanted to forecast when the entire platform would be ready for launch.

**The Problem:** Each team tracked their own velocity, but not consistently:

- Team A tracked story points but changed their estimation scale mid-program
- Team B switched from story points to hours and back again
- Team C didn't track velocity at all-they planned by "what feels right"
- Team D tracked velocity but didn't adjust their sprint plans when velocity changed

The CTO's question: "When will we be done?" had no reliable answer. Estimates ranged from "3 months" to "6 months" depending on who you asked.

**The Velocity Standardization:**

The TPM, Marcus, implemented a standardized velocity tracking system:

**Phase 1 - Establish consistent estimation.** Marcus worked with all 4 teams to adopt a shared estimation framework:

| Points | Meaning | Example |
|--------|---------|---------|
| 1 | Trivial (hours) | A simple text change |
| 2 | Small (half day) | A simple UI component |
| 3 | Medium (1–2 days) | A standard API endpoint |
| 5 | Large (3–5 days) | A feature with multiple components |
| 8 | X-Large (1–2 weeks) | A complex feature with dependencies |
| 13 | XX-Large (>2 weeks) | Must be broken down further |

**Phase 2 - Track velocity for 4 sprints.** Marcus collected baseline data:

| Sprint | Team A | Team B | Team C | Team D | Combined |
|--------|--------|--------|--------|--------|----------|
| Sprint 1 | 42 | 35 | 28 | 38 | 143 |
| Sprint 2 | 38 | 38 | 32 | 42 | 150 |
| Sprint 3 | 45 | 32 | 30 | 36 | 143 |
| Sprint 4 | 40 | 36 | 35 | 44 | 155 |

**Average combined velocity:** 147.8 points/sprint

**Phase 3 - Calculate remaining work.** The full backlog (scoped for MVP) had 890 story points remaining.

**Forecast:** 890 ÷ 147.8 = **6.0 sprints** (~12 weeks)

**Phase 4 - Model different scenarios.** Marcus presented the CTO with a range:

| Scenario | Calculation | Timeline |
|----------|-------------|----------|
| Average velocity | 890 ÷ 148 | 12 weeks |
| +10% velocity (improvement) | 890 ÷ 163 | 11 weeks |
| -10% velocity (fresh/estimation drift) | 890 ÷ 133 | 13 weeks |
| +1 team member per team | +15% capacity | 10.5 weeks (optimistic) |

**The outcome:** The CTO accepted the 12-week estimate with ±2 weeks of uncertainty. The forecast was updated after each sprint based on actual velocity. After Sprint 6, the adjusted forecast was 11 weeks (the team was improving faster than expected).

**During the program, velocity tracking revealed a problem:** Team B's velocity dropped from 38 to 28 between Sprints 2 and 4. Marcus investigated and found Team B was carrying the most technical debt-they were spending 30% of their sprint fixing bugs instead of building new features. He worked with the VP of Engineering to allocate a "tech debt sprint" for Team B, which restored their velocity to 35 by Sprint 6.

**The Outcomes:**

- **The platform launched in 13 weeks** (1 week past the 12-week forecast, within the projected range)
- **Velocity trend tracking caught Team B's decline 4 weeks early** - before it would have affected the launch date
- **The standardized estimation** was adopted across the company
- **The CTO's forecasting question was answered** with a credible, data-backed range instead of a guess

**Lessons Learned:**

1. **Velocity is only useful if estimation is consistent.** Marcus spent the first 2 weeks standardizing estimation across teams. Without this, the velocity numbers would have been incomparable and misleading.

2. **Track trends, not absolute numbers.** The absolute velocity (148 combined) mattered less than the trend (143, 150, 143, 155 - stable with slight improvement).

3. **Investigate velocity changes, don't just accept them.** Team B's velocity drop wasn't "random variation." It was a signal of an underlying problem (tech debt) that needed attention.

4. **Velocity forecasting works best with ranges, not single points.** The 12-week estimate with a ±2-week range was more useful than a single "12 weeks" would have been. Stakeholders could plan accordingly.

5. **Velocity data should inform, not dictate, decisions.** When the CTO saw the forecast, he had the information needed to make an informed decision: accept the timeline, add resources, or reduce scope. The data supported the decision without making it.

---

# 5. Service Level Agreements (SLAs)

## Conceptual Foundation

A **Service Level Agreement (SLA)** is a commitment to a specific level of service or performance. SLAs answer the question: **"What can stakeholders, customers, or dependent teams expect from us, and by when?"**

SLAs exist at different levels:

| Level | Definition | Example |
|-------|------------|---------|
| **Customer-facing** | Commitment to end users | "99.9% uptime" for a payment system |
| **Internal** | Commitment between teams | "Security team will complete reviews within 5 business days" |
| **Program** | Commitment within the program | "All critical bugs will be triaged within 4 hours" |

### Why SLAs Matter for TPMs

| Reason | Explanation |
|---------|-------------|
| **Predictability** | SLAs create predictable timelines for dependent teams and stakeholders |
| **Accountability** | A clear SLA means "we committed to this." No ambiguity. |
| **Priority setting** | SLAs help teams prioritize: a ticket with a 4-hour SLA gets attention before one with a 3-day SLA |
| **Trust building** | Consistently meeting SLAs builds trust with stakeholders and dependent teams |
| **Process improvement** | SLA tracking reveals bottlenecks: "We keep missing the 5-day security review SLA" tells you the process needs fixing |

### The Key Principles of SLAs

| Principle | What It Means |
|-----------|---------------|
| **SLAs must be measurable** | "Fast" is not an SLA. "Within 4 business hours" is. |
| **SLAs must be realistic** | An SLA you can't meet is worse than no SLA-it erodes trust |
| **SLAs need consequences** | What happens if an SLA is missed? (Escalation, notification, or contractual penalty) |
| **SLAs are negotiated, not imposed** | The team providing the service must agree the SLA is achievable |
| **SLAs should be reviewed and adjusted** | As teams improve (or get busier), SLAs may need to change |

## How to Track It

### Step 1: Define SLAs for Key Commitments

Work with teams to define SLAs for the most critical recurring activities:

| Activity | SLA Example | Rationale |
|----------|-------------|-----------|
| Code review | Within 24 hours during business days | Prevents code from piling up waiting for review |
| Security review | Within 5 business days | Security is often a bottleneck; a clear SLA manages expectations |
| Bug fix (critical) | Acknowledged within 4 hours, fix attempted within 24 hours | Critical bugs affect customers or block other work |
| Vendor response | Vendor must respond to inquiries within 48 hours | External dependency management |
| Deployment | Feature branch deployed to staging within 1 day of code completion | Prevents integration delay |

### Step 2: Track SLA Compliance

For each SLA, track:

| Metric | Example |
|--------|---------|
| **SLA** | Security review within 5 business days |
| **Requests this period** | 12 security reviews requested |
| **Met SLA** | 10 of 12 |
| **Missed SLA** | 2 of 12 |
| **Compliance rate** | 83% |
| **Target** | ≥90% |
| **Average response time** | 3.2 business days |
| **Longest response time** | 8 business days |

### Step 3: Monitor SLA Trends

| Period | Compliance | Trend |
|--------|------------|-------|
| Month 1 | 78% | - |
| Month 2 | 82% | ↑ Improving |
| Month 3 | 85% | ↑ Improving |
| Month 4 | 72% | ↓ Declining - investigate |

### Step 4: Address SLA Misses

When an SLA is missed:

1. **Notify affected stakeholders** - "The security review for X was delayed. We expect it by [date]."
2. **Investigate root cause** - Why was it missed? (Overloaded team, unclear requirements, tooling issues, absent team member)
3. **Implement corrective action** - How will you prevent recurrence?
4. **Consider SLA adjustment** - If the SLA is consistently missed, the target may be unrealistic and needs renegotiation

### Common Pitfalls

1. **Setting SLAs without stakeholder input.** The security team agrees to a 5-day SLA. But the product team needed it in 2 days. The SLA didn't solve the mismatch-it just formalized it. SLAs must be negotiated between provider and consumer.
2. **Tracking SLAs but not acting on misses.** If you track SLAs but don't investigate or address misses, you're collecting data without creating value.
3. **Too many SLAs.** If everything has an SLA, nothing has an SLA. Focus on the 5–10 most critical recurring activities.
4. **SLA targets that never change.** If a team consistently achieves 95%+ on an SLA, the target may be too easy. Consider tightening it. If a team consistently achieves <70%, the target may be unrealistic. Renegotiate.
5. **Confusing SLAs with commitments.** An SLA is a standing commitment for ongoing activities (e.g., "code reviews within 24 hours"). A commitment is a one-time promise for a specific deliverable (e.g., "API will be ready by March 15"). They're different.

## Realistic Example

**Scenario:** As the TPM for a platform program, you notice a recurring pattern: the Security team is a bottleneck. Every feature, architecture change, and vendor integration needs a security review, and teams are waiting 2–3 weeks for responses.

You propose implementing an SLA: **Security team will complete standard reviews within 5 business days.**

**Step 1 - Negotiate the SLA.** You meet with the Security Lead, Priya:

> "I'd like to establish a 5-business-day SLA for standard security reviews. Is that achievable?"

Priya: "That depends. If we get 3 reviews a week, yes. If we get 10, no. And 'standard' needs to be defined-some reviews are simple, some are complex."

You agree on:
- **Standard reviews:** Features that don't involve new data handling or payment processing - **5 business days**
- **Complex reviews:** Features involving sensitive data, payments, or new vendors - **10 business days**
- **Expedited reviews:** Critical security patches - **24 hours**

**Step 2 - Track compliance.**

| Month | Standard Reviews | Met SLA (5 days) | Compliance | Notes |
|-------|-----------------|-------------------|------------|-------|
| Jan | 8 | 6 | 75% | Team adjusting to new process |
| Feb | 10 | 8 | 80% | Still below 90% target |
| Mar | 12 | 11 | 92% | Improving; team found efficiencies |
| Apr | 7 | 7 | 100% | Low volume month |
| May | 14 | 10 | 71% | Declining-investigate |

**Step 3 - Investigate May's decline.** Four reviews missed the SLA. You investigate:

- 2 were delayed because the assigned reviewer was on PTO and no backup was assigned
- 1 was delayed because the submission was incomplete (missing architecture diagram)-the review timer shouldn't have started
- 1 was legitimately complex and should have been categorized as a "complex review" (10 days)

**Step 4 - Implement fixes.**

1. **Backup reviewer assigned** - For every reviewer on PTO, a backup is designated in advance
2. **Submission checklist created** - Teams must submit a complete package (architecture diagram, data flow, dependencies) before the SLA timer starts
3. **Clearer categorization** - Security team defines specific criteria for "standard" vs. "complex" reviews so fewer are miscategorized

**The Outcome:** SLA compliance stabilized at 88–94% for the remaining months. Teams could plan around the 5-day SLA for standard reviews and 10 days for complex ones. The bottleneck was managed-not eliminated, but made predictable.

## Case Study

**Organization:** A large enterprise software company ("EnterpriseSoft") had a program to build a new customer-facing API platform. The program involved 6 engineering teams, each with dependencies on a central Platform Team that managed shared infrastructure, authentication, and deployment pipelines.

**The Problem:** The Platform Team was a bottleneck for all 6 teams. Every team needed:
- Infrastructure provisioning (2–3 days per request)
- Deployment pipeline setup (3–5 days)
- Authentication integration support (1–3 days)
- Performance testing environment reservation (1–2 days)

The problem wasn't that the Platform Team was slow-it was that **their capacity was unknown.** Teams never knew when a request would be fulfilled. Some requests took 1 day; others took 2 weeks. This unpredictability made planning impossible.

**The SLA Solution:**

The TPM, Anita, proposed establishing SLAs for the Platform Team's most common services.

**Phase 1 - Define SLAs with the Platform Team.** Anita worked with the Platform Lead to define achievable SLAs based on historical data:

| Service | Historical Average | Proposed SLA | Notes |
|---------|-------------------|-------------|-------|
| Provision development environment | 2.5 days | 3 business days | Most common request |
| Set up deployment pipeline | 4.1 days | 5 business days | Requires more coordination |
| Authentication integration support | 1.8 days | 2 business days | Typically straightforward |
| Reserve performance test environment | 1.3 days | 24 hours | Simple request, often urgent |
| Escalated production issue response | - | 1 hour | Critical only |

**Phase 2 - Track and publish SLA compliance.** Anita created a simple dashboard:

```
PLATFORM TEAM SLA DASHBOARD - Q2
╔════════════════════════════════════════════════════╗
║ Service               SLA      Met/Missed    %    ║
║────────────────────────────────────────────────────║
║ Dev env provisioning  3 days   18/22        82%   ║
║ Pipeline setup        5 days   12/15        80%   ║
║ Auth support          2 days   8/9          89%   ║
║ Test env reservation   24 hrs   14/16        88%   ║
╚════════════════════════════════════════════════════╝
```

**Phase 3 - Build team planning around SLAs.** Now each feature team could plan:

> "We need a dev environment for our next feature. According to the SLA, that will take 3 business days. So we'll submit the request on Monday and plan to start work on Thursday."

**Phase 4 - Address SLA misses.** The Platform Team noticed their dev environment provisioning SLA was being missed (82%). Root cause: some requests were for standard environments (quick), some for complex environments with special security requirements (slow). They created two tiers:

| Tier | SLA | % of Requests |
|------|-----|---------------|
| Standard environment | 2 business days | 70% |
| Complex environment | 5 business days | 30% |

This immediately improved SLA compliance: standard environments hit 94%, complex ones hit 75%.

**The Outcomes:**

- **Team planning became predictable.** Feature teams knew how long Platform services would take and could schedule accordingly.
- **Platform Team workload became visible.** The SLA dashboard showed that the team was operating at 80–89% capacity-close to their limit.
- **Request volume increased 30%** - but the team maintained their SLAs by improving their processes
- **Stakeholder satisfaction with the Platform Team increased** from 2.8/5 to 4.3/5
- **The SLA framework was adopted by 3 other internal platform teams**

**Lessons Learned:**

1. **SLAs transform unpredictability into predictability.** The Platform Team wasn't slower after SLAs-but they became predictable. Teams could plan around them. That predictability was more valuable than speed.

2. **Tiered SLAs are better than one-size-fits-all.** Standard vs. complex tiers allowed the team to set realistic expectations for different types of work.

3. **SLA tracking must be visible.** The dashboard was shared with all 6 feature teams and the VP of Engineering. Transparency built trust.

4. **SLAs expose capacity constraints.** The 80–89% compliance rate told leadership: "The Platform Team is at capacity. If you want faster service, you need more resources." This was a data-backed argument for hiring.

5. **SLAs negotiate the tension between "fast" and "thorough."** Before SLAs, the tension between speed (feature teams want it now) and thoroughness (Platform wants to do it right) was unresolved. SLAs made the tradeoff explicit and manageable.

---

# 6. Delivery Cadence and Program Health Dashboards

## Conceptual Foundation

A **program health dashboard** is a consolidated, visual display of the key metrics that indicate how a program is performing. It answers the question: **"At a glance, what's the state of our program?"**

Think of it like the dashboard of an airplane. The pilot doesn't need to check every gauge to know the plane is flying okay. They look at the key instruments: altitude, speed, fuel, engine status, heading. If any of these is in the red, they investigate. If all are green, they continue.

A good program health dashboard does the same for your program: flags problems early, communicates status instantly, and focuses attention on what matters.

### The Key Components of a Good Dashboard

| Component | What It Does | Example |
|-----------|-------------|---------|
| **Status indicators** | Immediate readability | 🟢 🟡 🔴 per metric |
| **Trend arrows** | Direction of travel | ↑ improving, ↓ declining, → stable |
| **Target vs. actual** | Comparison to goal | "Target: 85% Actual: 82%" |
| **Time horizon** | How far back you're looking | "Last 4 weeks" |
| **Action items** | What to do about problems | "Escalate network latency issue to infra" |

### Why Delivery Cadence Matters

**Delivery cadence** is the rhythm at which value is delivered. A consistent cadence (e.g., "we ship something every 2 weeks") builds trust, predictability, and momentum. A chaotic cadence erodes all three.

A program health dashboard should always include a delivery cadence metric:

| Cadence Metric | What It Measures | Good | Bad |
|----------------|------------------|------|-----|
| Sprint completion rate | % of planned work completed | 80%+ | <60% |
| Release frequency | How often value is shipped | Every 2–4 weeks | Irregular |
| Milestone hit rate | % of milestones achieved on time | 85%+ | <70% |

## How to Track It

### Step 1: Select 6–10 Dashboard Metrics

Don't try to put everything on one dashboard. Choose the metrics that matter most:

**Suggested starter dashboard:**

| Section | Metric | Type | Why |
|---------|--------|------|-----|
| **Schedule** | Milestone completion rate | Lagging | Are we hitting our major checkpoints? |
| **Schedule** | Sprint burndown variance | Leading | Are individual sprints on track? |
| **Scope** | Change request volume | Leading | Is scope stable or growing? |
| **Quality** | Critical open defects | Lagging | Are we accumulating technical debt? |
| **Risk** | Open risk count (high/critical) | Leading | Are we carrying dangerous uncertainty? |
| **Team** | Team satisfaction score | Leading | Is the team healthy and sustainable? |
| **Delivery** | Release value delivered | Lagging | Did we actually ship value to users? |

### Step 2: Define the Data Collection Process

Each metric needs:
- **Data source** (Jira, survey, manual tracker)
- **Update frequency** (daily, weekly, monthly)
- **Owner** (who ensures the data is accurate)
- **Target** (what "good" looks like)

### Step 3: Build the Dashboard

**Simple dashboard format:**

```
PROGRAM HEALTH DASHBOARD
Program: Customer Portal Redesign
Date: March 15, 2026
Status: 🟡 AMBER

╔══════════════════════════════════════════════════════╗
║ METRIC                      TARGET  CURRENT  TREND  ║
║─────────────────────────────────────────────────────║
║ 🟢 Milestone completion      ≥85%    88%      ↑    ║
║ 🟡 Sprint completion         ≥80%    72%      ↓    ║
║ 🟢 Scope changes/month       <5      3        →    ║
║ 🔴 Critical open defects      <3     7        ↑    ║
║ 🟡 Open critical risks        <5     6        →    ║
║ 🟢 Team satisfaction          ≥4/5   4.1/5    →    ║
╚════════════════════════════════════════════════════╝

KEY ACTIONS:
1. [🔴] Critical defects (7): Investigate root cause. All defects are in the search module.
   Assign extra QA resources this sprint.
2. [🟡] Sprint completion (72%): Team capacity reduced by PTO. Plan next sprint at 80% of normal.
3. [🟡] Open risks (6): 2 risks being mitigated this week. 4 remaining.
```

### Step 4: Establish a Review Rhythm

| Frequency | Who | What to Cover |
|-----------|-----|---------------|
| **Daily** | Team leads | Sprint-level metrics, blockers |
| **Weekly** | Program team | Full dashboard, trend analysis, decisions |
| **Monthly** | Stakeholders | Dashboard summary, key changes, forward look |
| **Quarterly** | Leadership | Strategic review, KPI reset, lessons learned |

### Step 5: Drive Action from the Dashboard

The dashboard is not a reporting tool-it's a **decision-making tool.** Every 🔴 or declining 🟡 should have:
1. A root cause identified
2. An owner assigned
3. An action plan with a due date

If a metric is red for 3+ consecutive weeks without improvement, escalate.

### Common Pitfalls

1. **Dashboard without action.** If you build a dashboard but don't use it to drive decisions, it's decoration. The value comes from the *conversations* the dashboard enables, not the dashboard itself.
2. **Too much data.** A dashboard with 30 metrics is not a dashboard-it's a spreadsheet. The point is to highlight what needs attention, not to capture everything.
3. **Stale data.** A dashboard that's updated monthly is a quarterly report, not a management tool. Update at least weekly.
4. **No targets.** "Milestone completion: 88%" means nothing without context. "Target: ≥85%" tells you whether 88% is good or bad.
5. **Cherry-picking metrics.** If you only show the metrics that look good, the dashboard loses credibility. Include the red metrics. The trust comes from honesty.

## Realistic Example

**Scenario:** You're the TPM for a 9-month program building a new customer analytics platform. You want to create a program health dashboard that you and the team can use weekly.

**Your Dashboard:**

```
PROGRAM HEALTH DASHBOARD - Q2 2026
Program: Customer Analytics Platform
TPM: Jamie
Date: May 15, 2026
Overall Status: 🟡 AMBER (1 red, 2 yellow, 3 green)

SCHEDULE                   TARGET  CURRENT  TREND  STATUS
  Milestone completion     ≥85%    78%      ↓      🟡
  Sprint burndown (avg)    ±10%    -15%     →      🟡

SCOPE & QUALITY
  Scope change requests    <3/mo   4/mo     ↑      🟡
  Critical open defects    <5      8        ↑      🔴
  Test pass rate           >95%    97%      →      🟢

RISK & TEAM
  Open critical risks      <3      2        ↓      🟢
  Team satisfaction        ≥4/5    4.3/5    →      🟢

DELIVERY
  Features delivered       On plan  On plan  →      🟢
```

**What the Dashboard Reveals:**

1. **🔴 Critical open defects (8 vs. target <5):** All 8 are in the new data visualization module. Root cause: the module was rushed to meet a milestone. The QA lead is concerned.

2. **🟡 Sprint burndown (-15% vs. target ±10%):** The team has been consistently behind plan for 3 sprints. Not a crisis, but a concerning trend.

3. **🟡 Milestone completion (78% vs. target 85%):** Related to the sprint issue. Two milestones slipped by 1–2 weeks each.

4. **🟢 Team satisfaction (4.3/5):** Despite the delivery pressure, the team is satisfied. Good sign.

**Actions:**

1. **Critical defects:** Assign 2 engineers to focus exclusively on the visualization module bugs for the next sprint. Defer 1 non-critical feature to free up capacity.
2. **Sprint burndown:** Reduce next sprint's commitment by 15% to account for the actual velocity. Reassess after 2 sprints.
3. **Escalate:** Inform the VP of Engineering that the visualization module needs attention but the team is handling it.

**The Outcome:** The dashboard created a shared understanding of the program's health. The red defect count was visible to everyone, not hidden. The team could see their sprint issue and adjust accordingly. Stakeholders trusted the amber status because they could see the specific issues.

## Case Study

**Organization:** A cloud infrastructure company ("ScaleStack") was building a new managed Kubernetes service-a complex 14-month program involving 7 engineering teams, 3 product managers, and dependencies on 4 external vendors.

**The Problem:** The program had been running for 8 months without a consolidated health view. Each team reported status differently:
- Team A sent a narrative email
- Team B used a Jira dashboard
- Team C presented 20 slides every 2 weeks
- Team D said "we're fine" and nothing else

The program sponsor (VP of Product) couldn't get a clear answer to the simplest question: **"How is the program doing?"**

**The Dashboard Solution:**

The TPM, Elena, built a unified program health dashboard.

**Phase 1 - Define the metrics (1 week).** Elena interviewed the program sponsor, each team lead, and key stakeholders. She asked: "What are the 3 things you most need to know about this program at a glance?"

From these interviews, she identified 8 universal metrics that mattered to everyone:

| Metric | Why Everyone Needs It |
|--------|----------------------|
| Overall program status | RAG summary of health |
| Milestone completion | High-level schedule view |
| Critical path health | Is the longest dependency chain on track? |
| Budget utilization | Are we spending as planned? |
| Team satisfaction | Is the team sustainable? |
| Defect trend | Is quality under control? |
| Risk count | How much uncertainty exists? |
| External dependency health | Are vendors on track? |

**Phase 2 - Build the dashboard (2 days).** Elena used a simple Google Sheets dashboard with conditional formatting:

```
OVERALL STATUS: 🟢 GREEN

SCHEDULE: 🟢 (6/8 milestones on track, 2 within buffer)
BUDGET: 🟢 (47% spent at 50% timeline - under budget)
QUALITY: 🟡 (open defects 12, slightly above target of 10)
RISK: 🟢 (3 critical risks, within acceptable range)
TEAM: 🟢 (satisfaction 4.2/5)
VENDORS: 🟡 (1 vendor slightly behind, escalated)
```

**Phase 3 - Establish the review rhythm (ongoing).**

| Cadence | What |
|---------|------|
| **Weekly** | Elena updates the dashboard (30 minutes every Friday) |
| **Weekly** | Program team reviews the dashboard in Monday's sync (15 minutes) |
| **Bi-weekly** | Elena presents the dashboard to the program sponsor (10 minutes) |
| **Monthly** | Full dashboard review with all stakeholders (30 minutes) |

**Phase 4 - Handle the first red alert.** In Month 10, the vendor dependency metric turned red. A cloud infrastructure vendor changed their pricing model, which increased ScaleStack's costs by 25% for a critical component.

The dashboard made this red metric immediately visible. Elena:
1. Updated the vendor dependency status to 🔴
2. Created an action item: "Negotiate with vendor or identify alternative. Owner: Vendor Manager. Due: 2 weeks."
3. Escalated to the VP of Engineering
4. The VP authorized the Vendor Manager to negotiate a new contract

**The Outcome (6 months later):**

- **The program launched in Month 15** (1 month past the original 14-month plan)
- **The dashboard was credited** with catching the vendor pricing issue 3 months before it would have been discovered under the previous "narrative email" system
- **The program sponsor finally had visibility:** "I used to ask 5 people for status. Now I look at the dashboard."
- **The dashboard was adopted** as the standard for all major programs at the company

**Lessons Learned:**

1. **A dashboard is a communication tool, not a data tool.** Elena's dashboard was valuable not because it had better data than Jira, but because it consolidated data from multiple sources into one place that everyone could see.

2. **Consistency matters more than perfection.** The dashboard wasn't perfect in Month 1. But it was consistent. Stakeholders knew where to find it and when it would be updated. This consistency built trust.

3. **The dashboard should be built for the audience that needs it most.** Elena's primary audience was the program sponsor (VP level). She designed the dashboard for a 30-second scan, not a deep dive.

4. **Red metrics are the dashboard's reason for existence.** If everything is always green, the dashboard isn't telling you anything useful. Elena explicitly told the team: "Red means we'll discuss a solution. It doesn't mean someone's in trouble." This encouraged honest reporting.

5. **A dashboard without a review rhythm is a poster.** The dashboard was useful because it was reviewed weekly in a meeting where decisions got made. Without the review rhythm, it would have been decoration.

---

# Conclusion: Building Your Metrics Practice

These six frameworks-KPIs, OKR tracking, burn-down charts, velocity, SLAs, and program health dashboards-are the essential tools for measuring and tracking program execution. They work together:

| Framework | Input From | Output To |
|-----------|-----------|----------|
| **KPIs** | Program goals | Dashboard metrics, OKR targets |
| **OKR tracking** | KPIs, Velocity | Quarterly review, Strategy |
| **Burn-down charts** | Sprint planning, Velocity | Capacity planning, Stakeholder updates |
| **Velocity & Throughput** | Sprint data | Burn-down projections, Capacity planning |
| **SLAs** | Team agreements | Dashboard metrics, Stakeholder expectations |
| **Program health dashboards** | All of the above | Decision-making, Stakeholder communication |

### A Beginner's Learning Path

**Month 1:** Start with **KPIs** and a **program health dashboard.** Define 5–7 KPIs for your current program. Build a simple dashboard. Review it weekly.

**Month 2:** Add **velocity tracking.** If your team uses sprints, start tracking velocity. If not, track throughput (stories completed per week). After 4–6 data points, use this to inform planning.

**Month 3:** Implement **burn-down charts.** Use your velocity data to create realistic ideal lines. Update daily. Use the chart in standups.

**Month 4:** Introduce **SLAs** for the most critical recurring activities. Start with 3 SLAs. Track compliance and address misses.

**Month 5:** Practice **OKR tracking** with confidence scoring. If your organization uses OKRs, become the person who tracks progress weekly and identifies misalignment.

**Month 6+:** Integrate all six frameworks into a single metrics practice. Your dashboard should draw on KPI targets, OKR progress, velocity trends, burn-down data, and SLA compliance.

### The Most Important Thing

**Metrics are for learning, not for judging.** If you use metrics to evaluate performance, people will game the numbers. If you use metrics to understand what's happening and make better decisions, people will help you keep them accurate.

The best TPMs build a metrics practice that:
- Creates visibility, not surveillance
- Drives conversation, not reporting
- Surfaces problems early, not after they've become crises
- Builds trust, not fear

---

*This guide was developed for beginners building TPM metrics and execution tracking skills. It reflects practices used across software, infrastructure, and platform programs at organizations ranging from startups to large enterprises. The frameworks and examples are drawn from real TPM practice.*
