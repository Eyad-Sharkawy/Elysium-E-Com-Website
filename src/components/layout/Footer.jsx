import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-neutral-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <img src="/images/white-logo.png" alt="Elysium Fashion" className="w-12 h-12 object-contain" />
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-lg"></div>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">Elysium</span>
            </div>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Your one-stop shop for fashion and style. Quality products at affordable prices with exceptional service.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, color: 'hover:bg-blue-600', href: '#' },
                { icon: Twitter, color: 'hover:bg-blue-400', href: '#' },
                { icon: Instagram, color: 'hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500', href: '#' },
                { icon: Youtube, color: 'hover:bg-red-600', href: '#' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50 ${social.color} text-neutral-400 hover:text-white transform hover:scale-110 hover:shadow-lg transition-all duration-300`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-pink rounded-full"></span>
              Shop
            </h3>
            <ul className="space-y-3">
              {["Men's Fashion", "Women's Fashion", "Kids's Fashion", "Accessories"].map((item, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => onNavigate('products')} 
                    className="group flex items-center gap-2 text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-pink rounded-full"></span>
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="group flex items-center gap-2 text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="group flex items-center gap-2 text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Contact</span>
                </button>
              </li>
              {["Careers", "Blog"].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="group flex items-center gap-2 text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-pink rounded-full"></span>
              Support
            </h3>
            <ul className="space-y-3">
              {["Help Center", "FAQ's", "Track Order", "Shipping"].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="group flex items-center gap-2 text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-neutral-800 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-neutral-400 mb-6">Get the latest fashion trends and exclusive offers delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-neutral-800/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-semibold shadow-medium hover:shadow-large transform hover:-translate-y-0.5 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {currentYear} Elysium Fashion Co., Ltd. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
