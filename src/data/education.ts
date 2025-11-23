export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  advisorUrl?: string;
  labUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2025—Present",
    institution: "McMaster University",
    degree: "Master of Engineering in Computer Science",
    advisor: "Prof. Irene Ye Yuan",
    labUrl: "https://esilab.cas.mcmaster.ca/",

  },
  {
    year: "2019-2024",
    institution: "Sichuan University",
    degree: "B.S. in Computer Science",
    // advisor: "Prof. Yanbing Yang",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
