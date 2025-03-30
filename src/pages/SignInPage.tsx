
import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SignInPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <div className="glass-card rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-cormorant font-bold text-charcoal mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-600 font-lora">
                Sign in to continue your journey of discovery
              </p>
            </div>
            
            <form>
              <div className="space-y-4">
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
                  <div className="flex justify-between mb-1">
                    <label className="block text-sm font-medium text-charcoal">
                      Password
                    </label>
                    <Link to="/forgot-password" className="text-sm text-teal hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full py-3 pl-10 pr-10 rounded-lg border border-gray-200 focus:border-teal focus:ring focus:ring-teal/20 focus:outline-none transition-all"
                      placeholder="Enter your password"
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
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="w-4 h-4 text-teal border-gray-300 rounded focus:ring-teal/50"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-teal text-white rounded-lg font-montserrat font-medium hover:bg-opacity-90 transition-colors"
                >
                  Sign In
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account? {' '}
                <Link to="/signup" className="text-teal hover:underline font-medium">
                  Sign Up
                </Link>
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="text-center mb-4 text-sm text-gray-500">
                Or continue with
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

export default SignInPage;
