function Etoiles ({ etoiles }) {
  const scaleType = <i className='fas fa-star' />
  const range = [1, 2, 3, 4, 5]
  return (
    <div>
      {range.map((rangeElem) => etoiles >= rangeElem ? (<span key={rangeElem.toString()}> {scaleType} </span>) : null)}
    </div>
  )
}

export default Etoiles
