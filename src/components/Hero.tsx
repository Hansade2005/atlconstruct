import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-700">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.wixstatic.com/media/90a441_5f65f95edf334849a43b853a2652f251~mv2.jpg/v1/fill/w_327,h_245,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_5f65f95edf334849a43b853a2652f251~mv2.jpg"
          alt="ATL Construction - Building Excellence in Toronto"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center">
       
        {/* Hero Title */}
        <div className="w-28 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full mb-6 mt-8"></div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          <span className="text-white">ATL</span>
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 block md:inline">
            Construction
          </span>
        </h1>
        <div className="w-28 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full mb-6"></div>

        {/* Hero Subtitle */}
        <p className="text-lg md:text-2xl font-light mb-2 opacity-90">
          Transforming Toronto's skyline with
        </p>
        <p className="text-2xl md:text-3xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-8">
          Quality, Innovation & Excellence
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/projects"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold text-white shadow-lg transition-colors duration-300 flex items-center gap-2"
          >
            View Our Work
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="/contact"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white shadow-lg transition-colors duration-300 flex items-center gap-2"
          >
            <Phone className="w-5 h-5" /> Get Free Quote
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm md:text-base opacity-90">
          {["Licensed & Insured", "15+ Years Experience", "100% Satisfaction"].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full"></div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
