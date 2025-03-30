import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedQuizCard from '@/components/FeaturedQuizCard';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample quiz data
const allQuizzes = [
  {
    id: '1',
    title: 'Cosmic Wonders',
    description: 'Explore the mysteries of our universe through this captivating journey across galaxies and celestial phenomena.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
    difficulty: 'Medium' as const,
    questions: 10,
    category: 'Science'
  },
  {
    id: '2',
    title: 'Literary Legends',
    description: 'Test your knowledge of classic literature and the brilliant minds who shaped our cultural landscape.',
    image: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18',
    difficulty: 'Hard' as const,
    questions: 15,
    category: 'Literature'
  },
  {
    id: '3',
    title: 'Ancient Civilizations',
    description: 'Journey through time to discover the secrets and achievements of history\'s most influential societies.',
    image: 'https://images.unsplash.com/photo-1568742222954-908d3d596aef',
    difficulty: 'Medium' as const,
    questions: 12,
    category: 'History'
  },
  {
    id: '4',
    title: 'Mind & Meditation',
    description: 'Discover the connections between mindfulness, cognition, and wellbeing in this reflective quiz.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
    difficulty: 'Easy' as const,
    questions: 8,
    category: 'Mindfulness'
  },
  {
    id: '5',
    title: 'Art Through Ages',
    description: 'Explore masterpieces and movements that defined art history from renaissance to modern times.',
    image: 'https://images.unsplash.com/photo-1577083552361-4a01fb0730fb',
    difficulty: 'Hard' as const,
    questions: 15,
    category: 'Arts'
  },
  {
    id: '6',
    title: 'Global Gastronomy',
    description: 'Tantalize your taste buds with this culinary journey across continents and cuisines.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    difficulty: 'Easy' as const,
    questions: 10,
    category: 'Food'
  },
  {
    id: '7',
    title: 'Musical Masterpieces',
    description: 'From classical compositions to modern melodies, test your knowledge of musical brilliance.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    difficulty: 'Medium' as const,
    questions: 12,
    category: 'Music'
  },
  {
    id: '8',
    title: 'World Geography',
    description: 'Navigate through continents, countries, and natural wonders in this global exploration.',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce',
    difficulty: 'Hard' as const,
    questions: 15,
    category: 'Geography'
  },
  {
    id: '9',
    title: 'Cinema Classics',
    description: 'Lights, camera, action! Test your knowledge of iconic films, directors, and cinematic moments.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba',
    difficulty: 'Medium' as const,
    questions: 10,
    category: 'Entertainment'
  }
];

const categories = [
  'All Categories',
  'Science',
  'Literature',
  'History',
  'Mindfulness',
  'Arts',
  'Food',
  'Music',
  'Geography',
  'Entertainment',
];

const difficulties = ['All Difficulties', 'Easy', 'Medium', 'Hard'];

const QuizzesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Difficulties');
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredQuizzes = allQuizzes.filter((quiz) => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         quiz.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || quiz.category === selectedCategory;
    
    const matchesDifficulty = selectedDifficulty === 'All Difficulties' || quiz.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-charcoal mb-4">
              Explore Our Quizzes
            </h1>
            <p className="text-gray-600 font-lora max-w-2xl mx-auto">
              Discover a world of knowledge through our carefully crafted quizzes spanning diverse topics and difficulty levels.
            </p>
          </div>
          
          {/* Search and filters */}
          <div className="mb-10">
            <div className="relative mb-4">
              <input 
                type="text" 
                placeholder="Search for quizzes..." 
                className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-200 focus:border-teal focus:ring focus:ring-teal/20 focus:outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center text-charcoal font-montserrat hover:text-teal transition-colors"
              >
                <Filter size={18} className="mr-2" />
                Filters
              </button>
              
              <div className="text-sm text-gray-600">
                Showing {filteredQuizzes.length} {filteredQuizzes.length === 1 ? 'quiz' : 'quizzes'}
              </div>
            </div>
            
            {/* Filter options */}
            {showFilters && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={cn(
                            "px-3 py-1 text-sm rounded-full",
                            selectedCategory === category
                              ? "bg-teal text-white"
                              : "bg-white border border-gray-200 text-gray-600 hover:border-teal hover:text-teal"
                          )}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Difficulty
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {difficulties.map((difficulty) => (
                        <button
                          key={difficulty}
                          onClick={() => setSelectedDifficulty(difficulty)}
                          className={cn(
                            "px-3 py-1 text-sm rounded-full",
                            selectedDifficulty === difficulty
                              ? "bg-teal text-white"
                              : "bg-white border border-gray-200 text-gray-600 hover:border-teal hover:text-teal"
                          )}
                        >
                          {difficulty}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Quizzes grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredQuizzes.map((quiz) => (
              <FeaturedQuizCard key={quiz.id} {...quiz} />
            ))}
          </div>
          
          {/* Empty state */}
          {filteredQuizzes.length === 0 && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-cormorant font-bold text-charcoal mb-2">
                No quizzes found
              </h2>
              <p className="text-gray-600 font-lora mb-6">
                Try adjusting your search terms or filters to find quizzes.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All Categories');
                  setSelectedDifficulty('All Difficulties');
                }}
                className="px-6 py-3 bg-teal text-white rounded-full font-montserrat hover:bg-opacity-90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
          
          {/* Pagination - simplified version */}
          <div className="mt-12 flex justify-center">
            <button className="px-4 py-2 border border-gray-200 rounded-l-lg bg-white text-gray-600 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-4 py-2 bg-teal text-white border border-teal">1</button>
            <button className="px-4 py-2 border-t border-b border-gray-200 bg-white text-gray-600 hover:bg-gray-50">2</button>
            <button className="px-4 py-2 border-t border-b border-gray-200 bg-white text-gray-600 hover:bg-gray-50">3</button>
            <button className="px-4 py-2 border border-gray-200 rounded-r-lg bg-white text-gray-600 hover:bg-gray-50 flex items-center">
              Next
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuizzesPage;
