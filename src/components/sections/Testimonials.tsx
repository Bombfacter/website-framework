import { ClientConfig } from '@/lib/types'
import styles from './Testimonials.module.css'

interface TestimonialsProps {
  config: ClientConfig
}

function Stars({ rating }: { rating: number }) {
  const clamped = Math.min(5, Math.max(1, Math.round(rating)))
  return (
    <div className={styles.stars} aria-label={`${clamped} out of 5 stars`}>
      {'★'.repeat(clamped)}{'☆'.repeat(5 - clamped)}
    </div>
  )
}

export default function Testimonials({ config }: TestimonialsProps) {
  // Caller is responsible for checking config.testimonials exists before rendering
  const testimonials = config.testimonials!

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>What Our Customers Say</h2>
        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.card}>
              {item.rating != null && <Stars rating={item.rating} />}
              <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
              <p className={styles.name}>— {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
