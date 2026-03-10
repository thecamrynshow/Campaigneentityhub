import { Metadata } from "next";
import { getSiteUrl } from "@/src/lib/utils";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Product Portfolio — Camryn Jackson",
  description:
    "Product Manager portfolio for Camryn Jackson. Case studies in AI tools, education technology, and human-centered systems. Founder @ PNEUOMA.",
  openGraph: {
    title: "Product Portfolio — Camryn Jackson",
    description:
      "Product Manager | Founder @ PNEUOMA. Case studies in regulation tech, AI documentation, and educational games.",
    url: `${siteUrl}/product`,
  },
  alternates: {
    canonical: `${siteUrl}/product`,
  },
};

function FlowDiagram({
  steps,
}: {
  steps: { label: string; detail: string }[];
}) {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-0 my-10">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col md:flex-row items-center flex-1">
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5 flex-1 w-full text-center hover:border-brand-gold/40 transition-colors">
            <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-1">
              {step.label}
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              {step.detail}
            </p>
          </div>
          {i < steps.length - 1 && (
            <div className="text-brand-gold/60 text-2xl mx-2 my-2 md:my-0 rotate-90 md:rotate-0 select-none">
              →
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MetricPill({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1.5 text-xs font-medium text-white/70 bg-white/[0.04] border border-white/10 rounded-full">
      {label}
    </span>
  );
}

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/10 via-black to-black" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto container-padding text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold/80 border border-brand-gold/30 rounded-full bg-brand-gold/5">
              Product Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif text-white tracking-tight leading-[1.1]">
            Camryn Jackson
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold font-medium mb-8">
            Product Manager&ensp;|&ensp;Founder @ PNEUOMA
          </p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Builder focused on human regulation systems, education tools, and
            AI-assisted workflows.
          </p>
        </div>
      </section>

      {/* Background + Focus */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 font-serif">
                Background
              </h2>
              <ul className="space-y-3 text-white/70 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Founder building PNEUOMA OS
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Former Dean of Students &amp; Athletic Director
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Product builder across AI tools, mobile apps, and workflow systems
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 font-serif">
                Focus Areas
              </h2>
              <ul className="space-y-3 text-white/70 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Human-centered systems
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  AI tools that remove friction from workflows
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Behavioral and educational technology
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto container-padding">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
          <span className="text-brand-gold/50 text-xs uppercase tracking-[0.3em] font-semibold">
            Case Studies
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        </div>
      </div>

      {/* Case Study 1: PNEU */}
      <section className="py-20 border-t border-white/[0.06]" id="pneu">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="mb-2">
            <span className="text-brand-gold/60 text-xs font-semibold uppercase tracking-[0.2em]">
              Case Study 01
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 font-serif tracking-tight">
            PNEU
          </h2>
          <p className="text-xl text-white/50 mb-10">
            Nervous System Regulation App
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                Problem
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                In school environments, dysregulated students and teachers lead
                to classroom disruptions, teacher burnout, and learning loss.
                Most interventions happen <em>after</em> problems occur, not
                before.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                Insight
              </h3>
              <p className="text-white/70 leading-relaxed">
                Short regulation exercises (breathing resets) can restore nervous
                system balance quickly. However, schools lack fast, accessible
                tools teachers can deploy between classes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                Product
              </h3>
              <p className="text-white/70 leading-relaxed mb-2">
                A mobile app delivering guided 60-second nervous system resets.
                Designed for students between classes, teachers during stress
                spikes, and classrooms needing quick regulation resets.
              </p>
            </div>

            <FlowDiagram
              steps={[
                {
                  label: "Problem",
                  detail: "Dysregulated classrooms with no proactive tools",
                },
                {
                  label: "Insight",
                  detail: "60-second breathing resets restore regulation",
                },
                {
                  label: "Product",
                  detail: "Mobile app with guided micro-resets",
                },
                {
                  label: "Outcome",
                  detail: "Faster teacher adoption through speed & simplicity",
                },
              ]}
            />

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                MVP
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Guided breathing resets
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Short regulation prompts
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Minimal UI to reduce cognitive load
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                Key Product Decisions
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Exercises under 60 seconds — fits real school schedules
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Minimal interface — avoid overwhelming dysregulated users
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Regulation first, not meditation — practical classroom use
                </li>
              </ul>
            </div>

            {/* Hardest Decision */}
            <div className="bg-brand-gold/[0.04] border border-brand-gold/20 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-brand-gold mb-4">
                Hardest Product Decision
              </h3>
              <p className="text-white/80 leading-relaxed italic">
                &ldquo;The hardest product decision was designing the app for
                extremely short sessions rather than deeper meditation features.
                While longer exercises may provide greater benefits, the reality
                of school environments is that teachers and students rarely have
                more than a minute between activities. Prioritizing speed and
                accessibility made adoption more likely.&rdquo;
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-4">
                Metrics to Track
              </h3>
              <div className="flex flex-wrap gap-2">
                <MetricPill label="Daily active users" />
                <MetricPill label="Exercise completion rate" />
                <MetricPill label="Reported stress reduction" />
                <MetricPill label="Teacher usage frequency" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                Future Opportunities
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-sm">▸</span>
                  Integration with school districts
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-sm">▸</span>
                  Classroom dashboard for administrators
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-sm">▸</span>
                  Teacher stress monitoring tools
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2: PNEUOMA Capture */}
      <section
        className="py-20 border-t border-white/[0.06] bg-gradient-to-b from-brand-purple/[0.03] to-transparent"
        id="capture"
      >
        <div className="max-w-4xl mx-auto container-padding">
          <div className="mb-2">
            <span className="text-brand-gold/60 text-xs font-semibold uppercase tracking-[0.2em]">
              Case Study 02
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 font-serif tracking-tight">
            PNEUOMA Capture
          </h2>
          <p className="text-xl text-white/50 mb-10">
            Voice-Based Incident Documentation
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                Problem
              </h3>
              <p className="text-white/70 leading-relaxed">
                Teachers and administrators spend large amounts of time
                documenting incidents. MTSS and behavioral documentation systems
                are slow and frustrating — resulting in lost teaching time,
                delayed documentation, and inconsistent reporting.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                Insight
              </h3>
              <p className="text-white/70 leading-relaxed">
                Speech is the fastest way for humans to record information.
                Teachers could speak incidents instead of typing them.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                Product
              </h3>
              <p className="text-white/70 leading-relaxed">
                Voice-based incident capture that automatically structures
                reports. Teachers describe what happened; AI converts speech into
                structured documentation.
              </p>
            </div>

            <FlowDiagram
              steps={[
                {
                  label: "Problem",
                  detail: "Slow, frustrating incident documentation",
                },
                {
                  label: "Insight",
                  detail: "Speech is the fastest input modality",
                },
                {
                  label: "Product",
                  detail: "Voice → AI-structured incident reports",
                },
                {
                  label: "Outcome",
                  detail: "Hours saved per week on documentation",
                },
              ]}
            />

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                MVP
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Voice input capture
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  AI structuring of raw speech
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Exportable incident documentation
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                Key Product Decisions
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Privacy-first AI architecture — student data protection
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Simple interface — designed for stressed educators
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Structured output — compatible with school documentation systems
                </li>
              </ul>
            </div>

            <div className="bg-brand-gold/[0.04] border border-brand-gold/20 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-brand-gold mb-4">
                Hardest Product Decision
              </h3>
              <p className="text-white/80 leading-relaxed italic">
                &ldquo;The hardest product decision was balancing automation with
                privacy. Voice transcription and AI structuring improve
                efficiency, but student data must remain protected. This required
                designing a privacy-first architecture rather than relying on
                standard cloud AI tools.&rdquo;
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-4">
                Metrics to Track
              </h3>
              <div className="flex flex-wrap gap-2">
                <MetricPill label="Time saved per report" />
                <MetricPill label="Teacher adoption" />
                <MetricPill label="Reports generated per week" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                Future Opportunities
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-sm">▸</span>
                  MTSS integration
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-sm">▸</span>
                  School district reporting dashboards
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-sm">▸</span>
                  Behavior pattern analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 3: Playground */}
      <section className="py-20 border-t border-white/[0.06]" id="playground">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="mb-2">
            <span className="text-brand-gold/60 text-xs font-semibold uppercase tracking-[0.2em]">
              Case Study 03
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 font-serif tracking-tight">
            Playground
          </h2>
          <p className="text-xl text-white/50 mb-10">
            Play-Based Educational Game
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                Problem
              </h3>
              <p className="text-white/70 leading-relaxed">
                Parents want kids to learn while playing. But most games are
                either entertainment-only or rigid educational software that
                kills engagement.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                Insight
              </h3>
              <p className="text-white/70 leading-relaxed">
                Children engage deeply with open play environments like
                Minecraft. Teachers should be able to embed learning objectives
                directly into gameplay.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                Product
              </h3>
              <p className="text-white/70 leading-relaxed">
                An open educational world where teachers define learning
                tasks — math challenges, spelling quests, problem-solving
                missions — inside an open play environment.
              </p>
            </div>

            <FlowDiagram
              steps={[
                {
                  label: "Problem",
                  detail: "Games = fun OR educational, not both",
                },
                {
                  label: "Insight",
                  detail: "Open play drives deep engagement",
                },
                {
                  label: "Product",
                  detail: "Teacher-configurable learning inside gameplay",
                },
                {
                  label: "Outcome",
                  detail: "Engagement + learning in a single experience",
                },
              ]}
            />

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                MVP
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Open play environment
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Teacher-configurable learning prompts
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Play-based progress tracking
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                Key Product Decisions
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Play-first design — engagement before instruction
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Teacher input system — adaptable to classroom needs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1 text-sm">▸</span>
                  Parent involvement loop
                </li>
              </ul>
            </div>

            <div className="bg-brand-gold/[0.04] border border-brand-gold/20 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-brand-gold mb-4">
                Hardest Product Decision
              </h3>
              <p className="text-white/80 leading-relaxed italic">
                &ldquo;The hardest product decision was keeping the game
                open-ended rather than tightly structured. Educational games
                often lose engagement because they feel like assignments.
                Allowing teachers to insert learning challenges inside
                Playground preserved play while supporting learning
                goals.&rdquo;
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-4">
                Metrics to Track
              </h3>
              <div className="flex flex-wrap gap-2">
                <MetricPill label="Session length" />
                <MetricPill label="Learning task completion" />
                <MetricPill label="Parent participation" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-gold mb-3">
                Future Opportunities
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-sm">▸</span>
                  School integrations
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-sm">▸</span>
                  Teacher content marketplace
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-sm">▸</span>
                  AI-generated learning quests
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-white mb-8 font-serif text-center">
            Skills Demonstrated
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Product Strategy",
              "User Problem Discovery",
              "AI Product Development",
              "Education Technology",
              "Human-Centered Design",
              "Workflow Optimization",
              "MVP Scoping",
              "Privacy Architecture",
              "Decision-Making Under Constraints",
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 text-sm font-medium text-brand-gold border border-brand-gold/30 rounded-full bg-brand-gold/[0.04] hover:bg-brand-gold/10 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 border-t border-white/[0.06] bg-gradient-to-b from-brand-purple/[0.04] to-black">
        <div className="max-w-3xl mx-auto container-padding text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
              <span className="text-brand-gold text-2xl">✦</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
            </div>
          </div>
          <p className="text-2xl md:text-3xl font-serif text-white/90 leading-relaxed mb-6">
            &ldquo;I saw real-world problems, designed systems, and built the
            products.&rdquo;
          </p>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Most PM candidates say &ldquo;I helped launch feature X.&rdquo; My
            background as a Dean of Students and Athletic Director means I think
            in systems, behavior, and real-world constraints — then I build
            products to solve them.
          </p>
          <a
            href="mailto:camryn@pneuoma.com"
            className="inline-block px-8 py-4 text-base font-semibold text-black bg-brand-gold rounded-lg hover:bg-brand-gold/90 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
