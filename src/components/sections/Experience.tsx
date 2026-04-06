import { experience } from '@/data'

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Experience" title="Work history" />
        <div className="space-y-10">
          {experience.map((job, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <p className="text-sm font-medium text-gray-900">{job.company}</p>
                <p className="text-xs text-gray-400 mt-0.5">{job.location}</p>
                <p className="text-xs text-gray-400 mt-0.5">{job.period}</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-sm font-semibold text-gray-900 mb-3">{job.title}</p>
                <ul className="space-y-1.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-gray-500 flex items-start gap-2">
                      <span className="text-accent mt-0.5 shrink-0">·</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">{label}</p>
      <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
    </div>
  )
}
