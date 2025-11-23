export interface Experience {
  date: string;
  title: string;
  company: string;
  studio?: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  studioUrl?: string;
}

export const experienceData: Experience[] = [
      {
    date: "Sept 2023 - Apr 2024",
    title: "Research Intern",
    company: "National University of Singapore Research Institute",
    // studio: "Every Day Design Studio",
    // description:
      // "Developed novel algorithms for causal structure learning in reinforcement learning settings",
    // advisor: "",
    // companyUrl: "https://www.sfu.ca/siat.html",
    // studioUrl: "http://eds.siat.sfu.ca/",
  }
  ,
  {
    date: "Jun 2023 - Oct 2023",
    title: "Research Intern",
    company: "SIAT @ Simon Fraser University",
    studio: "Every Day Design Studio",
    // description:
      // "Developed novel algorithms for causal structure learning in reinforcement learning settings",
    advisor: "Ron Wakkary",
    companyUrl: "https://www.sfu.ca/siat.html",
    studioUrl: "http://eds.siat.sfu.ca/",
  }
];
