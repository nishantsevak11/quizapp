
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeaturedQuizCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questions: number;
  className?: string;
}

const FeaturedQuizCard: React.FC<FeaturedQuizCardProps> = ({
  id,
  title,
  description,
  image,
  difficulty,
  questions,
  className,
}) => {
  // Color based on difficulty
  const difficultyColor = {
    Easy: 'bg-emerald text-white',
    Medium: 'bg-amber text-charcoal',
    Hard: 'bg-red-500 text-white',
  }[difficulty];

  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden hover-lift glass-card flex flex-col h-full",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-montserrat px-3 py-1 rounded-full ${difficultyColor}`}>
            {difficulty}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-cormorant font-bold text-charcoal mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 font-lora flex-grow">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {questions} Questions
          </span>
          
          <Link 
            to={``} 
            className="flex items-center text-teal font-montserrat font-medium text-sm group"
          >
            Play Now
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedQuizCard;
