import { Award, Users, Clock, Shield } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="animate-on-scroll py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About ATL Construction</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Based in Toronto, Ontario, Canada, ATL Construction is a premier construction company dedicated to bringing your vision to life.
            With years of experience in commercial, residential, and renovation projects, we pride ourselves on quality craftsmanship,
            timely delivery, and building lasting relationships with our clients.
          </p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-4">
            Our team of skilled professionals combines innovative techniques with traditional values to ensure every project exceeds expectations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
            <p className="text-gray-600">Every project is built with precision and attention to detail.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">Skilled professionals with years of industry experience.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
            <p className="text-gray-600">We respect your time and deliver projects on schedule.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
            <p className="text-gray-600">Fully licensed and insured for your peace of mind.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection