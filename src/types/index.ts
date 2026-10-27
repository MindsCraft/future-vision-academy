export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  url?: string;
  tagline: string;
  description: string;
  eiin?: string;
  established?: number;
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  socials: {
    facebook?: string;
    youtube?: string;
    linkedin?: string;
  };
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Admission' | 'Administrative' | 'Events';
  downloadUrl?: string;
  isUrgent?: boolean;
}

export interface ProgramTier {
  id: string;
  title: string;
  gradeSpan: string;
  summary: string;
  features: string[];
}
