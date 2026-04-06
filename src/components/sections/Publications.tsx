import { publications } from '@/data'
import type { Publication } from '@/data'

const typeLabel: Record<Publication['type'], string> = {
  journal: 'Journal',
  conference: 'Conference',
  preprint: 'Preprint',
}

const typeBadgeClass: Record<Publication['type'], string> = {
  journal: 'bg-blue-50 text-blue-600',
  conference: 'bg-gray-100 text-gray-600',
  preprint: 'bg-amber-50 text-amber-600',
}

function formatAuthors(authors: string): React.ReactNode {
  return authors.split(', ').map((author, i, arr) => (
    <span key={i}>
      {author === 'Babak Badnava' ? (
        <strong className="font-semibold text-gray-900">{author}</strong>
      ) : (
        author
      )}
      {i < arr.length - 1 ? ', ' : ''}
    </span>
  ))
}

function PublicationItem({ pub }: { pub: Publication }) {
  return (
    <li className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0">
      <span
        className={`mt-0.5 shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${typeBadgeClass[pub.type]}`}
      >
        {typeLabel[pub.type]}
      </span>
      <div>
        {pub.doi ? (
          <a
            href={pub.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-900 hover:text-accent transition-colors leading-snug"
          >
            {pub.title}
          </a>
        ) : (
          <p className="text-sm font-medium text-gray-900 leading-snug">{pub.title}</p>
        )}
        <p className="text-xs text-gray-500 mt-1">{formatAuthors(pub.authors)}</p>
        <p className="text-xs text-gray-400 mt-0.5 italic">{pub.venue}</p>
      </div>
    </li>
  )
}

export default function Publications() {
  // Group by year, sorted descending
  const byYear = publications.reduce<Record<string, Publication[]>>((acc, p) => {
    acc[p.year] = acc[p.year] ? [...acc[p.year], p] : [p]
    return acc
  }, {})
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a))

  return (
    <section id="publications" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
              Publications
            </p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Research output</h2>
          </div>
          <a
            href="https://scholar.google.com/citations?user=sbqDPWAAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-medium text-accent hover:text-blue-700 transition-colors mt-1"
          >
            Google Scholar →
          </a>
        </div>

        <div className="space-y-10">
          {years.map(year => (
            <div key={year}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">
                {year}
              </h3>
              <ul className="divide-y divide-gray-100 bg-white rounded-xl border border-gray-100 px-6">
                {byYear[year].map((pub, i) => (
                  <PublicationItem key={i} pub={pub} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
