// import ChezVous from '../../assets/ChezVous.png'
import { Link } from 'react-router-dom'

function Location ({ id, titre, image, description }) {
  // const { idLogement } = useParams()
  return (
    <figure>
      <Link to={`/logement/${id}`}>
        <img src={image} alt='location' />
        <figcaption> {titre} </figcaption>
      </Link>
    </figure>
  )
}

export default Location
