import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../../../components/Footer'
import Navbar from '../../../../components/Navbar'
import styles from '../../../../styles/AdriaticSupreme.module.css'

export default function AdriaticSupreme() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Navbar/>
        <div className={styles.header_content}>
          <img src="/assets/images/logo_star.svg" layout='fill' alt="Kompas logo"/>
          <h1 className={styles.heading}>Supreme Adriatic Cruises</h1>
          <p className={styles.subheading}>Companies and offices around the world give us the advantage of having in-depth knowledge of local particularities at top destinations, and also allow us to co-create industry trends.</p>
        </div>
      </div>

      <div className={styles.services}>
        <div style={{ backgroundImage: `url('/assets/images/adriatic_1.png'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));` }} className={styles.service}>
            <p>M204 Supreme Adriatic Cruises</p>
            <Link href="/individual"><a>MORE</a></Link>
        </div>

        <div style={{ backgroundImage: `url('/assets/images/adriatic_1.png'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));` }} className={styles.service}>
            <p>M204 Supreme Adriatic Cruises</p>
            <Link href="/individual"><a>MORE</a></Link>
        </div>


        <div style={{ backgroundImage: `url('/assets/images/adriatic_1.png'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));` }} className={styles.service}>
            <p>M204 Supreme Adriatic Cruises</p>
            <Link href="/individual"><a>MORE</a></Link>
        </div>


 <div style={{ backgroundImage: `url('/assets/images/adriatic_1.png'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));` }} className={styles.service}>
            <p>M204 Supreme Adriatic Cruises</p>
            <Link href="/individual"><a>MORE</a></Link>
        </div>


        <div style={{ backgroundImage: `url('/assets/images/adriatic_1.png'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));` }} className={styles.service}>
            <p>M204 Supreme Adriatic Cruises</p>
            <Link href="/individual"><a>MORE</a></Link>
        </div>


        <div style={{ backgroundImage: `url('/assets/images/adriatic_1.png'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));` }} className={styles.service}>
            <p>M204 Supreme Adriatic Cruises</p>
            <Link href="/individual"><a>MORE</a></Link>
        </div>


        <div style={{ backgroundImage: `url('/assets/images/adriatic_1.png'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));` }} className={styles.service}>
            <p>M204 Supreme Adriatic Cruises</p>
            <Link href="/individual"><a>MORE</a></Link>
        </div>


        <div style={{ backgroundImage: `url('/assets/images/adriatic_1.png'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));` }} className={styles.service}>
            <p>M204 Supreme Adriatic Cruises</p>
            <Link href="/individual"><a>MORE</a></Link>
        </div>



      </div>
      <Footer/>
    </div>
  )
}
