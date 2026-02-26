import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`page-container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/assets/header/Logo.svg"
            alt=""
            aria-hidden="true"
            className={styles.logoMark}
            width={34}
            height={34}
            priority
          />
          <span className={styles.logoText}>Sudbury Jobs</span>
        </Link>

        <nav className={styles.nav} aria-label="Main">
          <a href="https://sudbury-city-ui.vercel.app/#login" className={styles.loginLink}>
            Log In
          </a>
          <a href="https://sudbury-city-ui.vercel.app" className={styles.signupButton}>
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  )
}
