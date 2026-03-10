export interface CaseStudy {
  id: string;
  number: string;
  name: string;
  tagline: string;
  domain: string;
  url?: string;
  problem: string;
  insight: string;
  solution: string;
  hardestDecision: string;
  hardestDecisionWhy: string;
  keyDecisions: string[];
  impact: string[];
  metrics: string[];
  nextSteps: string[];
  flow: { label: string; detail: string }[];
}

export interface ProductIndexItem {
  name: string;
  type: string;
  domain: string;
  description: string;
  url?: string;
  status: "Shipped" | "In Progress" | "Internal";
}

export const caseStudies: CaseStudy[] = [
  {
    id: "pneu",
    number: "01",
    name: "PNEU",
    tagline: "Nervous system regulation in under 60 seconds",
    domain: "Health / Education",
    url: "https://apps.apple.com/us/app/pneu/id6757112120",
    problem:
      "In school environments, dysregulated students and teachers cause classroom disruptions, teacher burnout, and learning loss. Most interventions happen after problems escalate — there are no fast, proactive tools available during the 60-second windows between transitions.",
    insight:
      "Short breathing exercises can restore nervous system balance in under a minute. Schools have the need and the time window — they just don't have an accessible tool designed to fit into it.",
    solution:
      "A mobile app delivering guided micro-resets — haptic breathing synced to 65 BPM, voice guidance, and grounding exercises. Designed for the reality of school schedules: fast, minimal, and usable under stress without any training.",
    hardestDecision:
      "Limiting sessions to 60 seconds instead of building deeper meditation or extended wellness features.",
    hardestDecisionWhy:
      "Longer sessions would improve regulation depth, but the operating reality is that teachers and students rarely have more than a minute between transitions. A 5-minute feature that never gets used is worse than a 60-second tool that becomes a daily habit. Optimizing for speed and consistency over depth made real-world adoption possible.",
    keyDecisions: [
      "60-second cap on exercises — matches real school transition windows, not ideal wellness durations",
      "Minimal UI with zero onboarding — dysregulated users can't process complex interfaces under stress",
      "Regulation-first positioning, not meditation — practical classroom utility over wellness lifestyle branding",
    ],
    impact: [
      "Reduce time-to-regulation from 10+ minutes (traditional interventions) to under 60 seconds",
      "Enable proactive regulation before disruptions occur, not reactive intervention after",
      "Lower barrier to teacher adoption — zero training, zero configuration, immediate use",
      "Create a repeatable daily habit that fits into existing school schedules without disruption",
    ],
    metrics: [
      "Daily active users",
      "Exercise completion rate",
      "Time-to-first-exercise",
      "Teacher retention at 30 days",
    ],
    nextSteps: [
      "Classroom dashboard for administrators to track regulation patterns",
      "School district integration and bulk licensing",
      "Teacher-specific stress monitoring and intervention tools",
    ],
    flow: [
      { label: "Environment", detail: "School transitions cause dysregulation with no proactive tools" },
      { label: "Friction", detail: "Existing interventions don't fit the 60-second window" },
      { label: "System", detail: "Guided micro-resets with haptic breathing, zero onboarding" },
      { label: "Outcome", detail: "Daily adoption through speed, simplicity, and schedule fit" },
    ],
  },
  {
    id: "capture",
    number: "02",
    name: "PNEUOMA Capture",
    tagline: "Voice-first incident documentation for educators",
    domain: "AI / Education",
    url: "https://pneuoma.com",
    problem:
      "Teachers and administrators lose hours each week to manual incident documentation. MTSS and behavioral reporting systems require extensive typing, form-filling, and context-switching — pulling educators away from students. Documentation gets delayed, quality drops, and behavioral patterns go undetected.",
    insight:
      "Speech is the fastest input modality humans have. Teachers already verbally describe incidents to colleagues in hallways — they just aren't capturing that information in structured form. The data exists; the capture method is wrong.",
    solution:
      "A voice-first documentation tool where teachers speak what happened and AI converts it into structured, exportable incident reports. No typing, no forms, no training — speak and submit in under two minutes.",
    hardestDecision:
      "Choosing a privacy-first AI architecture instead of faster cloud-based transcription services.",
    hardestDecisionWhy:
      "Standard cloud AI tools would have been significantly easier and faster to build with. But student behavioral data requires strict compliance and district trust. A privacy-first approach increased development complexity and limited some AI capabilities, but it protected sensitive student information and made district-level adoption viable — which is the only adoption that matters in education.",
    keyDecisions: [
      "Privacy-first architecture — student data never leaves controlled infrastructure, even at the cost of development speed",
      "Structured output format — reports are compatible with existing school documentation systems, reducing change management",
      "Zero-training interface — designed for stressed educators who need it to work immediately, not after a workshop",
    ],
    impact: [
      "Reduce incident documentation time from ~15 minutes to under 2 minutes per report",
      "Enable teachers to submit structured reports between classes without leaving their hallway",
      "Increase reporting compliance and consistency by lowering the friction of documentation",
      "Surface behavioral patterns earlier through higher-quality, more frequent reporting",
    ],
    metrics: [
      "Minutes saved per incident report",
      "Teacher adoption rate",
      "Reports generated per week",
      "Documentation accuracy vs. manual entry",
    ],
    nextSteps: [
      "MTSS system integration for seamless compliance workflows",
      "Behavior pattern analytics surfaced to administrators automatically",
      "District-level reporting dashboards for cross-school visibility",
    ],
    flow: [
      { label: "Environment", detail: "Educators losing hours weekly to manual documentation" },
      { label: "Friction", detail: "Typing-based forms are slow, frustrating, and get skipped" },
      { label: "System", detail: "Voice → AI-structured incident reports in under 2 minutes" },
      { label: "Outcome", detail: "More reports, better data, earlier pattern detection" },
    ],
  },
  {
    id: "playground",
    number: "03",
    name: "Playground",
    tagline: "Learning objectives embedded inside open play",
    domain: "Education / Gaming",
    problem:
      "Parents want children to learn while playing. But the market is split: pure entertainment games with no learning outcomes, or rigid educational software that kills engagement within minutes. No product successfully merges deep play engagement with measurable learning at scale.",
    insight:
      "Children engage deeply with open play environments like Minecraft — not because of the content, but because of the agency. The engagement problem isn't about what to teach; it's about who controls the experience. When teachers can embed objectives inside play without breaking flow, learning happens naturally.",
    solution:
      "An open educational game where teachers define learning tasks — math challenges, spelling quests, problem-solving missions — that surface as gameplay objectives. Students experience play; teachers steer learning outcomes through configurable content.",
    hardestDecision:
      "Keeping the game open-ended rather than building a tightly structured linear curriculum.",
    hardestDecisionWhy:
      "Structured curricula are easier to build, easier to sell to schools, and easier to measure. But educational games consistently fail because they feel like assignments. An open-ended environment required building a flexible content system instead of a simple sequence — significantly more complex — but preserved the play engagement that makes the product viable at all.",
    keyDecisions: [
      "Play-first design — engagement before instruction, always; learning follows attention",
      "Teacher-configurable objectives — adaptable to any classroom, curriculum, or learning style",
      "Parent visibility loop — progress tracking that informs parents without interrupting gameplay",
    ],
    impact: [
      "Increase average learning session length by embedding objectives inside play rather than interrupting it",
      "Enable teachers to deploy curriculum-aligned content without building games from scratch",
      "Provide parents with learning outcome visibility without the child experiencing it as assessment",
      "Create a reusable platform for any subject area, reducing per-curriculum development cost",
    ],
    metrics: [
      "Average session length",
      "Learning task completion rate",
      "Teacher content creation rate",
      "Return rate at 7 days",
    ],
    nextSteps: [
      "Teacher content marketplace for peer-created learning objectives",
      "AI-generated learning quests aligned to curriculum standards",
      "School district pilot programs with outcome measurement",
    ],
    flow: [
      { label: "Environment", detail: "Kids disengage from rigid educational software within minutes" },
      { label: "Friction", detail: "Learning tools sacrifice engagement; games sacrifice outcomes" },
      { label: "System", detail: "Teacher-defined learning objectives embedded inside open gameplay" },
      { label: "Outcome", detail: "Sustained play engagement with measurable learning progress" },
    ],
  },
  {
    id: "dibbs",
    number: "04",
    name: "DIBBS Copilot",
    tagline: "AI copilot for behavioral documentation workflows",
    domain: "AI / Workflow Automation",
    problem:
      "School behavioral teams spend significant time in documentation cycles — writing reports, tracking interventions, and compiling compliance data across disconnected systems. The cognitive overhead delays decision-making about students who need immediate support, and the documentation quality varies widely between staff members.",
    insight:
      "Most behavioral documentation follows repeatable patterns and structures. An AI copilot that understands school documentation conventions can draft, suggest, and organize reports — turning hours of manual writing into minutes of human review. The patterns exist; the labor shouldn't.",
    solution:
      "An AI-powered copilot that sits alongside existing workflows, drafting behavioral reports, suggesting intervention language, and organizing documentation into compliant formats. Educators review and approve everything — AI handles the repetitive structure, humans own the decisions.",
    hardestDecision:
      "Designing the copilot as a drafting assistant rather than a fully autonomous documentation system.",
    hardestDecisionWhy:
      "Full automation would have been faster to ship and easier to demonstrate. But behavioral reports carry real consequences for students — placement decisions, intervention plans, compliance outcomes. Educators need to own the language. Keeping humans in the review loop added significant UI complexity but preserved the trust and accuracy that makes the tool usable in high-stakes environments.",
    keyDecisions: [
      "Copilot model, not autopilot — educators review and approve all output before submission",
      "Pattern-aware suggestions — drafts follow common behavioral documentation structures and compliance language",
      "System-agnostic export — integrates alongside existing tools rather than replacing them",
    ],
    impact: [
      "Reduce behavioral report drafting time from 30+ minutes to under 5 minutes of review",
      "Improve documentation consistency across staff by standardizing structure and language",
      "Accelerate intervention timelines by removing the documentation bottleneck",
      "Increase compliance accuracy through pattern-aware formatting and required-field prompting",
    ],
    metrics: [
      "Time saved per documentation cycle",
      "Suggestion acceptance rate",
      "Compliance accuracy improvement",
      "User satisfaction score",
    ],
    nextSteps: [
      "Integration with major MTSS platforms",
      "Intervention recommendation engine based on documented patterns",
      "District-wide behavioral trend analytics and early warning systems",
    ],
    flow: [
      { label: "Environment", detail: "Behavioral teams buried in repetitive, high-stakes documentation" },
      { label: "Friction", detail: "Manual writing is slow, inconsistent, and delays student support" },
      { label: "System", detail: "AI copilot drafts structured reports; humans review and approve" },
      { label: "Outcome", detail: "Faster interventions, consistent documentation, maintained trust" },
    ],
  },
  {
    id: "pilotengine",
    number: "05",
    name: "PilotEngine",
    tagline: "Automated outreach and workflow orchestration",
    domain: "AI / Sales Automation",
    url: "https://pilot-engine.vercel.app",
    problem:
      "Outreach workflows — for sales, partnerships, recruiting, and fundraising — require repetitive manual effort: list building, personalization, sequencing, and follow-ups. Small teams can't compete with organizations that have dedicated ops teams, so they either burn hours on manual execution or send generic messages that don't convert.",
    insight:
      "Most outreach follows predictable sequences that can be templated and triggered automatically. The bottleneck isn't strategy — it's execution capacity. AI can handle personalization and sequencing at scale if the workflow logic is well-defined and human checkpoints are preserved.",
    solution:
      "An AI-powered outreach engine that automates list building, message personalization, multi-channel sequencing, and follow-up triggers. Users define the strategy and approval gates; PilotEngine handles the execution volume.",
    hardestDecision:
      "Building a general-purpose workflow engine instead of a narrow, vertical sales outreach tool.",
    hardestDecisionWhy:
      "A focused sales product would have shipped faster and been easier to position. But outreach patterns are nearly identical across sales, recruiting, partnerships, and fundraising — the workflow logic is the same, only the context changes. Investing in a flexible orchestration layer meant slower initial delivery and more complex architecture, but created a product that serves multiple use cases without rebuilding.",
    keyDecisions: [
      "Workflow-first architecture — strategy templates drive execution, making the system reusable across verticals",
      "Multi-channel orchestration — email, LinkedIn, and custom channels coordinated in a single sequence",
      "Human override at every step — automation with manual checkpoints preserves quality and prevents spam",
    ],
    impact: [
      "Give small teams enterprise-level outreach capacity without dedicated ops staff",
      "Reduce campaign setup time from hours to minutes through reusable strategy templates",
      "Improve response rates through consistent, personalized follow-up sequencing",
      "Enable one person to manage outreach volume that previously required a team of 3-5",
    ],
    metrics: [
      "Outreach volume per user per week",
      "Response rate vs. manual baseline",
      "Time saved on campaign setup",
      "Pipeline generated per campaign",
    ],
    nextSteps: [
      "CRM integration layer for bi-directional data sync",
      "AI-generated campaign strategies based on ICP and historical performance data",
      "Analytics dashboard for outreach performance and conversion attribution",
    ],
    flow: [
      { label: "Environment", detail: "Small teams can't scale outreach without dedicated ops" },
      { label: "Friction", detail: "Manual personalization and follow-ups consume hours daily" },
      { label: "System", detail: "AI-orchestrated multi-channel sequences with human checkpoints" },
      { label: "Outcome", detail: "Enterprise outreach capacity for lean teams, measurably" },
    ],
  },
];

export const productIndex: ProductIndexItem[] = [
  {
    name: "PNEU",
    type: "Mobile App",
    domain: "Health / Education",
    description: "60-second nervous system regulation with haptic breathing",
    url: "https://apps.apple.com/us/app/pneu/id6757112120",
    status: "Shipped",
  },
  {
    name: "PNEUOMA Capture",
    type: "AI Tool",
    domain: "AI / Education",
    description: "Voice-to-structured-report incident documentation",
    url: "https://pneuoma.com",
    status: "Shipped",
  },
  {
    name: "Playground",
    type: "Game",
    domain: "Education / Gaming",
    description: "Open play environment with teacher-defined learning objectives",
    status: "In Progress",
  },
  {
    name: "DIBBS Copilot",
    type: "AI Tool",
    domain: "AI / Workflow",
    description: "AI copilot for behavioral documentation and MTSS reporting",
    status: "In Progress",
  },
  {
    name: "PilotEngine",
    type: "Automation Platform",
    domain: "AI / Sales",
    description: "Multi-channel outreach orchestration and workflow automation",
    url: "https://pilot-engine.vercel.app",
    status: "Shipped",
  },
  {
    name: "ORIGEN",
    type: "Mobile App",
    domain: "Productivity",
    description: "Personal operating system for daily structure and clarity",
    url: "https://apps.apple.com/us/app/origen/id6756326466",
    status: "Shipped",
  },
  {
    name: "SOVEREIGNTY",
    type: "Strategy Game",
    domain: "Gaming / Education",
    description: "Civilization-building strategy game spanning seven historical eras",
    url: "https://apps.apple.com/us/app/sovereignty/id6758255804",
    status: "Shipped",
  },
  {
    name: "PNEUOMA OS",
    type: "Platform",
    domain: "AI / Education",
    description: "Unified operating system connecting regulation, documentation, and workflow tools",
    url: "https://pneuoma.com",
    status: "Shipped",
  },
  {
    name: "AI Outreach System",
    type: "Internal Tool",
    domain: "AI / Operations",
    description: "Automated prospecting and personalized email generation pipeline",
    status: "Internal",
  },
  {
    name: "Curriculum Analytics",
    type: "Dashboard",
    domain: "Education / Data",
    description: "Learning progress visualization and intervention tracking for educators",
    status: "In Progress",
  },
];
