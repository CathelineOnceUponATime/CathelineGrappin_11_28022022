import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Tag from '../../components/Tag'
import Etoiles from '../../components/Etoiles'
import Accordion from '../../components/Accordion'
import Galerie from '../../components/Galerie'

function Logement () {
  const { idLogement } = useParams()
  const [error, setError] = useState(false)
  const [locationList, setLocationList] = useState([])

  useEffect(() => {
    async function fetchLocations () {
      try {
        const response = await fetch('../data/logements.json')
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
    <h1> Oups !! Une erreur est survenue </h1>
  }

  const logement = locationList.find(location => location.id.includes(idLogement))
  return (
    <div>
      <Galerie pictures={logement?.pictures} />
      <div className='logement'>
        <article className='infoLogement'>
          <h1> {logement?.title} </h1>
          <h2> {logement?.location} </h2>
          <section className='tags'>
            {logement?.tags.map((tag, index) => (
              <Tag key={`${tag}-${index}`} tag={tag} />
            ))}
          </section>
        </article>
        <section className='infoLoueur'>
          <article className='nomImageLoueur'>
            <h3> {logement?.host.name} </h3>
            <img src={logement?.host.picture} alt={logement?.host.name} />
          </article>
          <Etoiles key={`${logement?.rating}-${logement?.id}`} etoiles={logement?.rating} />
        </section>
      </div>
      <div className='accordeon'>
        <Accordion key={`${'description'}-${logement?.id}`} titre='Description' description={logement?.description} />
        <Accordion key={`${'equipements'}-${logement?.id}`} titre='Équipements' description={logement?.equipments} />
      </div>
    </div>
  )
}

export default Logement
