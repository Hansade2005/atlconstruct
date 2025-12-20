import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Award, Users, Clock, CheckCircle } from 'lucide-react'

const About = () => {
  return (
    <div className="bg-secondary text-primary">
      <Nav />
      <section className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About ATL Construction</h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg leading-relaxed mb-6">
              ATL Construction is comprised of a motivated and experienced group of managers who felt that a consistent level of service and attention was missing from the development industry. ATL Construction was formed to fill a niche market offering clients an unmatched level of attention, care and overall project management.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Every project is represented by one dedicated supervisor. Each supervisor brings specific skills and talents to the table, but all supervisors work collaboratively to take advantage of their combined strengths and experiences. Clients benefit greatly from this unique approach, and can feel confident knowing that their project is supported by a strong team.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To transform our clients' visions into tangible realities through innovative construction techniques, sustainable practices,
              and unwavering commitment to excellence. We strive to exceed expectations in every project while contributing positively
              to the communities we serve.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
              <li><strong>Quality:</strong> We never compromise on the quality of our work or materials.</li>
              <li><strong>Integrity:</strong> Honesty and transparency in all our dealings.</li>
              <li><strong>Innovation:</strong> Embracing new technologies and methods to improve our services.</li>
              <li><strong>Safety:</strong> Prioritizing the well-being of our team, clients, and the public.</li>
              <li><strong>Sustainability:</strong> Committed to environmentally responsible construction practices.</li>
            </ul>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About