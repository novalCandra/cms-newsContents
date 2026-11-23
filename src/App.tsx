import { useEffect, useState } from "react"
import type { FormEvent } from "react"
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Check,
  CheckCircle2,
  Copy,
  Link as LinkIcon,
  Loader2,
  Menu,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react"
import ImageLogo from "./assets/icons/logo.png"
import { Link } from "react-router-dom"

const NAV_LINKS = [
  { label: "Features", href: "#features", active: true },
  { label: "How it works", href: "#how-it-works", active: false },
  { label: "Showcase", href: "#showcase", active: false },
  { label: "Pricing", href: "#pricing", active: false },
  { label: "Community", href: "#community", active: false },
]

const TICKER_ITEMS = [
  "★ TURN ANY NEWS INTO VIRAL POSTS",
  "ZERO AI HALLUCINATIONS",
  "INSTANT READABILITY EXTRACTION",
  "10,000+ CREATORS SHIP DAILY",
  "PURE MARKDOWN & THREADS",
  "DETAILS & EARLY ACCESS AVAILABLE",
]

const TICKER_DOTS = ["#FF5A4F", "#4DABFF", "#AEEA00", "#111316"]

const BENEFITS = [
  "Unlimited Article Clean Extractions",
  "Multi-Format Social Exporters (.TXT, Markdown, Threads)",
  "Batch URL Processing & Queue Management",
  "Automated RSS & Newsletter Feed Ingestion",
  "Direct Webhook, Zapier & REST API Access",
]

const FEATURES = [
  {
    icon: Sparkles,
    iconBg: "#FF5A4F",
    title: "Mozilla Readability & JSDOM Core",
    body: "Battle-tested DOM sanitization strips out sticky banners, iframe video spam, subscription paywall overlays, and heavy third-party tracking scripts instantly.",
    tag: "Core Sanitizer",
    tagBg: "#FFDAD6",
    footIcon: BadgeCheck,
  },
  {
    icon: BarChart3,
    iconBg: "#4DABFF",
    title: "Instant Metadata & Metrics",
    body: "Extract accurate word counts, read times, published dates, canonical URLs, verified author bylines, and high-res feature image headers without hassle.",
    tag: "Full Meta Inspector",
    tagBg: "#D0E4FF",
    footIcon: BarChart3,
  },
  {
    icon: RefreshCw,
    iconBg: "#AEEA00",
    title: "Multi-Format Repurpose Workflows",
    body: "Export directly to Obsidian-compatible Markdown, raw text for LLM prompts, structured JSON, or split directly into numbered social post drafts.",
    tag: "1-Click Multi-Export",
    tagBg: "#D4F780",
    footIcon: Zap,
  },
  {
    icon: ShieldCheck,
    iconBg: "#FFC83D",
    title: "Enterprise-Grade SSRF Protection",
    body: "Protected against internal network exposure, malicious redirects, localhost exploits, and infinite redirects through sandboxed headless fetch nodes.",
    tag: "Strict IP Filtering",
    tagBg: "#FFDF9C",
    footIcon: ShieldCheck,
  },
]

const METRICS = [
  { value: "0.2s", label: "Average Parse Speed", valueClass: "text-ink" },
  { value: "99.8%", label: "Clean Extraction Rate", valueClass: "text-primary" },
  { value: "14M+", label: "Articles Processed", valueClass: "text-secondary-strong" },
  { value: "0%", label: "Hallucination Risk", valueClass: "text-ink" },
]

const GUARANTEES = [
  "Clean Text Stripped",
  "Ad & Paywall Bypassed",
  "Zero AI Hallucinations",
]

type ExtractState = "idle" | "stripping" | "done"

function TickerBanner() {
  const row = (
    <div className="flex items-center gap-8 pr-8">
      {TICKER_ITEMS.map((item, i) => (
        <span key={i} className="flex items-center gap-8">
          <span>{item}</span>
          <span
            className="inline-block h-2.5 w-2.5 rounded-full border border-ink"
            style={{ backgroundColor: TICKER_DOTS[i % TICKER_DOTS.length] }}
          />
        </span>
      ))}
    </div>
  )

  return (
    <div
      aria-hidden="true"
      className="relative z-20 w-full -rotate-1 scale-105 select-none overflow-hidden border-y-2 border-ink bg-tertiary py-2 shadow-[0_4px_0_#111316] sm:py-3"
    >
      <div className="animate-marquee flex w-max items-center whitespace-nowrap text-label-lg uppercase text-ink">
        {row}
        {row}
      </div>
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-surface/90 backdrop-blur-md">
      <div className="container-app flex h-16 items-center justify-between gap-space-sm sm:h-20">
        <a href="#" className="group flex min-w-0 items-center gap-space-sm">
          <img
            src={ImageLogo}
            alt="NewsToContent logo"
            className="h-9 w-9 shrink-0 rounded-full border-2 border-ink object-cover shadow-[0_4px_0_#1a1c1f] transition-all group-hover:-translate-y-0.5 group-hover:shadow-[0_6px_0_#1a1c1f] sm:h-10 sm:w-10"
          />
          <span className="truncate text-title-md font-extrabold tracking-tight text-on-surface sm:text-headline-sm sm:text-headline-sm">
            NewsToContent
          </span>
        </a>

        <nav className="hidden items-center gap-space-xs rounded-full bg-surface-container-low p-space-xs lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={
                link.active
                  ? "rounded-full bg-surface-container px-space-md py-space-sm text-title-sm text-on-surface transition-all"
                  : "rounded-full px-space-md py-space-sm text-label-lg text-on-surface-variant transition-all hover:bg-surface-container hover:text-on-surface"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-space-xs sm:gap-space-sm">
          <Link
            to={"/auth/login"}
            className="hidden items-center rounded-full px-space-md py-space-sm text-label-lg text-on-surface transition-all hover:bg-surface-container sm:inline-flex"
          >
            Log in
          </Link>
          <a
            href="#signup"
            className="inline-flex items-center rounded-full border-2 border-ink bg-primary-container px-space-md py-space-sm text-label-md text-white shadow-[0_4px_0_#1a1c1f] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_0_#1a1c1f] active:translate-y-1 active:shadow-[0_0_0_#1a1c1f] sm:px-space-lg sm:text-label-lg sm:text-label-lg"
          >
            Get Started Free
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink bg-paper text-ink shadow-press transition-transform active:translate-y-0.5 lg:hidden"
          >
            {menuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t-2 border-ink bg-surface px-margin pb-space-lg pt-space-md shadow-card sm:px-margin-tablet lg:hidden">
          <nav className="mx-auto flex max-w-[80rem] flex-col gap-space-xs">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  link.active
                    ? "rounded-xl border-2 border-ink bg-surface-container px-space-md py-3 text-title-sm text-on-surface shadow-press"
                    : "rounded-xl border-2 border-transparent px-space-md py-3 text-label-lg text-on-surface-variant transition-all hover:border-ink hover:bg-surface-container-low hover:text-on-surface"
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href="#signup"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink bg-primary-container px-space-md py-3 text-label-lg text-white shadow-level-1 active:translate-y-0.5"
            >
              Get Started Free
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function PocketExtractorSvg({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 160 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pocket Extractor gadget">
      <rect fill="#4DABFF" height="180" rx="26" stroke="#111316" strokeWidth="4" width="130" x="15" y="15" />
      <rect fill="#FFFFFF" height="84" rx="14" stroke="#111316" strokeWidth="4" width="104" x="28" y="28" />
      <rect fill="#F7F8FA" height="68" rx="8" width="88" x="36" y="36" />
      <circle cx="62" cy="65" fill="#111316" r="5" />
      <circle cx="98" cy="65" fill="#111316" r="5" />
      <circle cx="60.5" cy="63.5" fill="#FFFFFF" r="1.5" />
      <circle cx="96.5" cy="63.5" fill="#FFFFFF" r="1.5" />
      <ellipse cx="53" cy="74" fill="#FF5A4F" rx="4" ry="2.5" />
      <ellipse cx="107" cy="74" fill="#FF5A4F" rx="4" ry="2.5" />
      <path d="M72 73 C76 81, 84 81, 88 73" stroke="#111316" strokeLinecap="round" strokeWidth="3.5" />
      <rect fill="#111316" height="12" rx="4" width="34" x="38" y="132" />
      <rect fill="#111316" height="34" rx="4" width="12" x="49" y="121" />
      <circle cx="55" cy="138" fill="#4DABFF" r="3" />
      <circle cx="114" cy="130" fill="#FF5A4F" r="9" stroke="#111316" strokeWidth="3" />
      <circle cx="97" cy="144" fill="#FFC83D" r="9" stroke="#111316" strokeWidth="3" />
      <line stroke="#111316" strokeLinecap="round" strokeWidth="3" x1="96" x2="114" y1="172" y2="172" />
      <line stroke="#111316" strokeLinecap="round" strokeWidth="3" x1="100" x2="118" y1="178" y2="178" />
    </svg>
  )
}

function NewsBotSvg({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 160 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="News Bot Bob robot mascot">
      <line stroke="#111316" strokeLinecap="round" strokeWidth="4" x1="80" x2="80" y1="6" y2="26" />
      <circle cx="80" cy="8" fill="#FFC83D" r="7" stroke="#111316" strokeWidth="3.5" />
      <rect fill="#FF5A4F" height="92" rx="22" stroke="#111316" strokeWidth="4" width="128" x="16" y="26" />
      <rect fill="#FFFFFF" height="56" rx="14" stroke="#111316" strokeWidth="4" width="100" x="30" y="40" />
      <circle cx="62" cy="66" fill="#111316" r="6" />
      <circle cx="98" cy="66" fill="#111316" r="6" />
      <circle cx="60" cy="64" fill="#FFFFFF" r="1.8" />
      <circle cx="96" cy="64" fill="#FFFFFF" r="1.8" />
      <ellipse cx="46" cy="76" fill="#FFC83D" rx="4.5" ry="2.6" />
      <ellipse cx="114" cy="76" fill="#FFC83D" rx="4.5" ry="2.6" />
      <path d="M66 78 Q80 88 94 78" stroke="#111316" strokeLinecap="round" strokeWidth="3.5" />
      <rect fill="#111316" height="8" rx="3" width="34" x="63" y="104" />
      <path d="M8 128 L152 128 L138 176 L22 176 Z" fill="#4DABFF" stroke="#111316" strokeLinejoin="round" strokeWidth="4" />
      <rect fill="#FFFFFF" height="22" rx="4" stroke="#111316" strokeWidth="3" width="96" x="32" y="138" />
      <circle cx="48" cy="149" fill="#FF5A4F" r="4" stroke="#111316" strokeWidth="2" />
      <circle cx="66" cy="149" fill="#FFC83D" r="4" stroke="#111316" strokeWidth="2" />
      <circle cx="84" cy="149" fill="#AEEA00" r="4" stroke="#111316" strokeWidth="2" />
      <path d="M102 145 L118 149 L102 153" stroke="#111316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  )
}

function ThreadLapSvg({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 170 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Thread Lap gadget">
      <rect fill="#FF5A4F" height="96" rx="16" stroke="#111316" strokeWidth="4" width="120" x="25" y="24" />
      <rect fill="#4DABFF" height="74" rx="10" stroke="#111316" strokeWidth="3.5" width="98" x="36" y="34" />
      <circle cx="65" cy="65" fill="#111316" r="5.5" />
      <circle cx="105" cy="65" fill="#111316" r="5.5" />
      <circle cx="63" cy="63" fill="#FFFFFF" r="1.5" />
      <circle cx="103" cy="63" fill="#FFFFFF" r="1.5" />
      <path d="M77 75 Q85 85 93 75" stroke="#111316" strokeLinecap="round" strokeWidth="4" />
      <ellipse cx="55" cy="74" fill="#FFC83D" rx="4" ry="2" />
      <ellipse cx="115" cy="74" fill="#FFC83D" rx="4" ry="2" />
      <rect fill="#111316" height="8" rx="3" width="60" x="55" y="120" />
      <path d="M15 128 L155 128 L142 188 L28 188 Z" fill="#FFFFFF" stroke="#111316" strokeLinejoin="round" strokeWidth="4" />
      <rect fill="#FFC83D" height="26" rx="4" stroke="#111316" strokeWidth="2.5" width="102" x="34" y="136" />
      <line stroke="#111316" strokeWidth="2" x1="54" x2="54" y1="136" y2="162" />
      <line stroke="#111316" strokeWidth="2" x1="74" x2="74" y1="136" y2="162" />
      <line stroke="#111316" strokeWidth="2" x1="94" x2="94" y1="136" y2="162" />
      <line stroke="#111316" strokeWidth="2" x1="114" x2="114" y1="136" y2="162" />
      <line stroke="#111316" strokeWidth="2" x1="34" x2="136" y1="149" y2="149" />
      <rect fill="#F7F8FA" height="15" rx="3" stroke="#111316" strokeWidth="2" width="34" x="68" y="167" />
    </svg>
  )
}

function GadgetTrio() {
  return (
    <div className="my-space-xl flex w-full max-w-3xl flex-wrap items-end justify-center gap-4 sm:gap-8">
      <div className="group relative flex shrink-0 flex-col items-center transition-transform duration-200 hover:-translate-y-2">
        <div className="absolute -top-3 left-2 z-10 -rotate-6 rounded-full border-2 border-ink bg-tertiary px-2 py-0.5 text-label-sm text-ink shadow-press sm:left-4">
          PARSER 01
        </div>
        <PocketExtractorSvg className="h-32 w-24 drop-shadow-[0_8px_0_#111316] sm:h-44 sm:w-32" />
        <span className="mt-2 text-body-sm font-bold text-ink sm:text-title-sm sm:text-title-sm">
          Pocket Extractor
        </span>
      </div>

      <div className="group relative z-10 flex shrink-0 flex-col items-center transition-transform duration-200 hover:-translate-y-2">
        <div className="absolute -top-4 right-2 z-10 flex rotate-[8deg] items-center gap-1 rounded-full border-2 border-ink bg-primary px-2 py-0.5 text-label-sm font-bold text-ink shadow-chip sm:right-4 sm:px-3 sm:py-1 sm:text-label-md sm:text-label-md">
          <span>BOT BOB</span>
          <Bot size={16} strokeWidth={2.5} />
        </div>
        <div className="flex h-44 w-36 items-center justify-center overflow-hidden rounded-3xl border-2 border-ink bg-paper p-2 shadow-level-3 sm:h-56 sm:w-48">
          <NewsBotSvg className="h-full w-full transition-transform duration-300 group-hover:scale-105" />
        </div>
        <span className="mt-2 text-body-sm font-bold text-ink sm:text-title-sm sm:text-title-sm">
          News Bot Bob
        </span>
      </div>

      <div className="group relative flex shrink-0 flex-col items-center transition-transform duration-200 hover:-translate-y-2">
        <div className="absolute -top-3 left-2 z-10 rotate-[4deg] rounded-full border-2 border-ink bg-lime px-2 py-0.5 text-label-sm text-ink shadow-press sm:left-6 sm:px-2.5">
          TRANSFORMER
        </div>
        <ThreadLapSvg className="h-32 w-28 drop-shadow-[0_8px_0_#111316] sm:h-44 sm:w-36" />
        <span className="mt-2 text-body-sm font-bold text-ink sm:text-title-sm sm:text-title-sm">
          Thread Lap
        </span>
      </div>
    </div>
  )
}

function ExtractBar() {
  const [state, setState] = useState<ExtractState>("idle")
  const [url, setUrl] = useState(
    "https://techcrunch.com/2025/03/deepseek-infrastructure-breakthrough"
  )

  useEffect(() => {
    if (state === "stripping") {
      const t = window.setTimeout(() => setState("done"), 700)
      return () => window.clearTimeout(t)
    }
    if (state === "done") {
      const t = window.setTimeout(() => setState("idle"), 2200)
      return () => window.clearTimeout(t)
    }
  }, [state])

  return (
    <>
      <form
        className="flex w-full max-w-2xl flex-col items-stretch gap-3 rounded-2xl border-2 border-ink bg-paper p-2 shadow-card sm:flex-row sm:items-center sm:p-3"
        onSubmit={(event) => {
          event.preventDefault()
          if (state === "idle") setState("stripping")
        }}
      >
        <div className="flex w-full items-center gap-2 py-1 pl-3 pr-2">
          <LinkIcon size={22} strokeWidth={2.5} className="shrink-0 text-primary" />
          <input
            type="text"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="Paste any news article URL here..."
            aria-label="News article URL"
            className="w-full bg-transparent text-body-md text-ink outline-none placeholder:text-outline"
          />
        </div>
        <button
          type="submit"
          disabled={state !== "idle"}
          className={`flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-ink px-6 py-3 text-label-lg text-ink shadow-level-1 transition-all hover:-translate-y-0.5 hover:shadow-level-2 active:translate-y-1 active:shadow-none disabled:cursor-default sm:w-auto ${state === "done" ? "bg-lime" : "bg-primary"
            }`}
        >
          {state === "stripping" && (
            <>
              <Loader2 size={18} strokeWidth={2.5} className="animate-spin" />
              <span>Stripping...</span>
            </>
          )}
          {state === "done" && (
            <>
              <Check size={18} strokeWidth={3} />
              <span>Story Ready!</span>
            </>
          )}
          {state === "idle" && (
            <>
              <span>Extract Story</span>
              <Zap size={18} strokeWidth={2.5} />
            </>
          )}
        </button>
      </form>

      <div className="mt-space-md flex flex-wrap items-center justify-center gap-space-sm">
        {GUARANTEES.map((guarantee) => (
          <span
            key={guarantee}
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-paper px-3 py-1 text-label-sm text-ink shadow-press"
          >
            <CheckCircle2 size={16} strokeWidth={2.5} className="text-lime" fill="#AEEA00" stroke="#111316" />
            {guarantee}
          </span>
        ))}
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="container-app flex flex-col items-center pb-space-2xl pt-space-xl text-center">

      <h1 className="h-xl max-w-4xl uppercase text-ink">News to Content</h1>
      <p className="mt-2 text-headline-sm uppercase text-primary sm:text-headline-md sm:text-headline-md">
        Paste a link. Get the story.
      </p>
      <p className="mx-auto mt-space-sm max-w-2xl text-body-lg text-on-surface">
        The clutter-free engine that strips ads, paywalls &amp; trackers from news
        articles and transforms them into creator-ready social formats in seconds.
      </p>

      <GadgetTrio />
      <ExtractBar />
    </section>
  )
}

function ClutterFreeDifference() {
  return (
    <section id="how-it-works" className="w-full border-y-2 border-ink bg-paper py-space-2xl">
      <div className="container-app">
        <div className="mx-auto mb-space-xl max-w-2xl text-center">
          <h2 className="h-lg uppercase text-ink">The Clutter-Free Difference</h2>
          <p className="mt-2 text-body-md text-on-surface-variant">
            Regular web scraping grabs trash. NewsToContent isolates the pure
            journalistic signal using server-side DOM sanitization and Readability.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-space-lg lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-canvas p-space-md shadow-level-2 sm:p-space-lg lg:col-span-5">
            <div className="mb-3 flex items-center justify-between gap-2 border-b-2 border-ink pb-3">
              <div className="flex min-w-0 items-center gap-2">
                <span className="h-3.5 w-3.5 shrink-0 rounded-full border border-ink bg-primary" />
                <span className="h-3.5 w-3.5 shrink-0 rounded-full border border-ink bg-tertiary" />
                <span className="h-3.5 w-3.5 shrink-0 rounded-full border border-ink bg-lime" />
                <span className="ml-2 truncate text-label-md text-ink">
                  the-noisy-web.com
                </span>
              </div>
              <span className="shrink-0 rounded border border-ink bg-error-container px-2 py-0.5 text-label-sm text-on-error-container">
                4.2MB Bloat
              </span>
            </div>
            <div className="space-y-3 opacity-90">
              <div className="rotate-1 rounded-xl border-2 border-ink bg-error-container p-3 text-center text-xs font-bold text-on-error-container">
                ⚠️ PRIVACY WARNING: ACCEPT 418 TRACKING COOKIES? [ACCEPT ALL]
              </div>
              <div className="h-4 w-3/4 rounded bg-surface-container" />
              <div className="h-4 w-full rounded bg-surface-container" />
              <div className="-rotate-1 rounded-xl border-2 border-ink bg-tertiary p-4 text-center text-xs font-bold text-ink shadow-chip">
                ⚡ &quot;DENTISTS HATE HIM! ONE WEIRD TRICK&quot; (SPONSORED)
              </div>
              <div className="h-4 w-5/6 rounded bg-surface-container" />
              <div className="h-4 w-2/3 rounded bg-surface-container" />
              <div className="rounded-xl bg-ink p-3 text-center text-xs font-extrabold text-white">
                🔒 SUBSCRIBE FOR $1/WEEK TO READ THE REST OF THIS STORY
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 border-t-2 border-ink pt-3 text-label-sm text-on-surface-variant">
              <span>✗ 54 Ad Network Trackers</span>
              <span>✗ Broken Markdown Parsers</span>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-3 py-1 sm:gap-4 lg:col-span-2 lg:flex-col lg:gap-2 lg:py-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-primary text-ink shadow-level-1 transition-transform hover:rotate-12 sm:h-14 sm:w-14">
              <ArrowRight size={26} strokeWidth={2.5} className="rotate-90 lg:rotate-0" />
            </div>
            <span className="rounded-md border-2 border-ink bg-lime px-2 py-0.5 text-label-md uppercase text-ink shadow-press">
              0.2s Clean
            </span>
          </div>

          <div className="relative rounded-2xl border-2 border-ink bg-paper p-space-md shadow-card sm:p-space-lg lg:col-span-5">
            <div className="mb-3 flex items-center justify-between gap-2 border-b-2 border-ink pb-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border border-ink bg-lime" />
                <span className="text-label-md text-ink">
                  Clean Extraction Engine
                </span>
              </div>
              <div className="flex shrink-0 gap-1.5">
                {([".MD", "JSON"] as const).map((format, i) => (
                  <button
                    key={format}
                    type="button"
                    className={`rounded border border-ink px-2 py-0.5 text-label-sm text-ink transition-all hover:brightness-105 active:translate-y-0.5 ${i === 0 ? "bg-secondary" : "bg-tertiary"
                      }`}
                  >
                    {format}
                  </button>
                ))}
                <button
                  type="button"
                  className="flex items-center gap-1 rounded border border-ink bg-lime px-2 py-0.5 text-label-sm text-ink transition-all hover:brightness-105 active:translate-y-0.5"
                >
                  <Copy size={12} strokeWidth={2.5} />
                  Copy
                </button>
              </div>
            </div>
            <div className="space-y-2 text-left text-body-sm">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-on-surface-variant">
                <span>BYLINE: DR. ELENA ROSTOVA</span>
                <span>•</span>
                <span>READ TIME: 3 MIN (680 WORDS)</span>
              </div>
              <h3 className="text-title-md leading-tight text-ink">
                DeepSeek Open-Sources Hardware Compute Kernel Architecture
              </h3>
              <p className="leading-relaxed text-on-surface">
                In an unexpected technical paper published this morning, engineering
                leads disclosed memory-efficient matrix operations that decrease
                inference memory bandwidth by 38% across standard clusters.
              </p>
              <div className="space-y-1 rounded-xl border-2 border-ink bg-canvas p-2.5 font-mono text-xs text-ink">
                <p className="font-bold text-secondary-strong">
                  # Extracted Core Takeaways:
                </p>
                <p>1. Custom FP8 accumulator pipelines reduce VRAM overhead.</p>
                <p>2. Zero licensing constraints for non-commercial builders.</p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1 border-t-2 border-ink pt-3 text-label-sm text-secondary-strong min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
              <span>✓ 100% Sanitized Plaintext</span>
              <span>✓ Verified Source URL</span>
            </div>
          </div>
        </div>

        <div className="mt-space-2xl grid grid-cols-2 gap-space-md border-t-2 border-ink pt-space-lg md:grid-cols-4">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border-2 border-ink bg-canvas p-space-md text-center shadow-level-1"
            >
              <div
                className={`text-headline-md sm:text-headline-lg sm:text-headline-lg ${metric.valueClass}`}
              >
                {metric.value}
              </div>
              <div className="text-label-md text-on-surface-variant">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesGrid() {
  return (
    <section
      id="features"
      className="container-app py-space-2xl"
    >
      <div className="mx-auto mb-space-2xl max-w-xl text-center">

        <h2 className="h-lg uppercase text-ink">
          Engineered for High-Velocity Creators
        </h2>
        <p className="mt-2 text-body-md text-on-surface-variant">
          Everything you need to turn raw journalism into viral social threads,
          newsletters, and podcasts.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="group flex flex-col justify-between rounded-2xl border-2 border-ink bg-paper p-space-lg shadow-level-2 transition-all hover:-translate-y-1 hover:shadow-hover"
          >
            <div>
              <div
                className="mb-space-md flex h-12 w-12 items-center justify-center rounded-xl border-2 border-ink text-ink shadow-chip transition-transform group-hover:rotate-6"
                style={{ backgroundColor: feature.iconBg }}
              >
                <feature.icon size={26} strokeWidth={2.25} />
              </div>
              <h3 className="mb-2 text-title-md text-ink">
                {feature.title}
              </h3>
              <p className="text-body-sm leading-relaxed text-on-surface-variant">
                {feature.body}
              </p>
            </div>
            <div className="mt-space-md flex items-center justify-between gap-2 border-t-2 border-ink pt-3">
              <span
                className="rounded border border-ink px-2 py-0.5 text-label-sm text-ink"
                style={{ backgroundColor: feature.tagBg }}
              >
                {feature.tag}
              </span>
              <feature.footIcon size={18} strokeWidth={2.25} className="shrink-0 text-ink" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function CreatorPro() {
  return (
    <section id="showcase" className="relative w-full overflow-hidden border-y-2 border-ink bg-paper py-space-2xl">
      <div className="container-app">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="mb-2 text-label-md uppercase tracking-wider text-on-surface-variant">
            Included with your Creator pass:
          </span>
          <h2 className="max-w-xl text-headline-md uppercase leading-tight text-ink sm:text-headline-lg sm:text-headline-lg">
            Everything You Need to Ship Daily News Content
          </h2>

          <div className="mt-space-xl w-full max-w-lg space-y-3 text-left">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-xl border-2 border-ink bg-canvas p-3 shadow-chip"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-lime text-xs font-bold text-ink">
                  ✓
                </span>
                <span className="text-title-sm text-ink">{benefit}</span>
              </div>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 top-2 hidden select-none xl:block 2xl:-right-20"
          >
            <div className="relative flex flex-col items-center">
              <div className="absolute -left-3 -top-3 z-10 -rotate-6 rounded-full border-2 border-ink bg-tertiary px-2.5 py-0.5 text-label-sm font-bold text-ink shadow-press">
                AI PILOT
              </div>
              <div className="h-56 w-44 drop-shadow-[0_8px_0_#111316] transition-transform duration-300 hover:scale-105">
                <NewsBotSvg className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SignupSection() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="signup" className="container-app relative py-space-2xl">
      <div id="pricing" className="mx-auto max-w-xl rounded-3xl border-2 border-ink bg-paper p-space-lg text-center shadow-level-3 sm:p-space-xl">

        <h2 className="mb-2 text-headline-sm uppercase tracking-tight text-ink sm:text-headline-md sm:text-headline-md">
          Start Repurposing News Today
        </h2>
        <p className="mb-space-lg text-body-md text-on-surface-variant">
          Join 10,000+ newsletter writers, tech founders, and social creators
          turning daily news into high-impact content.
        </p>

        <form className="flex flex-col gap-3 text-left" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="signup-name"
              className="mb-1 block text-label-sm uppercase tracking-wider text-ink"
            >
              Your Name
            </label>
            <input
              id="signup-name"
              required
              type="text"
              placeholder="Dann Petty"
              className="w-full rounded-xl border-2 border-ink bg-canvas px-4 py-3 text-body-md text-ink outline-none transition-all placeholder:text-outline focus:shadow-level-1"
            />
          </div>
          <div>
            <label
              htmlFor="signup-email"
              className="mb-1 block text-label-sm uppercase tracking-wider text-ink"
            >
              Email Address
            </label>
            <input
              id="signup-email"
              required
              type="email"
              placeholder="dann@interfacefriends.com"
              className="w-full rounded-xl border-2 border-ink bg-canvas px-4 py-3 text-body-md text-ink outline-none transition-all placeholder:text-outline focus:shadow-level-1"
            />
          </div>
          <button
            type="submit"
            className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-ink bg-primary py-4 text-headline-sm uppercase tracking-wide text-ink shadow-level-2 transition-all hover:-translate-y-0.5 hover:shadow-hover active:translate-y-1 active:shadow-none"
          >
            <span>Get Free Access</span>
            <ArrowRight size={22} strokeWidth={2.5} />
          </button>
        </form>

        {submitted && (
          <div
            role="status"
            className="mt-4 rounded-xl border-2 border-ink bg-[#D4F780] p-3 text-title-sm text-ink shadow-chip"
          >
            🎉 You&apos;re in! Check your inbox for your instant API token.
          </div>
        )}

        <p className="mt-space-md text-body-sm text-on-surface-variant">
          No credit card required • Instant 14-day Pro trial • Cancel anytime
        </p>
      </div>

      <div className="mt-space-xl text-center text-body-sm text-on-surface-variant">
        <p>Interested in team API access or custom news scraper webhooks?</p>
        <a
          href="mailto:hello@newstocontent.com"
          className="text-label-md text-ink underline transition-colors hover:text-primary"
        >
          hello@newstocontent.com
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="community" className="w-full bg-surface-container-low">
      <div className="container-app py-space-2xl">
        <div className="grid grid-cols-1 gap-space-xl pb-space-2xl sm:grid-cols-2 md:grid-cols-12">
          <div className="flex flex-col gap-space-md sm:col-span-2 md:col-span-5">
            <div className="flex items-center gap-space-sm">
              <img
                src={ImageLogo}
                alt="NewsToContent logo"
                className="h-8 w-8 shrink-0 rounded-full border border-ink object-cover shadow-[0_3px_0_#1a1c1f]"
              />
              <span className="text-headline-sm font-extrabold text-on-surface">
                NewsToContent
              </span>
            </div>
            <p className="max-w-sm text-title-md text-on-surface-variant">
              Ideas in. Action out.
            </p>
            <p className="max-w-sm text-body-md text-on-surface-variant">
              Transform real-time news, niche editorial releases, and newsletters
              into production-grade multi-platform creator campaigns instantly.
            </p>
          </div>
          <div className="flex flex-col gap-space-sm md:col-span-4">
            <span className="text-label-md uppercase tracking-wider text-on-surface">
              Product
            </span>
            <div className="flex flex-col gap-space-xs text-body-md">
              <a href="#features" className="text-on-surface-variant transition-colors hover:text-on-surface">
                Features
              </a>
              <a href="#how-it-works" className="text-on-surface-variant transition-colors hover:text-on-surface">
                Workflow Pipelines
              </a>
              <a href="#showcase" className="text-on-surface-variant transition-colors hover:text-on-surface">
                Creator Showcase
              </a>
              <a href="#pricing" className="text-on-surface-variant transition-colors hover:text-on-surface">
                Plans &amp; Pricing
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm md:col-span-3">
            <span className="text-label-md uppercase tracking-wider text-on-surface">
              Community &amp; Culture
            </span>
            <div className="flex flex-col gap-space-xs text-body-md">
              <a href="#community" className="text-on-surface-variant transition-colors hover:text-on-surface">
                Creator Hub
              </a>
              <a href="#community" className="text-on-surface-variant transition-colors hover:text-on-surface">
                Discord &amp; Workshops
              </a>
              <a href="#community" className="text-on-surface-variant transition-colors hover:text-on-surface">
                Weekly News Drop
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-space-md border-t-2 border-ink pt-space-lg text-center text-body-sm text-on-surface-variant sm:text-left md:flex-row">
          <p>
            © 2025 NewsToContent Inc. All rights reserved. Crafted with tactile
            neo-pop energy.
          </p>
          <div className="flex items-center gap-space-lg">
            <a href="#" className="transition-colors hover:text-on-surface">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-on-surface">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas font-sans text-ink antialiased">
      <Header />
      <main className="w-full pt-16 sm:pt-20">
        <div className="flex w-full flex-col overflow-hidden border-b-0 bg-canvas text-ink">
          <TickerBanner />
          <Hero />
          <ClutterFreeDifference />
          <FeaturesGrid />
          <CreatorPro />
          <SignupSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
