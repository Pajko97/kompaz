import React, { useEffect } from 'react'
import styles from '../../../../styles/Individual.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import data_cruises from '../../../../data/adriatic_cruises.json'

export default function Individual() {
  const [data, setData] = useState({})
  const [itinerary, setItinerary] = useState({})
  const [features, setFeatures] = useState([])
  const [datesPricing, setDatesPricing] = useState()
  const [section, setSection] = useState(1)
  const router = useRouter()
  const id  = router.query.cruise_id
  useEffect(() => {
    const dats = data_cruises.adriatic_cruises.filter((cruise) => cruise.cruise_id == 3)
    setData(dats[0])
    let fts = dats[0].features.included.split("#")
    setFeatures(fts)
    setItinerary(dats[0].itinerary)
    setDatesPricing(dats[0].dates_pricing)
    console.log(datesPricing)
  }, [])  


  return (
    <div className={styles.container}>
      <Navbar/>
        <div className={styles.content}>
          <h1>{data.cruise_name}</h1>
          <div className={styles.sections}>
            <div className={styles.sections_navigation}>
              <h2 onClick={() => setSection(1)} className={section == 1 ? styles.nav_active : ''}>Features</h2>
              <h2 onClick={() => setSection(2)} className={section == 2 ? styles.nav_active : ''}>Itinerary</h2>
              <h2 onClick={() => setSection(3)} className={section == 3 ? styles.nav_active : ''}>Dates & Pricing</h2>
              <h2 onClick={() => setSection(4)} className={section == 4 ? styles.nav_active : ''}>Map</h2>
              <h2 onClick={() => setSection(5)} className={section == 5 ? styles.nav_active : ''}>Galery</h2>
            </div>

            <div className={styles.sections_content}>
              <div className={styles.lighter}>
             {section == 1 && features.length > 2 ? features.map((feature, i) => {
              return(
                <p key={i}>{feature}</p>
              )
            }) : ''} 

            {section == 2 && itinerary.map((day, i) => {
               const { day_headline, day_summary } = day
              return(
                <div key={i}>
                  <p className={styles.itinerary_heading}>{day_headline}</p>
                  <p className={styles.itinerary_summary}>{day_summary}</p>
                </div>
              )
            })} 

            {section == 3 && <table>
              <thead>
                <th>{data.cruise_name}, Season 2022</th>
                <th>LS</th>
                <th>MS</th>
                <th>HS</th>
              </thead>
              <tbody>
                <tr>
                  <td>{/* {datesPricing.dates.low_season.map((date) => {
                  <p></p>
                })} */}</td>
                </tr>
              </tbody>
              </table>} 
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}
