import { Clock, Plus, Star } from "lucide-react";
import type { ReactElement } from "react";
import type { ProjectAccent } from "../data/portfolio";
import { cn } from "../lib/cn";

function WildOasisVisual() {
  const stats = [
    { label: "Bookings", value: "184", trend: "+12%" },
    { label: "Occupancy", value: "87%", trend: "+4%" },
    { label: "Revenue", value: "$48k", trend: "+9%" },
  ];
  const bars = [38, 62, 48, 78, 56, 88, 70, 96, 60, 82, 72, 90];

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#0b1a12] via-[#081209] to-[#050a07] p-4 sm:p-5">
      <div className="grid-lines absolute inset-0 opacity-20" />
      <div className="absolute -top-12 -right-8 size-44 rounded-full bg-[#22c55e]/20 blur-3xl" />

      <div className="relative flex h-full gap-3">
        <div className="hidden w-11 flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-3 sm:flex">
          <div className="size-6 rounded-lg bg-gradient-to-br from-[#86efac] to-[#16a34a]" />
          <span className="mt-1 h-px w-5 bg-white/10" />
          {[0, 1, 2, 3].map((item) => (
            <div
              key={item}
              className={cn(
                "size-5 rounded-md",
                item === 0 ? "bg-[#22c55e]/30" : "bg-white/[0.05]",
              )}
            />
          ))}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-display text-[0.74rem] font-semibold text-white/90">
                Overview
              </p>
              <p className="font-mono text-[0.5rem] tracking-wide text-white/35 uppercase">
                Last 30 days
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="size-5 rounded-full bg-gradient-to-br from-[#86efac] to-[#22c55e]" />
              <span className="h-1.5 w-8 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/[0.07] bg-white/[0.035] p-1.5 sm:p-2"
              >
                <p className="font-mono text-[0.42rem] tracking-wide text-white/35 uppercase">
                  {stat.label}
                </p>
                <p className="mt-0.5 font-display text-[0.7rem] font-semibold text-white/90 sm:text-[0.82rem]">
                  {stat.value}
                </p>
                <p className="font-mono text-[0.42rem] text-[#6ee7b7]">
                  {stat.trend}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-1 flex-col rounded-lg border border-white/[0.07] bg-white/[0.028] p-2 sm:p-2.5">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[0.46rem] tracking-wide text-white/40 uppercase">
                Bookings per month
              </p>
              <span className="rounded-full bg-[#22c55e]/20 px-1.5 py-0.5 font-mono text-[0.42rem] text-[#86efac]">
                2025
              </span>
            </div>
            <div className="mt-2 flex flex-1 items-end gap-1 sm:gap-1.5">
              {bars.map((height, index) => (
                <div
                  key={index}
                  style={{ height: `${height}%` }}
                  className={cn(
                    "flex-1 rounded-t-[2px]",
                    index === 7
                      ? "bg-gradient-to-t from-[#16a34a] to-[#86efac]"
                      : "bg-white/[0.09]",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PizzaVisual() {
  const items = [
    { name: "Margherita", price: "$12", tone: "from-[#fbbf24] to-[#f97316]" },
    { name: "Pepperoni", price: "$14", tone: "from-[#fb923c] to-[#dc2626]" },
    { name: "Funghi", price: "$13", tone: "from-[#fcd34d] to-[#d97706]" },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#241708] via-[#170f07] to-[#0c0805] p-4 sm:p-5">
      <div className="grid-lines absolute inset-0 opacity-15" />
      <div className="absolute -top-10 -right-10 size-40 rounded-full bg-[#f59e0b]/25 blur-3xl" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="grid size-5 place-items-center rounded-md bg-[#f59e0b]/20 text-[0.55rem] font-bold text-[#fbbf24]">
              F
            </span>
            <span className="font-display text-[0.72rem] font-semibold text-white/90">
              Fast React Pizza
            </span>
          </div>
          <span className="flex items-center gap-1 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/10 px-2 py-0.5 font-mono text-[0.46rem] text-[#fcd34d]">
            Cart · 3
          </span>
        </div>

        <p className="mt-3 font-mono text-[0.46rem] tracking-wide text-white/35 uppercase">
          Our menu
        </p>

        <div className="mt-1.5 grid flex-1 grid-cols-3 gap-1.5 sm:gap-2">
          {items.map((item, index) => (
            <div
              key={item.name}
              className="flex flex-col rounded-lg border border-white/[0.07] bg-white/[0.03] p-1.5 sm:p-2"
            >
              <div className="relative mx-auto mt-1 size-9 sm:size-11">
                <div
                  className={cn(
                    "absolute inset-0 rounded-full bg-gradient-to-br",
                    item.tone,
                  )}
                />
                <div className="absolute inset-[16%] rounded-full border border-[#b45309]/30" />
                <span className="absolute top-[28%] left-[30%] size-1 rounded-full bg-[#7c2d12]/70" />
                <span className="absolute top-[52%] left-[58%] size-1 rounded-full bg-[#7c2d12]/70" />
                <span className="absolute top-[62%] left-[30%] size-[3px] rounded-full bg-[#7c2d12]/70" />
                {index === 1 ? (
                  <span className="absolute -top-0.5 -right-0.5 grid size-3 place-items-center rounded-full bg-[#f59e0b] text-[#3b1d00]">
                    <Star className="size-1.5 fill-current" />
                  </span>
                ) : null}
              </div>
              <p className="mt-1.5 truncate text-center text-[0.52rem] font-medium text-white/85">
                {item.name}
              </p>
              <div className="mt-auto flex items-center justify-between pt-1">
                <span className="font-mono text-[0.46rem] text-white/45">
                  {item.price}
                </span>
                <span className="grid size-3.5 place-items-center rounded-md bg-[#f59e0b]/20 text-[#fcd34d]">
                  <Plus className="size-2" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.04] px-2 py-1.5">
          <div className="flex items-center gap-1.5">
            <span className="flex size-4 items-center justify-center rounded-full bg-[#f59e0b]">
              <Clock className="size-2 text-[#3b1d00]" />
            </span>
            <span className="font-mono text-[0.46rem] text-white/50">
              Delivery in 25 min
            </span>
          </div>
          <span className="rounded-md bg-[#f59e0b] px-1.5 py-0.5 font-mono text-[0.44rem] font-semibold text-[#2a1600]">
            Order
          </span>
        </div>
      </div>
    </div>
  );
}

function WorldWiseVisual() {
  const cities = [
    { name: "Lisbon", meta: "Portugal", tone: "bg-[#34d399]" },
    { name: "Kyoto", meta: "Japan", tone: "bg-[#22d3ee]" },
    { name: "Cairo", meta: "Egypt", tone: "bg-[#a3e635]" },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#071c18] via-[#08130f] to-[#050b09] p-4 sm:p-5">
      <svg
        className="absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 400 260"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-20 70 C60 40 90 110 160 92 S280 30 420 78"
          stroke="#2dd4bf"
          strokeOpacity="0.22"
          strokeWidth="1.2"
        />
        <path
          d="M-10 140 C80 120 120 180 190 156 S300 110 420 150"
          stroke="#2dd4bf"
          strokeOpacity="0.16"
          strokeWidth="1.2"
        />
        <path
          d="M40 -20 C60 60 110 90 96 160 S70 230 110 300"
          stroke="#34d399"
          strokeOpacity="0.14"
          strokeWidth="1.2"
        />
        <path
          d="M250 -20 C230 70 300 100 280 180 S250 250 300 300"
          stroke="#34d399"
          strokeOpacity="0.12"
          strokeWidth="1.2"
        />
        <path
          d="M90 150 C140 130 190 150 235 120"
          stroke="#a3e635"
          strokeOpacity="0.35"
          strokeDasharray="3 4"
          strokeWidth="1.2"
        />
        <path
          d="M235 120 C280 95 310 105 338 72"
          stroke="#a3e635"
          strokeOpacity="0.35"
          strokeDasharray="3 4"
          strokeWidth="1.2"
        />
        <circle cx="90" cy="150" r="42" fill="#34d399" fillOpacity="0.04" />
        <circle cx="235" cy="120" r="52" fill="#22d3ee" fillOpacity="0.04" />
      </svg>

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="size-4 rounded-md bg-gradient-to-br from-[#6ee7b7] to-[#0d9488]" />
            <span className="font-display text-[0.7rem] font-semibold text-white/90">
              WorldWise
            </span>
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[0.44rem] text-white/45">
            Map view
          </span>
        </div>

        <div className="relative mt-2 flex-1">
          <div className="absolute top-[36%] left-[18%] flex flex-col items-center">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-[#34d399] opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full border border-[#052e26] bg-[#34d399]" />
            </span>
            <span className="mt-1 rounded bg-[#071c18]/90 px-1 py-0.5 font-mono text-[0.4rem] text-[#a7f3d0]">
              Lisbon
            </span>
          </div>
          <div className="absolute top-[18%] left-[56%] flex flex-col items-center">
            <span className="size-2.5 rounded-full border border-[#082f3a] bg-[#22d3ee]" />
            <span className="mt-1 rounded bg-[#071c18]/90 px-1 py-0.5 font-mono text-[0.4rem] text-[#a5f3fc]">
              Kyoto
            </span>
          </div>
          <div className="absolute top-[58%] left-[78%] flex flex-col items-center">
            <span className="size-2.5 rounded-full border border-[#1a2e05] bg-[#a3e635]" />
            <span className="mt-1 rounded bg-[#071c18]/90 px-1 py-0.5 font-mono text-[0.4rem] text-[#d9f99d]">
              Cairo
            </span>
          </div>

          <div className="absolute bottom-1 left-0 w-[52%] rounded-lg border border-white/[0.08] bg-[#08130f]/85 p-1.5 backdrop-blur sm:p-2">
            <p className="font-mono text-[0.42rem] tracking-wide text-white/35 uppercase">
              Visited cities
            </p>
            <ul className="mt-1 space-y-1">
              {cities.map((city) => (
                <li key={city.name} className="flex items-center gap-1.5">
                  <span className={cn("size-1.5 rounded-full", city.tone)} />
                  <span className="text-[0.48rem] font-medium text-white/80">
                    {city.name}
                  </span>
                  <span className="ml-auto font-mono text-[0.4rem] text-white/30">
                    {city.meta}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuizVisual() {
  const options = [
    { letter: "A", text: "useEffect", state: "idle" },
    { letter: "B", text: "useReducer", state: "selected" },
    { letter: "C", text: "useMemo", state: "idle" },
    { letter: "D", text: "useRef", state: "idle" },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#071929] via-[#081320] to-[#050b12] p-4 sm:p-5">
      <div className="grid-lines absolute inset-0 opacity-15" />
      <div className="absolute -top-12 left-1/2 size-40 -translate-x-1/2 rounded-full bg-[#0ea5e9]/25 blur-3xl" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[0.44rem] tracking-wide text-white/35 uppercase">
              Question 3 / 10
            </p>
            <div className="mt-1 flex gap-1">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <span
                  key={item}
                  className={cn(
                    "h-0.5 w-2.5 rounded-full",
                    item < 3 ? "bg-[#38bdf8]" : "bg-white/10",
                  )}
                />
              ))}
            </div>
          </div>
          <div
            className="relative grid size-9 place-items-center rounded-full"
            style={{
              background:
                "conic-gradient(#38bdf8 0deg 234deg, rgba(255,255,255,0.08) 234deg 360deg)",
            }}
          >
            <div className="grid size-[calc(100%-4px)] place-items-center rounded-full bg-[#081320]">
              <span className="font-mono text-[0.5rem] font-semibold text-[#7dd3fc]">
                18s
              </span>
            </div>
          </div>
        </div>

        <div className="mt-2.5 rounded-lg border border-white/[0.08] bg-white/[0.035] p-2 sm:p-2.5">
          <p className="font-display text-[0.58rem] leading-snug font-medium text-white/90 sm:text-[0.66rem]">
            Which hook is best for managing complex state transitions?
          </p>
          <div className="mt-1.5 grid grid-cols-2 gap-1 sm:gap-1.5">
            {options.map((option) => (
              <div
                key={option.letter}
                className={cn(
                  "flex items-center gap-1.5 rounded-md border px-1.5 py-1",
                  option.state === "selected"
                    ? "border-[#38bdf8]/50 bg-[#0ea5e9]/15"
                    : "border-white/[0.07] bg-white/[0.02]",
                )}
              >
                <span
                  className={cn(
                    "grid size-3.5 place-items-center rounded font-mono text-[0.4rem] font-semibold",
                    option.state === "selected"
                      ? "bg-[#38bdf8] text-[#04202f]"
                      : "bg-white/[0.07] text-white/45",
                  )}
                >
                  {option.letter}
                </span>
                <span
                  className={cn(
                    "truncate font-mono text-[0.44rem]",
                    option.state === "selected"
                      ? "text-[#bae6fd]"
                      : "text-white/50",
                  )}
                >
                  {option.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-mono text-[0.42rem] text-white/30">
            Score · 240
          </span>
          <span className="rounded-md bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] px-2 py-0.5 font-mono text-[0.44rem] font-semibold text-white">
            Next question
          </span>
        </div>
      </div>
    </div>
  );
}

function WildOasisWebsiteVisual() {
  const cabins = [
    { name: "The Merlot", meta: "2 guests · 1 bed", price: "$250", tone: "from-[#1f3d2c] to-[#0c1f15]" },
    { name: "The Evergreen", meta: "4 guests · 2 beds", price: "$420", tone: "from-[#24402f] to-[#0e2116]" },
    { name: "The Pinewood", meta: "3 guests · 1 bed", price: "$310", tone: "from-[#1b3527] to-[#0a1b12]" },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#0a1a11] via-[#081209] to-[#050a07] p-4 sm:p-5">
      <div className="grid-lines absolute inset-0 opacity-20" />
      <div className="absolute -top-12 -right-10 size-44 rounded-full bg-[#22c55e]/20 blur-3xl" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="grid size-5 place-items-center rounded-md bg-[#22c55e] text-[#04140b]">
              <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3 4 9v11h16V9z" />
                <path d="M9 20v-6h6v6" />
              </svg>
            </span>
            <span className="font-display text-[0.72rem] font-semibold text-white/90">
              The Wild Oasis
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden font-mono text-[0.46rem] text-white/40 sm:inline">
              Cabins
            </span>
            <span className="hidden font-mono text-[0.46rem] text-white/40 sm:inline">
              About
            </span>
            <span className="rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 px-2 py-0.5 font-mono text-[0.44rem] text-[#86efac]">
              Sign in
            </span>
          </div>
        </div>

        <div className="mt-3">
          <p className="font-display text-[0.86rem] leading-tight font-semibold text-white/95 sm:text-[1.02rem]">
            Book your forest
            <br />
            getaway.
          </p>
          <div className="mt-2 flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] px-1.5 py-1">
            <span className="font-mono text-[0.46rem] text-white/45">
              Check-in
            </span>
            <span className="h-3 w-px bg-white/10" />
            <span className="font-mono text-[0.46rem] text-white/45">
              Check-out
            </span>
            <span className="h-3 w-px bg-white/10" />
            <span className="font-mono text-[0.46rem] text-white/45">
              Guests
            </span>
            <span className="ml-auto rounded-md bg-[#22c55e] px-1.5 py-0.5 font-mono text-[0.44rem] font-semibold text-[#04140b]">
              Search
            </span>
          </div>
        </div>

        <div className="mt-2.5 grid flex-1 grid-cols-3 gap-1.5 sm:gap-2">
          {cabins.map((cabin) => (
            <div
              key={cabin.name}
              className="flex flex-col overflow-hidden rounded-lg border border-white/[0.07] bg-white/[0.028]"
            >
              <div className={cn("relative h-9 bg-gradient-to-br sm:h-11", cabin.tone)}>
                <span className="absolute top-1 right-1 grid size-3.5 place-items-center rounded-full bg-[#22c55e] text-[#04140b]">
                  <Star className="size-2 fill-current" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-1.5">
                <p className="truncate text-[0.5rem] font-medium text-white/85">
                  {cabin.name}
                </p>
                <p className="truncate font-mono text-[0.4rem] text-white/35">
                  {cabin.meta}
                </p>
                <div className="mt-auto flex items-center justify-between pt-1">
                  <span className="font-mono text-[0.46rem] text-[#86efac]">
                    {cabin.price}
                    <span className="text-white/30">/night</span>
                  </span>
                  <span className="rounded-md bg-[#22c55e]/20 px-1 py-0.5 font-mono text-[0.4rem] text-[#86efac]">
                    Book
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const visuals: Record<string, () => ReactElement> = {
  "wild-oasis-website": WildOasisWebsiteVisual,
  "wild-oasis": WildOasisVisual,
  "fast-react-pizza": PizzaVisual,
  worldwise: WorldWiseVisual,
  "quiz-app": QuizVisual,
};

const accentGlow: Record<ProjectAccent, string> = {
  violet: "bg-[#7b6bff]/20",
  amber: "bg-[#f59e0b]/20",
  emerald: "bg-[#34d399]/20",
  sky: "bg-[#38bdf8]/20",
};

export function ProjectVisual({
  id,
  accent,
}: {
  id: string;
  accent: ProjectAccent;
}) {
  const Visual = visuals[id] ?? WildOasisVisual;

  return (
    <div className="relative h-full w-full">
      <Visual />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -bottom-16 -left-10 size-40 rounded-full blur-3xl",
          accentGlow[accent],
        )}
      />
    </div>
  );
}
