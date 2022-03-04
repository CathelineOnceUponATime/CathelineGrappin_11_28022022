import star from '../../assets/star_rate.svg'
import starVide from '../../assets/star_rate-vide.svg'

function Etoiles ({ etoiles }) {
  const etoilePleine = <img src={star} alt='star' />
  const etoileVide = <img src={starVide} alt='star' />
  const range = [1, 2, 3, 4, 5]
  return (
    <div>
      {range.map((rangeElem) => etoiles >= rangeElem ? (<span key={rangeElem.toString()}> {etoilePleine} </span>) : (<span key={rangeElem.toString()}> {etoileVide} </span>))}
    </div>
  )
}

export default Etoiles
