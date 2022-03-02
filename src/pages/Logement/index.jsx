import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Tag from '../../components/Tag'
import Etoiles from '../../components/Etoiles'
import Accordion from '../../components/Accordion'

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
    return <span> Oups il y a eu un problème </span>
  }
  const logement = locationList.find(location => location.id.includes(idLogement))
  return (
    <div>
      {isDataLoading
        ? (<h1>  Error </h1>)
        : (
          <div>
            <img className='imgAppart' src={logement?.cover} alt={logement?.title} />
            <div className='logement'>
              <div className='infoLogement'>
                <h1> {logement?.title} </h1>
                <h2> {logement?.location} </h2>
                <div className='tags'>
                  {logement?.tags.map((tag, index) => (
                    <Tag key={`${tag}-${index}`} tag={tag} />
                  ))}
                </div>
              </div>
              <div className='infoLoueur'>
                <div className='nomImageLoueur'>
                  <h3> {logement?.host.name} </h3>
                  <img src={logement?.host.picture} alt={logement?.host.name} />
                </div>
                <Etoiles key={`${logement?.rating}-${logement?.id}`} etoiles={logement?.rating} />
              </div>
            </div>
            <div className='accordeon'>
              <Accordion key={`${'description'}-${logement?.id}`} titre='description' description={logement?.description} />
              <Accordion key={`${'equipements'}-${logement?.id}`} titre='équipements' description={logement?.equipments} />
            </div>
          </div>
          )}
    </div>
  )
}

export default Logement
