import { ClientConfig } from '@/lib/types'
import styles from './Services.module.css'

interface ServicesProps {
  config: ClientConfig
}

export default function Services({ config }: ServicesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Our Services</h2>
        <div className={styles.grid}>
          {config.services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardAccent} />
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
