import chezVous from '../../assets/ChezVous.png'
import Location from '../../components/Location'
import { useState, useEffect } from 'react'

function Accueil () {
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)
  const [locationList, setLocationList] = useState([])

  useEffect(() => {
    async function fetchLocations () {
      setDataLoading(true)
      try {
        const response = await fetch('./data/logements.json')
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

  return (
    <div>
      <div className='accueil'>
        <img src={chezVous} alt='Chez vous' />
        <h1> Chez vous, partout et ailleurs </h1>
      </div>
      <div>
        {isDataLoading
          ? (<div> <div className='loader'> </div> </div>)
          : (
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
            )}
      </div>
    </div>
  )
}

export default Accueil
