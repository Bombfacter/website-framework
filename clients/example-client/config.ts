import { ClientConfig } from '../../src/lib/types'

const config: ClientConfig = {
  slug: 'example-client',
  businessName: 'Your Business Name',
  tagline: 'A short tagline that describes what you do',
  packageTier: 'standard',

  contact: {
    phone: '(555) 000-0000',
    email: 'hello@yourbusiness.com',
    address: '123 Main St',
    city: 'Your City, ST 00000',
    serviceArea: 'Your City and surrounding areas',
  },

  brand: {
    primaryColor: '#0070f3',
    accentColor: '#ff6b35',
    fontFamily: 'Inter, sans-serif',
    logoUrl: '/logo.png',
  },

  hero: {
    headline: 'Your Main Headline Goes Here',
    subheadline: 'A supporting sentence that reinforces your value proposition.',
    ctaText: 'Get a Free Quote',
    ctaHref: '#contact',
    backgroundImageUrl: '/hero-bg.jpg',
  },

  services: [
    {
      title: 'Service One',
      description: 'Brief description of what this service includes.',
      iconName: 'wrench',
    },
    {
      title: 'Service Two',
      description: 'Brief description of what this service includes.',
      iconName: 'shield',
    },
    {
      title: 'Service Three',
      description: 'Brief description of what this service includes.',
      iconName: 'star',
    },
  ],

  about: {
    headline: 'About Your Business',
    body: 'A few sentences about who you are, how long you have been in business, and why customers trust you.',
    imageUrl: '/about.jpg',
  },

  testimonials: [
    {
      name: 'Customer Name',
      quote: "Positive experience described in the customer's own words.",
      rating: 5,
    },
    {
      name: 'Customer Name',
      quote: "Another positive experience described in the customer's own words.",
      rating: 5,
    },
  ],

  faq: [
    {
      question: 'What is your typical response time?',
      answer: 'Placeholder answer — replace with real information.',
    },
    {
      question: 'Do you offer free estimates?',
      answer: 'Placeholder answer — replace with real information.',
    },
  ],

  enabledSections: ['hero', 'services', 'about', 'testimonials', 'faq', 'contact'],

  integrations: {
    leadFormEnabled: true,
    chatbotEnabled: false,
    crmWebhookUrl: undefined,
    googleAnalyticsId: undefined,
  },
}

export default config
