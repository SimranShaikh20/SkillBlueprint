import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SkillsAssessment from "@/components/SkillsAssessment";
import CareerDashboard from "@/components/CareerDashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'assessment' | 'dashboard'>('home');

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
        return <CareerDashboard />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {renderView()}
    </div>
  );
};

export default Index;
