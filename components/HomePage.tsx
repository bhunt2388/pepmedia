"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Clock3,
  Dna,
  DollarSign,
  Radio,
  RefreshCw,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { HeroField } from "./HeroField";
import { SiteFooter, SiteHeader } from "./SiteChrome";

type Division = {
  name: string;
  vertical: string;
  description: string;
  stats: [string, string][];
};

type Service = {
  name: string;
  detail: string;
};

type EdgeSystem = {
  title: string;
  vertical: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: LucideIcon;
};

const divisions: Division[] = [
  {
    name: "Peptide Ads",
    vertical: "Wellness",
    description:
      "Conversion-engineered paid media for peptide brands navigating platform restrictions. We know which claims fly and which get you banned — and we've built compliant creative that drives real revenue.",
    stats: [
      ["Avg ROAS", "6.4×"],
      ["Spend Managed", "$2.1M"],
      ["Avg CPA", "$41"],
    ],
  },
  {
    name: "Research Chemical Ads",
    vertical: "Rx-Adjacent",
    description:
      "Specialist campaigns for research compound suppliers. Compliance-aware bidding and audience segmentation built specifically for the gray-area ad landscape.",
    stats: [
      ["Avg ROAS", "5.1×"],
      ["Spend Managed", "$900K"],
      ["Avg CPA", "$58"],
    ],
  },
  {
    name: "Telehealth Ads",
    vertical: "Healthcare",
    description:
      "Patient acquisition campaigns for telehealth clinics and online health platforms. HIPAA-aware targeting with conversion infrastructure built for regulated healthcare.",
    stats: [
      ["Avg ROAS", "4.8×"],
      ["Spend Managed", "$1.4M"],
      ["Avg CPA", "$62"],
    ],
  },
  {
    name: "Supplement Ads",
    vertical: "Supplements",
    description:
      "Full-funnel paid media for supplement brands — from cold traffic acquisition to repeat-purchase lifecycle automation. DTC-native, subscription-optimized.",
    stats: [
      ["Avg ROAS", "7.2×"],
      ["Spend Managed", "$3.2M"],
      ["Avg CPA", "$34"],
    ],
  },
  {
    name: "Wellness DTC Ads",
    vertical: "E-Commerce",
    description:
      "Direct-to-consumer growth for wellness brands selling online. Advantage+ scaling, smart retargeting, and high-velocity creative testing built for Shopify and WooCommerce stores.",
    stats: [
      ["Avg ROAS", "8.1×"],
      ["Spend Managed", "$4.5M"],
      ["Avg CPA", "$29"],
    ],
  },
  {
    name: "Longevity Brands",
    vertical: "Anti-Aging",
    description:
      "Growth marketing for longevity, biohacking, and anti-aging brands. High-LTV customer acquisition with NMN, NAD+, senolytics, and peptide longevity protocols front and center.",
    stats: [
      ["Avg ROAS", "5.9×"],
      ["Spend Managed", "$1.8M"],
      ["Avg CPA", "$47"],
    ],
  },
  {
    name: "Full-Stack Creative",
    vertical: "Creative Agency",
    description:
      "Static, video, UGC, and motion graphics purpose-built for peptide and wellness brands. Compliance-aware copy and visuals that convert on Meta, TikTok, and Google without triggering ad disapprovals.",
    stats: [
      ["Variants / Week", "200+"],
      ["Test Speed", "12×"],
      ["Disapproval Rate", "<2%"],
    ],
  },
];

const services: Service[] = [
  {
    name: "Paid Media",
    detail:
      "Google Ads, Meta Ads, TikTok Ads. Search, Performance Max, YouTube, Advantage+, Spark Ads. Full platform coverage with compliant bid strategies built for health and wellness accounts.",
  },
  {
    name: "Full Stack Creative",
    detail:
      "Static ads, video ads, UGC, motion graphics, landing page design. Every asset is compliance-reviewed before launch. We produce hundreds of variants per week powered by AI creative testing.",
  },
  {
    name: "Funnel Optimization",
    detail:
      "CRO, landing page architecture, checkout optimization, upsell flows. We audit the full path from click to purchase and rebuild anything bleeding revenue.",
  },
  {
    name: "Lifecycle & Retention",
    detail:
      "Email, SMS, push. Klaviyo, Postscript, and Attentive workflows for peptide reorder cycles, education sequences, and LTV maximization. We turn one-time buyers into subscribers.",
  },
  {
    name: "AI & Automation",
    detail:
      "Predictive audience modeling, dynamic creative engines, intelligent bid orchestration, and 24/7 optimization cycles. Our AI stack runs what would take a team of 12 to manage manually.",
  },
  {
    name: "Data & Intelligence",
    detail:
      "Unified dashboards across Google, Meta, TikTok, and your backend revenue data (Shopify, WooCommerce). We measure ROAS, blended CAC, contribution margin, and incrementality — not CTR or CPM.",
  },
  {
    name: "Growth Strategy",
    detail:
      "Category mapping, competitive analysis, channel sequencing, pricing strategy, and offer architecture. We build the 90-day and 12-month growth playbook before we touch your ad account.",
  },
  {
    name: "Compliance & Regulatory",
    detail:
      "Platform policy compliance for health, wellness, and Rx-adjacent products. We know what Meta, Google, and TikTok allow in 2024 and have built pre-approved creative frameworks for peptide categories.",
  },
];

const edgeSystems: EdgeSystem[] = [
  {
    title: "Predictive Audience Discovery",
    vertical: "Peptides · Wellness · Supplements",
    description:
      "Vertical-tuned lookalike modeling and LTV scoring built specifically for peptide customer behavior patterns. We know this audience better than any generalist agency.",
    metric: "340%",
    metricLabel: "Higher ROI vs. generalist targeting",
    icon: Dna,
  },
  {
    title: "Dynamic Creative Engine",
    vertical: "DTC · Wellness · E-Commerce",
    description:
      "AI-generated creative variants tested at 12x the speed of manual production. Every frame is compliance-reviewed in real time before launch — no human bottleneck.",
    metric: "12×",
    metricLabel: "Faster creative testing than traditional agencies",
    icon: Zap,
  },
  {
    title: "Intelligent Bid Orchestration",
    vertical: "Regulated Verticals · High-Risk",
    description:
      "Compliance-aware bid algorithms that navigate peptide, research chemical, and Rx-adjacent restrictions across platforms. Cross-channel budget allocation that adapts in hours, not weeks.",
    metric: "-67%",
    metricLabel: "Lower CPA from day 45 onward",
    icon: Target,
  },
  {
    title: "Vertical Intelligence Platform",
    vertical: "Telehealth · Longevity · Rx-Adjacent",
    description:
      "NLP monitoring across SEO, competitor ads, and regulatory channels. We see what's working in peptide marketing before your competitors do — and we move faster.",
    metric: "89%",
    metricLabel: "Targeting accuracy on wellness intent signals",
    icon: Radio,
  },
];

const processSteps = [
  [
    "Account + Compliance Audit",
    "Pixel audit, conversion tracking verification, ad account health check, and a compliance review of existing creative against current platform policies for your vertical.",
    "Week 1",
  ],
  [
    "Creative Production",
    "High-velocity creative production — static, video, UGC angles. All compliance-reviewed before launch. We go wide on day one to find winners fast.",
    "Week 1–2",
  ],
  [
    "Account Architecture",
    "Campaign structure, audience segmentation, bidding strategy, and tracking infrastructure designed for your specific peptide offer and customer acquisition goals.",
    "Week 2",
  ],
  [
    "Controlled Launch",
    "Live campaigns with daily monitoring. First data signals within 72 hours. We cut losers fast, double down on winners, and report blended CAC daily.",
    "Day 7–14",
  ],
  [
    "30–45 Day Performance Lift",
    "Most clients see 30–60% ROAS improvement inside 45 days from a standing start. This is when lifecycle campaigns layer on top of paid to compound results.",
    "Day 30–45",
  ],
  [
    "Scale & Compound",
    "Once unit economics are locked in, we expand channels, increase spend, and compound knowledge. Most clients 2–3x spend between month 3 and month 12.",
    "Month 2+",
  ],
];

const results: [string, string, LucideIcon][] = [
  ["6.4×", "Average ROAS across all peptide verticals", TrendingUp],
  ["$120M+", "Client revenue generated in 2023–2024", DollarSign],
  ["91%", "AI targeting accuracy on wellness intent", Target],
  ["-58%", "Wasted ad spend eliminated at account takeover", Zap],
  ["290%", "Average ROI increase within first 90 days", RefreshCw],
  ["14 days", "From kickoff call to live campaigns", Clock3],
  ["24/7", "Automated AI optimization cycles running", BarChart3],
  ["<2%", "Ad disapproval rate on health category creative", Check],
];

const comparisons = [
  ["Platform compliance knowledge", "Generic health policies", "Peptide-specific, updated weekly"],
  ["Creative frameworks", "Repurposed wellness templates", "Built for peptide/research chem claims"],
  ["Audience intelligence", "Broad interest targeting", "Behavioral models trained on this vertical"],
  ["Regulatory monitoring", "Not standard", "Real-time via Vertical Intelligence Platform"],
  ["Banned account recovery", "Unknown", "In-house process, 1–3 business days"],
  ["CAC for your niche", "Estimated from unrelated categories", "Benchmarked from live peptide accounts"],
  ["Pricing power", "Race to the bottom", "Premium positioning, no race to compete"],
  ["Time to live campaigns", "4–8 weeks", "7–14 days"],
];

const marqueeItems = [
  "Paid Media",
  "Peptide Ads",
  "Full Stack Creative",
  "Wellness Brands",
  "Funnel Optimization",
  "Lifecycle & Retention",
  "Compliance-First Creative",
  "Data & Intelligence",
  "AI & Automation",
  "Research Chemical Marketing",
];

const heroStats = [
  ["6.4×", "Average ROAS"],
  ["$120M+", "Revenue Generated"],
  ["290%", "Avg ROI Increase"],
  ["8+", "Verticals Served"],
];

const ctaFacts = [
  ["Min Ad Spend", "$20K/mo"],
  ["Go-Live Timeline", "7–14 Days"],
  ["Management Fee", "$5K–$20K/mo"],
  ["Typical Payback", "90 Days"],
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">[ {children} ]</div>;
}

export function HomePage() {
  const [activeDivision, setActiveDivision] = useState(0);
  const [activeService, setActiveService] = useState<number | null>(0);
  const division = divisions[activeDivision];

  return (
    <>
      <SiteHeader />

      <main>
        <section id="hero" className="hero">
          <HeroField />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <Eyebrow>Peptide Marketing Agency</Eyebrow>
            <h1>
              The Marketing Agency
              <span>Built for Peptides.</span>
            </h1>
            <p className="hero-copy">
              Performance marketing for peptide brands, wellness companies, and research chemical suppliers —
              running paid media, SEO, and compliant creative that actually converts.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="/book-call">
                Get a Free Audit <ArrowRight aria-hidden="true" />
              </a>
              <a className="button button-outline" href="#divisions">
                View Our Work
              </a>
            </div>
          </div>

          <div className="hero-stats" aria-label="Agency results overview">
            {heroStats.map(([value, label]) => (
              <div className="hero-stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <a className="scroll-cue" href="#divisions">
            Scroll to explore <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <div className="marquee" aria-label="PepMedia capabilities">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`}>
                <i aria-hidden="true" /> {item}
              </span>
            ))}
          </div>
        </div>

        <section id="divisions" className="section divisions-section">
          <div className="section-intro divisions-intro">
            <Eyebrow>Specialist Divisions</Eyebrow>
            <h2>Specialist verticals, one growth engine.</h2>
            <p>
              Each division is a niche powerhouse tuned to its regulatory environment, audience behavior, and
              creative constraints. Hover to preview.
            </p>
          </div>

          <div className="divisions-layout">
            <div className="division-tabs" role="tablist" aria-label="Specialist divisions">
              {divisions.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={activeDivision === index}
                  aria-controls="division-panel"
                  className="division-tab"
                  onClick={() => setActiveDivision(index)}
                  onMouseEnter={() => setActiveDivision(index)}
                  onFocus={() => setActiveDivision(index)}
                >
                  <span className="item-index">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item.name}</span>
                  <small>{item.vertical}</small>
                  <ArrowUpRight aria-hidden="true" />
                </button>
              ))}
            </div>

            <article id="division-panel" className="division-panel" role="tabpanel" aria-live="polite">
              <div className="panel-topline">
                <span>{String(activeDivision + 1).padStart(2, "0")} / 07</span>
                <span className="live-label">
                  <i aria-hidden="true" /> Live vertical
                </span>
              </div>
              <div>
                <p className="panel-vertical">{division.vertical}</p>
                <h3>{division.name}</h3>
                <p className="panel-copy">{division.description}</p>
              </div>
              <div className="panel-stats">
                {division.stats.map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <a className="button button-outline" href="/book-call">
                Get Started <ArrowRight aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-intro split-intro">
            <div>
              <Eyebrow>The Full Growth Stack</Eyebrow>
              <h2>Every service a peptide brand needs to scale.</h2>
            </div>
            <p>
              We run the entire growth infrastructure — from the first ad impression to the retention email three
              months later. No handoffs, no gaps.
            </p>
          </div>

          <div className="services-list">
            {services.map((service, index) => {
              const open = activeService === index;
              return (
                <div className="service-item" key={service.name} data-open={open}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`service-panel-${index}`}
                    onClick={() => setActiveService(open ? null : index)}
                  >
                    <span className="item-index">{String(index + 1).padStart(2, "0")}</span>
                    <span>{service.name}</span>
                    <ChevronDown aria-hidden="true" />
                  </button>
                  <div id={`service-panel-${index}`} className="service-detail" hidden={!open}>
                    <p>{service.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="edge" className="section edge-section">
          <div className="section-intro">
            <Eyebrow>Our AI Competitive Advantage</Eyebrow>
            <h2>
              Four systems competitors <span className="signal-text">can&apos;t replicate.</span>
            </h2>
          </div>

          <div className="edge-grid">
            {edgeSystems.map((system, index) => {
              const Icon = system.icon;
              return (
                <article className="edge-card" key={system.title}>
                  <div className="edge-card-head">
                    <span className="icon-frame">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="item-index">SYS.{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <p className="panel-vertical">{system.vertical}</p>
                    <h3>{system.title}</h3>
                    <p>{system.description}</p>
                  </div>
                  <div className="edge-metric">
                    <strong>{system.metric}</strong>
                    <span>{system.metricLabel}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="process" className="section process-section">
          <div className="section-intro">
            <Eyebrow>How We Launch</Eyebrow>
            <h2>Live campaigns in 7–14 days.</h2>
            <p>
              No month-long onboarding. No strategy decks with no action. We&apos;re inside your ad account and shipping
              creative in week one.
            </p>
          </div>

          <div className="process-list">
            {processSteps.map(([title, description, timeline], index) => (
              <article className="process-step" key={title}>
                <div className="process-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i aria-hidden="true" />
                </div>
                <div>
                  <p className="process-phase">Phase {String(index + 1).padStart(2, "0")}</p>
                  <h3>{title}</h3>
                </div>
                <p>{description}</p>
                <span className="timeline-chip">{timeline}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="results" className="section results-section">
          <div className="section-intro">
            <Eyebrow>Results That Speak</Eyebrow>
            <h2>Numbers from live accounts.</h2>
            <p>These are real metrics from real peptide and wellness brand campaigns we manage.</p>
          </div>

          <div className="results-grid">
            {results.map(([value, label, Icon]) => (
              <article className="result-item" key={label}>
                <Icon aria-hidden="true" />
                <strong>{value}</strong>
                <p>{label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="vs" className="section comparison-section">
          <div className="section-intro">
            <Eyebrow>Why Vertical Beats Generalist</Eyebrow>
            <h2>
              What you actually get with a <span className="signal-text">specialist agency.</span>
            </h2>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Generic Marketing Agency</th>
                  <th>PepMedia</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map(([capability, generic, pepmedia], index) => (
                  <tr key={capability}>
                    <th scope="row">{capability}</th>
                    <td>
                      {index === 3 || index === 4 ? <X className="cross-icon" aria-hidden="true" /> : null}
                      {generic}
                    </td>
                    <td>
                      <Check aria-hidden="true" /> {pepmedia}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <Activity className="contact-signal" aria-hidden="true" />
          <div className="contact-content">
            <h2>
              Ready to scale <span className="signal-text">your peptide brand?</span>
            </h2>
            <p>
              Minimum $20K/month in managed ad spend. Most clients see payback inside 90 days. Let&apos;s start with a
              free account audit.
            </p>
            <div className="button-row contact-actions">
              <a className="button button-primary" href="/book-call">
                Book a Free Audit <ArrowRight aria-hidden="true" />
              </a>
              <a className="button button-outline" href="/contact">
                hello@pepmedia.com
              </a>
            </div>
          </div>
          <div className="contact-facts">
            {ctaFacts.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
