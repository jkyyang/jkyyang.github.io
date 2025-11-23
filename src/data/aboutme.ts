export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Jack Yang",
  title: "Master of Engineering Student",
  institution: "McMaster University",
  // Note that links work in the description
  description:
  "I’m a first-year M.Eng. student at McMaster University. I focus on HCI-driven IoT systems, building AI-enhanced interfaces and sensing workflows that support real-time collaboration, decision making, and meaningful human-AI interaction.",
  email: "jackyyang320@gmail.com",
  // imageUrl:
  //   "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  googleScholarUrl: "https://scholar.google.ca/citations?user=KqMkTxcAAAAJ",
  githubUsername: "jkyyang",
  linkedinUsername: "jkyyang",
  // blogUrl: "https://",
  // cvUrl: "https://",
  institutionUrl: "https://www.mcmaster.ca",
  // altName: "",
  // secretDescription: "I like dogs.",
};
