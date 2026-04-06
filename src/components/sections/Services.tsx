import { Network, BookOpen, Layers } from 'lucide-react'
import { services } from '@/data'
import type { Service } from '@/data'

const iconMap = {
  'network': Network,
  'book-open': BookOpen,
  'layers': Layers,
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon]
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-accent mb-4">
        <Icon size={20} />
      </div>
      <h3 className="text-base font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Services"
          title="What I can do for you"
          subtitle="I work with companies, startups, and research groups to deliver ML solutions — from early prototypes to production systems."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(s => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-blue-700 transition-colors"
          >
            Interested in working together? Get in touch →
          </a>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-12">
      <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
        {label}
      </p>
      <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">{title}</h2>
      {subtitle && <p className="text-gray-500 max-w-2xl">{subtitle}</p>}
    </div>
  )
}
