import { Package, TrendingUp, Users, Facebook, Twitter, Instagram, Youtube, Sparkles, Award, Zap } from 'lucide-react';

const AboutPage = () => {
  const services = [
    { 
      icon: Package, 
      title: "Quality Products", 
      desc: "We offer only the finest quality items carefully selected for you",
      gradientClass: "bg-gradient-to-br from-blue-500 to-blue-600",
      iconBgClass: "bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30",
      iconColorClass: "text-blue-600 dark:text-blue-400"
    },
    { 
      icon: TrendingUp, 
      title: "Latest Trends", 
      desc: "Stay ahead with our constantly updated fashion collections",
      gradientClass: "bg-gradient-to-br from-primary-500 to-primary-600",
      iconBgClass: "bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30",
      iconColorClass: "text-primary-600 dark:text-primary-400"
    },
    { 
      icon: Users, 
      title: "Customer Support", 
      desc: "Dedicated after-sales service to ensure your satisfaction",
      gradientClass: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      iconBgClass: "bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30",
      iconColorClass: "text-emerald-600 dark:text-emerald-400"
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 transition-colors duration-300 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-pink rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-semibold">About Our Company</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Fashion is the Armor
            <span className="block text-4xl md:text-5xl lg:text-6xl text-primary-200 mt-2">
              to Survive Reality
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Your premier destination for fashion and style
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-pink rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative rounded-3xl h-96 overflow-hidden shadow-2xl">
              <img 
                src="/images/about-left-image.jpg" 
                alt="About Us" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
              <Award className="text-primary-600 dark:text-primary-400" size={18} />
              <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">Our Story</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
              Welcome to
              <span className="block text-gradient">Elysium</span>
            </h2>
            
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Welcome to Elysium, your premier destination for fashion and style. We're dedicated to bringing you the latest trends in men's, women's, and children's fashion, along with a curated selection of accessories.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Founded with a passion for quality and affordability, we believe everyone deserves to look and feel their best. Our team carefully selects each item to ensure you receive only the finest products.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4">
              <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Follow us:</span>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, color: 'hover:bg-blue-600', href: '#' },
                  { icon: Twitter, color: 'hover:bg-blue-400', href: '#' },
                  { icon: Instagram, color: 'hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500', href: '#' },
                  { icon: Youtube, color: 'hover:bg-red-600', href: '#' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className={`w-11 h-11 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center ${social.color} text-neutral-600 dark:text-neutral-400 hover:text-white transform hover:scale-110 hover:shadow-lg transition-all duration-300`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
              <Zap className="text-primary-600 dark:text-primary-400" size={18} />
              <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">What Makes Us Different</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
              Our Services
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              We're committed to providing you with an exceptional shopping experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative card-hover p-8 text-center animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 ${service.gradientClass} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className={`w-20 h-20 ${service.iconBgClass} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={service.iconColorClass} size={36} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
