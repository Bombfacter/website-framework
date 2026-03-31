import { ClientConfig } from '@/lib/types'
import styles from './Hero.module.css'

interface HeroProps {
  config: ClientConfig
}

export default function Hero({ config }: HeroProps) {
  const { headline, subheadline, ctaText, ctaHref } = config.hero

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.subheadline}>{subheadline}</p>
        <a href={ctaHref} className={styles.cta}>
          {ctaText}
        </a>
      </div>
    </section>
  )
}
