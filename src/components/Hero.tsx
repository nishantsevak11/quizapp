import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const navigate = useNavigate();
  
  // Carousel data
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cXVpenxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Cosmic Wonders',
      description: 'Test your knowledge of space and celestial phenomena',
      link: '/quiz/1'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1678216286021-e81f66761751?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHF1aXp8ZW58MHx8MHx8fDA%3D',
      title: 'World History',
      description: 'Explore key events that shaped our world',
      link: '/quiz/2'
    },
    {
      image: 'https://images.unsplash.com/photo-1540835296355-c04f7a063cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHF1aXp8ZW58MHx8MHx8fDA%3D',
      title: 'Science Basics',
      description: 'Challenge yourself with fundamental science concepts',
      link: '/quiz/3'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="min-h-[85vh] flex items-center bg-[#D8EAEF]">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Master Your Knowledge with <span className="text-blue-400">Interactive Quizzes</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Explore a wide range of expertly crafted quizzes designed to educate and engage across multiple subjects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => navigate('/quizzes')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Explore Quizzes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => navigate('/signup')}
                variant="outline"
                className="border-slate-600 hover:bg-slate-200 px-6 py-2 rounded-md font-medium"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Right Content - Carousel */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-[400px] relative"> {/* Fixed height */}
              {/* Slide Content */}
              <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-48 object-cover transition-opacity duration-500 flex-shrink-0" // Fixed image height
                />
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-slate-300 mb-4 line-clamp-2">
                      {slides[currentSlide].description}
                    </p>
                  </div>
                  <Button
                    onClick={() => navigate(slides[currentSlide].link)}
                    variant="outline"
                    className="w-full border-blue-500 text-blue-600 hover:bg-blue-100 mt-auto"
                  >
                    Start Quiz
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentSlide === index ? 'bg-blue-400' : 'bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;