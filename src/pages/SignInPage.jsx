import { useState } from 'react';
import { Facebook, Mail, Eye, EyeOff, Sparkles, Lock, ArrowRight } from 'lucide-react';
import { validateEmail } from '../utils';

const SignInPage = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // In production, this would send data to your backend API
      // Example: await authService.signIn(formData);
      alert('Sign in successful!');
      setFormData({ email: '', password: '' });
      // Redirect to home page after successful login
      // onNavigate('home');
    }
  };
  
  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 dark:from-neutral-900 dark:via-neutral-900 dark:to-primary-900/10 min-h-screen flex items-center transition-colors duration-300">
      <div className="max-w-md mx-auto px-4 w-full">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent-pink/20 dark:bg-accent-pink/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative glass rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20 animate-slide-up">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-4 shadow-large">
              <Lock className="text-white" size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 dark:text-white">
              Welcome Back
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              Sign in to continue to Elysium
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full btn-secondary flex items-center justify-center space-x-3 group">
              <Facebook className="text-blue-600" size={20} />
              <span>Continue with Facebook</span>
            </button>
            <button className="w-full btn-secondary flex items-center justify-center space-x-3 group">
              <Mail className="text-red-600" size={20} />
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-neutral-200 dark:border-neutral-700"></div>
            <span className="px-4 text-neutral-500 dark:text-neutral-400 text-sm font-semibold">or</span>
            <div className="flex-1 border-t border-neutral-200 dark:border-neutral-700"></div>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-neutral-200 dark:border-neutral-700 focus:border-primary-500 focus:ring-primary-500/20'
                  } bg-white dark:bg-neutral-800 dark:text-white focus:outline-none focus:ring-2 transition-all`} 
                  placeholder="your@email.com" 
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <span>•</span>
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-12 py-3.5 rounded-xl border-2 ${
                    errors.password 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-neutral-200 dark:border-neutral-700 focus:border-primary-500 focus:ring-primary-500/20'
                  } bg-white dark:bg-neutral-800 dark:text-white focus:outline-none focus:ring-2 transition-all`} 
                  placeholder="Enter your password" 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <span>•</span>
                  <span>{errors.password}</span>
                </p>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  name="remember" 
                  className="w-4 h-4 text-primary-600 rounded border-neutral-300 focus:ring-primary-500 focus:ring-2" 
                />
                <span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                  Remember me
                </span>
              </label>
              <a 
                href="#" 
                className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors"
              >
                Forgot Password?
              </a>
            </div>
            
            <button 
              type="submit" 
              className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
            >
              Sign In
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              Don't have an account?{' '}
              <button 
                onClick={() => onNavigate('signup')} 
                className="text-primary-600 dark:text-primary-400 font-bold hover:text-primary-700 dark:hover:text-primary-300 transition-colors inline-flex items-center gap-1 group"
              >
                Sign Up
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
