import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ATL Construction</h3>
            <p className="mb-4">
              Transforming your ideas into reality in Toronto, Ontario.
            </p>
            <p>&copy; 2025 ATL Construction. All rights reserved.</p>
            <p className="text-sm mt-2">
              Built with <a href="https://pipilot.dev" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition underline">PiPIlot</a>
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition">About</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition">Projects</Link></li>
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
      </div>
    </footer>
  )
}

export default Footer