import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import FeaturedProjects from '../components/FeaturedProjects'
import OurProcess from '../components/OurProcess'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  useEffect(() => {
    // GSAP animations
    gsap.from('.hero-title', { duration: 1, y: 50, opacity: 0 })
    gsap.from('.hero-subtitle', { duration: 1, y: 50, opacity: 0, delay: 0.2 })
    gsap.from('.hero-cta', { duration: 1, y: 50, opacity: 0, delay: 0.4 })

    // Parallax effect for hero
    gsap.to('.hero-bg', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    // Animate sections on scroll
    gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })
    })
  }, [])

  return (
    <div className="bg-secondary text-primary">
      <Nav />
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <OurProcess />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home