import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.container}>
        <img className={styles.navbar_logo} src="/assets/images/logo_navbar.svg" alt="Kompas logo"/>
        <img className={styles.burger_icon} src="/assets/images/menu.png"></img>
        <div className={styles.links}>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/brochures"><a>Brochures & Videos</a></Link></li>
            <li><Link href="/services"><a>Services & Activities</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
            <li><Link href="/about"><a>About us</a></Link></li>
        </div>
        <div className={styles.mobile_nav}>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/brochures"><a>Brochures & Videos</a></Link></li>
            <li><Link href="/services"><a>Services & Activities</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
            <li><Link href="/about"><a>About us</a></Link></li>
        </div>
    </nav>
  )
}
