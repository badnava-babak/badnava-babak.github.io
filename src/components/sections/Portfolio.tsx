import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/data'
import type { Project } from '@/data'

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
      {/* Thumbnail */}
      {project.image ? (
        <div className="relative w-full h-48 bg-gray-100">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
          <span className="text-xs text-gray-300 font-medium">No image</span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-base font-semibold text-gray-900 leading-snug">
            {project.name}
          </h3>
          <div className="flex items-center gap-3 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <Github size={17} />
              </a>
            )}
            {project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paper"
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.description}</p>

        <ul className="mb-5 space-y-1">
          {project.highlights.map(h => (
            <li key={h} className="text-sm text-gray-600 flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">·</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Portfolio"
          title="Selected projects"
          subtitle="A selection of ML and AI projects. More coming soon."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(p => (
            <ProjectCard key={p.name} project={p} />
          ))}
          {/* Placeholder card */}
          <div className="border border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
            <p className="text-sm text-gray-400 font-medium mb-1">More projects coming soon</p>
            <p className="text-xs text-gray-300">
              Object detection with LLMs and other work in progress
            </p>
          </div>
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
