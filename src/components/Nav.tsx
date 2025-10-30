import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { gsap } from 'gsap'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.mobile-menu', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.3 })
    }
  }, [isOpen])

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-semibold transition-all duration-300 hover:text-accent hover:underline underline-offset-4 ${
      isActive ? 'text-accent underline' : 'text-primary'
    }`

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md shadow-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          <NavLink to="/">
            <img src="/atl-logo.svg" alt="ATL Construction" className="h-10 w-auto transition-transform duration-300 hover:scale-105" />
          </NavLink>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mobile-menu pb-4 space-y-2">
            <NavLink to="/" className={({ isActive }) => `block py-3 px-2 text-lg font-semibold transition-all duration-300 hover:bg-accent/10 rounded-lg ${isActive ? 'text-accent bg-accent/10' : 'text-primary'}`} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `block py-3 px-2 text-lg font-semibold transition-all duration-300 hover:bg-accent/10 rounded-lg ${isActive ? 'text-accent bg-accent/10' : 'text-primary'}`} onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/projects" className={({ isActive }) => `block py-3 px-2 text-lg font-semibold transition-all duration-300 hover:bg-accent/10 rounded-lg ${isActive ? 'text-accent bg-accent/10' : 'text-primary'}`} onClick={() => setIsOpen(false)}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `block py-3 px-2 text-lg font-semibold transition-all duration-300 hover:bg-accent/10 rounded-lg ${isActive ? 'text-accent bg-accent/10' : 'text-primary'}`} onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav