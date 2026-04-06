import { education } from '@/data'

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Education" title="Academic background" />
        <div className="space-y-8">
          {education.map((edu, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <p className="text-xs text-gray-400 font-medium">{edu.period}</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-sm font-semibold text-gray-900">{edu.degree}</p>
                <p className="text-sm text-gray-500 mt-0.5">
                  {edu.institution} · {edu.location}
                </p>
                {edu.thesis && (
                  <p className="text-xs text-gray-400 mt-1.5 italic">
                    Thesis: {edu.thesis}
                  </p>
                )}
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
