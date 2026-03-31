import styles from './LeadForm.module.css'

/*
  LeadForm — presentational placeholder.

  Submission logic is intentionally absent. To connect this to a backend:
  - Add an onSubmit handler (client component) and POST to config.integrations.crmWebhookUrl
  - Or replace the <form> action with a Next.js Server Action
  The field names (name, email, phone, message) are stable and should be
  preserved when wiring up the integration.
*/
export default function LeadForm() {
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="lead-name">Name</label>
          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="lead-phone">Phone</label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 000-0000"
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="lead-email">Email</label>
        <input
          id="lead-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={styles.input}
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="lead-message">Message</label>
        <textarea
          id="lead-message"
          name="message"
          placeholder="Tell us about your project..."
          className={styles.textarea}
        />
      </div>
      <button type="submit" className={styles.submit}>
        Send Message
      </button>
    </form>
  )
}
