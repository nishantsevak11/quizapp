
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-cormorant font-bold text-teal">
            <span className="text-shadow-glow">Quiz</span>
            <span className="text-sapphire">App</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/quizzes">Quizzes</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <Link 
            to="/signin" 
            className="px-6 py-2 rounded-full bg-teal text-white font-montserrat font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
          >
            Sign In
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/quizzes" onClick={() => setMobileMenuOpen(false)}>Quizzes</MobileNavLink>
            <MobileNavLink to="/profile" onClick={() => setMobileMenuOpen(false)}>Profile</MobileNavLink>
            <Link 
              to="/signin" 
              className="px-6 py-3 rounded-full bg-teal text-white font-montserrat font-medium hover:bg-opacity-90 transition-all text-center shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ children, to }: { children: React.ReactNode; to: string }) => (
  <Link 
    to={to} 
    className="text-charcoal font-montserrat font-medium hover:text-teal transition-colors wave-underline"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ children, to, onClick }: { children: React.ReactNode; to: string; onClick: () => void }) => (
  <Link 
    to={to} 
    className="text-charcoal font-montserrat font-medium hover:text-teal transition-colors py-2 text-lg border-b border-gray-100"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
