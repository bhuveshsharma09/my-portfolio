import Image from "next/image"
import { siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"

export function AboutImages() {
  if (!siteConfig.personalImages?.length) return null

  const images = siteConfig.personalImages

  return (
    <section aria-label="Personal photos" className="px-6 py-6 md:py-10">
      <div className="mx-auto w-full max-w-none">
        <div className="grid auto-rows-[140px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-3 md:gap-4">
          {images.map((img, idx) => (
            <div
              key={img.src}
              className={cn(
                "relative overflow-hidden rounded-xl bg-neutral-100",
                idx === 0 && "col-span-2 row-span-2",
                idx === images.length - 1 && idx % 2 === 1 && "col-span-2 md:col-span-1"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
