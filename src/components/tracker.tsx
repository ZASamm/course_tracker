"use client";
import { useState } from "react";

interface StudyItem {
  week: number;
  topic: string;
  type: string;
  date: string; // Add date property
}

// Add your dates here in order
const studyDates = [
  "2025-05-23", "2025-05-30", "2025-06-06", "2025-06-13", "2025-06-20", "2025-06-27",
  "2025-07-04", "2025-07-11", "2025-07-18", "2025-07-25", "2025-08-01", "2025-08-08",
  "2025-08-15", "2025-08-22", "2025-08-29", "2025-09-05", "2025-09-12", "2025-09-19",
  "2025-09-26", "2025-10-03", "2025-10-10", "2025-10-17", "2025-10-24", "2025-10-31",
  "2025-11-07", "2025-11-14", "2025-11-21", "2025-11-28", "2025-12-05", "2025-12-12",
  "2025-12-19", "2025-12-26", "2026-01-02", "2026-01-09", "2026-01-16", "2026-01-23",
  "2026-01-30", "2026-02-06", "2026-02-13", "2026-02-20", "2026-02-27", "2026-03-06",
  "2026-03-13", "2026-03-20", "2026-03-27", "2026-04-03", "2026-04-10", "2026-04-17",
  "2026-04-24", "2026-05-01", "2026-05-08", "2026-05-15"
];

const studyPlan: StudyItem[] = [
  { week: 1, topic: "Proof", type: "Pure", date: studyDates[0] },
  { week: 2, topic: "Algebra and Functions", type: "Pure", date: studyDates[1] },
  { week: 3, topic: "Coordinate Geometry in the (x, y) Plane", type: "Pure", date: studyDates[2] },
  { week: 4, topic: "Sequences and Series", type: "Pure", date: studyDates[3] },
  { week: 5, topic: "Trigonometry", type: "Pure", date: studyDates[4] },
  { week: 6, topic: "Exponentials and Logarithms", type: "Pure", date: studyDates[5] },
  { week: 7, topic: "Differentiation", type: "Pure", date: studyDates[6] },
  { week: 8, topic: "Integration", type: "Pure", date: studyDates[7] },
  { week: 9, topic: "Numerical Methods", type: "Pure", date: studyDates[8] },
  { week: 10, topic: "Vectors", type: "Pure", date: studyDates[9] },
  { week: 11, topic: "Advanced Algebra and Functions", type: "Pure", date: studyDates[10] },
  { week: 12, topic: "Advanced Coordinate Geometry", type: "Pure", date: studyDates[11] },
  { week: 13, topic: "Advanced Sequences and Series", type: "Pure", date: studyDates[12] },
  { week: 14, topic: "Advanced Trigonometry", type: "Pure", date: studyDates[13] },
  { week: 15, topic: "Advanced Exponentials and Logarithms", type: "Pure", date: studyDates[14] },
  { week: 16, topic: "Advanced Differentiation", type: "Pure", date: studyDates[15] },
  { week: 17, topic: "Advanced Integration", type: "Pure", date: studyDates[16] },
  { week: 18, topic: "Advanced Numerical Methods", type: "Pure", date: studyDates[17] },
  { week: 19, topic: "Advanced Vectors", type: "Pure", date: studyDates[18] },
  { week: 20, topic: "Review and Consolidation of Pure Mathematics", type: "Pure", date: studyDates[19] },
  { week: 21, topic: "Statistical Sampling", type: "Statistics", date: studyDates[20] },
  { week: 22, topic: "Data Presentation and Interpretation", type: "Statistics", date: studyDates[21] },
  { week: 23, topic: "Probability", type: "Statistics", date: studyDates[22] },
  { week: 24, topic: "Statistical Distributions", type: "Statistics", date: studyDates[23] },
  { week: 25, topic: "Hypothesis Testing", type: "Statistics", date: studyDates[24] },
  { week: 26, topic: "Kinematics", type: "Mechanics", date: studyDates[25] },
  { week: 27, topic: "Forces and Newton’s Laws", type: "Mechanics", date: studyDates[26] },
  { week: 28, topic: "Moments", type: "Mechanics", date: studyDates[27] },
  { week: 29, topic: "Variable Acceleration", type: "Mechanics", date: studyDates[28] },
  { week: 30, topic: "Review and Consolidation of Stats & Mechanics", type: "Mixed", date: studyDates[29] },
  { week: 31, topic: "Mixed Pure Mathematics Practice", type: "Exam Practice", date: studyDates[30] },
  { week: 32, topic: "Mixed Statistics Practice", type: "Exam Practice", date: studyDates[31] },
  { week: 33, topic: "Mixed Mechanics Practice", type: "Exam Practice", date: studyDates[32] },
  { week: 34, topic: "Full Past Paper 1 Practice", type: "Exam Practice", date: studyDates[33] },
  { week: 35, topic: "Full Past Paper 2 Practice", type: "Exam Practice", date: studyDates[34] },
  { week: 36, topic: "Full Past Paper 3 Practice", type: "Exam Practice", date: studyDates[35] },
  { week: 37, topic: "Identify and Review Weak Areas", type: "Revision", date: studyDates[36] },
  { week: 38, topic: "Targeted Practice on Weak Areas", type: "Revision", date: studyDates[37] },
  { week: 39, topic: "Final Revision", type: "Revision", date: studyDates[38] },
  { week: 40, topic: "Exam Strategy and Preparation", type: "Revision", date: studyDates[39] }
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
              <p className="mb-2 text-sm text-blue-600">Date: {item.date}</p> {/* Show date */}
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
