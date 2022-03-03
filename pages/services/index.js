import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import styles from '../../styles/Services.module.css'

export default function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Navbar/>
        <div className={styles.header_content}>
          <img src="/assets/images/logo_star.svg" layout='fill' alt="Kompas logo"/>
          <h1 className={styles.heading}>Services and Activities</h1>
          <p className={styles.subheading}>Companies and offices around the world give us the advantage of having in-depth knowledge of local particularities at top destinations, and also allow us to co-create industry trends.</p>
        </div>
      </div>

      <div className={styles.services}>
        <div className={styles.service_type}>
          <h1>Adriatic Cruises</h1>
          <p>This large and important region stretching from the Baltic Sea in the north to the Adriatic in the south is home to the fabled mountain range of the Alps and some of  the world’s most prosperous old and preserved cities. While ethnically different, the countries of Central Europe share a similar culture and history. It is very well connected within Europe and with the rest of the world.</p>
          <div className={styles.service_images}>
           <img src="./assets/images/adriatic_1.png" alt="Cruiser 1" />
           <img src="./assets/images/adriatic_2.png" alt="Cruiser 2" />
          </div>
          <Link href="/"><a>See more</a></Link>
        </div>

        <div className={styles.service_type}>
          <h1>Escorted Tours</h1>
          <p>Northern Europe is one of the most progressive regions. It includes the Nordic countries and the Baltic states and in some definitions also the British Isles, northern Germany, northern Belarus and northwest Russia. For some it is considered to be the happiest place in the world and is home to stunning fjords, chill-out culture, and historically significant monuments.</p>
          <div className={styles.service_images}>
           <img src="./assets/images/escorted_1.png" alt="Cruiser 1" />
           <img src="./assets/images/escorted_2.png" alt="Cruiser 2" />
          </div>
          <Link href="/"><a>See more</a></Link>
        </div>

        <div className={styles.service_type}>
          <h1>City stays</h1>
          <p>Southern Europe includes the Iberian Peninsula, the Italian Peninsula, and the Balkan Peninsula. These three peninsulas are separated from the rest of Europe by towering mountain ranges. Located in the heart of the Mediterranean Sea provide them with very different types of climates.</p>
          <div className={styles.service_images}>
           <img src="./assets/images/city_1.png" alt="Cruiser 1" />
           <img src="./assets/images/city_2.png" alt="Cruiser 2" />
          </div>
          <Link href="/"><a>See more</a></Link>
        </div>

        <div className={styles.service_type}>
          <h1>Customized groups</h1>
          <p>Western Europe is one of the richest regions of the world. It is a vibrant center of modern culture and its refined cities offer the latest architecture, rich cuisine, music and art.</p>
          <div className={styles.service_images}>
           <img src="./assets/images/customized_1.png" alt="Cruiser 1" />
           <img src="./assets/images/customized_2.png" alt="Cruiser 2" />
          </div>
          <Link href="/"><a>See more</a></Link>
        </div>

        <div className={styles.service_type}>
          <h1>Independent journeys</h1>
          <p>Western Europe is one of the richest regions of the world. It is a vibrant center of modern culture and its refined cities offer the latest architecture, rich cuisine, music and art.</p>
          <div className={styles.service_images}>
           <img src="./assets/images/independent_1.png" alt="Cruiser 1" />
           <img src="./assets/images/independent_2.png" alt="Cruiser 2" />
          </div>
          <Link href="/"><a>See more</a></Link>
        </div>

        <div className={styles.service_type}>
          <h1>Oberammergau</h1>
          <p>Western Europe is one of the richest regions of the world. It is a vibrant center of modern culture and its refined cities offer the latest architecture, rich cuisine, music and art.</p>
          <div className={styles.service_images}>
           <img src="./assets/images/ober_1.png" alt="Cruiser 1" />
           <img src="./assets/images/ober_2.png" alt="Cruiser 2" />
          </div>
          <Link href="/"><a>See more</a></Link>

        </div>  
      </div>
      <Footer/>
    </div>
  )
}
