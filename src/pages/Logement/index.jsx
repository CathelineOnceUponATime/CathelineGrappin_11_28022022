/* eslint-disable no-redeclare */
/* global fetch */
/* eslint no-undef: "error" */

import { useState, useEffect } from 'react'
import { useParams, Routes, Route } from 'react-router-dom'
import Tag from '../../components/Tag'
import Etoiles from '../../components/Etoiles'
import Accordion from '../../components/Accordion'
import Galerie from '../../components/Galerie'
import Error from '../../components/Error'

function Logement () {
  const { idLogement } = useParams()
  const [error, setError] = useState(false)
  const [locationList, setLocationList] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    async function fetchLocations () {
      setDataLoading(true)
      try {
        const response = await fetch('../data/logements.json')
        const { locationList } = await response.json()
        setLocationList(locationList)
      } catch (err) {
        console.log('----- Error -----', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchLocations()
  }, [])

  if (error) {
    <h1> Oups !! Une erreur est survenue </h1>
  }

  const logement = locationList.find(location => location.id.includes(idLogement))
  return (
    isDataLoading
      ? (<div className='loaderWrapper'> <div className='loader' /> </div>)
      : (logement === undefined
          ? (<Routes><Route path='/*' element={<Error />} /></Routes>)
          : (<div>
            <Galerie pictures={logement?.pictures} />
            <div className='logement'>
              <div className='infoLogement'>
                <h1> {logement?.title} </h1>
                <h2> {logement?.location} </h2>
                <section className='tags'>
                  {logement?.tags.map((tag, index) => (
                    <Tag key={`${tag}-${index}`} tag={tag} />
                  ))}
                </section>
              </div>
              <section className='infoLoueur'>
                <div className='nomImageLoueur'>
                  <h3> {logement?.host.name} </h3>
                  <img src={logement?.host.picture} alt={logement?.host.name} />
                </div>
                <Etoiles key={`${logement?.rating}-${logement?.id}`} etoiles={logement?.rating} />
              </section>
            </div>
            <div className='accordeon'>
              <Accordion key={`${'description'}-${logement?.id}`} titre='Description' description={logement?.description} />
              <Accordion key={`${'equipements'}-${logement?.id}`} titre='Équipements' description={logement?.equipments} />
            </div>
          </div>
            )

        )
  )
}

export default Logement
