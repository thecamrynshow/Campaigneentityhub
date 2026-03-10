export interface CaseStudy {
  id: string;
  number: string;
  name: string;
  tagline: string;
  domain: string;
  problem: string;
  insight: string;
  solution: string;
  hardestDecision: string;
  keyDecisions: string[];
  metrics: string[];
  nextSteps: string[];
  flow: { label: string; detail: string }[];
}

export interface ProductIndexItem {
  name: string;
  type: string;
  domain: string;
  description: string;
  status: "Shipped" | "In Progress" | "Internal";
}

export const caseStudies: CaseStudy[] = [
  {
    id: "pneu",
    number: "01",
    name: "PNEU",
    tagline: "Nervous system regulation in under 60 seconds",
    domain: "Health / Education",
    problem:
      "In school environments, dysregulated students and teachers cause classroom disruptions, teacher burnout, and learning loss. Most interventions happen after problems escalate — there are no fast, proactive tools available between transitions.",
    insight:
      "Short breathing exercises can restore nervous system balance in under a minute. But schools have no accessible tool that fits into the 60-second windows between classes and activities.",
    solution:
      "A mobile app delivering guided micro-resets — haptic breathing synced to 65 BPM, voice guidance, and grounding exercises. Designed for the reality of school schedules: fast, minimal, and usable under stress.",
    hardestDecision:
      "Limiting sessions to 60 seconds instead of building deeper meditation features. Longer sessions would improve regulation depth, but teachers and students rarely have more than a minute between transitions. Optimizing for speed and consistency over depth made adoption realistic.",
    keyDecisions: [
      "60-second cap on exercises — matches real school transition windows",
      "Minimal UI with zero onboarding — dysregulated users can't process complex interfaces",
      "Regulation-first, not meditation — positioned for classroom utility, not wellness lifestyle",
    ],
    metrics: [
      "Daily active users",
      "Exercise completion rate",
      "Time-to-first-exercise",
      "Teacher retention at 30 days",
    ],
    nextSteps: [
      "Classroom dashboard for administrators",
      "School district integration and bulk licensing",
      "Teacher-specific stress monitoring tools",
    ],
    flow: [
      { label: "Environment", detail: "School transitions cause dysregulation" },
      { label: "Friction", detail: "No proactive tools fit the 60-second window" },
      { label: "System", detail: "Guided micro-resets with haptic breathing" },
      { label: "Outcome", detail: "Higher adoption through speed and simplicity" },
    ],
  },
  {
    id: "capture",
    number: "02",
    name: "PNEUOMA Capture",
    tagline: "Voice-first incident documentation for educators",
    domain: "AI / Education",
    problem:
      "Teachers and administrators lose hours each week to manual incident documentation. MTSS and behavioral reporting systems are slow, frustrating, and pull educators away from students. Documentation gets delayed, quality drops, and patterns go undetected.",
    insight:
      "Speech is the fastest input modality humans have. Teachers already verbally describe incidents to colleagues — they just aren't capturing that information in structured form.",
    solution:
      "A voice-first documentation tool where teachers speak what happened and AI converts it into structured, exportable incident reports. No typing, no forms — just speak and submit.",
    hardestDecision:
      "Choosing a privacy-first AI architecture over faster cloud-based transcription. Standard cloud AI tools would have been easier to build with, but student behavioral data requires strict privacy controls. This meant designing a more constrained system that protected data at the cost of development speed.",
    keyDecisions: [
      "Privacy-first architecture — student data never leaves controlled infrastructure",
      "Structured output format — compatible with existing school documentation systems",
      "Zero-training interface — designed for stressed educators who need it to work immediately",
    ],
    metrics: [
      "Minutes saved per incident report",
      "Teacher adoption rate",
      "Reports generated per week",
      "Documentation accuracy vs. manual entry",
    ],
    nextSteps: [
      "MTSS system integration",
      "Behavior pattern analytics for administrators",
      "District-level reporting dashboards",
    ],
    flow: [
      { label: "Environment", detail: "Educators losing hours to manual documentation" },
      { label: "Friction", detail: "Typing is slow; forms are frustrating" },
      { label: "System", detail: "Voice → AI-structured incident reports" },
      { label: "Outcome", detail: "Faster reporting, better data, more time with students" },
    ],
  },
  {
    id: "playground",
    number: "03",
    name: "Playground",
    tagline: "Learning objectives embedded inside open play",
    domain: "Education / Gaming",
    problem:
      "Parents want children to learn while playing. But most products are either pure entertainment or rigid educational software that kills engagement. The gap between fun and learning remains unsolved at scale.",
    insight:
      "Children engage deeply with open play environments like Minecraft. The engagement problem isn't about content — it's about control. When teachers can embed objectives inside play, learning happens without breaking flow.",
    solution:
      "An open educational game where teachers define learning tasks — math challenges, spelling quests, problem-solving missions — that appear as gameplay objectives. Students play; teachers steer.",
    hardestDecision:
      "Keeping the game open-ended rather than tightly structured. Educational games typically fail because they feel like assignments. Letting teachers insert challenges into an open environment preserved engagement, but required building a flexible content system instead of a simpler linear curriculum.",
    keyDecisions: [
      "Play-first design — engagement before instruction, always",
      "Teacher-configurable objectives — adaptable to any classroom or curriculum",
      "Parent visibility loop — progress tracking without interrupting gameplay",
    ],
    metrics: [
      "Average session length",
      "Learning task completion rate",
      "Teacher content creation rate",
      "Return rate at 7 days",
    ],
    nextSteps: [
      "Teacher content marketplace",
      "AI-generated learning quests based on curriculum",
      "School district pilot programs",
    ],
    flow: [
      { label: "Environment", detail: "Kids disengage from rigid educational software" },
      { label: "Friction", detail: "Learning tools kill engagement; games skip learning" },
      { label: "System", detail: "Teacher-defined objectives inside open gameplay" },
      { label: "Outcome", detail: "Sustained engagement with measurable learning" },
    ],
  },
  {
    id: "dibbs",
    number: "04",
    name: "DIBBS Copilot",
    tagline: "AI copilot for behavioral documentation workflows",
    domain: "AI / Workflow Automation",
    problem:
      "School behavioral teams spend significant time in documentation cycles — writing reports, tracking interventions, and compiling compliance data across disconnected systems. The cognitive overhead delays decision-making about students who need support now.",
    insight:
      "Most behavioral documentation follows repeatable patterns. An AI copilot that understands school documentation structures can draft, suggest, and organize reports — turning hours of manual work into minutes of review.",
    solution:
      "An AI-powered copilot that sits alongside existing workflows, drafting behavioral reports, suggesting intervention language, and organizing documentation into compliant formats. Human review stays in the loop; AI handles the repetitive structure.",
    hardestDecision:
      "Designing the copilot as an assistant rather than a replacement. Full automation would have been faster to ship, but educators need to own the language in behavioral reports. Keeping humans in the review loop added complexity but preserved trust and accuracy.",
    keyDecisions: [
      "Copilot model, not autopilot — educators review and approve all output",
      "Pattern-aware suggestions — trained on common behavioral documentation structures",
      "System-agnostic export — works alongside existing tools, not against them",
    ],
    metrics: [
      "Time saved per documentation cycle",
      "Suggestion acceptance rate",
      "Compliance accuracy",
      "User satisfaction score",
    ],
    nextSteps: [
      "Integration with major MTSS platforms",
      "Intervention recommendation engine",
      "District-wide behavioral trend analytics",
    ],
    flow: [
      { label: "Environment", detail: "Behavioral teams buried in documentation" },
      { label: "Friction", detail: "Manual writing across disconnected systems" },
      { label: "System", detail: "AI copilot drafts and structures reports" },
      { label: "Outcome", detail: "Faster decisions, better support for students" },
    ],
  },
  {
    id: "pilotengine",
    number: "05",
    name: "PilotEngine",
    tagline: "Automated outreach and workflow orchestration",
    domain: "AI / Sales Automation",
    problem:
      "Outreach workflows — for sales, partnerships, or recruiting — require repetitive manual effort: list building, personalization, sequencing, and follow-ups. Small teams can't compete with organizations that have dedicated ops teams.",
    insight:
      "Most outreach follows predictable sequences that can be templated and triggered automatically. The bottleneck isn't strategy — it's execution. AI can handle personalization and sequencing at scale if the workflow logic is well-defined.",
    solution:
      "An AI-powered outreach engine that automates list building, message personalization, multi-channel sequencing, and follow-up triggers. Users define the strategy; PilotEngine handles execution.",
    hardestDecision:
      "Building a general-purpose workflow engine instead of a narrow sales tool. A focused sales product would have been simpler, but outreach patterns repeat across sales, recruiting, partnerships, and fundraising. Investing in a flexible orchestration layer meant slower initial delivery but a more durable product.",
    keyDecisions: [
      "Workflow-first architecture — strategy templates drive execution, not vice versa",
      "Multi-channel orchestration — email, LinkedIn, and custom channels in one sequence",
      "Human override at every step — automation with manual checkpoints for quality",
    ],
    metrics: [
      "Outreach volume per user per week",
      "Response rate vs. manual baseline",
      "Time saved on campaign setup",
      "Pipeline generated per campaign",
    ],
    nextSteps: [
      "CRM integration layer",
      "AI-generated campaign strategies based on ICP data",
      "Analytics dashboard for outreach performance",
    ],
    flow: [
      { label: "Environment", detail: "Small teams can't scale outreach manually" },
      { label: "Friction", detail: "Repetitive personalization and follow-up sequences" },
      { label: "System", detail: "AI-orchestrated multi-channel outreach" },
      { label: "Outcome", detail: "Enterprise-level outreach capacity for lean teams" },
    ],
  },
];

export const productIndex: ProductIndexItem[] = [
  {
    name: "PNEU",
    type: "Mobile App",
    domain: "Health / Education",
    description: "60-second nervous system regulation with haptic breathing",
    status: "Shipped",
  },
  {
    name: "PNEUOMA Capture",
    type: "AI Tool",
    domain: "AI / Education",
    description: "Voice-to-structured-report incident documentation",
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
    status: "In Progress",
  },
  {
    name: "ORIGEN",
    type: "Mobile App",
    domain: "Productivity",
    description: "Personal operating system for daily structure and clarity",
    status: "Shipped",
  },
  {
    name: "SOVEREIGNTY",
    type: "Strategy Game",
    domain: "Gaming / Education",
    description: "Civilization-building strategy game spanning seven historical eras",
    status: "Shipped",
  },
  {
    name: "PNEUOMA OS",
    type: "Platform",
    domain: "AI / Education",
    description: "Unified operating system connecting regulation, documentation, and workflow tools",
    status: "In Progress",
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
