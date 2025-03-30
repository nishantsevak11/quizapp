
import React from 'react';
import CategoryCard from './CategoryCard';
import { BookOpen, Brain, Globe, Lightbulb, Music, Atom, Award, Film } from 'lucide-react';

const Categories = () => {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-center mb-4 text-charcoal">
          Explore Knowledge Realms
        </h2>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 font-lora">
          Discover captivating quizzes across a spectrum of subjects, each crafted to ignite curiosity and expand your horizons.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <CategoryCard
            title="General Knowledge"
            description="Embark on a journey of wit and whimsy."
            icon={<Globe className="stroke-teal" />}
          />
          
          <CategoryCard
            title="Literature"
            description="Dive into the world of words and wonder."
            icon={<BookOpen className="stroke-teal" />}
          />
          
          <CategoryCard
            title="Science"
            description="Unravel the mysteries of our universe."
            icon={<Atom className="stroke-teal" />}
          />
          
          <CategoryCard
            title="History"
            description="Travel through time's greatest moments."
            icon={<Award className="stroke-teal" />}
          />
          
          <CategoryCard
            title="Arts"
            description="Explore the canvas of human creativity."
            icon={<Music className="stroke-teal" />}
          />
          
          <CategoryCard
            title="Entertainment"
            description="Test your knowledge of culture and media."
            icon={<Film className="stroke-teal" />}
          />
          
          <CategoryCard
            title="Mindfulness"
            description="Nurture your inner wisdom and awareness."
            icon={<Brain className="stroke-teal" />}
          />
          
          <CategoryCard
            title="Trivia"
            description="Challenge yourself with fascinating facts."
            icon={<Lightbulb className="stroke-teal" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Categories;
