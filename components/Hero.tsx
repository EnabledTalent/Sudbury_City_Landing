import PartnerCarousel from './PartnerCarousel'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgGradient} />
        <div className={styles.bgWaves} />
      </div>

      <div className={styles.main}>
        <div className={`page-container ${styles.content}`}>
          <p className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Serving Greater Sudbury and Northern Ontario
          </p>

          <h1 className={styles.title}>
            Sudbury&apos;s Platform
            <br className={styles.mobileOnly} />
            {' '}for{' '}
            <span className={styles.accent}>
              Jobs, Hiring, and
              <br className={styles.mobileOnly} />
              {' '}Workforce Services
            </span>
          </h1>

          <p className={styles.description}>
            Greater Sudbury&apos;s unified workforce portal connecting job seekers, employers,
            and service providers. Access local jobs, training programs, and workforce services
            all in one secure, accessible platform.
          </p>

          <div className={styles.ctas}>
            <a href="https://sudbury-city-ui.vercel.app/" className={`${styles.cta} ${styles.ctaPrimary}`}>
              Get Started &rarr;
            </a>
            <a href="#seamless-experience" className={`${styles.cta} ${styles.ctaSecondary}`}>
              How it works &rarr;
            </a>
          </div>
        </div>

        <div className={styles.partners}>
          <div className="page-container">
            <PartnerCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
