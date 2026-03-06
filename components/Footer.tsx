import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`page-container ${styles.inner}`}>
        <div className={styles.brandRow}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/assets/footer/sudbury-footer-logo.svg"
              alt=""
              aria-hidden="true"
              className={styles.logoImage}
              width={63}
              height={63}
            />
            <span className={styles.logoText}>Sudbury Jobs</span>
          </Link>
        </div>

        <div className={styles.linksRow}>
          <nav className={styles.linkGroup} aria-label="Legal">
            <Link href="/accessibility" className={styles.link}>Accessibility</Link>
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
            <Link href="/terms" className={styles.link}>Terms of Service</Link>
            <Link href="/contact" className={styles.link}>Contact Us</Link>
          </nav>

          <nav className={styles.linkGroup} aria-label="Social">
            <a href="https://linkedin.com" className={styles.link} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://glassdoor.com" className={styles.link} target="_blank" rel="noopener noreferrer">
              Glassdoor
            </a>
            <a href="https://twitter.com" className={styles.link} target="_blank" rel="noopener noreferrer">
              X
            </a>
            <a href="https://instagram.com" className={styles.link} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </nav>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.divider} />
          <p className={styles.copyright}>Sudbury Jobs @2026</p>
        </div>
      </div>
    </footer>
  )
}
