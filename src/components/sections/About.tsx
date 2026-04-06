import Image from 'next/image'
import { MapPin, Mail, GraduationCap } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="About" title="Background" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <Image
              src="/images/profile.jpg"
              alt="Babak Badnava"
              width={320}
              height={400}
              className="rounded-xl w-full object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4 text-sm">
              <p>
                I&apos;m Babak, a researcher and engineer focused on the intersection of machine learning
                and intelligent systems. I hold a Ph.D. in Computer Science from the University of Kansas,
                where my research centered on resource allocation techniques for next-generation wireless
                and edge computing systems.
              </p>
              <p>
                My work explores how to intelligently balance communication and computation tradeoffs
                in latency-sensitive applications — from 3D video streaming over mmWave networks to
                UAV-assisted edge computing. I apply reinforcement learning, bandit algorithms, and
                deep learning to solve these problems, and I&apos;ve published the results at venues like
                IEEE GLOBECOM, IEEE ISIT, and IEEE/ACM SEC.
              </p>
              <p>
                Before my PhD, I spent several years as a software engineer building backend systems
                and Python applications in the industry. That blend of research depth and engineering
                practicality is what I bring to consulting and product work today.
              </p>
              <p>
                Outside of work, I enjoy weightlifting, archery, soccer, and spending time with family.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <GraduationCap size={16} className="text-accent shrink-0" />
                <span>PhD in Computer Science, University of Kansas</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <MapPin size={16} className="text-accent shrink-0" />
                <span>Lawrence, Kansas, USA</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Mail size={16} className="text-accent shrink-0" />
                <a href="mailto:babak.badnava@gmail.com" className="hover:text-accent transition-colors">
                  babak.badnava@gmail.com
                </a>
              </div>
            </div>
          </div>
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
