import { useState, useEffect } from 'react';
import { Award, Users, Clock, Shield, ChevronRight, Building, TrendingUp, Heart } from 'lucide-react';

const AboutSection = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones = [
    {
      year: "2008",
      title: "Foundation",
      description: "ATL Construction was founded with a vision to redefine construction excellence in Toronto.",
      icon: Building
    },
    {
      year: "2015",
      title: "Growth & Recognition",
      description: "Expanded our team and earned our first industry awards for outstanding craftsmanship.",
      icon: TrendingUp
    },
    {
      year: "2020",
      title: "Innovation",
      description: "Adopted cutting-edge construction technologies while maintaining traditional values.",
      icon: Award
    },
    {
      year: "2024",
      title: "Excellence Today",
      description: "Serving over 200+ satisfied clients with 100% satisfaction rate.",
      icon: Heart
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMilestone((prev) => (prev + 1) % milestones.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building className="w-4 h-4" />
            About ATL Construction
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900">
            Building Toronto's Future Since 2008
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From humble beginnings to Toronto's premier construction company, we've transformed visions into reality
            through unwavering commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        {/* Company Story & Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in the heart of Toronto, ATL Construction began as a small team with big dreams.
              Today, we're proud to be the trusted partner for residential, commercial, and renovation projects
              across the Greater Toronto Area.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our success stems from combining time-tested craftsmanship with modern construction techniques,
              ensuring every project not only meets but exceeds expectations.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Users className="w-5 h-5 text-indigo-600" />
                <span className="font-medium">50+ Expert Team Members</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Building className="w-5 h-5 text-purple-600" />
                <span className="font-medium">$50M+ Projects Completed</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://api.a0.dev/assets/image?text=Professional construction team working on modern Toronto high-rise project with safety equipment and tools&aspect=1:1&seed=atl-team"
                alt="ATL Construction Team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-bounce">
              <div className="text-2xl font-bold text-indigo-600">200+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-indigo-600 text-white rounded-xl shadow-lg p-4 animate-pulse">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Journey</h3>
          <div className="relative">

            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 rounded-full"></div>

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full md:w-5/12 ${isEven ? 'pr-8 md:pr-12' : 'pl-8 md:pl-12'}`}>
                      <div className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${activeMilestone === index ? 'ring-2 ring-indigo-400' : ''}`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-indigo-100 rounded-lg">
                            <Icon className="w-6 h-6 text-indigo-600" />
                          </div>
                          <div>
                            <div className="font-bold text-indigo-600">{milestone.year}</div>
                            <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                          </div>
                        </div>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-indigo-500 rounded-full shadow-lg ${activeMilestone === index ? 'animate-pulse' : ''}`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose ATL?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality Craftsmanship",
                description: "Every project is built with precision and attention to detail using premium materials.",
                color: "text-indigo-600",
                bgColor: "bg-indigo-100"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Skilled professionals with years of industry experience and ongoing training.",
                color: "text-purple-600",
                bgColor: "bg-purple-100"
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description: "We respect your time and deliver projects on schedule without compromising quality.",
                color: "text-green-600",
                bgColor: "bg-green-100"
              },
              {
                icon: Shield,
                title: "Licensed & Insured",
                description: "Fully licensed and insured for your complete peace of mind and protection.",
                color: "text-blue-600",
                bgColor: "bg-blue-100"
              }
            ].map((value, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 transform hover:-translate-y-2">
                <div className={`inline-flex p-3 rounded-lg ${value.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-indigo-600 group-hover:translate-x-2 transition-transform duration-300">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;