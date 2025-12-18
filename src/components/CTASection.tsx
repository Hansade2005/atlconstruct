import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Build Your Dream Project?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact us today for a free consultation and quote. Let's bring your vision to life with ATL Construction's expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg font-semibold shadow-lg transition-colors duration-300 flex items-center gap-2"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:16474445350"
            className="px-8 py-4 bg-purple-700 hover:bg-purple-800 rounded-lg font-semibold text-white shadow-lg transition-colors duration-300 flex items-center gap-2"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
          <span>✓ Free Estimates</span>
          <span>✓ Licensed & Insured</span>
          <span>✓ 15+ Years Experience</span>
          <span>✓ Quality Guarantee</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;