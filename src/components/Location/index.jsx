// import ChezVous from '../../assets/ChezVous.png'
import { Link } from 'react-router-dom'

function Location ({ id, titre, image, description }) {
  // const { idLogement } = useParams()
  return (
    <Link to={`/logement/${id}`}>
      <figure>
        <img src={image} alt='location' />
        <figcaption> {titre} </figcaption>
      </figure>
    </Link>
  )
}

export default Location
