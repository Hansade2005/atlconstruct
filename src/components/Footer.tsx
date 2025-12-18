import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail, Send } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup - for now, just log or alert
    alert(`Thank you for subscribing! We'll send updates to ${email}`)
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-primary text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ATL Construction</h3>
            <p className="mb-4">
              Transforming your ideas into reality in Toronto, Ontario.
            </p>
            <p>&copy; 2025 ATL Construction. All rights reserved.</p>
            <p className="text-sm mt-2">
              Built with <a href="https://pipilot.dev" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition underline">PiPilot</a>
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition">About</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Residential Construction</span></li>
              <li><span className="text-gray-300">Commercial Projects</span></li>
              <li><span className="text-gray-300">Renovations</span></li>
              <li><span className="text-gray-300">Project Management</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">1225 Kennedy Road, Suite 2000</p>
            <p className="mb-2">Toronto, Ontario M1P 4Y1</p>
            <p className="mb-2">Phone: 1 (647) 444-5350</p>
            <p className="mb-4">Email: info@atlconstruction.ca</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/atlconstructioncorporation" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com/atlconstructio1" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com/atlconstruction" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300">Subscribe to our newsletter for the latest projects and construction tips.</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-accent hover:bg-accent/80 rounded-lg font-semibold text-white transition-colors duration-300 flex items-center gap-2"
              >
                Subscribe <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer