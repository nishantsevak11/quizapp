
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <Link 
      to={"#"}
      className={cn(
        "block relative overflow-hidden rounded-xl p-6 hover-lift glass-card group",
        className
      )}
    >
      {/* Icon */}
      <div className="text-4xl mb-4 text-teal transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-montserrat font-bold text-charcoal mb-2">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 font-lora">
        {description}
      </p>
      
      {/* Ripple effect element */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500"></div>
      
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none"></div>
    </Link>
  );
};

export default CategoryCard;
