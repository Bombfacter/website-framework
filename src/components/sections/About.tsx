import Image from 'next/image'
import { ClientConfig } from '@/lib/types'
import styles from './About.module.css'

interface AboutProps {
  config: ClientConfig
}

export default function About({ config }: AboutProps) {
  // Caller is responsible for checking config.about exists before rendering
  const about = config.about!

  if (about.imageUrl) {
    return (
      <section className={styles.section}>
        <div className={styles.inner}>
          <div>
            <h2 className={styles.headline}>{about.headline}</h2>
            <p className={styles.body}>{about.body}</p>
          </div>
          <Image
            src={about.imageUrl}
            alt={about.headline}
            width={600}
            height={450}
            className={styles.image}
          />
        </div>
      </section>
    )
  }

  return (
    <section className={styles.section}>
      <div className={styles.innerText}>
        <h2 className={styles.headline}>{about.headline}</h2>
        <p className={styles.body}>{about.body}</p>
      </div>
    </section>
  )
}
