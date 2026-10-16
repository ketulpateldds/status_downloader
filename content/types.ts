export interface HowToStep {
  title: string;
  description: string;
  locationNote: string;
  svgBadge: string;
}

export interface DeviceHowTo {
  android: HowToStep[];
  iphone: HowToStep[];
  desktop: HowToStep[];
}

export interface ContentTypeComparison {
  name: string;
  availability: string;
  supportedFormats: string;
  recommendedUse: string;
}

export interface ContentCard {
  title: string;
  badge: string;
  formats: string[];
  honestLimitation: string;
  description: string;
}

export interface UseCase {
  title: string;
  persona: string;
  description: string;
}

export interface TroubleshootingItem {
  problem: string;
  cause: string;
  resolution: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PlatformContent {
  slug: string;
  name: string;
  tagline: string;
  heroH1: string;
  heroSubtitle: string;
  placeholderText: string;
  accentColor: string;
  acceptedLinkExamples: string[];
  toolModes: { id: string; label: string; hint: string }[];
  behaviorExplanation: {
    heading: string;
    description: string;
    canSave: string[];
    cannotSave: string[];
  };
  comparisonTable: ContentTypeComparison[];
  contentCards: ContentCard[];
  useCases: UseCase[];
  troubleshooting: TroubleshootingItem[];
  faqs: FaqItem[];
  closingCta: {
    heading: string;
    subheading: string;
    buttonText: string;
  };
  sectionOrder: ('how-to' | 'behavior' | 'cards' | 'table' | 'use-cases' | 'troubleshooting' | 'faqs')[];
}
