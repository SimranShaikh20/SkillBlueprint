import { BarChart3, TrendingUp, Target, BookOpen, Star, Award, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface CareerDashboardProps {
  userProfile?: any;
}

const CareerDashboard = ({ userProfile }: CareerDashboardProps) => {
  if (!userProfile) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Career Dashboard</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Complete your profile to see personalized career insights and recommendations.
          </p>
          <Button className="bg-gradient-primary text-white border-0">
            Complete Profile First
          </Button>
        </div>
      </div>
    );
  }

  // Calculate metrics from user profile
  const skillsCompleted = userProfile.technicalSkills?.length || 0;
  const totalSkills = userProfile.technicalSkills?.length + (userProfile.interests?.length || 0);
  const careerProgress = Math.min(100, Math.round((skillsCompleted / Math.max(totalSkills, 1)) * 100));

  const displayProfile = {
    name: userProfile.name || "User",
    currentRole: userProfile.currentJobTitle || "Professional",
    targetRole: userProfile.careerGoals ? userProfile.careerGoals.substring(0, 50) + "..." : "Career Growth",
    skillsCompleted,
    totalSkills: Math.max(totalSkills, 1),
    careerProgress
  };

  const skillsGap = [
    { skill: "React.js", current: 85, target: 90, category: "Frontend" },
    { skill: "Node.js", current: 60, target: 85, category: "Backend" },
    { skill: "System Design", current: 30, target: 80, category: "Architecture" },
    { skill: "TypeScript", current: 75, target: 90, category: "Frontend" },
    { skill: "AWS", current: 40, target: 75, category: "Cloud" }
  ];

  const recommendedCareers = [
    {
      title: "Senior Frontend Developer",
      match: 92,
      salary: "$95,000 - $130,000",
      growth: "+15%",
      category: "tech"
    },
    {
      title: "Full-Stack Developer",
      match: 88,
      salary: "$85,000 - $120,000", 
      growth: "+22%",
      category: "tech"
    },
    {
      title: "Product Manager",
      match: 76,
      salary: "$100,000 - $140,000",
      growth: "+19%", 
      category: "business"
    }
  ];

  const learningResources = [
    {
      title: "Advanced React Patterns",
      type: "Course",
      duration: "8 hours",
      progress: 65,
      provider: "Frontend Masters"
    },
    {
      title: "System Design Interview",
      type: "Book", 
      duration: "12 hours",
      progress: 30,
      provider: "ByteByteGo"
    },
    {
      title: "AWS Certified Developer",
      type: "Certification",
      duration: "40 hours",
      progress: 15,
      provider: "AWS"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-4 space-y-8">
        {/* Welcome Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">
            Welcome back, {displayProfile.name}
          </h1>
          <p className="text-xl text-muted-foreground">
            Continue your journey from {displayProfile.currentRole} to {displayProfile.targetRole}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Career Progress</p>
                <p className="text-2xl font-bold text-foreground">{displayProfile.careerProgress}%</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Skills Mastered</p>
                <p className="text-2xl font-bold text-foreground">{displayProfile.skillsCompleted}/{displayProfile.totalSkills}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Learning Hours</p>
                <p className="text-2xl font-bold text-foreground">127h</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-career-creative/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-career-creative" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Salary Growth</p>
                <p className="text-2xl font-bold text-foreground">+$25k</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skills Gap Analysis */}
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-medium">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2 text-primary" />
                  Skills Gap Analysis
                </h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>

              <div className="space-y-6">
                {skillsGap.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold">{skill.skill}</span>
                        <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                          {skill.category}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.current}% → {skill.target}%
                      </span>
                    </div>
                    
                    <div className="relative">
                      <Progress value={skill.target} className="h-3 bg-muted" />
                      <Progress 
                        value={skill.current} 
                        className="h-3 absolute top-0 left-0"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Recommended Careers */}
          <div>
            <Card className="p-6 shadow-medium">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-warning" />
                Career Matches
              </h2>

              <div className="space-y-4">
                {recommendedCareers.map((career, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200 cursor-pointer"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-sm">{career.title}</h3>
                        <span className="text-xs font-medium text-success">{career.match}% match</span>
                      </div>
                      
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div className="flex items-center justify-between">
                          <span>Salary Range</span>
                          <span className="font-medium">{career.salary}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Growth</span>
                          <span className="font-medium text-success">{career.growth}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-4 bg-gradient-primary border-0 text-white">
                Explore All Careers
              </Button>
            </Card>
          </div>
        </div>

        {/* Learning Resources */}
        <Card className="p-6 shadow-medium">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-primary" />
              Continue Learning
            </h2>
            <Button variant="outline" size="sm">Browse Library</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {learningResources.map((resource, index) => (
              <div 
                key={index}
                className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
              >
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.provider}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {resource.type}
                    </span>
                    <span className="text-muted-foreground">{resource.duration}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span>Progress</span>
                      <span>{resource.progress}%</span>
                    </div>
                    <Progress value={resource.progress} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CareerDashboard;