import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Publications from '@/components/sections/Publications'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Experience />
        <Publications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
