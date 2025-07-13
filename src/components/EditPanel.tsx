import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, X, User, Briefcase, GraduationCap, Star, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

interface EditPanelProps {
  data: ResumeData;
  onUpdate: (data: ResumeData) => void;
}

export const EditPanel = ({ data, onUpdate }: EditPanelProps) => {
  const [newSkill, setNewSkill] = useState("");

  const updatePersonalInfo = (field: string, value: string) => {
    onUpdate({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        [field]: value,
      },
    });
  };

  const updateSummary = (value: string) => {
    onUpdate({
      ...data,
      summary: value,
    });
  };

  const addExperience = () => {
    const newExp = {
      id: Date.now().toString(),
      company: "",
      position: "",
      duration: "",
      description: "",
    };
    onUpdate({
      ...data,
      experience: [...data.experience, newExp],
    });
  };

  const updateExperience = (id: string, field: string, value: string) => {
    onUpdate({
      ...data,
      experience: data.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const removeExperience = (id: string) => {
    onUpdate({
      ...data,
      experience: data.experience.filter((exp) => exp.id !== id),
    });
  };

  const addEducation = () => {
    const newEdu = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      year: "",
    };
    onUpdate({
      ...data,
      education: [...data.education, newEdu],
    });
  };

  const updateEducation = (id: string, field: string, value: string) => {
    onUpdate({
      ...data,
      education: data.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const removeEducation = (id: string) => {
    onUpdate({
      ...data,
      education: data.education.filter((edu) => edu.id !== id),
    });
  };

  const addSkill = () => {
    if (newSkill.trim() && !data.skills.includes(newSkill.trim())) {
      onUpdate({
        ...data,
        skills: [...data.skills, newSkill.trim()],
      });
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    onUpdate({
      ...data,
      skills: data.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  return (
    <div className="h-full bg-editor-panel border-r border-resume-border">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-resume-header mb-6">Edit Resume</h2>
        
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="personal" className="text-xs">
              <User className="h-4 w-4 mr-1" />
              Info
            </TabsTrigger>
            <TabsTrigger value="summary" className="text-xs">
              <FileText className="h-4 w-4 mr-1" />
              Summary
            </TabsTrigger>
            <TabsTrigger value="experience" className="text-xs">
              <Briefcase className="h-4 w-4 mr-1" />
              Work
            </TabsTrigger>
            <TabsTrigger value="education" className="text-xs">
              <GraduationCap className="h-4 w-4 mr-1" />
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="text-xs">
              <Star className="h-4 w-4 mr-1" />
              Skills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={data.personalInfo.name}
                    onChange={(e) => updatePersonalInfo("name", e.target.value)}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="title">Professional Title</Label>
                  <Input
                    id="title"
                    value={data.personalInfo.title}
                    onChange={(e) => updatePersonalInfo("title", e.target.value)}
                    placeholder="Software Engineer"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={data.personalInfo.email}
                    onChange={(e) => updatePersonalInfo("email", e.target.value)}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={data.personalInfo.phone}
                    onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={data.personalInfo.location}
                    onChange={(e) => updatePersonalInfo("location", e.target.value)}
                    placeholder="New York, NY"
                  />
                </div>
                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={data.personalInfo.website}
                    onChange={(e) => updatePersonalInfo("website", e.target.value)}
                    placeholder="www.johndoe.com"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="summary" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={data.summary}
                  onChange={(e) => updateSummary(e.target.value)}
                  placeholder="Write a brief summary of your professional background and key achievements..."
                  className="min-h-32"
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="space-y-4 mt-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Work Experience</h3>
              <Button onClick={addExperience} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Job
              </Button>
            </div>
            {data.experience.map((job) => (
              <Card key={job.id}>
                <CardContent className="pt-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label>Position</Label>
                          <Input
                            value={job.position}
                            onChange={(e) => updateExperience(job.id, "position", e.target.value)}
                            placeholder="Software Engineer"
                          />
                        </div>
                        <div>
                          <Label>Company</Label>
                          <Input
                            value={job.company}
                            onChange={(e) => updateExperience(job.id, "company", e.target.value)}
                            placeholder="Tech Corp"
                          />
                        </div>
                      </div>
                      <div>
                        <Label>Duration</Label>
                        <Input
                          value={job.duration}
                          onChange={(e) => updateExperience(job.id, "duration", e.target.value)}
                          placeholder="Jan 2020 - Present"
                        />
                      </div>
                      <div>
                        <Label>Description</Label>
                        <Textarea
                          value={job.description}
                          onChange={(e) => updateExperience(job.id, "description", e.target.value)}
                          placeholder="Describe your role and achievements..."
                          className="min-h-20"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={() => removeExperience(job.id)}
                      variant="outline"
                      size="sm"
                      className="ml-2"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-4 mt-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Education</h3>
              <Button onClick={addEducation} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Education
              </Button>
            </div>
            {data.education.map((edu) => (
              <Card key={edu.id}>
                <CardContent className="pt-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 space-y-3">
                      <div>
                        <Label>Degree</Label>
                        <Input
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                          placeholder="Bachelor of Computer Science"
                        />
                      </div>
                      <div>
                        <Label>Institution</Label>
                        <Input
                          value={edu.institution}
                          onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                          placeholder="University of Technology"
                        />
                      </div>
                      <div>
                        <Label>Year</Label>
                        <Input
                          value={edu.year}
                          onChange={(e) => updateEducation(edu.id, "year", e.target.value)}
                          placeholder="2018"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={() => removeEducation(edu.id)}
                      variant="outline"
                      size="sm"
                      className="ml-2"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="skills" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill..."
                    onKeyPress={(e) => e.key === "Enter" && addSkill()}
                  />
                  <Button onClick={addSkill} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                      {skill}
                      <button
                        onClick={() => removeSkill(skill)}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};