import { useState } from "react";
import { Menu, X, User, Search, BookOpen, Target, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Target, label: "Assessment", href: "#assessment" },
    { icon: Search, label: "Explore Careers", href: "#careers" },
    { icon: BookOpen, label: "Resources", href: "#resources" },
    { icon: BarChart, label: "Dashboard", href: "#dashboard" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-foreground">SkillBlueprint</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </a>
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
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 py-2 text-foreground/70 hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
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