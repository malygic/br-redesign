// Content Structure Types
export interface PageMetadata {
  title: string;
  description: string;
  favicon_url?: string;
  keywords?: string[];
  og_image?: string;
}

export interface ButtonConfig {
  text: string;
  url: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface ImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon?: string;
  button: ButtonConfig;
  features?: string[];
}

export interface TestimonialCard {
  id: string;
  name: string;
  company: string;
  quote: string;
  image: ImageConfig;
  rating?: number;
}

export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  icon?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description?: string;
  image: ImageConfig;
  social?: {
    linkedin?: string;
    email?: string;
  };
}

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  popular?: boolean;
  button: ButtonConfig;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface PageContent {
  metadata: PageMetadata;
  sections: {
    [sectionName: string]: unknown;
  };
}

// Calculator State Types
export interface CalculatorWebDevelopment {
  enabled: boolean;
  pageCount: number;
  multilingual: boolean;
  languageCount: number;
  additionalFeatures: string[];
}

export interface CalculatorMarketing {
  enabled: boolean;
  services: string[];
}

export interface CalculatorTotals {
  webPrice: number;
  multilingualPrice: number;
  featuresPrice: number;
  marketingPrice: number;
  totalPrice: number;
}

export interface CalculatorState {
  webDevelopment: CalculatorWebDevelopment;
  marketing: CalculatorMarketing;
  totals: CalculatorTotals;
}

export type CalculatorAction =
  | { type: 'TOGGLE_WEB_DEVELOPMENT' }
  | { type: 'SET_PAGE_COUNT'; payload: number }
  | { type: 'TOGGLE_MULTILINGUAL' }
  | { type: 'SET_LANGUAGE_COUNT'; payload: number }
  | { type: 'TOGGLE_ADDITIONAL_FEATURE'; payload: string }
  | { type: 'TOGGLE_MARKETING' }
  | { type: 'TOGGLE_MARKETING_SERVICE'; payload: string }
  | { type: 'CALCULATE_TOTALS' }
  | { type: 'RESET_CALCULATOR' };

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  scheduleMeeting?: boolean;
  meetingDate?: string;
  meetingTime?: string;
  inspirationLink?: string;
  calculatorData?: CalculatorState;
}

export interface QuoteFormData extends ContactFormData {
  projectType: string;
  budget?: string;
  timeline?: string;
  calculatorData: CalculatorState;
}

// Language and Internationalization Types
export type SupportedLanguage = 'cs' | 'en' | 'uk';

export interface LanguageConfig {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
}

// Blog Types (for Sanity.io integration)
export interface BlogAuthor {
  name: string;
  slug: string;
  image?: ImageConfig;
  bio?: string;
}

export interface BlogCategory {
  title: string;
  slug: string;
  description?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  author: BlogAuthor;
  mainImage?: ImageConfig;
  categories: BlogCategory[];
  publishedAt: string;
  excerpt?: string;
  body: unknown; // PortableText from Sanity
  metaDescription?: string;
  readingTime?: number;
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactApiResponse extends ApiResponse {
  data?: {
    emailSent: boolean;
    meetingScheduled?: boolean;
    calendarEventId?: string;
  };
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AnimatedComponentProps extends BaseComponentProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

// Store Types (for Zustand)
export interface LanguageStore {
  currentLanguage: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
}

export interface UIStore {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
}

// Environment Variables Types
export interface EnvironmentConfig {
  NEXT_PUBLIC_SANITY_PROJECT_ID: string;
  SANITY_API_TOKEN: string;
  RESEND_API_KEY: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  GOOGLE_REFRESH_TOKEN: string;
  COMPANY_EMAIL: string;
}