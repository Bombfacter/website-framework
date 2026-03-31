import { loadClientConfig } from '@/lib/config'
import { getVisibleSections } from '@/lib/packageFeatures'
import { ClientConfig, SectionKey } from '@/lib/types'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'

function renderSection(key: SectionKey, config: ClientConfig) {
  switch (key) {
    case 'hero':
      return <Hero config={config} />
    case 'services':
      return <Services config={config} />
    case 'about':
      return config.about ? <About config={config} /> : null
    case 'testimonials':
      return config.testimonials?.length ? <Testimonials config={config} /> : null
    case 'faq':
      return config.faq?.length ? <FAQ config={config} /> : null
    case 'contact':
      return <Contact config={config} />
    case 'cta':
      // Placeholder — CTABanner component will be added in a future step
      return null
  }
}

export default async function Home() {
  const config = await loadClientConfig()
  const visibleSections = getVisibleSections(config.enabledSections, config.packageTier)

  return (
    <main>
      {visibleSections.map((key) => (
        <div key={key}>{renderSection(key, config)}</div>
      ))}
    </main>
  )
}
