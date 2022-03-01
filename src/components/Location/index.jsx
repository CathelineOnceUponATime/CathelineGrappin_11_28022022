// import ChezVous from '../../assets/ChezVous.png'

function Location ({ titre, image, description }) {
  return (
    <figure>
      <img src={image} alt='location' />
      <figcaption> {titre} </figcaption>
    </figure>
  )
}

export default Location
