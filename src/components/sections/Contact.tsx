import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react'

const links = [
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
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl">
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Whether you have a consulting inquiry, a research collaboration in mind, or just want
            to connect — I&apos;d love to hear from you. The best way to reach me is by email.
          </p>
          <a
            href="mailto:babak.badnava@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-150 mb-8"
          >
            <Mail size={16} />
            babak.badnava@gmail.com
          </a>
          <div className="flex items-center gap-5">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors"
              >
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
