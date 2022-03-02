/* eslint-env jquery */

function Accordion ({ titre, description }) {
  return (
    <div>
      <details open>
        <summary> {titre} <i className='fas fa-2x fa-chevron-up' /> </summary>
        <div>
          <p> {Array.isArray(description)
            ? (description.map(desc => desc + '\n '))
            : (description)}
          </p>
        </div>
      </details>
    </div>
  )
}

export default Accordion
