# ⚡ TPM Quick Reference Cheat Sheet

> **Purpose:** One-stop reference for last-minute review before interviews. Print this or keep it on your phone. Each framework is summarized in 1–3 sentences with key takeaways.
>
> **Study this file 30 minutes before every interview.**

---

## 1. Core TPM Frameworks

### RAID Log
| Letter | Stands For | Definition |
|--------|------------|------------|
| **R** | Risks | Something bad that *might* happen in the future |
| **A** | Assumptions | Something you're *assuming* is true without proof |
| **I** | Issues | Something bad that *has already* happened |
| **D** | Dependencies | Something you need *from someone else* to make progress |

**Key columns:** ID, Description, Owner, Status, Impact (H/M/L), Action, Due Date
**Review cadence:** Weekly with team. Never let it go 2 weeks without review.

---

### RACI Matrix
| Letter | Stands For | Meaning |
|--------|------------|---------|
| **R** | Responsible | The person who *does the work* (can be many) |
| **A** | Accountable | The person who *answers for the outcome* (only ONE) |
| **C** | Consulted | People whose *input is needed* before a decision |
| **I** | Informed | People who need to *know what happened* after a decision |

**Golden rule:** Only ONE 'A' per task. If two are accountable, neither is.

---

### OKRs (Objectives and Key Results)
- **Objective:** Qualitative, inspiring description of what you want to achieve
- **Key Results:** 3–5 quantitative measures that show you've achieved the objective
- **The 70% rule:** Good OKRs should feel uncomfortable. 70% achievement on stretch goals is success.
- **OKR ≠ Task:** Tasks are *how* you achieve KRs. KRs are *how you measure* the Objective.

---

### MoSCoW Prioritization
| Category | Meaning | Fallback |
|----------|---------|----------|
| **M**ust-have | Program fails without it | Non-negotiable |
| **S**hould-have | High value but can defer | Negotiable with timeline adjustment |
| **C**ould-have | Nice to have | Cut first when timeline pressure hits |
| **W**on't-have | Explicitly deferred | Documented for future phase |

**TPM rule:** If everything is Must-have, nothing is. Force the prioritization conversation.

---

### WBS (Work Breakdown Structure)
- Breaks a large project into smaller, manageable components
- Top-down: Program → Workstream → Deliverable → Task
- Each level is more detailed than the last
- **Rule of thumb:** Tasks should be estimated within 1–2 weeks of effort

---

## 2. Estimation Frameworks

### T-Shirt Sizing
| Size | Effort Range | When to Use |
|------|--------------|-------------|
| XS | A few hours | Early planning, low certainty |
| S | 1–3 days | |
| M | 1 week | |
| L | 2–4 weeks | |
| XL | 1–2 months | |
| XXL | 3+ months | Must be broken down further |

**Key principle:** Relative, not absolute. A "Medium" means "medium relative to other items."

---

### PERT (Program Evaluation and Review Technique)
**Formula:** Expected Duration = (O + 4M + P) / 6

| Estimate | Symbol | Mindset |
|----------|--------|---------|
| **O**ptimistic | O | Best case - everything goes perfectly |
| **M**ost Likely | M | Realistic - typical challenges |
| **P**essimistic | P | Worst case - multiple things go wrong |

**Standard Deviation:** (P - O) / 6 - larger = more uncertainty = needs more attention.

**Use for:** High-uncertainty items. Not needed for well-understood tasks.

---

### Capacity Planning
**Formula:** Effective Capacity = People × Hours × Utilization rate

**Realistic utilization:** 60–75% (not 100% - meetings, email, context-switching consume the rest)

**Typical split for a sprint:**
- 50%: New feature work
- 20%: Maintenance & bugs
- 20%: Unplanned work buffer
- 10%: Tech debt & improvements

---

### Critical Path Analysis
- **Critical path:** The longest sequence of dependent tasks - determines the minimum project duration
- **Float/Slack:** How much a task can slip without delaying the project
- **Critical path tasks:** Zero float. Any delay = project delay.
- **The critical path CAN change** - a non-critical task that slips enough becomes critical.

**TPM rule:** Track critical path tasks daily. Track non-critical tasks weekly.

---

## 3. Risk Management

### 5 Risk Response Strategies
| Strategy | What It Means | When to Use |
|----------|---------------|-------------|
| **Avoid** | Change the plan to eliminate the risk | Risk is unacceptable and avoidable |
| **Mitigate** | Reduce probability or impact | Can't avoid but can reduce |
| **Transfer** | Shift to another party (vendor, insurance) | Someone else can bear it better |
| **Accept** | Acknowledge and take no action | Cost of mitigation > potential impact |
| **Escalate** | Move to higher authority | Outside your scope of control |

### Probability × Impact Matrix
| Score | Color | Action | Review |
|-------|-------|--------|--------|
| 7–9 | 🔴 Red | Immediate mitigation plan | Every weekly sync |
| 4–6 | 🟠 Orange | Active mitigation within 2–4 weeks | Every weekly sync |
| 1–3 | 🟢 Green | Accept or watch | Monthly |

### The 4-Sentence Escalation
1. **The problem:** What's happening, concisely
2. **The impact:** What this means for the program
3. **What you've tried:** Steps already taken
4. **What you need:** Specific ask of the decision-maker

---

## 4. Stakeholder Management

### Power-Interest Grid
| | High Power | Low Power |
|--|------------|-----------|
| **High Interest** | **Key Players** - Manage closely, weekly engagement | **Keep Informed** - Regular updates |
| **Low Interest** | **Keep Satisfied** - Monitor, check-in periodically | **Monitor** - Minimal effort |

### TPM Communication Templates

**3-Sentence Executive Update:**
1. The headline (overall status in one sentence)
2. The evidence (key data point)
3. The ask (what you need - or "no ask needed")

**RAG Status:**
- 🟢 Green: On track. No issues requiring attention.
- 🟡 Amber: At risk. Action needed to maintain timeline.
- 🔴 Red: Off track. Leadership attention needed now.

**Never hide bad news.** A red caught early is better than a green that turns into a crisis.

---

## 5. Program Design Framework (6 Steps)

**Use for:** Case study / program design interview questions.

| Step | Action | Time |
|------|--------|------|
| **1. Clarify** | Ask questions: business objective, timeline, teams, scope, success metrics | 2 min |
| **2. Structure** | Define workstreams, phases, critical path, key stakeholders | 2 min |
| **3. Plan** | Working backward from launch: milestones with owners and dates, buffer | 3 min |
| **4. Identify Risks** | Top 3 risks with mitigation | 2 min |
| **5. Communicate** | Weekly RAG report, daily standups, escalation path, decision log | 1 min |
| **6. Launch** | Pre-launch checklist, rollback plan, post-launch monitoring | 1 min |

---

## 6. Estimation Framework (5 Steps)

| Step | Action | Example |
|------|--------|---------|
| **1. Clarify** | "What exactly are we estimating?" | |
| **2. Break Down** | Divide into smaller components | |
| **3. State Assumptions** | Be explicit about every assumption | |
| **4. Math Out Loud** | Say each step as you compute. Use round numbers. | |
| **5. Sanity Check** | "Does this number seem reasonable? What would change it?" | |

**Key insight:** Interviewers care about your reasoning process, not the exact number.

---

## 7. Conflict Resolution Framework (5 Steps)

| Step | Action |
|------|--------|
| **1. Understand** | "What exactly is the disagreement? What does each party want?" |
| **2. Separate** | Distinguish: Positions (what they say) vs. Interests (why they want it) vs. Data |
| **3. Find Common Ground** | "What do both sides agree on?" |
| **4. Generate Options** | "Here are 2–3 ways we could resolve this. What are the trade-offs?" |
| **5. Decide & Communicate** | Document the decision, rationale, and impact. Close the loop. |

---

## 8. Negotiation Framework (5 Steps)

| Step | Action |
|------|--------|
| **1. Know Your BATNA** | Best Alternative to a Negotiated Agreement - your walk-away power |
| **2. Understand Their Interests** | What pressures are they under? What's their BATNA? |
| **3. Create Value First** | "If you give me X, I can give you Y, and here's how that benefits you" |
| **4. Structure the Exchange** | Explicit trade: "If you [give], I can [give]" |
| **5. Confirm & Document** | Write down the agreement. Follow up. |

---

## 9. India-Specific Objection Scripts

**Q: "You're from a service-based company. How do we know you'll adapt?"**
> "I understand the concern. The stereotype is engineers who follow tickets and never see business impact. My experience was different - I made priority decisions during my manager's absence, mentored junior developers, and introduced structured retrospectives adopted beyond my team. What changes at a product company isn't my mindset - it's having the organizational structure to match how I already work."

**Q: "You're jumping from ₹9 to ₹18 LPA. Why are you worth that?"**
> "That jump reflects the role change. A TPM at ₹18 LPA is a different function than an SWE at ₹9 LPA - different skills, accountability, impact. I'm transitioning into a new function at market rate. I can justify the ask: 4.5 years of technical depth, demonstrated delivery ownership on two AI programs, conflict resolution at 8–9/10, and an MBA in progress."

---

## 10. Technical Depth: What Level Do You Need?

| Domain | Essential | High Value | Optional |
|--------|-----------|------------|----------|
| System Design | Foundational | Intermediate | Advanced |
| APIs | **Intermediate** | Master this - prevents integration failures | - |
| Cloud Infrastructure | Foundational | Intermediate | Advanced |
| GenAI/LLM Delivery | **Foundational (2026)** | Intermediate | Advanced |
| CI/CD Pipelines | **Intermediate** | Master this - prevents launch failures | - |
| Architecture Reviews | Foundational | Intermediate | Advanced |
| Infrastructure Scaling | Foundational | Intermediate | Advanced |

---

## 11. Your 90-Second Career Narrative

> *"I'm a Senior Software Engineer at Relevance Lab with 4.5 years of experience - React, TypeScript, Python, and AI/GenAI systems. But the work I've found most energizing is the coordination, delivery ownership, and stakeholder alignment.*
>
> *I've driven two significant programs: Sally (enterprise AI assistant) and CDL (GenAI data lineage platform) - both involving multiple teams, complex dependencies, and real delivery risk. My role was cross-functional coordinator and delivery owner.*
>
> *I've also mentored junior developers and stepped in to own team operations during my manager's absence. I'm in my MBA's 3rd semester. TPM is the natural fit - it gives the official title to work I'm already doing."*

---

## 12. Your Numbers to Memorize

| Item | Number |
|------|--------|
| Current salary | ₹9 LPA |
| TPM target | ₹18–22 LPA |
| Walk-away minimum | ₹17 LPA |
| Senior TPM target (Month 18–24) | ₹28–35 LPA |
| Target to say first | "I'd like to understand the full role and comp package before discussing numbers" |
| If pressed | "I'm targeting ₹18–22 LPA depending on the full package" |

---

## 13. Quick Interview Prep Checklist

**Before every interview:**
- [ ] Research the company (products, recent news, engineering culture)
- [ ] Read the JD - extract 5–7 keywords
- [ ] Review interviewer's LinkedIn
- [ ] Prepare 3 questions to ask
- [ ] Memorize: 90-second narrative, your key numbers
- [ ] Review this cheat sheet (15 minutes)
- [ ] Record yourself answering 1 practice question

**During the interview:**
- [ ] Use STAR structure for behavioral questions
- [ ] Use 6-Step framework for case design questions
- [ ] Use 5-Step framework for estimation questions
- [ ] Use 4-Sentence format for escalation answers
- [ ] Never give a number first in salary discussions
- [ ] End every answer by connecting back to the question

---

*Print this. Keep it with you. Review before every interview. - Built for Biren, June 2026*
