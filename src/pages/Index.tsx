import { useState } from "react";
import { ResumePreview } from "@/components/ResumePreview";
import { EditPanel } from "@/components/EditPanel";

const Index = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "John Doe",
      title: "Senior Software Engineer",
      email: "john.doe@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      website: "johndoe.dev",
    },
    summary: "Experienced software engineer with 8+ years of expertise in full-stack development, cloud architecture, and team leadership. Passionate about building scalable solutions and mentoring junior developers.",
    experience: [
      {
        id: "1",
        company: "Tech Solutions Inc.",
        position: "Senior Software Engineer",
        duration: "2020 - Present",
        description: "Lead development of microservices architecture serving 1M+ users. Designed and implemented CI/CD pipelines reducing deployment time by 60%. Mentored 5 junior developers and conducted technical interviews.",
      },
      {
        id: "2",
        company: "StartupXYZ",
        position: "Full Stack Developer",
        duration: "2018 - 2020",
        description: "Built responsive web applications using React, Node.js, and MongoDB. Collaborated with design team to create intuitive user interfaces. Implemented real-time features using WebSocket technology.",
      },
    ],
    education: [
      {
        id: "1",
        institution: "University of California, Berkeley",
        degree: "Bachelor of Science in Computer Science",
        year: "2018",
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "AWS",
      "Docker",
      "PostgreSQL",
      "Git",
      "Agile/Scrum",
    ],
  });

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="flex">
        {/* Edit Panel */}
        <div className="w-96 h-screen overflow-y-auto animate-slide-in-left">
          <EditPanel data={resumeData} onUpdate={setResumeData} />
        </div>
        
        {/* Resume Preview */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-resume-header mb-2">
                Resume Builder
              </h1>
              <p className="text-resume-text opacity-70">
                Edit your information on the left to see live updates
              </p>
            </div>
            <ResumePreview data={resumeData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
