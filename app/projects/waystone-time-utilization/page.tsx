import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"
import { getProjectById } from "@/data/projects"
import { DocFigure } from "@/components/projects/doc-figure"

const project = getProjectById("waystone-time-utilization")!
const IMG = "/projects/waystone-time-utilization"
const LINKEDIN_CANONICAL_URL = "https://www.linkedin.com/feed/update/urn:li:share:7483692160689532928/"

export const metadata: Metadata = {
  title: `${project.title} | Bhuvesh Kumar`,
  description: project.description,
}

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "discovery", label: "Discovery" },
  { id: "contribution", label: "My contribution" },
  { id: "consultant-experience", label: "Consultant experience" },
  { id: "reporting", label: "Reporting" },
  { id: "data-architecture", label: "Data architecture" },
  { id: "challenges", label: "Challenges" },
  { id: "results", label: "Results" },
  { id: "linkedin", label: "LinkedIn" },
]

const AT_A_GLANCE = [
  { value: "5-screen Power Apps application", copy: "Home calendar, Day Entry, Week editor, History calendar and a manager-only Admin interface." },
  { value: "5-list SharePoint data model", copy: "A star schema with one transactional list and four reference lists." },
  { value: "Manual reconciliation eliminated", copy: "Weekly and quarterly spreadsheet consolidation is no longer needed." },
  { value: "No additional licences required", copy: "Runs within the firm's existing Microsoft 365 environment." },
]

const USER_GROUPS = [
  { who: "Consultants", need: "Fast daily and weekly time entry" },
  { who: "Managers", need: "Utilization, client effort, fees, and retainer visibility" },
  { who: "Administrators", need: "Controlled maintenance of clients and activity types" },
]

const UX_DECISIONS = [
  { heading: "Calendar status", copy: "Green and red day states on the Home calendar make missed weekdays visible at a glance." },
  { heading: "Day Entry", copy: "Supports detailed records: client, activity, hours, and a description for each piece of work." },
  { heading: "Week editing", copy: "A whole week can be completed on one screen, which reduces repetitive navigation." },
  { heading: "History", copy: "Any day in any month can be opened to backfill or correct previous entries." },
  { heading: "Pending-change counters", copy: "Header counters explain pending additions, edits, and deletions before submission." },
  { heading: "Confirmed submission", copy: "Nothing writes to SharePoint until the user confirms submission." },
]

const REPORTING = [
  "KPI summary",
  "Consultant utilization",
  "Utilization against target",
  "Weekly trends",
  "Billable and non-billable analysis",
  "Hours by activity group",
  "Hours and effort value by client",
  "Fees per client",
  "Retainer hours allowed versus used",
  "Over/within-retainer status",
  "Unbilled write-offs",
  "Top clients by fee share",
]

const DATA_FLOW = [
  "Consultants",
  "Five-screen Power Apps canvas application",
  "Staged local edits",
  "Confirmed three-pass submission",
  "Five-list SharePoint data model",
  "Power Query transformation",
  "DAX measures",
  "Scheduled Power BI refresh",
  "Management dashboard",
]

const ADMIN_FLOW = [
  "Manager/Admin interface",
  "Client and ActivityType reference lists",
  "Shared classification rules used by Power Apps and Power BI",
]

const MODEL_POINTS = [
  "The app writes transactional records to TimeEntriesNew, the primary list.",
  "Related SharePoint lists provide consultant, client, activity, and rate reference data.",
  "ActivityType is the source of truth for billable classification.",
  "Every time entry requires a client and an activity, which enforces a consistent structure and reduces classification errors.",
  "Dedicated internal clients represent leave, public holidays, and internal work.",
  "Administrators can add clients and activity types without changing formulas or redistributing spreadsheet templates.",
  "Data remains exportable to Excel for ad-hoc analysis.",
]

const CHALLENGES = [
  {
    heading: "SharePoint lookup columns in Power BI",
    copy: "SharePoint lookup columns arrived in Power BI as structured records rather than analysis-ready values. I expanded them to plain text in Power Query before relationships were resolved, validated the model against manually calculated totals, and documented the transformation in the refresh runbook.",
    note: "The risk was incorrect or unusable relationships and misleading totals in the dashboard.",
  },
  {
    heading: "Safe historical editing",
    copy: "Additions, modifications, and deletions are held locally until the user submits. A controlled three-pass submission then commits the changes to SharePoint, avoiding partially applied edits. The interface shows pending-change counters before confirmation.",
  },
  {
    heading: "Accurate utilization across changing capacity",
    copy: "I replaced a fixed-capacity calculation with headcount-aware DAX measures based on applicable weekdays, excluding approved leave and public holidays. I validated the measures with worked examples to ensure utilization remained accurate as staffing and availability changed.",
    note: "Weekends, leave, and public holidays are excluded from the relevant capacity calculations, so valid time off does not penalize a consultant's utilization.",
  },
]

const RESULTS = [
  {
    value: "Manual reconciliation eliminated",
    copy: "Weekly and quarterly spreadsheet consolidation was replaced by centralized time entry and self-service reporting.",
  },
  {
    value: "Reliable client and utilization visibility",
    copy: "Managers could review utilization, client effort, fees, write-offs, and retainer positions through a consistently modelled dashboard.",
  },
  {
    value: "Designed for continued ownership",
    copy: "Runbooks, an Activity Guide, Excel export, and manager-only administration allowed the solution to continue operating without dependence on its original developer.",
  },
]

function Section({ eyebrow, title, id, children }: { eyebrow: string; title: string; id: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-neutral-200/80 pt-12 md:pt-20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  )
}

function Flow({ steps, label }: { steps: string[]; label: string }) {
  return (
    <div role="img" aria-label={`${label}: ${steps.join(", then ")}`} className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-center text-xs font-semibold text-blue-900">
            {step}
          </span>
          {i < steps.length - 1 ? (
            <span aria-hidden className="text-neutral-400">
              →
            </span>
          ) : null}
        </div>
      ))}
    </div>
  )
}

const prose = "text-[15px] leading-7 text-muted-foreground"
const h3 = "text-base font-semibold text-foreground"

export default function WaystoneTimeUtilizationPage() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto w-full max-w-4xl">
        <div className="sticky top-16 z-40 -mx-6 border-b border-neutral-200/60 bg-background/95 px-6 py-3 backdrop-blur-sm md:top-0">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </div>

        <header id="overview" className="scroll-mt-24 pt-10">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={project.organizationHref!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.organizationIcon} alt="" className="h-3.5 w-3.5 shrink-0 rounded-sm" />
              {project.organization}
            </Link>
            <span className="inline-flex items-center gap-1 rounded-full border border-green/20 bg-green/10 px-3 py-1 text-xs font-medium text-green">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Deployed
            </span>
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground">
              {project.period}
            </span>
            <a
              href="#linkedin"
              className="inline-flex items-center gap-1.5 rounded-full border border-green/20 bg-green/10 px-3 py-1 text-xs font-medium text-green transition-colors hover:bg-green/20"
            >
              <Linkedin className="h-3.5 w-3.5" />
              Post
            </a>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{project.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">Power Apps time entry with Power BI management reporting</p>

          <nav aria-label="On this page" className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">On this page</span>
            {TOC.map((item, index) => (
              <span key={item.id} className="flex items-center gap-x-2.5">
                {index > 0 ? <span aria-hidden className="text-neutral-300">·</span> : null}
                <a href={`#${item.id}`} className="font-medium text-orange underline-offset-4 transition-colors hover:text-foreground hover:underline">
                  {item.label}
                </a>
              </span>
            ))}
          </nav>

          <p className={cn("mt-8 max-w-3xl", prose)}>
            Consultants recorded billable and non-billable hours in individual Excel files, leaving the manager to
            consolidate the data every week and quarter for utilization and billing analysis. I interviewed
            consultants and the manager, designed a governed five-list SharePoint data model, developed a
            five-screen Power Apps application, and built a Power BI dashboard with Power Query and DAX. The
            solution eliminated manual reconciliation while using only the Microsoft 365 licensing the firm already
            had.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-md bg-blue/8 px-2.5 py-1 text-xs font-medium text-blue">
                {tag}
              </span>
            ))}
          </div>

          <div id="at-a-glance" className="mt-8 scroll-mt-24">
            <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">At a glance</h2>
            <dl className="mt-3 grid grid-cols-1 gap-x-8 gap-y-4 border-y border-neutral-200/80 py-5 sm:grid-cols-2">
              {AT_A_GLANCE.map((item) => (
                <div key={item.value}>
                  <dt className="text-sm font-semibold text-foreground">{item.value}</dt>
                  <dd className="mt-0.5 text-sm leading-6 text-muted-foreground">{item.copy}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <Section eyebrow="THE BUSINESS PROBLEM" title="Reporting depended on manual consolidation" id="problem">
          <p className={prose}>
            Consultants recorded how many hours they worked each day, which client the work supported, and the type
            of activity performed. These entries allowed management to understand consultant utilization, monitor
            client effort, and support accurate billing.
          </p>
          <p className={prose}>
            Each consultant maintained a separate Excel file. Every week—and again each quarter—the manager had to
            collect, consolidate, and check those files before meaningful reporting was possible.
          </p>
          <p className={prose}>
            The process was repetitive, attribution errors could distort client costs or retainer usage, and
            management visibility depended on completing the consolidation first. The replacement also had to
            operate within the Microsoft 365 environment the firm already licensed.
          </p>
        </Section>

        <Section eyebrow="DISCOVERY" title="Understanding the workflow" id="discovery">
          <p className={prose}>
            I began by interviewing consultants and the manager to understand how time was recorded, where errors
            occurred, which billing rules needed to be enforced, and what management needed to see in the final
            reports. Those conversations shaped both the data model and the application experience.
          </p>
          <dl className="divide-y divide-neutral-200/70 rounded-xl border border-neutral-200/80">
            {USER_GROUPS.map((group) => (
              <div key={group.who} className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:gap-4">
                <dt className="text-sm font-semibold text-foreground sm:w-36 sm:shrink-0">{group.who}</dt>
                <dd className="text-sm leading-6 text-muted-foreground">{group.need}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section eyebrow="MY CONTRIBUTION" title="What I owned" id="contribution">
          <p className={prose}>
            I designed and delivered the solution across the full workflow: requirements discovery, SharePoint data
            modelling, Power Apps UX and development, Power Query transformation, DAX measures, Power BI reporting,
            manager administration, validation, documentation, and handover.
          </p>
        </Section>

        <Section eyebrow="CONSULTANT EXPERIENCE" title="A five-screen Power Apps application" id="consultant-experience">
          <p className={prose}>
            The canvas application has five screens: a Home calendar, Day Entry, a Week editor, a History calendar,
            and a manager-only Admin interface. Each design decision below removes a specific source of friction or
            error from time entry.
          </p>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
            {UX_DECISIONS.map((item) => (
              <div key={item.heading}>
                <h3 className="text-sm font-semibold text-foreground">{item.heading}</h3>
                <p className="mt-0.5 text-sm leading-6 text-muted-foreground">{item.copy}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <DocFigure
              visual={{
                title: "Home calendar",
                caption: "Screen 1, Home calendar. Green days are complete and red days are missed weekdays, so a consultant can see what still needs an entry before the week closes. Test data.",
                src: `${IMG}/home-calendar.jpg`,
                alt: "Power Apps Home calendar for July 2026 with completed days in green, missed weekdays in red, and buttons for Today, Week editor and Calendar editor",
              }}
            />
            <DocFigure
              visual={{
                title: "Day Entry",
                caption: "Screen 2, Day Entry. One row per piece of work with client, activity, hours and a description. Client names replaced with synthetic labels.",
                src: `${IMG}/day-entry-sanitized.jpg`,
                alt: "Power Apps Day Entry screen with two rows, each with a client dropdown, an activity dropdown, an hours field and a description box, plus Add more and Submit for this day buttons",
              }}
            />
            <DocFigure
              visual={{
                title: "Week editor",
                caption: "Screen 3, Week editor. The day strip mirrors the calendar colours, and the header counters show edited, new and to-delete rows before anything is saved. Client names replaced with synthetic labels.",
                src: `${IMG}/week-editor-sanitized.jpg`,
                alt: "Power Apps Week editor with a seven-day status strip, pending-change counters in the header, editable rows for the selected day and a Save all button",
              }}
            />
            <DocFigure
              visual={{
                title: "History calendar",
                caption: "Screen 4, History calendar. Any past day can be opened and corrected in place; changes stay staged until the user submits. Client names replaced with synthetic labels.",
                src: `${IMG}/history-calendar-sanitized.png`,
                alt: "Power Apps History calendar with a month view on the left and editable time-entry rows for the selected day on the right",
              }}
            />
            <DocFigure
              visual={{
                title: "Admin interface",
                caption: "Screen 5, manager-only Admin interface. Clients and activity types, including the billable flag, are maintained here rather than in formulas or spreadsheet templates.",
                src: `${IMG}/admin-dashboard.jpg`,
                alt: "Power Apps Admin dashboard with an Add Client form including an internal-client option and an Add Activity Type form with activity group and billable selection",
              }}
            />
          </div>
        </Section>

        <Section eyebrow="MANAGEMENT REPORTING" title="Self-service reporting in Power BI" id="reporting">
          <p className={prose}>
            Power BI converts the centralized time-entry data into self-service management reporting. Power Query
            prepares the SharePoint data, while DAX measures calculate utilization, capacity, client effort, fees,
            and retainer position.
          </p>
          <ul className={cn("grid list-disc grid-cols-1 gap-x-8 gap-y-1 pl-5 sm:grid-cols-2", prose)}>
            {REPORTING.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={prose}>
            The consultant table uses red–amber–green status formatting against the utilization target. Reports show
            current data after each scheduled refresh.
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <DocFigure
              visual={{
                title: "Team overview (synthetic data)",
                caption: "Team overview with KPI summary, red–amber–green utilization status per consultant, fees per client and hours per activity group. Illustrative layout using synthetic names and values.",
                src: `${IMG}/team-overview-dashboard.png`,
                alt: "Team overview report with utilization, fees and total hours KPIs, a consultant table with red, amber and green utilization status, and bar charts of fees per client and hours per activity group, all using synthetic data",
              }}
            />
            <DocFigure
              visual={{
                title: "Consultant drill-down",
                caption: "Per-consultant view: utilization against the target, weekly trend, hours by activity type and hours by client. Consultant and client names blurred.",
                src: `${IMG}/powerbi-consultant-drilldown.png`,
                alt: "Power BI consultant drill-down with a utilization gauge against target, a weekly utilization trend line, hours by activity type and a client hours table with names blurred",
              }}
            />
            <DocFigure
              visual={{
                title: "Client retainer usage",
                caption: "Retainer hours allowed versus used per client, with over or within status so unbilled effort on retainer clients is visible. Client and consultant names blurred.",
                src: `${IMG}/powerbi-retainer-usage.png`,
                alt: "Power BI client retainer usage report with allowed and used retainer hours, the difference per client, and over or within retainer status, with names blurred",
              }}
            />
            <DocFigure
              visual={{
                title: "Client effort and fee share",
                caption: "Billable hours and effort value per client, plus the top clients by fee share. Client names and fee values blurred.",
                src: `${IMG}/powerbi-client-profitability-sanitized.png`,
                alt: "Power BI client report with billable hours per client and a bar chart of the top clients by fee share, with client names and fee values blurred",
              }}
            />
          </div>
        </Section>

        <Section eyebrow="DATA ARCHITECTURE" title="From time entry to the management dashboard" id="data-architecture">
          <div>
            <h3 className={h3}>Data flow</h3>
            <div className="mt-3">
              <Flow steps={DATA_FLOW} label="Data flow" />
            </div>
          </div>
          <div>
            <h3 className={h3}>Administration path</h3>
            <div className="mt-3">
              <Flow steps={ADMIN_FLOW} label="Administration path" />
            </div>
          </div>
          <div>
            <h3 className={h3}>Governed data model</h3>
            <p className={cn("mt-1.5", prose)}>
              The SharePoint Lists data store is a five-list star schema: TimeEntriesNew at the centre, with
              Consultant, Client, ActivityType and RateCard as reference lists.
            </p>
            <ul className={cn("mt-2 list-disc space-y-1.5 pl-5", prose)}>
              {MODEL_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <DocFigure
              visual={{
                title: "Five-list star schema",
                caption: "TimeEntriesNew is the primary list the app writes to. ActivityType holds the billable flag, so classification is defined in one place for both Power Apps and Power BI.",
                src: `${IMG}/star-schema-data-model.png`,
                alt: "Star schema of five SharePoint lists: TimeEntriesNew as the fact list linked to Consultant, Client and ActivityType, with RateCard joined to Consultant on designation",
              }}
            />
            <DocFigure
              visual={{
                title: "Activity Guide decision chart",
                caption: "The decision chart from the consultant-facing Activity Guide. It walks from 'were you working' to the correct activity, which supports consistent billable classification at entry.",
                src: `${IMG}/activity-decision-chart.png`,
                alt: "Decision chart titled Which activity should I pick, branching on whether the consultant was working, whether the work was for a specific client and whether it is chargeable, ending in time off, internal, non-chargeable client work or billable delivery activities",
              }}
            />
          </div>
        </Section>

        <Section eyebrow="UNDER THE HOOD" title="Technical challenges" id="challenges">
          <div className="space-y-6">
            {CHALLENGES.map((item) => (
              <div key={item.heading}>
                <h3 className={h3}>{item.heading}</h3>
                <p className={cn("mt-1.5", prose)}>{item.copy}</p>
                {item.note ? <p className="mt-1.5 text-sm leading-6 text-muted-foreground/80">{item.note}</p> : null}
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="RESULTS & IMPACT" title="What changed" id="results">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {RESULTS.map((result) => (
              <div key={result.value} className="rounded-xl border border-neutral-200/80 p-4">
                <h3 className="text-base font-semibold leading-tight text-orange">{result.value}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{result.copy}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="WHY IT MATTERS" title="More than a replacement form" id="takeaway">
          <p className={prose}>
            This project combined user research, workflow design, data governance, low-code application development,
            and business intelligence. The result was not simply a replacement form: it was a maintainable operating
            system for time entry, utilization analysis, and client reporting within the firm&rsquo;s existing
            Microsoft 365 environment.
          </p>
        </Section>

        <Section eyebrow="EVIDENCE" title="LinkedIn post" id="linkedin">
          <div className="rounded-xl border border-neutral-200/80 p-4">
            <iframe
              src={project.linkedinEmbed}
              height={400}
              className="w-full max-w-[504px] rounded-lg border border-neutral-200"
              title="Embedded LinkedIn post about the time utilization project at Waystone"
              allowFullScreen
            />
            <a
              href={LINKEDIN_CANONICAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-green underline-offset-4 hover:underline"
            >
              <Linkedin className="h-4 w-4" />
              View the LinkedIn post ↗
            </a>
          </div>
        </Section>
      </div>
    </section>
  )
}
