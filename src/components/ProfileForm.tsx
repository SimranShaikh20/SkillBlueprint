import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, User, Briefcase, GraduationCap, Target } from "lucide-react";

interface ProfileFormProps {
  onSubmit: (data: any) => void;
  onBack: () => void;
}

const ProfileForm = ({ onSubmit, onBack }: ProfileFormProps) => {
  const [formData, setFormData] = useState({
    // Personal Info
    name: "",
    email: "",
    phone: "",
    location: "",
    
    // Professional Info
    currentJobTitle: "",
    experience: "",
    industry: "",
    currentSalary: "",
    
    // Education
    education: "",
    degree: "",
    major: "",
    graduationYear: "",
    
    // Skills & Interests
    technicalSkills: [] as string[],
    softSkills: [] as string[],
    interests: [] as string[],
    
    // Career Goals
    careerGoals: "",
    targetSalary: "",
    preferredWorkMode: "",
    relocationWillingness: "",
    
    // Additional Info
    achievements: "",
    languages: [] as string[],
    certifications: ""
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const technicalSkillOptions = [
    "JavaScript", "Python", "React", "Node.js", "SQL", "Java", "C++", "HTML/CSS",
    "TypeScript", "AWS", "Docker", "Git", "MongoDB", "PostgreSQL", "Angular", "Vue.js"
  ];

  const softSkillOptions = [
    "Communication", "Leadership", "Problem Solving", "Teamwork", "Time Management",
    "Critical Thinking", "Creativity", "Adaptability", "Project Management", "Public Speaking"
  ];

  const interestOptions = [
    "Web Development", "Mobile Development", "Data Science", "Machine Learning", "Cybersecurity",
    "UX/UI Design", "DevOps", "Blockchain", "AI", "Cloud Computing", "IoT", "Game Development"
  ];

  const languageOptions = [
    "English", "Spanish", "French", "German", "Chinese", "Japanese", "Arabic", "Portuguese", "Russian", "Italian"
  ];

  const handleSkillToggle = (skill: string, type: 'technical' | 'soft' | 'interests' | 'languages') => {
    const fieldName = type === 'technical' ? 'technicalSkills' : 
                     type === 'soft' ? 'softSkills' : 
                     type === 'interests' ? 'interests' : 'languages';
    
    const currentSkills = formData[fieldName];
    const updatedSkills = currentSkills.includes(skill)
      ? currentSkills.filter(s => s !== skill)
      : [...currentSkills, skill];
    
    setFormData(prev => ({ ...prev, [fieldName]: updatedSkills }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(formData));
    onSubmit(formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Information
              </CardTitle>
              <CardDescription>Tell us about yourself</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="New York, NY"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Professional Experience
              </CardTitle>
              <CardDescription>Your work experience and background</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currentJobTitle">Current Job Title</Label>
                  <Input
                    id="currentJobTitle"
                    value={formData.currentJobTitle}
                    onChange={(e) => setFormData(prev => ({ ...prev, currentJobTitle: e.target.value }))}
                    placeholder="Software Developer"
                  />
                </div>
                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Select value={formData.experience} onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="2-3">2-3 years</SelectItem>
                      <SelectItem value="4-5">4-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                    placeholder="Technology"
                  />
                </div>
                <div>
                  <Label htmlFor="currentSalary">Current Salary (Optional)</Label>
                  <Input
                    id="currentSalary"
                    value={formData.currentSalary}
                    onChange={(e) => setFormData(prev => ({ ...prev, currentSalary: e.target.value }))}
                    placeholder="$75,000"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="achievements">Key Achievements</Label>
                <Textarea
                  id="achievements"
                  value={formData.achievements}
                  onChange={(e) => setFormData(prev => ({ ...prev, achievements: e.target.value }))}
                  placeholder="Describe your major accomplishments, awards, or recognitions..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education & Skills
              </CardTitle>
              <CardDescription>Your educational background and skill set</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="education">Education Level</Label>
                  <Select value={formData.education} onValueChange={(value) => setFormData(prev => ({ ...prev, education: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="associate">Associate Degree</SelectItem>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="bootcamp">Bootcamp/Certificate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="major">Field of Study</Label>
                  <Input
                    id="major"
                    value={formData.major}
                    onChange={(e) => setFormData(prev => ({ ...prev, major: e.target.value }))}
                    placeholder="Computer Science"
                  />
                </div>
              </div>
              
              <div>
                <Label>Technical Skills</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                  {technicalSkillOptions.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={`tech-${skill}`}
                        checked={formData.technicalSkills.includes(skill)}
                        onCheckedChange={() => handleSkillToggle(skill, 'technical')}
                      />
                      <Label htmlFor={`tech-${skill}`} className="text-sm">{skill}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label>Soft Skills</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                  {softSkillOptions.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={`soft-${skill}`}
                        checked={formData.softSkills.includes(skill)}
                        onCheckedChange={() => handleSkillToggle(skill, 'soft')}
                      />
                      <Label htmlFor={`soft-${skill}`} className="text-sm">{skill}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Career Goals & Preferences
              </CardTitle>
              <CardDescription>Where do you want to go in your career?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="careerGoals">Career Goals</Label>
                <Textarea
                  id="careerGoals"
                  value={formData.careerGoals}
                  onChange={(e) => setFormData(prev => ({ ...prev, careerGoals: e.target.value }))}
                  placeholder="Describe your career aspirations and goals..."
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="targetSalary">Target Salary</Label>
                  <Input
                    id="targetSalary"
                    value={formData.targetSalary}
                    onChange={(e) => setFormData(prev => ({ ...prev, targetSalary: e.target.value }))}
                    placeholder="$90,000"
                  />
                </div>
                <div>
                  <Label htmlFor="preferredWorkMode">Preferred Work Mode</Label>
                  <Select value={formData.preferredWorkMode} onValueChange={(value) => setFormData(prev => ({ ...prev, preferredWorkMode: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select work preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="onsite">On-site</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Areas of Interest</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                  {interestOptions.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={`interest-${interest}`}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={() => handleSkillToggle(interest, 'interests')}
                      />
                      <Label htmlFor={`interest-${interest}`} className="text-sm">{interest}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label>Languages</Label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-2">
                  {languageOptions.map((language) => (
                    <div key={language} className="flex items-center space-x-2">
                      <Checkbox
                        id={`lang-${language}`}
                        checked={formData.languages.includes(language)}
                        onCheckedChange={() => handleSkillToggle(language, 'languages')}
                      />
                      <Label htmlFor={`lang-${language}`} className="text-sm">{language}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Build Your Professional Profile</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about yourself to get personalized career recommendations and insights.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-muted rounded-full h-2 mb-8">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          <div className="text-center text-sm text-muted-foreground mb-8">
            Step {currentStep} of {totalSteps}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {renderStep()}
          
          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            
            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={() => setCurrentStep(prev => Math.min(totalSteps, prev + 1))}
                className="bg-gradient-primary text-white border-0"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-gradient-primary text-white border-0"
              >
                Complete Profile
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;