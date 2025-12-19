import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Hammer, Wrench, Shield, Award } from 'lucide-react';

const Hero = () => {
  const [counters, setCounters] = useState({ projects: 0, years: 0, satisfaction: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Animated counters
    const animateCounter = (target: number, setValue: (val: number) => void, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setValue(target);
          clearInterval(timer);
        } else {
          setValue(Math.floor(current));
        }
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter(200, (val) => setCounters(prev => ({ ...prev, projects: val })));
      animateCounter(15, (val) => setCounters(prev => ({ ...prev, years: val })));
      animateCounter(100, (val) => setCounters(prev => ({ ...prev, satisfaction: val })));
    }, 1000);

    // Video autoplay
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if autoplay fails
      });
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-700">

      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
          poster="https://api.a0.dev/assets/image?text=Professional construction workers building modern high-rise in downtown Toronto with blue sky and cranes&aspect=16:9&seed=atl-hero-new"
        >
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          {/* Fallback image if video fails */}
          <img
            src="https://api.a0.dev/assets/image?text=Professional construction workers building modern high-rise in downtown Toronto with blue sky and cranes&aspect=16:9&seed=atl-hero-new"
            alt="ATL Construction - Building Excellence in Toronto"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
      </div>

      {/* Floating Service Icons */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <Hammer className="absolute top-20 left-20 w-8 h-8 text-white/20 animate-pulse" style={{ animationDelay: '0s' }} />
        <Wrench className="absolute top-40 right-32 w-6 h-6 text-indigo-300/30 animate-bounce" style={{ animationDelay: '1s' }} />
        <Shield className="absolute bottom-32 left-16 w-7 h-7 text-purple-300/25 animate-pulse" style={{ animationDelay: '2s' }} />
        <Award className="absolute bottom-40 right-20 w-5 h-5 text-pink-300/20 animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center">

        {/* Hero Title */}
        <div className="w-28 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full mb-6 mt-8 animate-pulse"></div>

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
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 hover:scale-105 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 flex items-center gap-2 group"
          >
            View Our Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="/contact"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 hover:scale-105 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 flex items-center gap-2 group"
          >
            <Phone className="w-5 h-5 group-hover:animate-pulse" /> Get Free Quote
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm md:text-base opacity-90">
          {["Licensed & Insured", "15+ Years Experience", "100% Satisfaction"].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="animate-on-scroll">
            <div className="text-4xl md:text-5xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              {counters.projects}+
            </div>
            <div className="text-lg opacity-90">Projects Completed</div>
          </div>
          <div className="animate-on-scroll">
            <div className="text-4xl md:text-5xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              {counters.years}+
            </div>
            <div className="text-lg opacity-90">Years Experience</div>
          </div>
          <div className="animate-on-scroll">
            <div className="text-4xl md:text-5xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              {counters.satisfaction}%
            </div>
            <div className="text-lg opacity-90">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white hover:text-indigo-300 transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;