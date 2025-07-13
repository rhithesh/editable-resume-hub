import { Mail, Phone, MapPin, Globe } from "lucide-react";

interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website: string;
  };
  summary: string;
  experience: Array<{
    id: string;
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    year: string;
  }>;
  skills: string[];
}

interface ResumePreviewProps {
  data: ResumeData;
}

export const ResumePreview = ({ data }: ResumePreviewProps) => {
  return (
    <div className="bg-resume-background border border-resume-border rounded-lg shadow-soft p-8 max-w-4xl mx-auto animate-fade-in">
      {/* Header Section */}
      <div className="border-b-2 border-resume-header pb-6 mb-6">
        <h1 className="text-4xl font-bold text-resume-header mb-2">
          {data.personalInfo.name}
        </h1>
        <h2 className="text-xl text-resume-text mb-4 opacity-80">
          {data.personalInfo.title}
        </h2>
        
        <div className="flex flex-wrap gap-4 text-sm text-resume-text">
          {data.personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-resume-header" />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-resume-header" />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-resume-header" />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
          {data.personalInfo.website && (
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-resume-header" />
              <span>{data.personalInfo.website}</span>
            </div>
          )}
        </div>
      </div>

      {/* Summary Section */}
      {data.summary && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-resume-header mb-3">
            Professional Summary
          </h3>
          <p className="text-resume-text leading-relaxed">
            {data.summary}
          </p>
        </div>
      )}

      {/* Experience Section */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-resume-header mb-4">
            Work Experience
          </h3>
          <div className="space-y-4">
            {data.experience.map((job) => (
              <div key={job.id} className="border-l-2 border-resume-section pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-resume-text">{job.position}</h4>
                    <p className="text-resume-header font-medium">{job.company}</p>
                  </div>
                  <span className="text-sm text-resume-text opacity-70 bg-resume-section px-2 py-1 rounded">
                    {job.duration}
                  </span>
                </div>
                <p className="text-resume-text text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education Section */}
      {data.education.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-resume-header mb-4">
            Education
          </h3>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-resume-text">{edu.degree}</h4>
                  <p className="text-resume-header text-sm">{edu.institution}</p>
                </div>
                <span className="text-sm text-resume-text opacity-70 bg-resume-section px-2 py-1 rounded">
                  {edu.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {data.skills.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-resume-header mb-4">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-resume-section text-resume-text px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};