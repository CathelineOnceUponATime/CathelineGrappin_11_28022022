/* eslint-disable no-redeclare */
/* global fetch */
/* eslint no-undef: "error" */

import chezVous from '../../assets/ChezVous.png'
import Location from '../../components/Location'
import { useState, useEffect } from 'react'

function Accueil () {
  const [error, setError] = useState(false)
  const [locationList, setLocationList] = useState([])

  useEffect(() => {
    async function fetchLocations () {
      try {
        const response = await fetch('./data/logements.json')
        const { locationList } = await response.json()
        setLocationList(locationList)
      } catch (err) {
        console.log('----- Error -----', err)
        setError(true)
      }
    }
    fetchLocations()
  }, [])

  if (error) {
    return <span> Oups il y a eu un problème </span>
  }

  return (
    <article>
      <header className='accueil'>
        <img src={chezVous} alt='Chez vous' />
        <h1> Chez vous, partout et ailleurs </h1>
      </header>
      <div className='locations'>
        {locationList.map((location) => (
          <Location
            key={location.id}
            id={location.id}
            titre={location.title}
            image={location.cover}
          />
        ))}
      </div>
    </article>
  )
}

export default Accueil
