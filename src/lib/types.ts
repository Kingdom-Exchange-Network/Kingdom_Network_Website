export type OrgCategory = "relief" | "hiring" | "volunteers" | "education" | "church" | "missions" | "marketplace";

export type Mountain =
  | "religion"
  | "family"
  | "education"
  | "economy"
  | "government"
  | "media"
  | "celebration";

export interface MountainSubcategory {
  slug: string;
  label: string;
}

export interface MountainDefinition {
  slug: Mountain;
  label: string;
  subcategories: MountainSubcategory[];
}

export const MOUNTAINS: MountainDefinition[] = [
  {
    slug: "religion",
    label: "Religion",
    subcategories: [
      { slug: "evangelism-church-planting", label: "Evangelism & church planting" },
      { slug: "discipleship-training", label: "Discipleship & training" },
    ],
  },
  {
    slug: "family",
    label: "Family & Human Services",
    subcategories: [
      { slug: "humanitarian-relief", label: "Humanitarian relief & aid" },
      { slug: "medical-healthcare", label: "Medical & healthcare" },
      { slug: "water-food-relief", label: "Water & food relief" },
      { slug: "orphan-child-care", label: "Orphan & vulnerable child care" },
      { slug: "anti-trafficking", label: "Anti-trafficking & rescue" },
    ],
  },
  {
    slug: "education",
    label: "Education",
    subcategories: [
      { slug: "schools-literacy", label: "Schools & literacy" },
      { slug: "vocational-skills", label: "Vocational & skills training" },
    ],
  },
  {
    slug: "economy",
    label: "Economy",
    subcategories: [
      { slug: "business-as-mission", label: "Business as mission" },
      { slug: "microfinance-jobs", label: "Microfinance & job creation" },
      { slug: "sustainable-agriculture", label: "Sustainable agriculture & development" },
    ],
  },
  {
    slug: "government",
    label: "Government",
    subcategories: [
      { slug: "advocacy-policy", label: "Advocacy & policy" },
      { slug: "justice-human-rights", label: "Justice & human rights" },
    ],
  },
  {
    slug: "media",
    label: "Media",
    subcategories: [
      { slug: "journalism-reporting", label: "Journalism & reporting" },
      { slug: "podcasts-storytelling", label: "Podcasts & storytelling" },
    ],
  },
  {
    slug: "celebration",
    label: "Celebration (Arts & Entertainment)",
    subcategories: [
      { slug: "creative-arts-aid", label: "Creative arts for aid & healing" },
      { slug: "creative-skills", label: "Creative skills training" },
    ],
  },
];

export type OrgType = "nonprofit" | "forprofit" | "church" | "ministry";

export interface Organization {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category: OrgCategory[];
  mountains: Mountain[];
  subcategories: string[];
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
  church: "bg-plum-light text-cream/60 border-cream/20",
  missions: "bg-gold/10 text-gold/80 border-gold/20",
  marketplace: "bg-plum-light text-cream/60 border-cream/20",
};
