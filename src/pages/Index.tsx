import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SkillsAssessment from "@/components/SkillsAssessment";
import CareerDashboard from "@/components/CareerDashboard";
import ProfileForm from "@/components/ProfileForm";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'assessment' | 'dashboard' | 'careers' | 'resources' | 'profile'>('home');
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleProfileComplete = (profileData: any) => {
    setUserProfile(profileData);
    setCurrentView('dashboard');
  };

  const renderView = () => {
    switch (currentView) {
      case 'assessment':
        return (
          <div className="min-h-screen bg-background pt-20 pb-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-foreground mb-4">Skills Assessment</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Answer a few questions to discover career paths that match your interests, skills, and goals.
                </p>
              </div>
              <SkillsAssessment />
            </div>
          </div>
        );
      case 'dashboard':
        return <CareerDashboard userProfile={userProfile} />;
      case 'profile':
        return (
          <ProfileForm 
            onSubmit={handleProfileComplete}
            onBack={() => setCurrentView('home')}
          />
        );
      case 'careers':
        return (
          <div className="min-h-screen bg-background pt-20 pb-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-foreground mb-4">Explore Careers</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Discover career opportunities that match your skills and interests.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Career cards will be generated here */}
                <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Software Developer</h3>
                  <p className="text-muted-foreground mb-4">Design and build software applications using various programming languages.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Avg. Salary: $75,000 - $120,000</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'resources':
        return (
          <div className="min-h-screen bg-background pt-20 pb-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-foreground mb-4">Learning Resources</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Curated courses, tutorials, and materials to advance your career.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Resource cards will be generated here */}
                <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-foreground mb-3">JavaScript Fundamentals</h3>
                  <p className="text-muted-foreground mb-4">Learn the basics of JavaScript programming language.</p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Beginner</span>
                    <span className="text-sm text-muted-foreground">4 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <Hero 
            onGetStarted={() => setCurrentView('profile')}
            onExploreCareers={() => setCurrentView('careers')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />
      {renderView()}
    </div>
  );
};

export default Index;
