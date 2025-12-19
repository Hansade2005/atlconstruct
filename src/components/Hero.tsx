import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Play, Pause, Volume2, VolumeX, MapPin, Star } from 'lucide-react';

const Hero = () => {
  const [counters, setCounters] = useState({ projects: 0, years: 0, satisfaction: 0, awards: 0 });
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const taglines = [
    "Transforming Toronto's skyline with Quality, Innovation & Excellence",
    "Building Dreams, Crafting Futures - Your Trusted Construction Partner",
    "Excellence in Construction Since 2008 - Toronto's Premier Builders"
  ];

  useEffect(() => {
    // Tagline rotation
    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);

    // Animated counters with intersection observer
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(200, (val) => setCounters(prev => ({ ...prev, projects: val })));
          animateCounter(15, (val) => setCounters(prev => ({ ...prev, years: val })));
          animateCounter(100, (val) => setCounters(prev => ({ ...prev, satisfaction: val })));
          animateCounter(25, (val) => setCounters(prev => ({ ...prev, awards: val })));
        }
      });
    }, observerOptions);

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => {
      clearInterval(taglineInterval);
      observer.disconnect();
    };
  }, []);

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

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen flex overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Background Video with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
          poster="https://api.a0.dev/assets/image?text=Professional construction workers building modern high-rise in downtown Toronto with blue sky and cranes&aspect=16:9&seed=atl-hero-redesign"
        >
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
      </div>

      {/* Video Controls */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={toggleVideo}
          className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
        >
          {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button
          onClick={toggleMute}
          className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="text-white space-y-8">

              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-medium">Toronto, Ontario</span>
              </div>

              {/* Hero Title */}
              <div>
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full mb-6"></div>
                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-4">
                  <span className="text-white">ATL</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    Construction
                  </span>
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full"></div>
              </div>

              {/* Rotating Taglines */}
              <div className="h-16 flex items-center">
                <p className="text-xl lg:text-2xl font-light leading-relaxed opacity-90 transition-all duration-500">
                  {taglines[currentTagline]}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  View Our Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+14165551234"
                  className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 group-hover:animate-pulse" />
                  Call Now
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-sm opacity-90">
                {[
                  { icon: Star, text: "Licensed & Insured" },
                  { icon: MapPin, text: "Serving GTA" },
                  { icon: Award, text: "Award Winning" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-4 h-4 text-indigo-400" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Stats Section */}
            <div className="stats-section lg:pl-8">
              <div className="grid grid-cols-2 gap-6">

                {/* Projects */}
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {counters.projects}+
                  </div>
                  <div className="text-indigo-300 font-medium">Projects</div>
                  <div className="text-white/70 text-sm">Completed</div>
                </div>

                {/* Years */}
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {counters.years}+
                  </div>
                  <div className="text-purple-300 font-medium">Years</div>
                  <div className="text-white/70 text-sm">Experience</div>
                </div>

                {/* Satisfaction */}
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {counters.satisfaction}%
                  </div>
                  <div className="text-pink-300 font-medium">Client</div>
                  <div className="text-white/70 text-sm">Satisfaction</div>
                </div>

                {/* Awards */}
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {counters.awards}+
                  </div>
                  <div className="text-blue-300 font-medium">Industry</div>
                  <div className="text-white/70 text-sm">Awards</div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;