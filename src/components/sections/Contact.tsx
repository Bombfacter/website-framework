import { ClientConfig } from '@/lib/types'
import LeadForm from '@/components/integrations/LeadForm'
import styles from './Contact.module.css'

interface ContactProps {
  config: ClientConfig
}

export default function Contact({ config }: ContactProps) {
  const { contact, integrations } = config
  const showForm = integrations.leadFormEnabled

  const info: { label: string; value: string; href?: string }[] = [
    ...(contact.phone    ? [{ label: 'Phone',        value: contact.phone,      href: `tel:${contact.phone}` }]      : []),
    ...(contact.email    ? [{ label: 'Email',        value: contact.email,      href: `mailto:${contact.email}` }]   : []),
    ...(contact.address  ? [{ label: 'Address',      value: contact.address }]                                       : []),
    ...(contact.city     ? [{ label: 'City',         value: contact.city }]                                          : []),
    ...(contact.serviceArea ? [{ label: 'Service Area', value: contact.serviceArea }]                                : []),
  ]

  const infoBlock = info.length > 0 && (
    <div className={styles.infoBlock}>
      {info.map(({ label, value, href }) => (
        <div key={label} className={styles.infoItem}>
          <span className={styles.infoLabel}>{label}</span>
          {href
            ? <a href={href} className={styles.infoLink}>{value}</a>
            : <p className={styles.infoValue}>{value}</p>
          }
        </div>
      ))}
    </div>
  )

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Get in Touch</h2>

        {showForm ? (
          <div className={styles.layout}>
            {infoBlock}
            <div className={styles.formBlock}>
              <h3 className={styles.formHeading}>Send Us a Message</h3>
              <LeadForm />
            </div>
          </div>
        ) : (
          <div className={styles.layoutFull}>
            {infoBlock}
          </div>
        )}
      </div>
    </section>
  )
}
