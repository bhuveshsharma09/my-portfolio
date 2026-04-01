"use client"

import { BentoCard } from "@/components/bento-card"
import { siteConfig } from "@/data/site"

export function LocationCard() {
  return (
    <BentoCard header="Map" className="h-full overflow-hidden relative min-h-[240px]">
      {/* Detailed street map SVG pattern similar to reference */}
      <div className="absolute inset-0 opacity-[0.15]">
        <svg
          className="w-full h-full"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Main roads */}
          <path d="M 0 150 L 300 150" stroke="currentColor" strokeWidth="4" fill="none" />
          <path d="M 150 0 L 150 300" stroke="currentColor" strokeWidth="4" fill="none" />
          
          {/* Secondary roads */}
          <path d="M 0 75 L 300 75" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M 0 225 L 300 225" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M 75 0 L 75 300" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M 225 0 L 225 300" stroke="currentColor" strokeWidth="2" fill="none" />
          
          {/* Tertiary roads */}
          <path d="M 0 37 L 300 37" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 0 112 L 300 112" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 0 187 L 300 187" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 0 262 L 300 262" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 37 0 L 37 300" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 112 0 L 112 300" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 187 0 L 187 300" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 262 0 L 262 300" stroke="currentColor" strokeWidth="1" fill="none" />
          
          {/* Curved roads */}
          <path d="M 0 100 Q 75 120 150 100 T 300 100" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M 0 200 Q 75 180 150 200 T 300 200" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M 100 0 Q 120 75 100 150 T 100 300" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M 200 0 Q 180 75 200 150 T 200 300" stroke="currentColor" strokeWidth="1.5" fill="none" />
          
          {/* Diagonal roads */}
          <path d="M 0 0 L 150 150" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 300 0 L 150 150" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 0 300 L 150 150" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 300 300 L 150 150" stroke="currentColor" strokeWidth="1" fill="none" />
          
          {/* Small blocks */}
          <rect x="20" y="20" width="30" height="25" fill="currentColor" opacity="0.3" rx="2" />
          <rect x="80" y="40" width="25" height="20" fill="currentColor" opacity="0.3" rx="2" />
          <rect x="130" y="20" width="35" height="30" fill="currentColor" opacity="0.3" rx="2" />
          <rect x="200" y="30" width="28" height="25" fill="currentColor" opacity="0.3" rx="2" />
          <rect x="250" y="20" width="30" height="35" fill="currentColor" opacity="0.3" rx="2" />
          
          <rect x="25" y="85" width="25" height="20" fill="currentColor" opacity="0.3" rx="2" />
          <rect x="85" y="80" width="20" height="25" fill="currentColor" opacity="0.3" rx="2" />
          <rect x="200" y="85" width="30" height="20" fill="currentColor" opacity="0.3" rx="2" />
          <rect x="255" y="80" width="25" height="25" fill="currentColor" opacity="0.3" rx="2" />
          
          <rect x="20" y="160" width="30" height="20" fill="currentColor" opacity="0.3" rx="2" />
          <rect x="80" y="165" width="25" height="15" fill="currentColor" opacity="0.3" rx="2" />
          <rect x="200" y="160" width="35" height="20" fill="currentColor" opacity="0.3" rx="2" />
          <rect x="250" y="165" width="30" height="25" fill="currentColor" opacity="0.3" rx="2" />
          
          <rect x="25" y="230" width="25" height="30" fill="currentColor" opacity="0.3" rx="2" />
          <rect x="80" y="235" width="30" height="25" fill="currentColor" opacity="0.3" rx="2" />
          <rect x="200" y="230" width="25" height="30" fill="currentColor" opacity="0.3" rx="2" />
          <rect x="255" y="235" width="30" height="25" fill="currentColor" opacity="0.3" rx="2" />
          
          {/* Center marker */}
          <circle cx="150" cy="150" r="6" fill="currentColor" opacity="0.5" />
          <circle cx="150" cy="150" r="3" fill="currentColor" />
        </svg>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="space-y-1">
          <span className="text-xl font-bold tracking-[0.2em] text-foreground">
            {siteConfig.location.toUpperCase()}
          </span>
          <p className="text-[10px] text-muted-foreground font-mono tracking-wide">
            {siteConfig.coordinates}
          </p>
        </div>
      </div>
    </BentoCard>
  )
}
