"use client";
import { useState } from "react";

interface StudyItem {
  week: number;
  topic: string;
  type: string;
}

const studyPlan: StudyItem[] = [
  { week: 1, topic: "Proof", type: "Pure" },
  { week: 2, topic: "Algebra and Functions", type: "Pure" },
  { week: 3, topic: "Coordinate Geometry in the (x, y) Plane", type: "Pure" },
  { week: 4, topic: "Sequences and Series", type: "Pure" },
  { week: 5, topic: "Trigonometry", type: "Pure" },
  { week: 6, topic: "Exponentials and Logarithms", type: "Pure" },
  { week: 7, topic: "Differentiation", type: "Pure" },
  { week: 8, topic: "Integration", type: "Pure" },
  { week: 9, topic: "Numerical Methods", type: "Pure" },
  { week: 10, topic: "Vectors", type: "Pure" },
  { week: 11, topic: "Advanced Algebra and Functions", type: "Pure" },
  { week: 12, topic: "Advanced Coordinate Geometry", type: "Pure" },
  { week: 13, topic: "Advanced Sequences and Series", type: "Pure" },
  { week: 14, topic: "Advanced Trigonometry", type: "Pure" },
  { week: 15, topic: "Advanced Exponentials and Logarithms", type: "Pure" },
  { week: 16, topic: "Advanced Differentiation", type: "Pure" },
  { week: 17, topic: "Advanced Integration", type: "Pure" },
  { week: 18, topic: "Advanced Numerical Methods", type: "Pure" },
  { week: 19, topic: "Advanced Vectors", type: "Pure" },
  { week: 20, topic: "Review and Consolidation of Pure Mathematics", type: "Pure" },
  { week: 21, topic: "Statistical Sampling", type: "Statistics" },
  { week: 22, topic: "Data Presentation and Interpretation", type: "Statistics" },
  { week: 23, topic: "Probability", type: "Statistics" },
  { week: 24, topic: "Statistical Distributions", type: "Statistics" },
  { week: 25, topic: "Hypothesis Testing", type: "Statistics" },
  { week: 26, topic: "Kinematics", type: "Mechanics" },
  { week: 27, topic: "Forces and Newton’s Laws", type: "Mechanics" },
  { week: 28, topic: "Moments", type: "Mechanics" },
  { week: 29, topic: "Variable Acceleration", type: "Mechanics" },
  { week: 30, topic: "Review and Consolidation of Stats & Mechanics", type: "Mixed" },
  { week: 31, topic: "Mixed Pure Mathematics Practice", type: "Exam Practice" },
  { week: 32, topic: "Mixed Statistics Practice", type: "Exam Practice" },
  { week: 33, topic: "Mixed Mechanics Practice", type: "Exam Practice" },
  { week: 34, topic: "Full Past Paper 1 Practice", type: "Exam Practice" },
  { week: 35, topic: "Full Past Paper 2 Practice", type: "Exam Practice" },
  { week: 36, topic: "Full Past Paper 3 Practice", type: "Exam Practice" },
  { week: 37, topic: "Identify and Review Weak Areas", type: "Revision" },
  { week: 38, topic: "Targeted Practice on Weak Areas", type: "Revision" },
  { week: 39, topic: "Final Revision", type: "Revision" },
  { week: 40, topic: "Exam Strategy and Preparation", type: "Revision" }
];

const states = ["Not Started", "In Progress", "Completed"] as const;
type ProgressState = typeof states[number];

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl shadow bg-white border p-4">{children}</div>;
}

function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

function Button({ onClick, children, variant = "outline" }: { onClick: () => void; children: React.ReactNode; variant?: string }) {
  const base = "px-4 py-2 rounded font-semibold";
  const styles: Record<string, string> = {
    default: "bg-green-500 text-white",
    secondary: "bg-yellow-400 text-black",
    outline: "border border-gray-300 text-gray-700",
  };
  return <button onClick={onClick} className={`${base} ${styles[variant]}`}>{children}</button>;
}

function Progress({ value, className = "" }: { value: number; className?: string }) {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-4 ${className}`}>
      <div
        className="bg-blue-600 h-4 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

export default function MathsStudyTracker() {
  const [progress, setProgress] = useState<ProgressState[]>(
    Array(studyPlan.length).fill("Not Started")
  );

  const handleProgressChange = (index: number) => {
    const newProgress = [...progress];
    const currentIndex = states.indexOf(newProgress[index]);
    newProgress[index] = states[(currentIndex + 1) % states.length];
    setProgress(newProgress);
  };

  const completedCount = progress.filter((p) => p === "Completed").length;
  const total = studyPlan.length;
  const percentComplete = Math.round((completedCount / total) * 100);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">A-Level Maths Study Tracker</h1>
      <Progress value={percentComplete} className="mb-6" />
      <p className="mb-4">{percentComplete}% Complete</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {studyPlan.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2">Week {item.week}</h2>
              <p className="mb-1">{item.topic}</p>
              <p className="mb-2 text-sm text-gray-500">Type: {item.type}</p>
              <Button
                variant={
                  progress[index] === "Completed"
                    ? "default"
                    : progress[index] === "In Progress"
                    ? "secondary"
                    : "outline"
                }
                onClick={() => handleProgressChange(index)}
              >
                {progress[index]}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
