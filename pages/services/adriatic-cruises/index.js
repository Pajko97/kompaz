import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import styles from '../../../styles/AdriaticCruises.module.css'


export default function AdriaticCruises() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Navbar/>
        <div className={styles.header_content}>
          <img src="/assets/images/logo_star.svg" layout='fill' alt="Kompas logo"/>
          <h1 className={styles.heading}>Adriatic Cruises</h1>
          <p className={styles.subheading}>Companies and offices around the world give us the advantage of having in-depth knowledge of local particularities at top destinations, and also allow us to co-create industry trends.</p>
        </div>
      </div>

      <div className={styles.services}>
        <div className={styles.service_type}>
          <h1>Supreme Adriatic Cruisess</h1>
          <p>This large and important region stretching from the Baltic Sea in the north to the Adriatic in the south is home to the fabled mountain range of the Alps and some of  the world’s most prosperous old and preserved cities. While ethnically different, the countries of Central Europe share a similar culture and history. It is very well connected within Europe and with the rest of the world.</p>
          <div className={styles.service_images}>
           <img src="/assets/images/supreme_cruise.png" alt="Cruiser 1" />
          </div>
          <Link href="/"><a>See more</a></Link>
        </div>

        <div className={styles.service_type}>
          <h1>Deluxe Adriatic Cruises</h1>
          <p>Northern Europe is one of the most progressive regions. It includes the Nordic countries and the Baltic states and in some definitions also the British Isles, northern Germany, northern Belarus and northwest Russia. For some it is considered to be the happiest place in the world and is home to stunning fjords, chill-out culture, and historically significant monuments.</p>
          <div className={styles.service_images}>
           <img src="/assets/images/deluxe_cruise.png" alt="Cruiser 1" />
          </div>
          <Link href="/"><a>See more</a></Link>
        </div>

        <div className={styles.service_type}>
          <h1>Adriatic Cruise & Land</h1>
          <p>Western Europe is one of the richest regions of the world. It is a vibrant center of modern culture and its refined cities offer the latest architecture, rich cuisine, music and art.</p>
          <div className={styles.service_images}>
           <img src="/assets/images/cruise_land.png" alt="Cruiser 1" />
          </div>
          <Link href="/"><a>See more</a></Link>
        </div>

      </div>
      <Footer/>
    </div>
  )
}
