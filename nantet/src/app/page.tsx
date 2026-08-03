import { About } from "./_components/about"
import { Hero } from "./_components/hero"
import Projects from "./_components/projects"
import { Tours } from "./_components/tours"
import { Footer } from "./_components/footer"
import FooterDev from "./_components/footer-dev"
import WhatsappWrapper from "./_components/whatsapp-wrapper"
import ParallaxSection from "./_components/parallaxSection"
import ParallaxPage from './_components/ParallaxPage'
import IntroLoader from './_components/IntroLoader'

export default function Home() {
  return (
    <main>
      <IntroLoader />
      <Projects />
      <About />
      <Hero />
      <WhatsappWrapper>
        <Tours />
        <ParallaxPage />
        <ParallaxSection />
        <Footer />
        <FooterDev />
      </WhatsappWrapper>
    </main>
  )
}