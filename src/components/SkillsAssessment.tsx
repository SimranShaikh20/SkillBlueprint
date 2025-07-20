import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Question {
  id: number;
  question: string;
  options: string[];
  category: string;
}

const assessmentQuestions: Question[] = [
  {
    id: 1,
    question: "Which activity energizes you the most?",
    options: [
      "Solving complex technical problems",
      "Leading and inspiring teams",
      "Creating visual designs or content",
      "Helping others achieve their goals"
    ],
    category: "interests"
  },
  {
    id: 2,
    question: "What type of work environment do you prefer?",
    options: [
      "Fast-paced startup atmosphere",
      "Collaborative team environment",
      "Independent remote work",
      "Structured corporate setting"
    ],
    category: "environment"
  },
  {
    id: 3,
    question: "Which skill do you want to develop most?",
    options: [
      "Programming and software development",
      "Data analysis and insights",
      "Communication and presentation",
      "Project management and strategy"
    ],
    category: "skills"
  },
  {
    id: 4,
    question: "What motivates you in your career?",
    options: [
      "High salary and financial security",
      "Creative freedom and innovation",
      "Making a positive social impact",
      "Recognition and career advancement"
    ],
    category: "motivation"
  },
  {
    id: 5,
    question: "How do you prefer to learn new skills?",
    options: [
      "Hands-on projects and experimentation",
      "Structured courses and certifications",
      "Mentorship and peer collaboration",
      "Reading books and research"
    ],
    category: "learning"
  }
];

const SkillsAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [assessmentQuestions[currentQuestion].id]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    // Simple career matching logic based on answers
    const scoreMapping = {
      tech: [0, 2, 0, 1, 0],
      business: [1, 3, 3, 3, 1],
      creative: [2, 2, 2, 1, 0],
      healthcare: [3, 1, 1, 2, 2]
    };

    const scores: Record<string, number> = {
      tech: 0,
      business: 0,
      creative: 0,
      healthcare: 0
    };

    Object.entries(answers).forEach(([questionId, answerIndex]) => {
      const qIndex = parseInt(questionId) - 1;
      Object.entries(scoreMapping).forEach(([career, mapping]) => {
        if (mapping[qIndex] === answerIndex) {
          scores[career] += 1;
        }
      });
    });

    return Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3);
  };

  if (isCompleted) {
    const results = calculateResults();
    const careerNames = {
      tech: "Technology & Software",
      business: "Business & Management", 
      creative: "Creative & Design",
      healthcare: "Healthcare & Medicine"
    };

    return (
      <Card className="max-w-2xl mx-auto p-8 shadow-medium animate-scale-in">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Assessment Complete!</h2>
            <p className="text-muted-foreground">Here are your top career matches based on your responses:</p>
          </div>

          <div className="space-y-4">
            {results.map(([career, score], index) => (
              <div 
                key={career}
                className="flex items-center justify-between p-4 bg-muted rounded-lg animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full bg-career-${career}`}></div>
                  <span className="font-semibold">{careerNames[career as keyof typeof careerNames]}</span>
                </div>
                <span className="text-sm text-muted-foreground">{Math.round((score / 5) * 100)}% match</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="flex-1 bg-gradient-primary border-0 text-white">
              View Detailed Results
            </Button>
            <Button variant="outline" className="flex-1">
              Explore Career Paths
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  const question = assessmentQuestions[currentQuestion];
  const selectedAnswer = answers[question.id];

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
      {/* Progress Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Question {currentQuestion + 1} of {assessmentQuestions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card className="p-8 shadow-medium">
        <div className="space-y-6">
          <div>
            <div className="text-sm text-primary font-medium mb-2 uppercase tracking-wide">
              {question.category}
            </div>
            <h2 className="text-2xl font-bold text-foreground leading-relaxed">
              {question.question}
            </h2>
          </div>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:border-primary/50 ${
                  selectedAnswer === index 
                    ? 'border-primary bg-primary/5 shadow-soft' 
                    : 'border-border hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {selectedAnswer === index ? (
                    <CheckCircle className="w-5 h-5 text-primary" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground" />
                  )}
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="rounded-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        <Button
          onClick={handleNext}
          disabled={selectedAnswer === undefined}
          className="rounded-full bg-gradient-primary border-0 text-white"
        >
          {currentQuestion === assessmentQuestions.length - 1 ? 'Complete' : 'Next'}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default SkillsAssessment;