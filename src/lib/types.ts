export type OrgCategory = "relief" | "hiring" | "volunteers" | "education" | "church" | "missions" | "marketplace";

export type OrgType = "nonprofit" | "forprofit" | "church" | "ministry";

export interface Organization {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category: OrgCategory[];
  region: string;
  country: string;
  type: OrgType;
  hiring: boolean;
  volunteersNeeded: boolean;
  seekingDonors: boolean;
  verified: boolean;
  website: string;
  contactEmail: string;
  logoPlaceholder?: string;
  createdAt: string;
}

export const categoryLabels: Record<OrgCategory, string> = {
  relief: "Relief",
  hiring: "Hiring",
  volunteers: "Volunteers",
  education: "Education",
  church: "Church",
  missions: "Missions",
  marketplace: "Marketplace",
};

export const categoryColors: Record<OrgCategory, string> = {
  relief: "bg-tag-teal/20 text-teal-300 border-teal-500/30",
  hiring: "bg-gold/20 text-gold border-gold/30",
  volunteers: "bg-tag-purple/20 text-purple-300 border-purple-500/30",
  education: "bg-tag-blue/20 text-blue-300 border-blue-500/30",
  church: "bg-navy-light text-cream/60 border-cream/20",
  missions: "bg-gold/10 text-gold/80 border-gold/20",
  marketplace: "bg-navy-light text-cream/60 border-cream/20",
};
