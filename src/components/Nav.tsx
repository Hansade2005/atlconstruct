import { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            ATL Construction
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-primary hover:text-accent transition">Home</Link>
            <Link to="/about" className="text-primary hover:text-accent transition">About</Link>
            <Link to="/projects" className="text-primary hover:text-accent transition">Projects</Link>
            <Link to="/contact" className="text-primary hover:text-accent transition">Contact</Link>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 text-primary hover:text-accent transition">Home</Link>
            <Link to="/about" className="block py-2 text-primary hover:text-accent transition">About</Link>
            <Link to="/projects" className="block py-2 text-primary hover:text-accent transition">Projects</Link>
            <Link to="/contact" className="block py-2 text-primary hover:text-accent transition">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav