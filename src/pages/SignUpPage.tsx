
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <div className="glass-card rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-cormorant font-bold text-charcoal mb-2">
                Begin Your Journey
              </h1>
              <p className="text-gray-600 font-lora">
                Create an account to unlock the full QuizFlow experience
              </p>
            </div>
            
            <form>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full py-3 pl-10 pr-4 rounded-lg border border-gray-200 focus:border-teal focus:ring focus:ring-teal/20 focus:outline-none transition-all"
                      placeholder="Your name"
                      required
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <User size={18} />
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full py-3 pl-10 pr-4 rounded-lg border border-gray-200 focus:border-teal focus:ring focus:ring-teal/20 focus:outline-none transition-all"
                      placeholder="your@email.com"
                      required
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Mail size={18} />
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full py-3 pl-10 pr-10 rounded-lg border border-gray-200 focus:border-teal focus:ring focus:ring-teal/20 focus:outline-none transition-all"
                      placeholder="Create a password"
                      required
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Lock size={18} />
                    </span>
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Password must be at least 8 characters long
                  </p>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 mt-1 text-teal border-gray-300 rounded focus:ring-teal/50"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <Link to="/terms" className="text-teal hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-teal hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-teal text-white rounded-lg font-montserrat font-medium hover:bg-opacity-90 transition-colors"
                >
                  Create Account
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account? {' '}
                <Link to="/signin" className="text-teal hover:underline font-medium">
                  Sign In
                </Link>
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="text-center mb-4 text-sm text-gray-500">
                Or sign up with
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="py-2 px-4 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <img src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
                  Google
                </button>
                <button className="py-2 px-4 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <img src="https://cdn.cdnlogo.com/logos/f/83/facebook.svg" alt="Facebook" className="w-5 h-5 mr-2" />
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignUpPage;
