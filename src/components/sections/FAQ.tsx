import { ClientConfig } from '@/lib/types'
import styles from './FAQ.module.css'

interface FAQProps {
  config: ClientConfig
}

export default function FAQ({ config }: FAQProps) {
  // Caller is responsible for checking config.faq exists before rendering
  const faq = config.faq!

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
        <div className={styles.list}>
          {faq.map((item, index) => (
            // data-open is intentionally unused now — easy hook for accordion upgrade
            <div key={index} className={styles.item} data-open="true">
              <div className={styles.question}>{item.question}</div>
              <p className={styles.answer}>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
