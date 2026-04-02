import { BentoCard } from "@/components/bento-card"
import { education } from "@/data/experience"

export function EducationCard() {
  const topEducation = education.slice(0, 3)

  return (
    <BentoCard header="Education" className="h-full">
      <div className="space-y-3">
        {topEducation.map((edu, index) => (
          <div key={edu.id} className="flex gap-3">
            {/* Timeline dot */}
            <div className="flex flex-col items-center">
              <div className={`w-2 h-2 rounded-full mt-1.5 ${
                index === 0 ? "bg-orange" : "bg-neutral-300"
              }`} />
              {index < topEducation.length - 1 && (
                <div className="w-px h-full bg-neutral-200 mt-1" />
              )}
            </div>
            
            {/* Content */}
            <div className="pb-3">
              <p className={`text-sm font-medium ${
                index === 0 ? "text-foreground" : "text-muted-foreground"
              }`}>
                {edu.degree}
              </p>
              <p className="text-xs text-muted-foreground">
                {edu.institution} · {edu.period}
              </p>
              {edu.status === "In Progress" && (
                <p className="mt-0.5 text-xs font-medium text-orange">In progress</p>
              )}
              {edu.gpa && (
                <p className="text-xs text-orange font-medium mt-0.5">
                  GPA: {edu.gpa}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}
