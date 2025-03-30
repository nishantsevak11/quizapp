import React, { useState, useRef, useEffect } from 'react';
import FeaturedQuizCard from './FeaturedQuizCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Sample quiz data (unchanged)
const featuredQuizzes = [
  {
    id: '1',
    title: 'Cosmic Wonders',
    description: 'Explore the mysteries of our universe through this captivating journey across galaxies and celestial phenomena.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
    difficulty: 'Medium' as const,
    questions: 10
  },
  {
    id: '2',
    title: 'Literary Legends',
    description: 'Test your knowledge of classic literature and the brilliant minds who shaped our cultural landscape.',
    image: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18',
    difficulty: 'Hard' as const,
    questions: 15
  },
  {
    id: '3',
    title: 'Ancient Civilizations',
    description: 'Journey through time to discover the secrets and achievements of history\'s most influential societies.',
    image: 'https://images.unsplash.com/photo-1568742222954-908d3d596aef',
    difficulty: 'Medium' as const,
    questions: 12
  },
  {
    id: '4',
    title: 'Mind & Meditation',
    description: 'Discover the connections between mindfulness, cognition, and wellbeing in this reflective quiz.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
    difficulty: 'Easy' as const,
    questions: 8
  },
  {
    id: '5',
    title: 'Art Through Ages',
    description: 'Explore masterpieces and movements that defined art history from renaissance to modern times.',
    image: 'https://images.unsplash.com/photo-1577083552361-4a01fb0730fb',
    difficulty: 'Hard' as const,
    questions: 15
  },
  {
    id: '6',
    title: 'Global Gastronomy',
    description: 'Tantalize your taste buds with this culinary journey across continents and cuisines.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    difficulty: 'Easy' as const,
    questions: 10
  }
];

const FeaturedQuizzes = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  
  useEffect(() => {
    const updateScrollValues = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        setScrollPosition(container.scrollLeft);
        setMaxScroll(container.scrollWidth - container.clientWidth);
      }
    };

   
    updateScrollValues();

    window.addEventListener('resize', updateScrollValues);
    return () => window.removeEventListener('resize', updateScrollValues);
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setScrollPosition(container.scrollLeft);
      setMaxScroll(container.scrollWidth - container.clientWidth);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50/50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-charcoal">
            Today's Top Quizzes
          </h2>
          
          <div className="hidden md:flex space-x-2">
            <button 
              onClick={() => scroll('left')}
              className={`p-2 rounded-full ${scrollPosition <= 10 ? 'text-gray-300' : 'text-charcoal hover:bg-gray-100'} transition-colors`}
              disabled={scrollPosition <= 10}
            >
              <ArrowLeft size={24} />
            </button>
            
            <button 
              onClick={() => scroll('right')}
              className={`p-2 rounded-full ${scrollPosition >= maxScroll - 10 ? 'text-gray-300' : 'text-charcoal hover:bg-gray-100'} transition-colors`}
              disabled={scrollPosition >= maxScroll - 10}
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-none pb-4"
          onScroll={handleScroll}
        >
          {featuredQuizzes.map((quiz) => (
            <FeaturedQuizCard
              key={quiz.id}
              {...quiz}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px]"
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-8 md:hidden">
          <button 
            onClick={() => scroll('left')}
            className={`p-2 mx-1 rounded-full ${scrollPosition <= 10 ? 'text-gray-300' : 'text-charcoal bg-gray-100'}`}
            disabled={scrollPosition <= 10}
          >
            <ArrowLeft size={20} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className={`p-2 mx-1 rounded-full ${scrollPosition >= maxScroll - 10 ? 'text-gray-300' : 'text-charcoal bg-gray-100'}`}
            disabled={scrollPosition >= maxScroll - 10}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedQuizzes;