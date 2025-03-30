
import React from 'react';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedQuizzes from '@/components/FeaturedQuizzes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedQuizzes />
      <Footer />
    </main>
  );
};

export default Index;
