import { MapPin, Mail, Phone, Send, MessageSquare, Sparkles } from 'lucide-react';

const ContactPage = () => {
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
            <MessageSquare size={16} />
            <span className="text-sm font-semibold">Get in Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="glass rounded-3xl shadow-2xl p-8 md:p-10 border border-white/10 animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-medium">
                <Send className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold dark:text-white">Send us a Message</h2>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">
                  Your Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all" 
                  placeholder="John Doe" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                  <input 
                    type="email" 
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">
                  Message
                </label>
                <textarea 
                  rows="5" 
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none" 
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass rounded-3xl shadow-2xl p-8 md:p-10 border border-white/10 animate-fade-in">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-medium">
                  <Sparkles className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold dark:text-white">Get in Touch</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                    <MapPin className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-lg dark:text-white">Address</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      16.B ElMariotia, Faisal<br />Giza, Egypt
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                    <Mail className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-lg dark:text-white">Email</h3>
                    <a 
                      href="mailto:info@elysiumfashion.com"
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      info@elysiumfashion.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                    <Phone className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-lg dark:text-white">Phone</h3>
                    <a 
                      href="tel:+201119554463"
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      +20-11-195-544-63
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative rounded-3xl h-64 overflow-hidden shadow-2xl group">
              <img 
                src="/images/social-media.jpg" 
                alt="Location" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-20"></div>
                  <MapPin size={60} className="text-white relative z-10 drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
