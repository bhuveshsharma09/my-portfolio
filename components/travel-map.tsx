import { SectionHeading } from "@/components/section-heading"

// Marker positions use the same plate carrée bounds as the generated map SVG:
// lon -180..180 → x 0..100%, lat 85..-60 → y 0..100%
const MAP_LAT_TOP = 85
const MAP_LAT_SPAN = 145

interface Place {
  name: string
  lat: number
  lon: number
  home?: boolean
}

const places: Place[] = [
  { name: "Singapore", lat: 1.35, lon: 103.82, home: true },
  { name: "India", lat: 28.6, lon: 77.2 },
  { name: "Indonesia", lat: -6.2, lon: 106.8 },
  { name: "Thailand", lat: 13.7, lon: 100.5 },
  { name: "Kazakhstan", lat: 43.2, lon: 76.9 },
  { name: "Hong Kong", lat: 22.3, lon: 114.2 },
  { name: "Vietnam", lat: 21.0, lon: 105.8 },
  { name: "China", lat: 39.9, lon: 116.4 },
  { name: "Portugal", lat: 38.7, lon: -9.1 },
  { name: "Spain", lat: 40.4, lon: -3.7 },
  { name: "Norway", lat: 59.9, lon: 10.8 },
  { name: "Denmark", lat: 55.7, lon: 12.6 },
  { name: "South Africa", lat: -33.9, lon: 18.4 },
  { name: "Papua New Guinea", lat: -9.4, lon: 147.2 },
  { name: "Australia", lat: -33.9, lon: 151.2 },
  { name: "New Zealand", lat: -36.8, lon: 174.8 },
]

export function TravelMap() {
  return (
    <section aria-label="Places I have traveled" className="px-6 py-10 md:py-14">
      <div className="mx-auto w-full max-w-none">
        <SectionHeading
          title="Places I've been."
          subtitle="Traveling is my favorite way to unplug — here's where it has taken me so far."
          className="mb-6"
        />

        <div className="relative w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/about-me/world-map.svg"
            alt="World map highlighting the countries Bhuvesh has visited"
            className="w-full"
          />
          {places.map((place) => (
            <span
              key={place.name}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${((place.lon + 180) / 360) * 100}%`,
                top: `${((MAP_LAT_TOP - place.lat) / MAP_LAT_SPAN) * 100}%`,
              }}
            >
              {place.home ? (
                <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                  <span className="relative inline-flex h-full w-full rounded-full bg-green ring-2 ring-white" />
                </span>
              ) : (
                <span className="block h-2 w-2 rounded-full bg-orange ring-2 ring-white md:h-2.5 md:w-2.5" />
              )}
              <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1.5 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-0.5 text-[11px] font-medium text-background group-hover:block">
                {place.name}
                {place.home ? " · home" : ""}
              </span>
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {places.map((place) => (
            <span
              key={place.name}
              className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {place.home ? <span className="h-1.5 w-1.5 rounded-full bg-green" /> : null}
              {place.name}
              {place.home ? " · home" : ""}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
