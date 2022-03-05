/* eslint-env jquery */

function Accordion ({ taille, titre, description }) {
  const detailGrand = taille?.length > 0

  function getClassName () {
    return detailGrand > 0 ? 'accordion' : ''
  }

  return (
    <details className={getClassName()}>
      <summary> {titre} <i className='fas fa-2x fa-chevron-up' /> </summary>
      <p> {Array.isArray(description)
        ? (description.map(desc => desc + '\n '))
        : (description)}
      </p>
    </details>
  )
}

export default Accordion
