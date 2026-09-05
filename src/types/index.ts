export type CourseCategory = 'bombeiro' | 'aph' | 'primeiros-socorros' | 'nrs' | 'empresas' | 'especializacao';

export interface CourseModule {
  moduleNumber: number;
  title: string;
  topics: string[];
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: CourseCategory;
  badge?: string;
  iconName: string;
  imageUrl: string;
  imageAlt: string;
  shortDescription: string;
  fullDescription: string;
  objective: string;
  targetAudience: string[];
  workload: string;
  modality: string;
  location: string;
  datesAvailable: string;
  certificationInfo: string;
  requirements?: string[];
  syllabus: CourseModule[];
  faqs?: CourseFAQ[];
  isFeatured?: boolean;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface CorporateFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'geral' | 'matricula' | 'certificados' | 'empresas' | 'nrs';
}

export interface TestimonialItem {
  id: string;
  authorLabel: string;
  role: string;
  courseName: string;
  quote: string;
  isPlaceholder?: boolean;
}

export interface CompanyInfo {
  name: string;
  legalName?: string;
  slogan: string;
  mission: string;
  description: string;
  whatsapp: string;
  whatsappSecondary?: string;
  whatsappRawNumber: string;
  whatsappSecondaryRawNumber?: string;
  phone: string;
  phoneSecondary?: string;
  email: string;
  instagram: string;
  instagramUrl: string;
  address: string;
  addressReference?: string;
  fullAddress: string;
  workingHours: string;
  citiesServed: string;
  // Aliases de compatibilidade
  whatsappPlaceholder: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  instagramPlaceholder: string;
  addressPlaceholder: string;
  workingHoursPlaceholder: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  courseInterest: string;
  isCompany: boolean;
  message: string;
}
