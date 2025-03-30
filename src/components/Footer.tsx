
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-cormorant font-bold">
                <span className="text-teal">Quiz</span>
                <span className="text-sapphire">Flow</span>
              </h2>
            </Link>
            <p className="text-gray-600 font-lora">
              Discover your brilliance through our enchanting quizzes designed to inspire and challenge.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4 text-charcoal">Explore</h3>
            <ul className="space-y-2">
              <FooterLink to="/quizzes">All Quizzes</FooterLink>
              <FooterLink to="/quizzes/popular">Popular</FooterLink>
              <FooterLink to="/quizzes/new">New Releases</FooterLink>
              <FooterLink to="/categories">Categories</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4 text-charcoal">Account</h3>
            <ul className="space-y-2">
              <FooterLink to="/profile">My Profile</FooterLink>
              <FooterLink to="/history">Quiz History</FooterLink>
              <FooterLink to="/favorites">Favorites</FooterLink>
              <FooterLink to="/settings">Settings</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4 text-charcoal">Company</h3>
            <ul className="space-y-2">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} QuizApp. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <SocialLink href="#">Facebook</SocialLink>
            <SocialLink href="#">Twitter</SocialLink>
            <SocialLink href="#">Instagram</SocialLink>
            <SocialLink href="#">LinkedIn</SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link to={to} className="text-gray-600 hover:text-teal transition-colors">
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-600 hover:text-teal transition-colors"
  >
    {children}
  </a>
);

export default Footer;
