import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/badnava-babak',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/badnava/',
    icon: Linkedin,
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=sbqDPWAAAAAJ&hl=en',
    icon: GraduationCap,
  },
  {
    label: 'Email',
    href: 'mailto:babak.badnava@gmail.com',
    icon: Mail,
  },
]

export default function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
          AI/ML Engineer &amp; Researcher
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
          Babak Badnava
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed mb-10">
          PhD in Computer Science · I build intelligent systems and help organizations
          harness the power of machine learning — from research to production.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#services"
            className="px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-150"
          >
            View Services
          </a>
          <a
            href="#portfolio"
            className="px-6 py-3 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:border-gray-400 hover:text-gray-900 transition-colors duration-150"
          >
            See My Work
          </a>
        </div>

        <div className="flex items-center gap-5">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-gray-700 transition-colors duration-150"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
