import { ArrowRight, Target, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-career.jpg";

const Hero = () => {
  const features = [
    {
      icon: Target,
      title: "Discover Your Path",
      description: "AI-powered career matching based on your skills and interests"
    },
    {
      icon: TrendingUp,
      title: "Skill Development",
      description: "Personalized learning roadmaps to reach your career goals"
    },
    {
      icon: Users,
      title: "Industry Insights",
      description: "Real-time data on salary trends and job market demands"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Your
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {" "}Career Blueprint
                </span>
              </h1>
              <p className="text-xl text-white/80 max-w-lg leading-relaxed">
                Discover your ideal career path with AI-powered assessments, 
                personalized skill development, and data-driven insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-full shadow-glow transition-all duration-300 hover:scale-105"
              >
                Start Your Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full backdrop-blur-sm"
              >
                Explore Careers
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-white/70 text-sm">Career Paths</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5000+</div>
                <div className="text-white/70 text-sm">Skills Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Career guidance visualization"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 animate-pulse-glow">
              <Card className="p-4 bg-white/95 backdrop-blur-sm border-0 shadow-medium">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm font-medium">Career Match: 95%</span>
                </div>
              </Card>
            </div>
            
            <div className="absolute -bottom-6 -right-6 animate-pulse-glow" style={{animationDelay: '1s'}}>
              <Card className="p-4 bg-white/95 backdrop-blur-sm border-0 shadow-medium">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium">+40% Salary Growth</span>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-32">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;