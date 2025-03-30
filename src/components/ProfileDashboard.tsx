
import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Clock, Heart, User, Edit, BookOpen, BarChart3, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data for the profile
const recentQuizzes = [
  { id: '1', title: 'Cosmic Wonders', score: 80, totalQuestions: 10, date: '2023-09-15', category: 'Science' },
  { id: '2', title: 'Literary Legends', score: 90, totalQuestions: 15, date: '2023-09-10', category: 'Literature' },
  { id: '3', title: 'Ancient Civilizations', score: 75, totalQuestions: 12, date: '2023-09-05', category: 'History' },
];

const favoriteQuizzes = [
  { id: '4', title: 'Mind & Meditation', description: 'Discover the connections between mindfulness and wellbeing', category: 'Mindfulness' },
  { id: '5', title: 'Art Through Ages', description: 'Explore masterpieces and movements that defined art history', category: 'Arts' },
];

const badges = [
  { id: '1', name: 'Quiz Legend', description: 'Complete 10 quizzes', icon: <Award className="text-amber" size={24} /> },
  { id: '2', name: 'Knowledge Seeker', description: 'Try quizzes from 5 different categories', icon: <BookOpen className="text-teal" size={24} /> },
  { id: '3', name: 'Perfect Score', description: 'Score 100% on any quiz', icon: <Award className="text-sapphire" size={24} /> },
];

const ProfileDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-teal/20 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center">
              <User size={64} className="text-gray-400" />
            </div>
            <button className="absolute bottom-0 right-0 bg-teal text-white p-2 rounded-full hover:bg-opacity-90 transition-all">
              <Edit size={16} />
            </button>
          </div>
          
          {/* User Info */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-cormorant font-bold text-charcoal mb-2">
              Jane Brilliant
            </h1>
            <p className="text-gray-600 mb-4 font-lora">
              Quiz enthusiast and knowledge seeker
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-montserrat text-charcoal">
                <span className="font-bold text-teal">24</span> Quizzes Completed
              </div>
              <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-montserrat text-charcoal">
                <span className="font-bold text-teal">8</span> Categories Explored
              </div>
              <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-montserrat text-charcoal">
                <span className="font-bold text-teal">5</span> Perfect Scores
              </div>
            </div>
          </div>
          
          {/* Settings Button (mobile: below user info, desktop: top right) */}
          <div className="md:ml-auto md:mt-0 mt-4">
            <Link 
              to="/settings" 
              className="px-4 py-2 border border-gray-200 rounded-full flex items-center font-montserrat text-gray-600 hover:border-teal hover:text-teal transition-all"
            >
              <Settings size={16} className="mr-2" />
              Settings
            </Link>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="recent" className="w-full">
        <TabsList className="w-full flex mb-8 overflow-x-auto space-x-2 bg-transparent">
          <TabsTrigger 
            value="recent" 
            className="px-4 py-2 data-[state=active]:bg-teal data-[state=active]:text-white rounded-full font-montserrat text-sm flex items-center"
          >
            <Clock size={16} className="mr-2" />
            Recent Quizzes
          </TabsTrigger>
          <TabsTrigger 
            value="favorites" 
            className="px-4 py-2 data-[state=active]:bg-teal data-[state=active]:text-white rounded-full font-montserrat text-sm flex items-center"
          >
            <Heart size={16} className="mr-2" />
            Favorites
          </TabsTrigger>
          <TabsTrigger 
            value="badges" 
            className="px-4 py-2 data-[state=active]:bg-teal data-[state=active]:text-white rounded-full font-montserrat text-sm flex items-center"
          >
            <Award size={16} className="mr-2" />
            Badges
          </TabsTrigger>
          <TabsTrigger 
            value="stats" 
            className="px-4 py-2 data-[state=active]:bg-teal data-[state=active]:text-white rounded-full font-montserrat text-sm flex items-center"
          >
            <BarChart3 size={16} className="mr-2" />
            Statistics
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="recent" className="focus-visible:outline-none">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
              <div  className="glass-card rounded-xl p-6 hover-lift">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-cormorant font-bold text-charcoal">
                      Cosmic Culture
                    </h3>
                    <p className="text-sm text-gray-500 font-lora">
                      Science • {new Date().toLocaleDateString()}
                    </p>
                  </div>
                  
                  <div className="bg-teal/10 text-teal p-2 rounded-full font-montserrat font-bold">
                    {Math.round((12 / 15) * 100)}%
                  </div>
                </div>
                
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                  <div 
                    className="h-full bg-teal transition-all"
                    style={{ width: `${(12/ 15) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {12}/{15} Correct
                  </span>
                  
                  <Link 
                    to={''} 
                    className="text-sm text-teal font-montserrat font-medium hover:underline"
                  >
                    Retake Quiz
                  </Link>
                </div>
              </div>

              
              <div  className="glass-card rounded-xl p-6 hover-lift">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-cormorant font-bold text-charcoal">
                      Cosmic Culture
                    </h3>
                    <p className="text-sm text-gray-500 font-lora">
                      Science • {new Date().toLocaleDateString()}
                    </p>
                  </div>
                  
                  <div className="bg-teal/10 text-teal p-2 rounded-full font-montserrat font-bold">
                    {Math.round((12 / 15) * 100)}%
                  </div>
                </div>
                
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                  <div 
                    className="h-full bg-teal transition-all"
                    style={{ width: `${(12/ 15) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {12}/{15} Correct
                  </span>
                  
                  <Link 
                    to={''} 
                    className="text-sm text-teal font-montserrat font-medium hover:underline"
                  >
                    Retake Quiz
                  </Link>
                </div>
              </div>
             
          </div>
          
          <div className="mt-6 text-center">
            <button 
              
              className="text-teal font-montserrat font-medium hover:underline"
            >
              View All Quiz History
            </button>
          </div>
        </TabsContent>
        
        <TabsContent value="favorites" className="focus-visible:outline-none">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
              <div  className="glass-card rounded-xl p-6 hover-lift">
                <div className="mb-4">
                  <h3 className="text-xl font-cormorant font-bold text-charcoal mb-2">
                    Mind & Meditation
                  </h3>
                  <p className="text-sm text-gray-600 font-lora mb-1">
                  Discover the connections between mindfulness and wellbeing
                  </p>
                  <p className="text-xs text-gray-500">
                  Mindfulness
                  </p>
                </div>
                
                <div className="flex justify-between items-center">
                  <button className="text-sm text-red-500 hover:text-red-600 transition-colors">
                    <Heart size={16} className="fill-current" />
                  </button>
                  
                  <button 
                    className="px-4 py-2 bg-teal text-white text-sm rounded-full font-montserrat hover:bg-opacity-90 transition-colors"
                  >
                    Start Quiz
                  </button>
                </div>
              </div>
            
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/quizzes" 
              className="px-6 py-3 bg-gray-100 rounded-full text-charcoal font-montserrat hover:bg-gray-200 transition-colors"
            >
              Explore More Quizzes
            </Link>
          </div>
        </TabsContent>
        
        <TabsContent value="badges" className="focus-visible:outline-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {badges.map((badge) => (
              <div 
                key={badge.id}
                className="glass-card rounded-xl p-6 flex flex-col items-center text-center hover-lift border border-teal/10"
              >
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                  {badge.icon}
                </div>
                
                <h3 className="text-xl font-cormorant font-bold text-charcoal mb-2">
                  {badge.name}
                </h3>
                
                <p className="text-sm text-gray-600 font-lora">
                  {badge.description}
                </p>
              </div>
            ))}
            
            {/* Locked badges */}
            {[1, 2, 3].map((i) => (
              <div 
                key={`locked-${i}`}
                className="glass-card rounded-xl p-6 flex flex-col items-center text-center opacity-50 border border-gray-200"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Award size={24} className="text-gray-400" />
                </div>
                
                <h3 className="text-xl font-cormorant font-bold text-charcoal mb-2">
                  ??? Badge
                </h3>
                
                <p className="text-sm text-gray-600 font-lora">
                  Keep quizzing to unlock this badge
                </p>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="stats" className="focus-visible:outline-none">
          <div className="glass-card rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-cormorant font-bold text-charcoal mb-6">
              Your Quiz Performance
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-montserrat font-medium mb-3 text-charcoal">
                  Category Performance
                </h4>
                
                <div className="space-y-4">
                  {[
                    { category: 'Science', score: 85 },
                    { category: 'History', score: 72 },
                    { category: 'Literature', score: 90 },
                    { category: 'Arts', score: 68 },
                    { category: 'Geography', score: 78 },
                  ].map((item) => (
                    <div key={item.category} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-charcoal">{item.category}</span>
                        <span className="text-teal font-bold">{item.score}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full transition-all",
                            item.score > 80 ? "bg-emerald" : 
                            item.score > 60 ? "bg-teal" : 
                            "bg-amber"
                          )}
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <h4 className="text-lg font-montserrat font-medium mb-3 text-charcoal">
                  Quiz Activity
                </h4>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard title="Total Quizzes" value="24" />
                  <StatCard title="Total Questions" value="312" />
                  <StatCard title="Average Score" value="76%" />
                  <StatCard title="Time Spent" value="8.5 hrs" />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const StatCard = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-gray-50 rounded-lg p-4 text-center">
    <p className="text-sm text-gray-600 mb-1 font-lora">{title}</p>
    <p className="text-2xl font-bold text-charcoal font-montserrat">{value}</p>
  </div>
);

export default ProfileDashboard;
