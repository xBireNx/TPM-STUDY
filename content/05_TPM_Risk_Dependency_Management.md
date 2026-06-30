# 🛡️ TPM Risk & Dependency Management: A Complete Field Guide

> **Audience:** Beginners entering the TPM role (little to no TPM experience)  
> **Purpose:** Build mastery in 5 core domains of risk and dependency management  
> **Read time per domain:** ~20–25 minutes | **Total:** ~100–125 minutes  
> **Format:** Each domain = Framework → Realistic Example → Case Study → Implementation Playbook

---

## How to Use This Guide

This field guide covers the five domains of risk and dependency management that TPMs deal with daily. Each domain is structured as a self-contained module:

1. **Framework** - A clear, step-by-step methodology you can apply immediately
2. **Realistic Example** - A concrete scenario with specific numbers, timelines, and stakeholder dynamics
3. **Case Study** - A multi-faceted situation showing how the framework handles real complexity
4. **Implementation Playbook** - A condensed, repeatable set of actions you can reference under pressure

**The five domains in order of practice:**

| Domain | When You'll Use It | Why It Matters |
|--------|-------------------|----------------|
| Risk Identification | Day 1 of any program | You can't manage what you haven't identified |
| Risk Mitigation | After identification | Identifying risks is useless without acting on them |
| Dependency Mapping | When coordinating across teams | Dependencies are the #1 source of program delays |
| Escalation | When a risk or issue needs attention above your level | Poor escalation is as bad as no escalation |
| Change Management | When plans shift (always) | Changes cascade through dependencies and risk profiles |

> **A note for absolute beginners:** Don't try to master all five domains at once. Start with Risk Identification and practice it for a week. Add Dependency Mapping next. Build up to the others as you gain confidence. Each domain builds on the previous one.

---

## Table of Contents

1. [Risk Identification](#1-risk-identification)
2. [Risk Mitigation](#2-risk-mitigation)
3. [Dependency Mapping](#3-dependency-mapping)
4. [Escalation](#4-escalation)
5. [Change Management](#5-change-management)

---

# 1. Risk Identification

## Framework

### Why This Matters Above All Else

Risk identification is the foundation of everything else you'll do as a TPM. If you fail to identify a risk, you cannot mitigate it. If you cannot mitigate it, it will become an issue. If it becomes an issue, your program is in reactive crisis mode.

The difference between an experienced TPM and a novice is that the experienced TPM has identified 80% of the risks that will materialize before they happen. The novice discovers them when they become issues.

**The goal of risk identification is not to predict everything perfectly.** That's impossible. The goal is to establish a **systematic practice** that surfaces risks early enough to act on them.

### The Risk Identification Framework (5-Step Method)

#### Step 1: Scan the Five Risk Domains

Risks exist in five categories. Use this as a mental checklist:

| Domain | What to Look For | Example Questions |
|--------|------------------|-------------------|
| **Technical** | Architecture, technology choices, integration complexity, performance, security | "Is this technology proven?" "How complex is this integration?" |
| **Organizational** | Team capacity, turnover, stakeholder alignment, decision speed | "Does the team have the right skills?" "Are stakeholders aligned on priorities?" |
| **Dependency** | External teams, vendors, third-party APIs, data feeds | "What do we need from others that we don't control?" "What if they're late?" |
| **Timeline** | Estimation accuracy, milestone density, buffer adequacy | "Are estimates based on data or hope?" "Is there enough buffer?" |
| **External** | Regulatory changes, market shifts, competitor moves, economic factors | "What regulations might affect us?" "What if a competitor launches first?" |

**Your first week on any program:** Go through each domain and ask the team to list everything that could go wrong. Don't filter yet. Just capture.

#### Step 2: Use Multiple Elicitation Techniques

Don't rely on a single method to surface risks. Use at least three:

| Technique | How It Works | Best For |
|-----------|--------------|----------|
| **Individual interviews** | One-on-one with each team lead, engineer, and stakeholder | Surfacing risks people won't raise in a group |
| **Brainstorming sessions** | Group session with the program team | Getting breadth of risks quickly |
| **Pre-mortem** | "It's 6 months from now and the program has failed. What caused it?" | Overcoming optimism bias |
| **Checklist review** | Go through historical risk lists from similar programs | Ensuring you don't miss common risks |
| **Assumption surfacing** | List every assumption you're making; each assumption is a potential risk | Identifying hidden risks |

**The pre-mortem is the single most effective technique.** Studies show it identifies 30–50% more risks than standard brainstorming. Here's how to run one:

1. Gather the program team (6–12 people)
2. Say: "It's [future date]. Our program has been delivered, and it has failed catastrophically. The CEO is furious. Write down everything that went wrong."
3. Give everyone 5 minutes to write silently
4. Collect all responses on a whiteboard
5. Group similar risks
6. Add the top 10–15 to your risk register

#### Step 3: Distinguish Risks from Issues and Assumptions

A common beginner mistake is conflating these three categories. They require different responses:

| Category | Definition | Example | What to Do |
|----------|------------|---------|------------|
| **Risk** | Something that *might* happen | "The third-party API might be rate-limited" | Mitigate or monitor |
| **Issue** | Something that *has already* happened | "The third-party API is rate-limiting us right now" | Resolve immediately |
| **Assumption** | Something you believe to be true without proof | "We assume the API supports 1,000 requests/minute" | Validate as soon as possible |

A validated assumption is no longer a risk. An unvalidated assumption is a ticking time bomb.

#### Step 4: Capture Every Risk in a Structured Register

Create a risk register with these columns:

| Field | What to Put | Example |
|-------|-------------|---------|
| **ID** | Unique identifier | R-001 |
| **Date Identified** | When it was first captured | 2026-03-15 |
| **Risk Description** | What could happen | "Vendor API may be deprecated before launch" |
| **Category** | Technical / Organizational / Dependency / Timeline / External | Dependency |
| **Probability** | H (high) / M (medium) / L (low) | M |
| **Impact** | H (high) / M (medium) / L (low) | H |
| **Score** | P × I (9, 6, 3, 2, 1) | 6 |
| **Owner** | Person responsible for managing this risk | S. Chen |
| **Status** | Open / Monitoring / Mitigating / Closed | Open |
| **Notes** | Context, related risks, mitigation ideas | "Check vendor roadmap for deprecation notices" |

**Rule of thumb:** A program should have 15–30 active risks at any time. Fewer than 10 and you're probably missing things. More than 50 and you're not closing items.

#### Step 5: Establish a Risk Review Cadence

| Frequency | Who | What to Cover |
|-----------|-----|---------------|
| **Weekly** | Program team | New risks, status changes, action items |
| **Monthly** | Stakeholders | Top 10 risks, risk trends, escalation candidates |
| **Quarterly** | Leadership | Risk profile changes, program-level risk assessment |

The weekly review is critical. It takes 10–15 minutes. Ask:
- "Any new risks since last week?"
- "Any changes to existing risks (probability, impact, status)?"
- "Are we making progress on mitigation actions?"

### Implementation Playbook: Risk Identification

**When you join a new program or start a new phase, do this immediately:**

```
RISK IDENTIFICATION PLAYBOOK

□ Schedule 1:1s with: Engineering Lead, Product Manager, Design Lead, QA Lead, each team lead
  Ask each: "What keeps you up at night about this program?"

□ Run a pre-mortem with the full program team (45 minutes)
  "The program failed. Why?"
  Collect, group, and prioritize the causes

□ Scan the 5 risk domains systematically
  Technical | Organizational | Dependency | Timeline | External
  Identify at least 3 risks per domain

□ Distinguish risks from issues and assumptions
  Move existing issues to an issues log
  Add unvalidated assumptions to a tracking list

□ Build your initial risk register (target: 15–25 risks)
  Each risk needs: description, category, P/I score, owner

□ Establish your review cadence
  Weekly team review (15 min)
  Monthly stakeholder review (30 min)

□ Share the risk register with the team
  Transparency builds more identification
  "Here's what we're watching-what am I missing?"
```

## Realistic Example

**Scenario:** You're a new TPM joining a program that's been running for 3 months. The program is building a customer-facing analytics dashboard for a SaaS platform. There are 3 engineering teams (~15 people), a design team, a product manager, and stakeholders from Sales, Marketing, and Customer Success.

**Your first week:** You notice there's no risk register. Stakeholders say "the program is going well." You decide to do a structured risk identification exercise.

**Step 1 - Individual interviews.** You meet with each team lead and key stakeholder. Here's what you learn:

- **Engineering Lead (Backend):** "The data pipeline team is stretched thin. They're supporting 3 other programs. If we need changes to the data schema, it could take weeks."
- **Engineering Lead (Frontend):** "We're using a new charting library that no one on the team has used before. There's a learning curve."
- **Product Manager:** "Sales has been promising features to enterprise customers that aren't in the scope. I'm worried about feature creep."
- **QA Lead:** "We don't have a dedicated test environment. We're sharing with another program, and conflicts are increasing."
- **Sales Director:** "My team is telling customers the dashboard will launch in Q2. Is that realistic?"

**Step 2 - Pre-mortem with the team.** You run a 45-minute pre-mortem. The team generates 22 potential failure causes. The top 5 after grouping:

1. Data pipeline team becomes a bottleneck (6 votes)
2. Performance issues when dashboard scales to real customer data (5 votes)
3. New charting library causes unexpected delays (4 votes)
4. Feature creep from Sales commitments (3 votes)
5. Test environment conflicts delay QA (2 votes)

**Step 3 - Scan the 5 domains.** You fill in gaps using the domain checklist:

| Domain | Risk Added |
|--------|------------|
| Technical | Real-time data refresh may not perform at scale |
| Organizational | Engineering lead is the only person who knows the full system architecture (bus factor) |
| Dependency | Data pipeline team is shared across 4 programs-resource contention |
| Timeline | Q2 launch date was set by Sales without engineering input |
| External | Competitor launching similar feature may shift stakeholder expectations |

**Step 4 - Build the risk register.** You create the initial register with 18 risks:

| ID | Risk | P | I | Score | Owner |
|----|------|---|---|-------|-------|
| R-001 | Data pipeline team becomes a bottleneck (shared resource) | H | H | 9 | TPM (you) |
| R-002 | Frontend team is unfamiliar with new charting library | M | M | 4 | Frontend Lead |
| R-003 | Feature creep from Sales promises to enterprise customers | H | M | 6 | Product Manager |
| R-004 | No dedicated test environment (shared with other program) | M | H | 6 | QA Lead |
| R-005 | Dashboard performance may not scale to real customer data | M | H | 6 | Backend Lead |
| R-006 | Single point of failure: Engineering Lead knows full architecture | M | H | 6 | Engineering Lead |
| ... | (12 more risks) | | | | |

**Step 5 - Present to stakeholders.** In the weekly program sync, you present:
- "We now have an active risk register with 18 items"
- "The top 3 risks requiring attention: R-001 (data pipeline), R-003 (scope creep), R-004 (test environment)"
- "I've assigned owners to each risk. Please review and confirm your assignments."

**The outcome:** Before this exercise, the team had no systematic risk awareness. After:
- The data pipeline team's manager is now aware of the contention and has committed to a weekly check-in
- The Product Manager has scheduled a meeting with Sales to align on scope
- The QA Lead has escalated the test environment issue to the IT team
- The risk register is reviewed at every weekly sync, 15 minutes, standing agenda item

## Case Study

**Organization:** A fintech startup ("PayQuick") with 80 employees was building a real-time payment processing system. The program was the company's most critical initiative-if it succeeded, it would open a new revenue stream. If it failed, the company's Series A runway would be seriously depleted.

**The Teams:** 4 engineering teams (24 engineers total), plus product, compliance, security, and partnerships.

**The Problem Before the Framework:** The program had been running for 4 months with no formal risk identification. The CEO was optimistic. The engineering leads were confident. The investors were impatient.

Then three things happened in quick succession:

1. **The compliance team discovered** that the payment system needed regulatory approval from 3 different state agencies. This had been considered an "assumption" (we'll get approval easily). It was actually a high-risk, long-lead-time requirement.

2. **The bank partnership deal** fell through. The partner bank was acquired, and the new owner had different priorities. The entire integration with that bank-20% of the payment system's planned coverage-was now at risk.

3. **Two senior engineers quit** within 2 weeks of each other. They had been the primary architects of the payment processing logic. Their departure created a critical knowledge gap.

**All three of these could have been identified as risks months earlier.** None were in any risk register because there was no risk register.

**The Intervention:** A new TPM, Marcus, was brought in as a contractor to get the program back on track. His first action: a comprehensive risk identification exercise.

**Marcus's Approach:**

**Step 1 - Interview everyone.** Marcus spent his first 5 days interviewing every team lead, every senior engineer, product, compliance, security, and the CEO. He didn't ask "what's the status?" He asked "what worries you?"

Key discoveries from interviews:
- Compliance had been "nudging" the program for months about regulatory approvals but felt no one was listening
- The bank partnership had been fragile for weeks-the acquisition talks were industry gossip
- The two engineers who quit had been talking about leaving for months; no one had flagged the retention risk
- The security team had identified 12 vulnerabilities in the architecture but hadn't raised them because "everyone seems busy"

**Step 2 - Run a pre-mortem (2 sessions).** Marcus ran a pre-mortem with the engineering team (Session 1) and another with the product + business team (Session 2). Combined, they identified 47 risks.

**Step 3 - Categorize and triage.** Marcus grouped the 47 risks and prioritized:

| Category | Count | Highest Priority |
|----------|-------|------------------|
| Technical | 15 | Payment processing logic knowledge gap (R-001) |
| Organizational | 10 | Senior engineer turnover risk (R-002) |
| Dependency | 8 | Bank partnership uncertainty (R-003) |
| External/Regulatory | 8 | Multi-state regulatory approvals (R-004) |
| Timeline | 6 | Insufficient buffer for partner transitions (R-005) |

**Step 4 - Present to leadership.** Marcus presented the risk register to the CEO and leadership team. The CEO was shocked-and grateful. "I thought we were in good shape. We were flying blind."

**How the identified risks were addressed:**

| Risk | Action Taken |
|------|--------------|
| **R-001** (knowledge gap) | Mandated knowledge transfer sessions before any other engineer leaves; documented critical payment logic |
| **R-002** (retention) | Retention bonuses for key engineers; skip-level 1:1s with all senior engineers |
| **R-003** (bank partnership) | Accelerated alternative partnership discussions; built abstraction layer to reduce vendor lock-in |
| **R-004** (regulatory approvals) | Hired regulatory consultant; added 8 weeks to timeline specifically for approvals |
| **R-005** (buffer) | Added 4 weeks buffer to the program timeline; presented new timeline to investors |

**The Outcomes:**

- **The program launched 6 months later** - 2 months past the original estimate, but within the revised timeline that included the identified risks
- **Zero regulatory surprises** after the compliance risk was surfaced and addressed
- **The second bank partnership was signed** just 1 week before the first partnership officially ended-the abstraction layer made the transition seamless
- **No further senior engineer departures** during the program (the retention measures worked)
- **The risk register grew** to 35 active items at its peak, then declined to 8 by program completion

**What Went Wrong (before the framework):**

1. **The culture didn't reward risk identification.** Compliance had been flagging regulatory concerns for months but felt ignored. The TPM's first job was to create a culture where surfacing risks was encouraged, not punished.

2. **Optimism bias was unchecked.** The CEO's confidence created a "everything is fine" atmosphere. People were afraid to be the bearer of bad news.

3. **Assumptions were confused with facts.** "We assume we'll get regulatory approval" was treated as a certainty. Marcus's framework forced the team to label assumptions as potential risks.

4. **No systematic process meant no complete picture.** Each person knew some risks, but no one knew all the risks. The interviews and pre-mortem created a comprehensive picture for the first time.

**Lessons Learned:**

1. **Risk identification is a cultural exercise, not a process exercise.** The biggest barrier wasn't lack of methodology-it was lack of psychological safety. People need to know they can surface risks without being blamed for them.

2. **Individual interviews surface different risks than group sessions.** In group settings, people self-censor. In 1:1s, people revealed their real concerns. Marcus's approach of doing both was essential.

3. **The first risk register is always too small.** Marcus's initial version had 18 risks. After the pre-mortem, it grew to 47. New TPMs almost always underestimate how many risks exist.

4. **Investors appreciated the risk transparency.** The CEO was initially nervous about presenting the risk register to investors. Instead, investors were impressed: "Finally, you're being realistic about what could go wrong."

5. **Risk identification is never "done."** New risks emerge as the program evolves. Marcus continued the weekly review cadence throughout the program, and it caught 3 additional significant risks that emerged later.

---

# 2. Risk Mitigation

## Framework

### Why Risk Identification Without Mitigation Is Useless

Identifying risks gives you awareness. Mitigating risks gives you control. A risk register full of identified but unmitigated risks is just a list of things you're worried about-it doesn't change anything.

The goal of risk mitigation is to **reduce the probability or impact of each risk to an acceptable level.** You can't eliminate all risks, but you can make them manageable.

### The Risk Mitigation Framework (5-Step Method)

#### Step 1: Prioritize Using Probability × Impact

Not all risks deserve the same attention. Score each risk:

| Impact ↓ \ Probability → | Low (1) | Medium (2) | High (3) |
|--------------------------|---------|------------|----------|
| **High (3)** | 3 🟡 | 6 🟠 | 9 🔴 |
| **Medium (2)** | 2 🟢 | 4 🟡 | 6 🟠 |
| **Low (1)** | 1 🟢 | 2 🟢 | 3 🟡 |

**Priority tiers:**

| Score | Color | Action | Review Frequency |
|-------|-------|--------|------------------|
| 7–9 | 🔴 Red | Immediate mitigation. Must have a plan within 1 week. | Every weekly sync |
| 4–6 | 🟠 Orange | Active mitigation within 2–4 weeks | Every weekly sync |
| 1–3 | 🟢 Green | Accept or watch. No active mitigation required. | Monthly |

#### Step 2: Choose a Mitigation Strategy

For each risk, choose one of five strategies:

| Strategy | What It Means | When to Use | Example |
|----------|---------------|-------------|---------|
| **Avoid** | Change the plan to eliminate the risk | When the risk is unacceptable and avoidable | "Instead of using the untested vendor, we'll build this in-house" |
| **Mitigate** | Reduce probability or impact | When you can't avoid the risk but can reduce it | "We'll do knowledge transfer sessions so losing one person isn't catastrophic" |
| **Transfer** | Shift the risk to another party | When someone else can bear the risk better | "We'll buy insurance" or "The vendor's contract includes SLA penalties" |
| **Accept** | Acknowledge and take no action | When mitigation costs more than the impact | "There's a small chance of a minor delay-we'll accept that risk" |
| **Escalate** | Move the risk to a higher authority | When the risk is outside your control | "This requires a decision from the VP of Engineering" |

Most risks use **Mitigate**. Avoid is rare (it usually means changing scope). Accept is common for low-score risks. Escalate is for risks that require someone else's authority.

#### Step 3: Design Specific Mitigation Actions

Each mitigation action should be:
- **Concrete** - "Document the data pipeline architecture" not "improve knowledge sharing"
- **Owned** - A named person is responsible
- **Time-bound** - Has a due date
- **Measurable** - You can tell if it was done

**Example - Adding a mitigation plan to a risk:**

| Field | Before | After |
|-------|--------|-------|
| **Risk** | Senior engineer might leave (R-002) | Same |
| **Score** | 6 (M × H) | Same |
| **Mitigation strategy** | - | Mitigate (reduce impact of departure) |
| **Mitigation actions** | None | 1. Document critical architectural decisions (owner: Eng Lead, due: 2 weeks) |
| | | 2. Cross-train junior engineer on core systems (owner: Senior Eng, due: 4 weeks) |
| | | 3. Conduct knowledge transfer sessions weekly (owner: Senior Eng, ongoing) |
| **Residual score** (after mitigation) | - | 3 (L × H - probability reduced from M to L) |

#### Step 4: Track Residual Risk

After mitigation actions are implemented, re-score the risk:

- **Original score:** What the risk was before any mitigation
- **Target residual score:** What you want the risk to be after mitigation
- **Actual residual score:** What the risk is after your mitigation actions

The gap between original and residual is the value you've created through mitigation.

#### Step 5: Monitor and Reassess

Risks are not static. A risk that was Low probability in Month 1 might be High probability in Month 6. A mitigation that was effective in Month 3 might have decayed by Month 9.

At each weekly review:
1. Has the probability or impact changed for any risk?
2. Are mitigation actions on track?
3. Are any mitigation actions complete? (Move to "Closed" section)
4. Do any risks need to be re-prioritized?

### Implementation Playbook: Risk Mitigation

**Use this when you have an identified risk that needs a response:**

```
RISK MITIGATION PLAYBOOK

□ Score the risk (Probability × Impact = Priority)
  H=3, M=2, L=1
  Score 7-9: Immediate action required
  Score 4-6: Active mitigation this quarter
  Score 1-3: Accept or monitor

□ Choose a strategy (pick one):
  ◉ Avoid - Change the plan to eliminate the risk
  ◉ Mitigate - Reduce probability or impact
  ◉ Transfer - Shift to another party (vendor, insurance)
  ◉ Accept - Acknowledge, take no action
  ◉ Escalate - Move to higher authority

□ Design 2-3 specific mitigation actions
  Each action needs:
  □ Concrete description ("What, exactly, will be done?")
  □ Named owner ("Who is responsible?")
  □ Due date ("When will it be done?")
  □ Measurable completion criteria ("How do we know it's done?")

□ Calculate residual risk score
  After mitigation, what's the expected P × I?
  Is this acceptable? If not, add more mitigation actions.

□ Assign the risk to an owner
  The owner is responsible for monitoring the risk AND
  ensuring mitigation actions are completed.
  Owners should be team leads or subject matter experts,
  not "the TPM" (you facilitate, they own).

□ Track weekly
  In each weekly sync: review mitigation action progress
  If actions are behind: what's blocking? Do you need to help?

□ Close when appropriate
  When residual risk is acceptably low AND
  all mitigation actions are complete
  Move to "Closed" section (don't delete-valuable for future)

□ Escalate if stuck
  If you can't design adequate mitigation OR
  mitigation actions aren't being completed
  Escalate to program sponsor or next level of authority
```

## Realistic Example

**Scenario:** You're the TPM for a program migrating a company's customer database from a legacy system to a new cloud data warehouse. The migration involves 50+ terabytes of data, 200+ database schemas, and 15 downstream systems that depend on the data.

**The Risk:** R-023 - Data migration may exceed the planned downtime window.

**Assessment:**
- **What could happen:** The migration takes longer than the 8-hour weekend window, causing extended downtime for customer-facing systems
- **Probability:** Medium (2) - migrations of this complexity frequently run over
- **Impact:** High (3) - extended downtime means lost revenue and customer trust
- **Score:** 6 (Orange) - requires active mitigation
- **Status:** Open

**Step 1 - Choose strategy.** You and the team decide on **Mitigate**. You can't avoid the risk (you must migrate the data). You can't transfer it (it's an internal system). You don't want to accept it (downtime is costly).

**Step 2 - Design mitigation actions.** You work with the database lead to identify specific actions:

| Action | Owner | Due | Success Criteria |
|--------|-------|-----|------------------|
| 1. Run a full dry-run migration in staging environment | DB Lead (Sarah) | 2 weeks before cutover | Dry-run completes within 6 hours with <1% error rate |
| 2. Create a rollback plan | DB Lead (Sarah) | 1 week before cutover | Rollback procedure tested and documented; team trained on it |
| 3. Identify top 10 largest tables and pre-migrate them | DB Lead (Sarah) | 1 week before cutover | 10 largest tables migrated and verified in new system |
| 4. Set up real-time monitoring during migration | Infra Lead (Raj) | 1 week before cutover | Dashboard shows migration progress, error rates, and remaining time |
| 5. Prepare a communication template for stakeholders | TPM (You) | 3 days before cutover | Draft emails for: "migration on track," "migration delayed (X hours)," "rollback initiated" |

**Step 3 - Track mitigation progress.** In weekly syncs, you track:

| Action | Status | Notes |
|--------|--------|-------|
| 1. Dry-run | 🟢 On track | Scheduled for next week |
| 2. Rollback plan | 🟡 At risk | Sarah is pulled into another issue; you help reprioritize |
| 3. Pre-migrate large tables | 🟢 Complete | All 10 migrated and verified |
| 4. Monitoring dashboard | 🟢 Complete | Dashboard is ready |
| 5. Communication templates | 🟢 Complete | 3 templates drafted |

**Step 4 - The dry-run reveals additional risks.** The dry-run migration takes 7.5 hours (within the 8-hour window, but barely). It reveals:
- 3 schemas have data integrity issues that need manual fixes
- The bandwidth between legacy and new system is slower than expected

You add two more mitigation actions:
- 6. Fix data integrity issues in 3 schemas (Owner: DB Lead, Due: 3 days before cutover)
- 7. Test bandwidth improvement options (Owner: Infra Lead, Due: 1 week before cutover)

**Step 5 - Re-score the risk.** After all mitigations:
- **Residual probability:** Low (1) - dry-run proved it's possible within the window; pre-migration of large tables removed the biggest time risk
- **Residual impact:** High (3) - downtime is still impactful, but rollback capability means the impact is limited (can abort and revert)
- **Residual score:** 3 (Green) - acceptable

**The outcome:** The actual cutover takes 6.5 hours. The monitoring dashboard gives real-time visibility. Stakeholders receive update emails at 2 hours (on track), 4 hours (on track), and 6 hours (completed). No rollback needed. Zero customer-facing downtime beyond the planned window.

## Case Study

**Organization:** A health-tech company ("MediConnect") was building a patient data exchange platform that would allow hospitals, clinics, and laboratories to share patient information securely. The program involved 6 engineering teams, 3 external vendors, and regulatory oversight from health authorities.

**The Problem:** Six months into the 18-month program, the TPM, Anita, realized the risk register had 35 active risks-most with no mitigation plans. The team was "watching" risks, not addressing them. Several risks that had been "medium" in Month 2 had become "high" in Month 6 because no action was taken.

**The Critical Risks:**

Three risks demanded immediate attention:

| Risk | Score | Current State |
|------|-------|---------------|
| **R-007:** Vendor A's API may not support required data exchange standards | 9 (H×H) | No mitigation plan; vendor hasn't confirmed compliance |
| **R-012:** Hospital pilot sites may not be ready for testing timeline | 6 (M×H) | No engagement with pilot sites for 3 months |
| **R-019:** Security review may identify critical vulnerabilities requiring redesign | 6 (M×H) | Security team hasn't reviewed architecture; review scheduled for Month 9 |

**Anita's Mitigation Approach:**

**R-007 - Vendor API compliance (Score: 9, Red):**

Anita's analysis: This risk was critical because the vendor was the linchpin of the entire data exchange. If their API didn't support standards, the program had no path forward.

- **Strategy:** Mitigate + Transfer
- **Mitigation actions:**
  1. Request written compliance certification from Vendor A (Owner: Vendor Manager, Due: 2 weeks)
  2. If certification not provided, identify alternative vendor (Owner: Vendor Manager, Due: 4 weeks)
  3. Build API abstraction layer to reduce vendor lock-in (Owner: Backend Lead, Due: 8 weeks)
  4. Contractually require certification as milestone payment trigger (Owner: Legal, Due: 4 weeks)
- **Residual score after mitigation:** 3 (L×H - probability reduced from H to L)

**R-012 - Hospital pilot site readiness (Score: 6, Orange):**

Anita's analysis: The team had assumed hospitals would be ready, but no one had checked since the initial kickoff.

- **Strategy:** Mitigate
- **Mitigation actions:**
  1. Schedule site readiness assessment calls with all 3 pilot hospitals (Owner: TPM - Anita, Due: 2 weeks)
  2. Identify critical gaps and create remediation plans per site (Owner: Implementation Lead, Due: 4 weeks)
  3. If a site is not viable, identify backup pilot site (Owner: Product Manager, Due: 4 weeks)
- **Residual score after mitigation:** 4 (M×M - impact reduced from H to M because alternative sites are identified)

**R-019 - Security review vulnerabilities (Score: 6, Orange):**

Anita's analysis: Security reviews always find issues. Finding them late forces expensive redesign. Being proactive was essential.

- **Strategy:** Mitigate
- **Mitigation actions:**
  1. Move security review from Month 9 to Month 7 (Owner: TPM - Anita, negotiates with Security team)
  2. Conduct a "lightweight" security review of architecture now, full review later (Owner: Security Lead, Due: 2 weeks)
  3. Allocate 4 weeks in the schedule specifically for security remediation (Owner: TPM - Anita, due: before schedule finalization)
- **Residual score after mitigation:** 3 (M×M → L×M - probability reduced by getting early feedback)

**How the Mitigations Played Out:**

- **Vendor A** provided compliance certification within 2 weeks (certified ✅). The abstraction layer was still built as insurance.
- **Two of three hospitals** were confirmed ready. The third had IT staffing issues. Anita activated the backup hospital, which was ready in time.
- **The lightweight security review** found 8 issues-none critical, but 3 would have been expensive to fix later. The early review saved an estimated 6–8 weeks of redesign work.

**The Outcomes:**

- **Program launched in Month 19** (1 month past original, but significantly better than the potential 3–6 month delay without mitigation)
- **Zero security incidents** in the first year of operation
- **The risk register's average score dropped** from 5.2 to 2.8 over 3 months of active mitigation
- **The hospital pilot sites** became references for future expansion

**What Went Wrong (before the framework):**

1. **The team had been treating risk identification as the endpoint.** They identified risks, documented them, and moved on. Anita's framework made mitigation the focus.

2. **No one was "owning" risks.** The risk register had owners listed, but owners weren't taking action. Anita instituted a "no open risk without a mitigation plan" rule.

3. **The residual score wasn't being tracked.** Risks were scored once and never rescored. Anita's framework required re-scoring after mitigation, which showed the team their progress.

4. **Stakeholders weren't engaged on mitigation.** The hospital pilot risk was a classic example-the stakeholder (hospital IT directors) should have been part of the mitigation plan from the start.

**Lessons Learned:**

1. **A risk without a mitigation plan is not being managed.** Anita's rule was: you can have an open risk for one review cycle without a mitigation plan. By the second cycle, you need a plan or the risk gets escalated.

2. **Residual scoring is motivating.** The team found it satisfying to see risk scores drop from 9 to 3 as mitigation actions were completed. It gave them a sense of progress.

3. **Some risks should be transferred contractually.** The vendor compliance risk was mitigated partly through contract terms. If you have leverage, use it before you need it.

4. **Mitigation plans need to be concrete enough to verify.** "Improve communication with hospitals" is not a mitigation plan. "Schedule readiness calls with all 3 hospitals by next Friday" is a mitigation plan. The specificity drives action.

---

# 3. Dependency Mapping

## Framework

### Why Dependencies Are the #1 Source of Program Delays

In every post-mortem I've seen across dozens of programs, the most common root cause of delay is not "we couldn't build it" but "we were waiting for someone else." Dependencies are the silent killers of timelines.

A **dependency** exists when one team or system needs something from another team or system before it can proceed. Dependencies can be:

| Type | Example | Risk Level |
|------|---------|------------|
| **Internal (same org)** | Team A needs Team B's API | Manageable-you know the team |
| **External (vendor)** | You need a vendor's SDK | Higher risk-you don't control the vendor |
| **Hard** | Task B cannot start until Task A is complete | High risk-directly affects timeline |
| **Soft** | Task B could start, but it's better to wait for Task A | Lower risk-flexibility exists |
| **Cross-program** | Your program depends on another program within the company | Very high risk-you don't control the other program's priorities |

### The Dependency Mapping Framework (5-Step Method)

#### Step 1: Identify All Dependencies

Work with each team to list everything they need from others:

**Questions to ask each team lead:**
1. "What do you need from other teams to complete your work?"
2. "What do other teams need from you?"
3. "What external vendors or systems do you depend on?"
4. "What decisions are you waiting for before you can proceed?"
5. "What would cause you to be blocked?"

**Capture each dependency with:**

| Field | Example |
|-------|---------|
| **ID** | DEP-001 |
| **Description** | "Mobile team needs authentication API from Platform team" |
| **Requesting Team** | Mobile |
| **Providing Team** | Platform |
| **Need-By Date** | March 15 |
| **Status** | On Track / At Risk / Blocked / Delivered |
| **Owner (Requesting)** | Sarah (Mobile Lead) |
| **Owner (Providing)** | Raj (Platform Lead) |
| **Criticality** | Critical path / Important / Nice-to-have |
| **What Happens If Late** | Mobile team cannot start their core feature; 2-week delay to overall timeline |

#### Step 2: Build the Dependency Map

Create a visual map showing dependencies between teams or workstreams:

```
Team A (Identity) ──DEP-001[Auth Tokens]──→ Team B (API Gateway)
                    \
                     └─DEP-002[User Profiles]─→ Team C (Dashboard)
                                                  ↑
                                                 /
Team D (Data Pipeline) ──DEP-003[Analytics Data]──
```

The map should be simple enough to understand in 30 seconds and detailed enough to show the critical dependencies.

**Tools:** Whiteboard, Miro, LucidChart, Google Drawings, or even a structured spreadsheet. Pick one and start-don't overthink the tool.

#### Step 3: Identify the Critical Path Dependencies

Not all dependencies are equal. Some are on the critical path-if they slip, the entire program slips. Others have float-they can slip without affecting the final deadline.

**To identify critical path dependencies:**
1. Map the full dependency chain from start to finish
2. Calculate which path is the longest
3. The dependencies on that path are critical path dependencies
4. Flag these with a "Critical Path" label

**Critical path dependencies get:**
- Higher monitoring frequency (daily instead of weekly)
- An explicit escalation path if they go "at risk"
- A buffer if possible

#### Step 4: Establish Dependency Health Status

Use a simple traffic light system:

| Status | Meaning | Action |
|--------|---------|--------|
| 🟢 **On Track** | Dependency is expected to deliver on time | Normal monitoring |
| 🟡 **At Risk** | Dependency may be late; mitigation in progress | Daily check-in; prepare contingency |
| 🔴 **Blocked** | Dependency has a known blocker requiring resolution | Immediate escalation; active resolution |
| ✅ **Delivered** | Dependency has been received and verified | Celebrate and remove from active tracking |
| ❌ **Missed** | Dependency was not delivered on time | Assess impact; escalate; replan |

#### Step 5: Review Dependencies at Every Team Sync

Make dependencies a standing agenda item:

- **Weekly program sync (15 min):**
  - Review the dependency map
  - Check status of each dependency
  - Identify any new dependencies
  - Resolve cross-team issues

- **Daily standups:** Team members should mention blockers that are dependency-related

### Implementation Playbook: Dependency Mapping

**Use this when you join a program or start a new phase:**

```
DEPENDENCY MAPPING PLAYBOOK

□ Interview each team lead (30 min each):
  "What do you need from others?"
  "What do others need from you?"
  "What decisions are you waiting on?"

□ Create the dependency register:
  For each dependency:
  □ Description ("What, exactly, is needed?")
  □ Requesting team
  □ Providing team
  □ Need-by date
  □ Owner (requesting side)
  □ Owner (providing side)
  □ Status (On Track / At Risk / Blocked / Delivered)

□ Build the visual dependency map:
  Show teams as nodes
  Show dependencies as arrows
  Mark critical path dependencies in red

□ Establish the health check process:
  □ Weekly review of all dependencies (15 min in team sync)
  □ Daily check on "At Risk" dependencies
  □ Immediate escalation for "Blocked" dependencies

□ Assign dependency owners:
  Every dependency needs TWO owners:
  □ Requesting owner - advocates for timely delivery
  □ Providing owner - responsible for delivery

□ Add a dependency buffer:
  For critical path dependencies:
  Add 20-30% buffer after the need-by date
  This protects against minor delays

□ Track dependency trends:
  How many dependencies go "at risk" each week?
  Are you seeing patterns? (One team always late?)
  Use this data to improve estimation and planning
```

## Realistic Example

**Scenario:** You're the TPM for a program building a new "one-click checkout" feature for an e-commerce platform. The program involves 5 teams and needs to launch before the holiday shopping season (4 months away).

**The Teams:**

| Team | Responsibility |
|------|---------------|
| **Checkout UI** | Builds the frontend checkout flow |
| **Payment Service** | Integrates with payment processors |
| **User Account** | Handles user authentication and saved payment methods |
| **Inventory** | Provides real-time inventory availability |
| **Shipping** | Calculates shipping costs and delivery estimates |

**Step 1 - Identify dependencies.** You interview each team lead:

**Checkout UI needs from:**
- Payment Service: Payment processing API (DEP-001)
- User Account: Saved payment methods (DEP-002)
- Inventory: Stock availability check (DEP-003)
- Shipping: Shipping cost calculator (DEP-004)

**Payment Service needs from:**
- External: Payment processor certification (DEP-005)

**User Account needs from:**
- None (they're building independently)

**Inventory needs from:**
- None (they're building independently)

**Shipping needs from:**
- External: Carrier rate APIs (DEP-006)

**Step 2 - Build the dependency map:**

```
[External: Payment Processor] ──DEP-005──→ [Payment Service]
                                                     ↓
                                              DEP-001↓
                                                     ↓
[User Account] ────────────────────────────DEP-002──→ [Checkout UI]
[Inventory] ───────────────────────────────DEP-003──→    ↓
[External: Carriers] ──DEP-006──→ [Shipping] ──DEP-004→    ↓
                                                            ↓
                                                    🚀 Launch
```

**Step 3 - Identify critical path dependencies.** You map the timeline:

| Dependency | Need-By | On Critical Path? | Notes |
|------------|---------|-------------------|-------|
| DEP-005 (Payment cert) | Week 4 | ✅ Yes | Must be done before Payment Service can integrate |
| DEP-001 (Payment API) | Week 8 | ✅ Yes | Checkout UI can't work without it |
| DEP-002 (Saved payments) | Week 10 | ❌ No (2 weeks float) | Could be 2 weeks late without delaying launch |
| DEP-003 (Inventory) | Week 8 | ❌ No (3 weeks float) | Can work without it temporarily |
| DEP-004 (Shipping) | Week 10 | ❌ No (1 week float) | Minimal float-monitor |
| DEP-006 (Carrier rates) | Week 6 | ❌ No (4 weeks float) | Plenty of time |

**Critical path: DEP-005 → DEP-001 → Checkout UI completion → Launch**

**Step 4 - Dependency health tracking.** You create a weekly dependency health dashboard:

| ID | Status | This Week | Action |
|----|--------|-----------|--------|
| DEP-005 | 🟡 At Risk | Payment processor certification is taking longer than expected. They're asking for additional security documentation. | TPM to escalate to processor's account manager; assign security team to help with documentation |
| DEP-001 | 🟢 On Track | Payment Service team is building with mock data while waiting for certification. Integration will be ready within 1 week of certification. | Monitor; prepare to accelerate if DEP-005 slips further |
| DEP-002 | 🟢 On Track | User Account team is ahead of schedule. | No action needed |
| DEP-003 | 🟢 On Track | Inventory API is built and documented. | Checkout UI team should start integration this week |
| DEP-004 | 🟡 At Risk | Shipping team is waiting on carrier rate API documentation from one carrier. | Shipping lead to follow up with carrier; escalate if no response in 1 week |
| DEP-006 | 🟢 On Track | Two of three carrier APIs are integrated. | Third carrier integration scheduled for next week |

**Step 5 - Resolve the blocker.** DEP-005's "at risk" status becomes "blocked" in week 5. The payment processor needs a security audit that will take 3 weeks instead of the expected 1.

You activate the contingency: the Payment Service team builds a "stub" payment system that mimics the processor's API. The Checkout UI team uses the stub for development. When certification comes through in week 7 (3 weeks late), they swap the stub for the real integration within 2 days.

Total impact to the program: 0 days. The buffer on the critical path and the team's ability to work around the dependency saved the timeline.

## Case Study

**Organization:** A large media company ("NewsPlus") was building a unified content management system (CMS) to replace 4 legacy systems across its print, web, mobile, and social media channels. The program involved 8 internal teams and 3 external vendors.

**The Problem:** The CMS program had been running for 6 months with no formal dependency management. Teams were running into each other constantly:

- The "Article Authoring" team completed their feature, but it couldn't be used until the "Media Management" team's system was ready (5 months later)
- The "Mobile Publishing" team was blocked because the "Web Publishing" team changed their API without telling anyone
- The "Archive" team was building a system that depended on the "Search" team's infrastructure, which wasn't scheduled to be built for another 8 months
- No one had a complete picture of what depended on what

**The TPM's Intervention:** A new TPM, David, was assigned to fix the dependency chaos. His approach:

**Phase 1 - Dependency audit (1 week).** David interviewed all 8 team leads and 3 vendor contacts. He identified 47 active dependencies-far more than anyone expected.

Key findings:
- **5 dependencies were "circular"** - Team A needed Team B who needed Team A. No one had identified this because no one had the full picture.
- **8 dependencies had already been "silently broken"** - A promised API was changed, a delivery date was missed, but the dependent team hadn't been told.
- **3 external vendor dependencies** had no written contracts or SLAs. They were "handshake agreements."
- **12 dependencies were between teams who had never actually talked to each other.** They communicated only through their managers or documentation.

**Phase 2 - Dependency mapping (2 days).** David created a comprehensive dependency map. It looked like a tangled web. He identified 5 critical path dependencies:

| DEP | Description | Teams | Risk |
|-----|-------------|-------|------|
| D-001 | Media storage API (Vendor A) | Authoring → Media → Publishing | 🔴 High - vendor has missed 2 deadlines |
| D-002 | User permission model | Authoring → Archive | 🟠 Medium - both teams have different assumptions |
| D-003 | Content syndication feed | Authoring → Web → Mobile → Social | 🔴 High - long chain of dependencies |
| D-004 | Search index schema | Search → Archive → Web | 🟠 Medium - Search team is 3 months behind |
| D-005 | Mobile push notification service (Vendor B) | Mobile → External | 🔴 High - no written contract with vendor |

**Phase 3 - Dependency resolution (ongoing).** David implemented a systematic dependency resolution process:

1. **Hard deadlines for each critical dependency** - Vendors were put on formal notice with contract penalties for missed dates
2. **Direct team-to-team communication** - David mandated that teams with dependencies must have at least one direct conversation per week. No more communicating through managers or documentation.
3. **Dependency hub** - A weekly 30-minute meeting with all 8 team leads specifically for dependency coordination
4. **Contingency plans for each critical dependency** - For D-001 (Vendor A), David identified an alternative vendor and built a 2-week buffer. For D-003 (syndication feed), he designed a simplified fallback feed that could be built internally if the chain broke.

**Phase 4 - Dependency health dashboard.** David created a visible dashboard:

```
DEPENDENCY HEALTH DASHBOARD
Updated: Weekly (Fridays)

Total: 47 dependencies
🟢 On Track: 28
🟡 At Risk: 12
🔴 Blocked: 3
✅ Delivered: 4

Critical Path Dependencies:
D-001: 🟡 At Risk (Vendor A missed milestone, escalated)
D-003: 🟢 On Track (Simplified feed ready as backup)
D-005: 🔴 Blocked (Vendor B hasn't signed contract; legal involved)
```

**The Outcomes:**

- **Dependency resolution time dropped from 3 weeks to 3 days** - because teams were talking directly instead of through intermediaries
- **The CMS launched in Month 18** - 2 months past the original target, but significantly better than the projected 6+ month delay before David's intervention
- **Zero "surprise" dependency failures after Month 8** - all dependency changes were communicated proactively
- **The dependency map** became one of the most referenced artifacts in the program, used in weekly syncs, quarterly planning, and onboarding new team members

**What Went Wrong (before the framework):**

1. **Dependencies were invisible.** Each team knew their own dependencies but had no idea what their dependencies depended on. The "circular" dependencies were a perfect example-no single team could see the full picture.

2. **There was no owner for cross-team dependencies.** Each team owned their deliverables, but no one owned the *interfaces between teams*. David became that owner.

3. **Communication was through managers and documents, not team to team.** The teams who needed to coordinate had never actually spoken to each other. Direct communication resolved weeks of ambiguity in a single conversation.

4. **External dependencies had less rigor than internal ones.** The vendors had handshake agreements with no SLAs or penalties. David brought them to the same level of rigor as internal dependencies.

**Lessons Learned:**

1. **Dependency mapping reveals problems that nothing else will.** Before David's map, the program's status reports showed "green." The map revealed a program in distress.

2. **Each dependency needs TWO owners, not one.** The "providing" team owns delivery. The "requesting" team owns advocacy and preparation. Both must be named.

3. **Direct communication between teams is the highest-leverage dependency intervention.** David's rule-teams with dependencies must talk weekly-was simple but transformative. Most dependency issues are communication issues in disguise.

4. **Vendor dependencies need contracts, not handshakes.** The two vendor dependencies without written agreements were the highest-risk items in the entire program. David fixed this immediately.

5. **The dependency map should be visible to everyone.** David's map was on a wall in the program office (and in a shared digital space). Anyone could walk up and see the current state of every dependency.

---

# 4. Escalation

## Framework

### Why Escalation Is Harder Than It Looks

Escalation seems simple: when something goes wrong, tell someone with more authority. But in practice, escalations fail in predictable ways:

| Failure Mode | What Happens | Why It's Bad |
|-------------|--------------|--------------|
| **Too early** | You escalate before you've tried to resolve it yourself | You look incapable; you waste executive time |
| **Too late** | You wait until the problem is a crisis | You lose the chance for early intervention |
| **Too vague** | "We have a problem with Team X" | No one knows what to do with this information |
| **Too frequent** | You escalate everything | People stop listening (escalation fatigue) |
| **Wrong person** | You escalate to someone who can't help | Time wasted; problem gets no closer to resolution |

Good escalation is a **skill**-knowing when, how, and to whom to escalate. It's about getting the right attention on the right problem at the right time.

### The Escalation Framework (5-Step Method)

#### Step 1: Determine What Level of Escalation Is Needed

Not all problems need to go to the top. Use a tiered system:

| Level | Who Decides | When to Use | Communication |
|-------|-------------|-------------|---------------|
| **L1: Team-level** | Team Lead + TPM | Day-to-day blockers, minor resource issues | Slack or standup |
| **L2: Program-level** | TPM + All Team Leads | Cross-team dependencies, scope decisions | Weekly sync |
| **L3: Steering-level** | Program Sponsor + VPs | Timeline changes, significant scope changes, budget | Scheduled meeting |
| **L4: Executive-level** | C-suite / CEO | Strategic direction, program go/kill decisions | Formal briefing |

**Rule of thumb:** Escalate to the lowest level that can resolve the issue. If a team lead can solve it, don't go to the VP. If the VP can solve it, don't go to the CEO.

#### Step 2: Try to Resolve Before Escalating

Before escalating, ask:
1. Have I spoken directly to the person/team involved?
2. Have I proposed a solution, not just a problem?
3. Have I given them a reasonable time to respond?
4. Is this truly beyond my ability (or authority) to resolve?

If the answer to any of the first three is "no," try direct resolution first. If the answer to the fourth is "yes," escalate.

**Important:** "Trying to resolve" doesn't mean spending 2 weeks on something that needs 2 hours of executive attention. Use your judgment on when to escalate versus when to persist.

#### Step 3: Structure the Escalation Communication

When you escalate, don't just state the problem. Use this structure:

**The 4-Sentence Escalation:**

| Sentence | Content | Example |
|----------|---------|---------|
| **1. The problem** | What's happening, concisely | "The payment processor certification is delayed by 3 weeks" |
| **2. The impact** | What this means for the program | "This pushes our critical path by 3 weeks and delays launch to April 15" |
| **3. What you've tried** | Steps already taken to resolve | "We've secured a backup vendor, but they need 4 weeks for their own certification process" |
| **4. What you need** | Specific ask of the decision-maker | "I need authorization to contract the backup vendor immediately, or a decision to accept the 3-week delay" |

**The 4-sentence structure works because:**
- It respects the decision-maker's time (they get the essence in 30 seconds)
- It shows you've done your homework (you've already tried to resolve it)
- It makes the ask clear (they know exactly what to decide)
- It prevents back-and-forth (all the context is in one message)

#### Step 4: Escalate Through the Right Channel

| Urgency | Channel | Response Expectation |
|---------|---------|---------------------|
| **Critical** (launch-blocking, customer-impacting) | Phone call or in-person | Immediate |
| **High** (timeline-threatening, major dependency at risk) | Email with "[URGENT]" flag + Slack follow-up | Same day |
| **Medium** (important but has some time buffer) | Email with structured format | Within 48 hours |
| **Low** (informational, monitoring) | Weekly report | At next review |

#### Step 5: Follow Up and Close the Loop

After escalating:
1. **Confirm receipt** - "Did you receive my escalation about the payment processor?"
2. **Confirm decision** - "To confirm, you've authorized us to contract the backup vendor. Is that correct?"
3. **Communicate outcome** - Inform all affected stakeholders of the decision
4. **Document** - Add the escalation to the risk/issue log with outcome
5. **Close** - Once the escalation is resolved, confirm with the decision-maker and affected stakeholders

### Implementation Playbook: Escalation

**Use this when you have an issue that needs escalation:**

```
ESCALATION PLAYBOOK

□ Determine the escalation level:
  L1: Team-level (team lead can decide)
  L2: Program-level (TPM + team leads)
  L3: Steering-level (sponsor, VPs)
  L4: Executive-level (C-suite, CEO)

□ Attempt resolution first:
  □ Spoken directly to the person/team involved?
  □ Proposed a solution, not just a problem?
  □ Given them reasonable time to respond?
  If YES to all: try direct resolution.
  If NO to any: escalate.

□ Structure your escalation (4 sentences):
  [1] The problem: _________________________________
  [2] The impact: __________________________________
  [3] What I've tried: _____________________________
  [4] What I need from you: ________________________

□ Choose the right channel:
  🔴 Critical → Phone call or in-person
  🟠 High → Email + Slack follow-up
  🟡 Medium → Structured email
  🟢 Low → Weekly report

□ Follow up:
  □ Confirm receipt
  □ Confirm decision
  □ Communicate to stakeholders
  □ Document in risk/issue log
  □ Close the loop

□ Avoid escalation pitfalls:
  ✗ Escalating without trying to resolve first
  ✗ Escalating without a proposed solution
  ✗ Escalating to the wrong person
  ✗ Escalating too late (when it's already a crisis)
  ✗ Escalating too often (causes escalation fatigue)

□ Build escalation relationships in advance:
  Don't meet your escalation points for the first time
  when you need something from them.
  Build relationships early. Buy coffee. Ask for advice.
  Trust built before an escalation is invaluable.
```

## Realistic Example

**Scenario:** You're the TPM for a program migrating a company's e-commerce platform to a new cloud provider. You're 6 months into an 8-month program. The cutover is scheduled for 8 weeks away. Then you get bad news.

**The Situation:** The Cloud Security team has completed their review of the new infrastructure. They've identified a critical finding: the new network architecture doesn't comply with the company's data encryption standards. They won't sign off on the cutover until this is resolved. Estimated fix time: 4–6 weeks.

**Your escalation calculation:**

- **Can you resolve it yourself?** No. The fix requires Security team resources (which you don't control) and potentially new infrastructure (which requires budget approval).
- **Can the team leads resolve it?** No. The Cloud Lead can design the fix, but can't authorize the additional infrastructure cost or reprioritize Security's work.
- **This is an L3 escalation** - it needs a decision from the program sponsor (VP of Engineering) and potentially the VP of Security.

**Your 4-sentence escalation email to the VP of Engineering:**

> **Subject:** Escalation: Cloud security compliance finding - program timeline at risk
>
> **The problem:** The Cloud Security team has identified a data encryption compliance gap in the new network architecture. The fix will take 4–6 weeks and requires additional infrastructure ($12K in additional AWS services).
>
> **The impact:** This finding blocks Security sign-off for the cutover. Without resolution by [date 3 weeks from now], the cutover scheduled for [date 8 weeks away] will be delayed by 4–6 weeks.
>
> **What I've tried:** I've worked with the Cloud Lead to design a fix. We've identified the required resources (2 weeks of a Security engineer's time, plus the $12K infrastructure). I've confirmed with the Cloud Lead that they can execute the fix if we get authorization.
>
> **What I need from you:** (1) Authorization for the $12K additional infrastructure spend. (2) Commitment from the VP of Security for 2 weeks of Security engineering time within the next 3 weeks. (3) A decision by end of this week so we don't lose more time.

**The response:** The VP of Engineering responds within 4 hours: "Approved on both counts. I'll speak to the VP of Security today. Let me know if you don't hear from them by tomorrow."

**Why this escalation worked:**

1. **It was the right level.** The TPM tried to resolve at L1 and L2 before escalating. When it became clear the issue needed VP-level authority and budget, she escalated to L3.

2. **The timing was right.** 3 weeks before the deadline was early enough to act, late enough to be urgent.

3. **The structure was clear.** 4 sentences, no fluff. The decision-maker knew exactly what was being asked.

4. **The TPM had done her homework.** She had a fix designed, costs estimated, and resource requirements identified. The VP didn't need to investigate further.

5. **The ask was specific.** "Authorize this, get commitment for that, decide by Friday." Not "help" or "figure something out."

## Case Study

**Organization:** A logistics technology company ("ShipFast") was building a real-time package tracking platform. The program involved 5 internal teams and integrations with 3 major shipping carriers (FedEx, UPS, USPS). The CEO had committed to a launch date to the board.

**The Problem:** Six weeks before the scheduled launch, the TPM, Anika, discovered that the USPS integration was not going to be ready. The USPS had changed their API specifications-the integration would take 8 extra weeks. But no one had told her until now.

**The broken escalation chain:** An investigation revealed why this information was delayed by 3 weeks:

1. The engineer working on the USPS integration discovered the API change on Day 1
2. She told her team lead on Day 1
3. The team lead told his engineering manager on Day 2
4. The engineering manager told the program's technical lead on Day 5
5. The technical lead mentioned it in passing to Anika on Day 15
6. Anika confirmed the details by Day 21

**Three weeks had been lost** because the escalation chain was unclear. No one had escalated with urgency because no one knew: "Is this a big deal? Should I tell someone? Who should I tell?"

**Anika's Escalation Framework Implementation:**

**Phase 1 - Define escalation tiers.** Anika established clear escalation levels for the program:

| Level | Who | What Triggers Escalation |
|-------|-----|--------------------------|
| **L1** | Team lead + TPM | Minor delays (<1 week), routine blockers |
| **L2** | Engineering managers + TPM | Significant delays (1–3 weeks), resource conflicts, scope questions |
| **L3** | Program sponsor (VP) + TPM | Major delays (>3 weeks), launch-date-threatening issues, budget changes |
| **L4** | CEO / Board | Launch date changes, strategic issues, investor-facing concerns |

**Phase 2 - Create escalation criteria.** Anika defined specific conditions for each tier:

**L1 Escalation triggers:**
- A dependency slips by <1 week
- A team needs minor assistance from another team
- A non-critical bug is found

**L2 Escalation triggers:**
- A dependency slips by 1–3 weeks
- Two or more teams have a resource conflict
- A feature needs to be descoped
- A vendor misses a milestone

**L3 Escalation triggers:**
- A dependency on the critical path slips by >1 week
- Launch date is at risk
- Budget overrun >10%
- A major vendor fails to deliver

**L4 Escalation triggers:**
- Launch date must change
- Program needs to be paused or canceled
- Customer-facing impact (missed contractual commitments)

**Phase 3 - Establish escalation communication standards.** Anika created templates and channels:

| Level | Channel | Format | Response Time |
|-------|---------|--------|---------------|
| L1 | Slack | Brief message | <2 hours |
| L2 | Email + Slack follow-up | 4-sentence escalation | <24 hours |
| L3 | Email + scheduled call | 4-sentence + slide (if needed) | <48 hours |
| L4 | Formal briefing document | 1-page executive summary | Per executive schedule |

**Phase 4 - Train the team.** Anika held a 30-minute session with all team leads and engineers:

> "If you discover something that could delay the launch, I need to know within 24 hours. Not when you've confirmed it. Not when you've figured out the fix. Within 24 hours of knowing it's a possibility.
>
> Tell your team lead. If your team lead isn't available, tell me directly. If I'm not available, tell the engineering manager. If no one is available, send an email to this distribution list. I'd rather get 5 duplicate alerts than miss 1."

**Phase 5 - Address the USPS integration.** With the new framework in place, Anika escalated the USPS issue:

- **L2 escalation:** The integration delay was 8 weeks (clearly an L3 trigger)
- **L3 escalation to VP of Engineering:**
  - Problem: USPS API change requires 8-week rework
  - Impact: Launch date cannot be met unless we descope or delay
  - Options: (A) Delay launch by 8 weeks (L4 escalation needed). (B) Launch without USPS, add in Phase 2 (L2 decision, TPM + PM can handle)
  - Recommendation: Option B - launch FedEx and UPS only, add USPS in Phase 2. Board communication: "We're launching with the two largest carriers and adding USPS within 60 days"

The VP approved Option B. The CEO was briefed and agreed. The launch went ahead with 2 carriers instead of 3.

**The Outcomes:**

- **The launch happened on time** with FedEx and UPS integration
- **USPS integration was completed 10 weeks later** (2 weeks behind the revised estimate, but acceptable as Phase 2)
- **The escalation framework was adopted** across the entire engineering organization
- **Escalation response time dropped** from an average of 3 weeks to 4 hours for L1/L2 issues after the framework was implemented
- **Anika's "tell me within 24 hours" rule** prevented 3 additional potential delays from turning into crises

**What Went Wrong (before the framework):**

1. **No one knew who should escalate what.** The engineer who discovered the USPS issue escalated appropriately to her team lead. But no one had defined what constituted a "big enough" problem to escalate further.

2. **The escalation chain was too long.** Three weeks for information to travel from engineer to TPM was unacceptable. The framework established multiple paths and a 24-hour rule.

3. **There was cost to escalation.** Team leads felt that escalating reflected poorly on them. Anika had to change the culture: "Not escalating a problem is a worse failure than having the problem in the first place."

4. **No one had asked: "What does the decision-maker need to know?"** The USPS information arrived at each level in the chain and stopped there because no one felt it was important enough to pass on. The escalation criteria made this explicit.

**Lessons Learned:**

1. **Define escalation criteria before you need them.** When the USPS issue hit, there was no framework for deciding who should know and when. By the time the criteria were defined, 3 weeks had been lost.

2. **Shorten the escalation chain.** Anika's rule-"tell me within 24 hours, directly if needed"-bypassed the multi-level chain that had delayed the USPS information by 3 weeks.

3. **Escalation is not failure.** The engineer who discovered the USPS issue felt she had done something wrong. Anika had to explicitly change the narrative: "Surfacing a problem early is a sign of professionalism, not failure."

4. **Different levels need different information.** An L1 escalation says "we have a problem." An L3 escalation says "we have a problem, here are the options, which do you choose?" Calibrate your communication to the escalation level.

5. **Build the escalation muscle before you need it.** Anika ran a drill where she simulated an escalation scenario with the team. It revealed gaps in the framework that were fixed before a real escalation was needed.

---

# 5. Change Management

## Framework

### Why Change Management Is Every TPM's Constant Companion

In theory, programs follow a plan. In practice, programs constantly change:

- A stakeholder changes their mind about requirements
- A key engineer leaves the team
- A vendor changes their API
- A competitor launches first, altering priorities
- Budget gets cut (or increased)
- A dependency arrives late, forcing resequencing

Change is not a sign of failure. It's a sign that the program is responding to reality. The question is not "how do we prevent change?" but **"how do we manage change so it doesn't derail the program?"**

### The Change Management Framework (5-Step Method)

#### Step 1: Establish a Change Control Process

Define how changes will be requested, evaluated, and approved:

| Element | What It Means |
|---------|---------------|
| **Change request form** | A simple template for documenting any proposed change |
| **Change review board** | A group (or person) authorized to approve changes at each level |
| **Evaluation criteria** | Impact on timeline, budget, quality, and risk |
| **Decision authority** | Who can approve what (e.g., TPM approves minor changes, steering committee approves major ones) |
| **Communication plan** | Who needs to know about the change and its impact |

#### Step 2: Evaluate Every Change Through Four Lenses

When a change is proposed, assess it on four dimensions:

| Lens | Questions to Ask |
|------|------------------|
| **Timeline impact** | Does this change affect our delivery date? By how much? |
| **Resource impact** | Does this require more people, different skills, or external vendors? |
| **Quality impact** | Does this affect our quality standards? Does it introduce new risks? |
| **Dependency impact** | Does this change affect other teams' dependencies? Does it create new dependencies? |

#### Step 3: Make the Tradeoff Explicit

Every change has a cost. Make it visible:

| Scenario | Tradeoff |
|----------|----------|
| New feature requested | "We can add this if we remove something of equal effort. Which should we remove?" |
| Timeline accelerated | "We can go faster if we reduce scope or quality. Which do you choose?" |
| Resource reduced | "With fewer people, we'll deliver less. Which features are lowest priority?" |
| Dependency delayed | "Team X is delayed. We can (A) accept the delay, (B) find a workaround, or (C) descope the dependent feature." |

**The golden rule of change management:** Never present a single option. Always present at least two, with the tradeoffs clearly stated.

#### Step 4: Communicate Changes Proactively

When a change is approved, communicate it immediately:

| Who Needs to Know | What They Need | Channel |
|-------------------|---------------|---------|
| **Team members** | What changed, why, and how it affects their work | Sync meeting + written update |
| **Affected stakeholders** | How the change affects them specifically | Direct email or meeting |
| **All stakeholders** | Summary of the change and its impact | Weekly update |
| **Decision-maker** | Confirmation that the change was implemented as approved | Follow-up email |

**The "no surprises" rule:** No stakeholder should ever learn about a change affecting their interests from someone else. Tell them directly, before they hear it in the hallway.

#### Step 5: Update Plans and Track

After a change is approved:
1. **Update the risk register** - Does the change introduce new risks? Do existing risks change?
2. **Update the dependency map** - Does the change affect any dependencies?
3. **Update the timeline** - Adjust milestones, critical path, and delivery dates
4. **Update the RACI matrix** - Does the change affect who's responsible for what?
5. **Track change velocity** - How many changes are being requested? Is this normal or a sign of instability?

### Implementation Playbook: Change Management

**Use this when a change is proposed or you anticipate changes:**

```
CHANGE MANAGEMENT PLAYBOOK

□ Log the change request:
  □ What is being changed?
  □ Who is requesting it?
  □ Why is it being requested?
  □ When does it need to be decided?

□ Evaluate through 4 lenses:
  □ Timeline impact: ___________________________
  □ Resource impact: ___________________________
  □ Quality impact: ___________________________
  □ Dependency impact: _________________________

□ Prepare tradeoff options:
  Option A: Approve with ________ (impact/tradeoff)
  Option B: Reject because _____________
  Option C: Partial approval with _____________
  Option D: Defer to later phase

□ Escalate to appropriate decision authority:
  Minor changes: TPM can approve
  Medium changes: Program leadership
  Major changes: Steering committee
  Strategic changes: Executive team

□ Communicate the decision:
  □ Team members (how it affects their work)
  □ Affected stakeholders (direct contact)
  □ All stakeholders (summary in weekly update)
  □ Decision-maker (confirmation of implementation)

□ Update program artifacts:
  □ Risk register
  □ Dependency map
  □ Timeline / milestones
  □ RACI matrix
  □ Budget tracker

□ Monitor for cascading changes:
  One change often triggers others.
  Watch for 2-3 weeks after a major change.
  Did this change create new risks or dependencies?
```

## Realistic Example

**Scenario:** You're the TPM for a program building a new customer onboarding flow for a SaaS platform. The program is 4 months into a 6-month timeline. Everything is on track. Then, at the weekly program sync, the Product Manager says:

> "The VP of Sales just came back from a conference. He saw a competitor's onboarding flow that has a 'wizard' that guides users through setup. He wants us to add a setup wizard to our onboarding. He says it'll 'only take a couple of weeks.'"

**Step 1 - Log the change request.** You create a change request entry:

| Field | Value |
|-------|-------|
| **Request ID** | CR-007 |
| **Date** | Today |
| **Requester** | VP of Sales |
| **Description** | Add a guided setup wizard to the onboarding flow |
| **Reason** | Competitive pressure; competitor showed similar feature at industry conference |
| **Urgency** | Medium (VP wants it in current release) |

**Step 2 - Evaluate through 4 lenses.**

| Lens | Assessment |
|------|------------|
| **Timeline** | Setup wizard requires: new UI screens, backend configuration logic, analytics tracking. Rough estimate (T-Shirt size: L) = 3–4 weeks. This pushes launch from Week 24 to Week 28. |
| **Resource** | Would require the frontend team (currently working on final QA) to go back to development. Also requires backend changes (the backend team was about to start the next program). |
| **Quality** | Adding 3–4 weeks of development with no additional QA time risks quality issues. Current QA capacity is fully committed through launch. |
| **Dependency** | No external dependencies for the wizard itself. But the delay would conflict with the next program that depends on the frontend team starting in Week 25. |

**Step 3 - Prepare tradeoff options.** You prepare three options for the decision:

**Option A: Add the wizard, delay launch.**
- Timeline: Launch moves from Week 24 to Week 28 (+4 weeks)
- Cost: Additional 4 weeks of team time (~$80K)
- Impact: Next program delayed by 4 weeks
- Risk: QA may be compressed; quality risk

**Option B: Add the wizard, descope something else.**
- Keep Week 24 launch date
- Remove "advanced analytics" feature from the onboarding flow (estimated at 4 weeks of effort)
- Wizard replaces analytics in the scope
- Stakeholder impact: Sales gets wizard, but Marketing loses the analytics they requested

**Option C: Defer wizard to Phase 2.**
- Launch as planned in Week 24 without wizard
- Wizard goes on the roadmap for Phase 2 (starting Week 28)
- No timeline impact; no descoping
- Stakeholder impact: Sales doesn't get wizard at launch, but gets it 4 weeks later

**Step 4 - Escalate to decision authority.** Since this is a scope change with timeline impact, it requires the steering committee (VP of Sales, VP of Product, VP of Engineering). You schedule a 30-minute decision meeting.

At the meeting, you present the three options:

> "The VP of Sales has requested a setup wizard. It's a reasonable request, but it's a 4-week feature. Here are our options..."

**The decision:** The VP of Sales initially pushes for Option A (add wizard, delay launch). The VP of Product points out that delaying launch means missing the quarter-end revenue target. The VP of Engineering points out the constraint with the next program.

They settle on **Option B** (wizard in, analytics out). The VP of Marketing (who wanted analytics) is consulted and agrees to push analytics to Phase 2. The tradeoff is accepted.

**Step 5 - Communicate and update.**

- Team: Notified in the next standup. Frontend team gets the new requirements. QA team is informed that analytics testing is deferred.
- Stakeholders: Marketing lead is contacted directly by the VP of Product to discuss the analytics descope.
- All stakeholders: Updated in the weekly RAG report.
- **Updates:** Risk register updated (new risks: wizard integration complexity). Dependency map updated (wizard depends on backend config API). Timeline updated (launch still Week 24, wizard will be built concurrently with remaining work).

**The outcome:** The wizard is delivered on time, within the original launch date. The analytics feature is delivered in Phase 2. No other scope or timeline changes are needed. The change management process prevented the "it'll only take a couple of weeks" trap that could have silently delayed the launch.

## Case Study

**Organization:** A financial data company ("FinData") provided real-time market data to hedge funds and investment banks. The company was modernizing its data distribution platform-moving from a legacy on-premise system to a cloud-based streaming platform. The program was 12 months long, involved 6 teams, and had non-negotiable deadlines tied to client contracts.

**The Problem:** The program had been running for 3 months when a major change hit: the company's largest client signed a contract that required a new feature-custom data feeds with client-specific filtering-that hadn't been in the original plan. The feature would take an estimated 3–4 months to build.

The CEO's response: "This client is worth $5M/year. We need to figure out how to make it work."

**The Change Management Challenge:**

The TPM, Viktor, faced a cascade of changes:

1. **Direct change:** New feature required (custom data feeds)
2. **Cascading change 1:** The data pipeline architecture needed to support per-client filtering-a significant architectural change that affected the core platform
3. **Cascading change 2:** The testing timeline needed to expand to cover client-specific configurations
4. **Cascading change 3:** The client integration team (originally scheduled for Phase 2) had to start immediately, pulling resources from other workstreams
5. **Cascading change 4:** Three existing features were at risk of being descoped because resources were being redirected

**Viktor's Change Management Approach:**

**Phase 1 - Assess the full impact (1 week).** Viktor didn't just accept the change and update the plan. He spent a week assessing the cascading impacts:

- **Interviewed all 6 team leads** about the impact on their workstreams
- **Mapped the dependency changes** - the custom filtering feature would become a new dependency for 4 other features
- **Calculated the timeline impact** - the original 12-month program would need 14–15 months if nothing else changed
- **Identified 3 possible descoping candidates** - features that could move to Phase 2 to free up resources

**Phase 2 - Prepare tradeoff options (2 days).** Viktor presented 3 options to the steering committee:

| Option | What It Means | Timeline | Revenue Impact | Risk |
|--------|---------------|----------|----------------|------|
| **A: Full scope, full timeline** | Add the client feature, keep all existing scope, extend timeline by 3 months | 15 months | $5M client secured, but $2M from other clients at risk (extended timeline) | Medium - timeline extension accepted |
| **B: Descope 3 features to Phase 2** | Add client feature, remove 3 existing features from Phase 1 | 12 months | $5M client secured, 3 features delayed by 4 months | Low - most of the descoped features weren't critical |
| **C: Partial client feature, on time** | Build a simplified version of the client feature (no client-specific UI, manual configuration) | 12 months | $5M client secured but with manual processes; automate in Phase 2 | Medium - manual configuration introduces operational risk |

**Phase 3 - Facilitate the decision (1 meeting).** Viktor presented the options. The CEO initially pushed for Option A (full scope, extended timeline). The VP of Engineering pointed out that the 3-month delay would cause the company to miss 2 other client commitments.

The group landed on **Option B**. The three descoped features were:
1. Advanced analytics dashboard (nice-to-have, no client committed to it)
2. Historical data backfill tool (important but not launch-critical)
3. Self-service admin portal (Phase 2-admin can use CLI for now)

**Phase 4 - Manage the cascading changes (ongoing).** With the decision made, Viktor had to manage the ripple effects:

1. **Updated the risk register** - Added 6 new risks related to the custom filtering feature, including: "Filtering logic may not scale to multiple clients" and "Client-specific testing introduces configuration drift risk"

2. **Updated the dependency map** - The custom filtering feature now sat at the center of the dependency map, with 4 outbound dependencies and 2 inbound ones

3. **Communicated the change** - Viktor held a program-wide meeting to explain the change, why it was happening, and how it affected each team. Individual 1:1s with the leads whose features were descoped.

4. **Monitored for further cascading changes** - In the weekly syncs for the next month, Viktor specifically asked: "Has this change created any new dependencies or risks we haven't identified?"

**Phase 5 - Track change velocity.** Viktor noticed a pattern: after the client feature change, the rate of change requests increased from 2/month to 5/month. Stakeholders were treating the change as a "scope reopening" and proposing their own additions.

He instituted a change request moratorium: "No new changes will be considered until the client feature integration is complete (8 weeks). After that, normal change process resumes." This stabilized the program.

**The Outcomes:**

- **The client feature launched on schedule** (aligned with the client's contractual deadline)
- **The 3 descoped features** were delivered in Phase 2 (starting 3 months after Phase 1 launch)
- **The program launched in 13 months** - 1 month beyond the original 12-month plan, but significantly better than the 15-month worst case
- **The change management process** was adopted as the company's standard for all programs
- **Viktor's escalation and communication** during the change was recognized by the CEO as "the reason we didn't panic"

**What Went Well:**

1. **Viktor didn't react immediately.** He took a week to assess the full impact before proposing options. This prevented a rushed decision that would have created more problems.

2. **He identified cascading changes early.** The architecture, testing, and resource impacts were all identified before the decision was made, not discovered later.

3. **He presented tradeoffs, not a recommendation.** Viktor gave the steering committee 3 clear options with explicit tradeoffs. He didn't try to force his preferred option.

4. **He stabilized the program after the change.** The change request moratorium was unpopular but necessary. It prevented the program from being destabilized by further scope changes.

**Lessons Learned:**

1. **One change triggers others.** Viktor's initial assessment identified 4 cascading changes from the single client feature request. New TPMs often assume a change is isolated. It almost never is.

2. **The first question should always be: "What would we stop doing?"** When a new feature is requested, the default should be to identify what gets deferred or removed, not to extend the timeline.

3. **Change velocity is a leading indicator of program instability.** When Viktor saw the change request rate spike from 2/month to 5/month, he recognized it as a signal that the program was losing focus. The moratorium was the right response.

4. **Not all changes should be treated equally.** Viktor evaluated the client feature change through the lens of strategic value ($5M client). Some changes are worth disrupting the program for. Most aren't. Having a framework helps distinguish between them.

5. **Communicating the "why" of a change is as important as the "what."** When Viktor told the team that 3 features were being descoped, he also explained: "This change adds $5M in revenue. That's why we're doing it. Your features aren't less important-they're just less urgent." This prevented demoralization.

---

# Conclusion: The Five Domains in Practice

These five domains of risk and dependency management are not separate disciplines-they're interconnected practices that work together in your daily work as a TPM.

**How they flow together:**

```
RISK IDENTIFICATION
  ↓ (you identify a risk)
RISK MITIGATION
  ↓ (you implement controls)
DEPENDENCY MAPPING
  ↓ (you discover a dependency that's now at risk)
ESCALATION
  ↓ (you escalate the dependency risk)
CHANGE MANAGEMENT
  ↓ (the escalation triggers a change in the plan)
  ↓ (back to RISK IDENTIFICATION - the change introduces new risks)
```

**When to practice each domain:**

| You should be doing this... | ...at this frequency |
|----------------------------|---------------------|
| Risk Identification | Weekly (as part of regular syncs) |
| Risk Mitigation | Weekly (tracking mitigation actions) |
| Dependency Mapping | Weekly (reviewing dependency health) |
| Escalation | As needed (when issues exceed your authority) |
| Change Management | As needed (when changes are proposed) |

**As a beginner, your priority should be:**

1. **Month 1:** Master Risk Identification. Build the habit of weekly risk reviews. Create your first risk register.
2. **Month 2:** Add Dependency Mapping. Map your program's dependencies and identify the critical path.
3. **Month 3:** Practice Risk Mitigation. For every open risk, have a mitigation plan with an owner and due date.
4. **Month 4:** Learn Escalation. Know when to escalate, how to structure it, and who to escalate to.
5. **Month 5:** Implement Change Management. Establish a change control process before you need it.

The most experienced TPMs make risk and dependency management look effortless. That's not because they're naturally better at it-it's because they've internalized these frameworks to the point where they're automatic. With practice, you will too.

---

*This field guide was developed for TPMs in their first months on the job. It reflects patterns observed across hundreds of programs in fintech, health-tech, SaaS, logistics, media, and infrastructure organizations. All examples and case studies are representative composites drawn from real program management experience.*
