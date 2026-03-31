export type PackageTier = 'basic' | 'standard' | 'premium'

export type SectionKey =
  | 'hero'
  | 'services'
  | 'about'
  | 'testimonials'
  | 'faq'
  | 'contact'
  | 'cta'

export interface ClientConfig {
  // Identity
  slug: string
  businessName: string
  tagline: string
  packageTier: PackageTier

  // Contact
  contact: {
    phone?: string
    email?: string
    address?: string
    city?: string
    serviceArea?: string
  }

  // Branding — overrides CSS token defaults at runtime
  brand: {
    primaryColor: string
    accentColor: string
    fontFamily?: string
    logoUrl?: string
  }

  // Hero section
  hero: {
    headline: string
    subheadline: string
    ctaText: string
    ctaHref: string
    backgroundImageUrl?: string
  }

  // Services — always shown
  services: Array<{
    title: string
    description: string
    iconName?: string
  }>

  // Testimonials — standard and above
  testimonials?: Array<{
    name: string
    quote: string
    rating?: number // 1–5
  }>

  // FAQ — standard and above
  faq?: Array<{
    question: string
    answer: string
  }>

  // About section — standard and above
  about?: {
    headline: string
    body: string
    imageUrl?: string
  }

  // Which sections to render, in order
  enabledSections: SectionKey[]

  // Integration flags
  integrations: {
    leadFormEnabled: boolean
    chatbotEnabled: boolean       // premium only
    crmWebhookUrl?: string        // premium only
    googleAnalyticsId?: string
  }
}
