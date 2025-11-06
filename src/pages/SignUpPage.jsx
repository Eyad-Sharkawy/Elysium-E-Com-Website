import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cities } from '../constants/products';
import { validateEmail, validatePassword, validatePhone, validateRequired } from '../utils';

const SignUpPage = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    city: ''
  });

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

    if (!validateRequired(formData.firstName)) {
      newErrors.firstName = 'First name is required';
    }

    if (!validateRequired(formData.lastName)) {
      newErrors.lastName = 'Last name is required';
    }

    if (!validateRequired(formData.email)) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validateRequired(formData.mobile)) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!validatePhone(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid mobile number';
    }

    if (!validateRequired(formData.password)) {
      newErrors.password = 'Password is required';
    } else {
      const passwordValidation = validatePassword(formData.password);
      if (!passwordValidation.isValid) {
        newErrors.password = passwordValidation.errors[0];
      }
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.city) {
      newErrors.city = 'Please select a city';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select your gender';
    }

    setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        // In production, this would send data to your backend API
        // Example: await authService.signUp(formData);
        alert('Account created successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        birthDate: '',
        gender: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        city: ''
      });
      setErrors({});
      onNavigate('signin');
    }
  };
  
  return (
    <div className="pt-24 pb-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 dark:text-white">Create Account</h1>
            <p className="text-gray-600 dark:text-gray-400">Join Elysium today</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">First Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} dark:bg-gray-700 dark:text-white focus:outline-none focus:border-purple-600`} 
                  placeholder="John" 
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Last Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} dark:bg-gray-700 dark:text-white focus:outline-none focus:border-purple-600`} 
                  placeholder="Doe" 
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Birth Date</label>
                <input 
                  type="date" 
                  name="birthDate" 
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-purple-600" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Gender <span className="text-red-500">*</span></label>
                <div className="flex space-x-6 pt-3">
                  <label className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      name="gender" 
                      value="male" 
                      checked={formData.gender === 'male'}
                      onChange={handleChange}
                      className="w-4 h-4 text-purple-600" 
                    />
                    <span className="dark:text-gray-300">Male</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      name="gender" 
                      value="female" 
                      checked={formData.gender === 'female'}
                      onChange={handleChange}
                      className="w-4 h-4 text-purple-600" 
                    />
                    <span className="dark:text-gray-300">Female</span>
                  </label>
                </div>
                {errors.gender && <p className="mt-1 text-sm text-red-500">{errors.gender}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Email <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} dark:bg-gray-700 dark:text-white focus:outline-none focus:border-purple-600`} 
                  placeholder="john@example.com" 
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Mobile Number <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  name="mobile" 
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.mobile ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} dark:bg-gray-700 dark:text-white focus:outline-none focus:border-purple-600`} 
                  placeholder="+20 11 123 4567" 
                />
                {errors.mobile && <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Password <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name="password" 
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 pr-12 rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} dark:bg-gray-700 dark:text-white focus:outline-none focus:border-purple-600`} 
                    placeholder="Enter your password" 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                {!errors.password && formData.password && (
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Must be 8+ characters with uppercase, lowercase, and number
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Confirm Password <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    name="confirmPassword" 
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 pr-12 rounded-lg border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} dark:bg-gray-700 dark:text-white focus:outline-none focus:border-purple-600`} 
                    placeholder="Confirm your password" 
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Select Your City <span className="text-red-500">*</span></label>
              <select 
                name="city" 
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.city ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} dark:bg-gray-700 dark:text-white focus:outline-none focus:border-purple-600`}
              >
                <option value="">Select a city</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="w-5 h-5 text-purple-600 mt-1" required />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                By signing up, you agree to the <a href="#" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">Terms of Service</a> and <a href="#" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">Privacy Policy</a>, including Cookie Use.
              </p>
            </div>

            <div className="flex space-x-4">
              <button type="reset" className="flex-1 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                Reset
              </button>
              <button type="submit" className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-500 transition">
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Already have an account? 
              <button onClick={() => onNavigate('signin')} className="text-purple-600 dark:text-purple-400 font-semibold ml-2 hover:text-purple-700 dark:hover:text-purple-300">
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

