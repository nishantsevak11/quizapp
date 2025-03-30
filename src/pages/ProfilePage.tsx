
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProfileDashboard from '@/components/ProfileDashboard';

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <ProfileDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
