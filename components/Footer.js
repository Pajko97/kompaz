import Link from 'next/link'
import React from 'react'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>
        <img src="/assets/images/logo_navbar.svg"/>
        <div className={styles.list}>
            <Link href="/"><a>Services</a></Link>
            <Link href="/"><a>Destinations</a></Link>
            <Link href="/"><a>Company</a></Link>
            <Link href="/"><a>Contact</a></Link>
        </div>

        <div className={styles.list}>
            <Link href="/"><a>Services</a></Link>
            <Link href="/"><a>Destinations</a></Link>
            <Link href="/"><a>Company</a></Link>
            <Link href="/"><a>Contact</a></Link>
        </div>

        <div className={styles.gdpr}>
            <div className={styles.input}>
                <input type="email" placeholder='Your email'/>
                <div className={styles.button}><img src="/assets/images/logo_star.svg"/></div>
            </div>

            <p><strong>GDPR CONSENT</strong></p>
           
        </div>
    </footer>
  )
}
