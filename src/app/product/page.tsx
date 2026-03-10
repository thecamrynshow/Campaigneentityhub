import { Metadata } from "next";
import { getSiteUrl } from "@/src/lib/utils";
import { caseStudies, productIndex } from "@/src/content/products";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Product Portfolio — Camryn Jackson",
  description:
    "Product portfolio for Camryn Jackson. 0→1 product builder across AI tools, education systems, and workflow automation. Case studies, product decisions, and systems thinking.",
  openGraph: {
    title: "Product Portfolio — Camryn Jackson",
    description:
      "Product Builder | Founder @ PNEUOMA. Case studies in AI, education, regulation tech, and workflow automation.",
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
    <div className="flex flex-col md:flex-row items-stretch gap-0 my-8">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col md:flex-row items-center flex-1">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-4 flex-1 w-full text-center hover:border-brand-gold/30 transition-colors">
            <p className="text-brand-gold font-semibold text-[11px] uppercase tracking-[0.2em] mb-1.5">
              {step.label}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              {step.detail}
            </p>
          </div>
          {i < steps.length - 1 && (
            <div className="text-brand-gold/40 text-xl mx-2 my-2 md:my-0 rotate-90 md:rotate-0 select-none font-light">
              →
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
        {value}
      </p>
      <p className="text-white/40 text-sm mt-1">{label}</p>
    </div>
  );
}

function CaseStudySection({
  study,
  even,
}: {
  study: (typeof caseStudies)[0];
  even: boolean;
}) {
  return (
    <section
      className={`py-20 border-t border-white/[0.06] ${even ? "bg-gradient-to-b from-white/[0.01] to-transparent" : ""}`}
      id={study.id}
    >
      <div className="max-w-4xl mx-auto container-padding">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-brand-gold/40 text-xs font-mono tracking-wider">
            {study.number}
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-white/30 text-xs uppercase tracking-[0.15em]">
            {study.domain}
          </span>
        </div>

        {study.url ? (
          <a
            href={study.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/title inline-flex items-center gap-3 mb-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif tracking-tight group-hover/title:text-brand-gold transition-colors">
              {study.name}
            </h2>
            <span className="text-white/20 text-lg group-hover/title:text-brand-gold/60 group-hover/title:translate-x-0.5 transition-all">↗</span>
          </a>
        ) : (
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif tracking-tight">
            {study.name}
          </h2>
        )}
        <p className="text-lg text-white/40 mb-12">{study.tagline}</p>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
          <div>
            <h3 className="text-xs font-semibold text-brand-gold uppercase tracking-[0.2em] mb-3">
              Problem
            </h3>
            <p className="text-white/65 leading-relaxed text-[15px]">
              {study.problem}
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-brand-gold uppercase tracking-[0.2em] mb-3">
              Insight
            </h3>
            <p className="text-white/65 leading-relaxed text-[15px]">
              {study.insight}
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xs font-semibold text-brand-gold uppercase tracking-[0.2em] mb-3">
            Solution
          </h3>
          <p className="text-white/65 leading-relaxed text-[15px] max-w-3xl">
            {study.solution}
          </p>
        </div>

        <FlowDiagram steps={study.flow} />

        <div className="mb-10">
          <h3 className="text-xs font-semibold text-brand-gold uppercase tracking-[0.2em] mb-4">
            Key Decisions
          </h3>
          <div className="space-y-3">
            {study.keyDecisions.map((decision, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-white/60 text-[15px] leading-relaxed"
              >
                <span className="text-brand-gold/50 mt-0.5 text-xs font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {decision}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/[0.02] border border-brand-gold/15 rounded-lg p-7 mb-10">
          <h3 className="text-xs font-semibold text-brand-gold uppercase tracking-[0.2em] mb-4">
            Hardest Product Decision
          </h3>
          <p className="text-white/80 leading-relaxed text-[15px] font-medium mb-4">
            {study.hardestDecision}
          </p>
          <div className="border-t border-white/[0.06] pt-4">
            <p className="text-white/30 text-xs uppercase tracking-[0.15em] font-semibold mb-2">
              Why
            </p>
            <p className="text-white/60 leading-relaxed text-[15px]">
              {study.hardestDecisionWhy}
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xs font-semibold text-brand-gold uppercase tracking-[0.2em] mb-4">
            Impact / Expected Impact
          </h3>
          <div className="space-y-3">
            {study.impact.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-white/65 text-[15px] leading-relaxed"
              >
                <span className="text-brand-gold/40 mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold/40 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-[0.2em] mb-4">
              What I&apos;d Measure
            </h3>
            <div className="flex flex-wrap gap-2">
              {study.metrics.map((metric) => (
                <span
                  key={metric}
                  className="inline-block px-3 py-1.5 text-xs text-white/50 bg-white/[0.03] border border-white/[0.06] rounded-md"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-[0.2em] mb-4">
              Next Steps
            </h3>
            <ul className="space-y-2">
              {study.nextSteps.map((step) => (
                <li
                  key={step}
                  className="text-white/45 text-sm flex items-start gap-2"
                >
                  <span className="text-white/20 mt-0.5">→</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  const shipped = productIndex.filter((p) => p.status === "Shipped").length;
  const domains = [...new Set(productIndex.map((p) => p.domain))];

  return (
    <div className="min-h-screen bg-black">
      {/* ── Hero ── */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/[0.06] via-black to-black" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto container-padding">
          <p className="text-brand-gold/70 text-sm font-semibold uppercase tracking-[0.2em] mb-6">
            Product Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif text-white tracking-tight leading-[1.1]">
            Camryn Jackson
          </h1>
          <p className="text-lg text-white/40 mb-10">
            Product Builder&ensp;·&ensp;Founder @ PNEUOMA&ensp;·&ensp;0→1
            Systems Designer
          </p>
          <p className="text-[17px] text-white/60 leading-[1.8] max-w-2xl">
            I identify operational problems inside real-world environments and
            build the systems that solve them. As a former Dean of Students and
            Athletic Director, I operated inside the constraints that most
            software ignores — limited time, high stress, fragmented workflows,
            and people making decisions under pressure. That experience shapes
            how I design products: start with the constraint, scope tight, and
            ship systems that reduce friction across AI tools, education
            platforms, and workflow automation.
          </p>
        </div>
      </section>

      {/* ── Snapshot ── */}
      <section className="py-14 border-t border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatBlock value={`${productIndex.length}+`} label="Products Built" />
            <StatBlock value={`${shipped}`} label="Shipped" />
            <StatBlock value={`${domains.length}`} label="Domains" />
            <StatBlock value="0→1" label="Core Focus" />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              "AI Products",
              "Education Systems",
              "Workflow Automation",
              "Regulation Tech",
              "Human-Centered Design",
              "Operational Problem Solving",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-xs text-white/40 border border-white/[0.08] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Systems Thinking Framework ── */}
      <section className="py-16 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto container-padding">
          <p className="text-center text-white/25 text-xs uppercase tracking-[0.3em] font-semibold mb-8">
            How I think about product
          </p>
          <div className="flex flex-col md:flex-row items-stretch gap-0">
            {[
              {
                label: "Environment",
                detail:
                  "Identify the real-world system where friction lives",
                sub: "Schools, teams, workflows",
              },
              {
                label: "Friction",
                detail:
                  "Isolate the specific constraint people work around",
                sub: "Time, attention, regulation, clarity",
              },
              {
                label: "System Design",
                detail:
                  "Build the minimum product that removes that friction",
                sub: "Scope tight, ship fast, measure",
              },
              {
                label: "Better Decisions",
                detail:
                  "People make faster, clearer decisions under constraints",
                sub: "The product disappears; the outcome stays",
              },
            ].map((step, i, arr) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center flex-1"
              >
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-5 flex-1 w-full text-center hover:border-brand-gold/20 transition-colors">
                  <p className="text-brand-gold font-semibold text-[11px] uppercase tracking-[0.2em] mb-2">
                    {step.label}
                  </p>
                  <p className="text-white/55 text-sm leading-relaxed mb-1.5">
                    {step.detail}
                  </p>
                  <p className="text-white/25 text-xs">{step.sub}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="text-brand-gold/30 text-xl mx-2 my-2 md:my-0 rotate-90 md:rotate-0 select-none font-light">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies Divider ── */}
      <div className="max-w-4xl mx-auto container-padding pt-16">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
          <span className="text-brand-gold/40 text-xs uppercase tracking-[0.3em] font-semibold">
            Featured Case Studies
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
        </div>
      </div>

      {/* ── Case Studies ── */}
      {caseStudies.map((study, i) => (
        <CaseStudySection key={study.id} study={study} even={i % 2 === 1} />
      ))}

      {/* ── Product Index ── */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto container-padding">
          <div className="mb-12">
            <p className="text-brand-gold/40 text-xs uppercase tracking-[0.3em] font-semibold mb-3">
              Product Ecosystem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
              Everything I&apos;ve Built
            </h2>
          </div>

          {/* Table header */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-3 border-b border-white/[0.08] text-xs text-white/25 uppercase tracking-[0.15em] font-semibold">
            <div className="col-span-3">Product</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-2">Domain</div>
            <div className="col-span-4">Description</div>
            <div className="col-span-1 text-right">Status</div>
          </div>

          {/* Table rows */}
          {productIndex.map((product) => {
            const Row = (
              <>
                <div className="md:col-span-3">
                  <span className="text-white/80 font-medium text-[15px] group-hover:text-white transition-colors inline-flex items-center gap-1.5">
                    {product.name}
                    {product.url && (
                      <span className="text-white/15 text-xs group-hover:text-brand-gold/50 transition-colors">↗</span>
                    )}
                  </span>
                </div>
                <div className="md:col-span-2">
                  <p className="text-white/35 text-sm">{product.type}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-white/35 text-sm">{product.domain}</p>
                </div>
                <div className="md:col-span-4">
                  <p className="text-white/45 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <div className="md:col-span-1 md:text-right">
                  <span
                    className={`inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full ${
                      product.status === "Shipped"
                        ? "text-brand-gold/70 bg-brand-gold/[0.08] border border-brand-gold/15"
                        : product.status === "Internal"
                          ? "text-white/30 bg-white/[0.03] border border-white/[0.06]"
                          : "text-white/40 bg-white/[0.04] border border-white/[0.08]"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
              </>
            );

            return product.url ? (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-4 border-b border-white/[0.04] hover:bg-white/[0.015] transition-colors group"
              >
                {Row}
              </a>
            ) : (
              <div
                key={product.name}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-4 border-b border-white/[0.04] hover:bg-white/[0.01] transition-colors group"
              >
                {Row}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Product Philosophy ── */}
      <section className="py-20 border-t border-white/[0.06] bg-gradient-to-b from-white/[0.01] to-transparent">
        <div className="max-w-3xl mx-auto container-padding">
          <p className="text-brand-gold/40 text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            How I Build
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif tracking-tight mb-8">
            Product Philosophy
          </h2>
          <div className="space-y-6 text-white/60 text-[16px] leading-[1.85]">
            <p>
              Every product I build starts with the same question:{" "}
              <span className="text-white/80">
                where are people losing time, attention, or clarity because the
                system around them wasn&apos;t designed for how they actually
                work?
              </span>
            </p>
            <p>
              My years inside schools taught me that the people closest to
              problems — teachers, administrators, students — are operating
              under constraints that software rarely accounts for. They
              don&apos;t have 20 minutes to learn a new tool. They don&apos;t
              have bandwidth to configure dashboards. They need something that
              works in the next 60 seconds, under stress, with zero onboarding.
            </p>
            <p>
              That constraint-first thinking shapes everything I build. I scope
              tight, ship fast, and measure whether the product actually reduced
              the friction it was designed to address. If it didn&apos;t, I cut
              features — not add them.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-brand-gold/40 text-xs uppercase tracking-[0.3em] font-semibold mb-6">
              Product Principles
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Constraint-first design",
                  text: "Build for the real environments users operate in — not ideal conditions.",
                },
                {
                  title: "Systems over features",
                  text: "Solve the category problem, not just the symptom. A good system makes the next 10 features unnecessary.",
                },
                {
                  title: "Speed of use matters",
                  text: "Tools should work in under 60 seconds without training. If it needs a workshop, it's too complex.",
                },
                {
                  title: "AI should reduce cognitive load",
                  text: "Not increase complexity. If the AI layer makes the product harder to use, remove the AI layer.",
                },
                {
                  title: "Ship small, learn fast, expand intentionally",
                  text: "Scope the smallest version that tests the real hypothesis. Add surface area only when evidence supports it.",
                },
              ].map((principle) => (
                <div
                  key={principle.title}
                  className="flex items-start gap-4 py-3 border-b border-white/[0.04] last:border-0"
                >
                  <span className="text-brand-gold/40 mt-1 text-xs">▸</span>
                  <div>
                    <span className="text-white/75 font-medium text-[15px]">
                      {principle.title}
                    </span>
                    <span className="text-white/40 text-[15px]">
                      {" — "}
                      {principle.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Products in the Wild ── */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto container-padding">
          <p className="text-brand-gold/40 text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Real-World Usage
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif tracking-tight mb-6">
            Products in the Wild
          </h2>
          <p className="text-white/55 text-[16px] leading-[1.8] mb-8 max-w-2xl">
            These aren&apos;t concepts. They&apos;re systems used by educators
            and school leaders in real operational workflows.
          </p>
          <div className="space-y-4">
            {[
              "Regulation tools designed for real classroom transition windows — used by teachers between classes",
              "Voice-based documentation tools that let educators submit incident reports in under two minutes",
              "AI copilots built around real MTSS and behavioral documentation workflows",
              "Outreach orchestration systems used internally to manage multi-channel partnership campaigns",
              "Mobile apps shipped to the App Store and actively used for breathing, grounding, and focus",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 py-3 border-b border-white/[0.04] last:border-0"
              >
                <span className="text-brand-gold/40 mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold/40 flex-shrink-0" />
                <p className="text-white/60 text-[15px] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rapid Product Experiments ── */}
      <section className="py-20 border-t border-white/[0.06] bg-gradient-to-b from-white/[0.01] to-transparent">
        <div className="max-w-3xl mx-auto container-padding">
          <p className="text-brand-gold/40 text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Exploration
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif tracking-tight mb-6">
            Rapid Product Experiments
          </h2>
          <p className="text-white/55 text-[16px] leading-[1.8] mb-10 max-w-2xl">
            In addition to larger systems, I regularly run small product
            experiments to explore new workflows, AI capabilities, and user
            behaviors. These experiments help identify opportunities quickly
            before investing in full product builds.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "AI documentation assistant for behavioral incident reporting",
              "AI outreach agent for partnership discovery",
              "Automated government contract quoting workflow",
              "Teacher workflow simplification tools",
              "Educational game prototypes with embedded learning objectives",
              "Voice-to-structured-data pipelines for school environments",
            ].map((experiment, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-3"
              >
                <span className="text-brand-gold/30 mt-0.5 text-xs font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-white/55 text-sm leading-relaxed">
                  {experiment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problems I'm Interested In ── */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto container-padding">
          <p className="text-brand-gold/40 text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            What I Want to Work On
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif tracking-tight mb-6">
            Problems I&apos;m Interested in Solving
          </h2>
          <p className="text-white/55 text-[16px] leading-[1.8] mb-10 max-w-2xl">
            I&apos;m drawn to product roles where the core challenge is reducing
            friction inside systems that people depend on daily — especially
            where the constraints are real and the stakes are operational.
          </p>

          <div className="space-y-4 mb-12">
            {[
              "Tools that help people operate under real-world constraints — time, attention, regulation, and cognitive load",
              "AI products that remove overhead from workflows, not add complexity to them",
              "Systems that improve decision-making speed and clarity in high-pressure environments",
              "Education technology that supports teachers and administrators rather than creating more administrative burden",
              "Platforms that translate complex human behavior into structured, actionable insights",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 py-3 border-b border-white/[0.04] last:border-0"
              >
                <span className="text-brand-gold/40 mt-1 text-xs">▸</span>
                <p className="text-white/65 text-[15px] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
            <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
              Currently open to
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Product Manager roles",
                "AI Product roles",
                "0→1 product teams",
              ].map((role) => (
                <span
                  key={role}
                  className="px-4 py-2 text-sm text-white/70 border border-white/[0.1] rounded-lg"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How I Work ── */}
      <section className="py-20 border-t border-white/[0.06] bg-gradient-to-b from-white/[0.01] to-transparent">
        <div className="max-w-3xl mx-auto container-padding">
          <p className="text-brand-gold/40 text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Collaboration
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif tracking-tight mb-6">
            How I Work With Teams
          </h2>
          <p className="text-white/55 text-[16px] leading-[1.8] mb-8 max-w-2xl">
            I operate at the intersection of research, design, and
            execution — moving between user environments and build
            cycles to keep products grounded in real needs.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "User research in real environments",
              "System design and architecture",
              "Product scoping and prioritization",
              "Rapid prototyping",
              "Feedback loops with real users",
              "Cross-functional alignment",
            ].map((capability) => (
              <span
                key={capability}
                className="px-4 py-2 text-sm text-white/55 border border-white/[0.08] rounded-lg"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif tracking-tight mb-4">
            Camryn Jackson
          </h2>
          <p className="text-white/40 text-lg mb-8">
            Product Builder&ensp;·&ensp;Founder @ PNEUOMA&ensp;·&ensp;0→1
            Systems Designer
          </p>
          <p className="text-white/60 text-[17px] leading-relaxed max-w-2xl mx-auto mb-10 font-serif italic">
            If you&apos;re building systems that help people make better
            decisions under real-world constraints, I&apos;d love to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:camryncjackson@gmail.com"
              className="px-8 py-3.5 text-sm font-semibold text-black bg-brand-gold rounded-lg hover:bg-brand-gold/90 transition-all duration-300"
            >
              camryncjackson@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/camrynjackson"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 text-sm font-semibold text-white/60 border border-white/15 rounded-lg hover:text-white hover:border-white/30 transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
