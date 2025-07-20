import { useState } from "react";
import { Menu, X, User, Search, BookOpen, Target, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  currentView: 'home' | 'assessment' | 'dashboard' | 'careers' | 'resources';
  setCurrentView: (view: 'home' | 'assessment' | 'dashboard' | 'careers' | 'resources') => void;
}

const Navigation = ({ currentView, setCurrentView }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Target, label: "Assessment", view: "assessment" as const },
    { icon: Search, label: "Explore Careers", view: "careers" as const },
    { icon: BookOpen, label: "Resources", view: "resources" as const },
    { icon: BarChart, label: "Dashboard", view: "dashboard" as const },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => setCurrentView('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-foreground">SkillBlueprint</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setCurrentView(item.view)}
                className={`flex items-center space-x-2 transition-colors duration-200 ${
                  currentView === item.view 
                    ? 'text-primary font-medium' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="rounded-full">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="rounded-full bg-gradient-primary border-0 text-white hover:opacity-90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 animate-fade-in">
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setCurrentView(item.view);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 py-2 w-full text-left transition-colors duration-200 ${
                    currentView === item.view 
                      ? 'text-primary font-medium' 
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full rounded-full">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button size="sm" className="w-full rounded-full bg-gradient-primary border-0 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;