import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/About.module.css'

export default function about() {
  return (
    <div className={styles.container}>
        <Navbar/>
          <div className={styles.content}>
            <div className={styles.description}>
              <h1>About our company</h1>
              <p>Companies and offices around the world give us the advantage of having in-depth knowledge of local particularities at top destinations, and also allow us to co-create industry trends.
Companies and offices around the world give us the advantage of having in-depth knowledge of local particularities at top destinations, and also allow us to co-create industry trends.
Companies and offices around the world give us the advantage of having in-depth knowledge of local particularities at top destinations, and also allow us to co-create industry trends.
Companies and offices around the world give us the advantage of having in-depth knowledge of local particularities at top destinations, and also allow us to co-create industry trends.</p>
            </div>

            <div className={styles.images}>
              <div className={styles.big_image}>
                <img src="/assets/images/1_about.png" alt="Chappel"/>
              </div>
              <div className={styles.small_images}>
                <img src="/assets/images/2_about.png" alt="Chappel"/>
                <img src="/assets/images/3_about.png" alt="Chappel"/>
                <img src="/assets/images/4_about.png" alt="Chappel"/>
              </div>
            </div>
          </div>
        <Footer/>
    </div>
  )
}
