import chezVous from '../../assets/ChezVous.png'

function Accueil () {
  return (
    <div className='accueil'>
      <img src={chezVous} alt='Chez vous' />
      <h1> Chez vous, partout et ailleurs </h1>
    </div>
  )
}

export default Accueil
