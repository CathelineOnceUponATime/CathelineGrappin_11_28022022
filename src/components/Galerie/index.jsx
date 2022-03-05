function Galerie ({ pictures }) {
  let photoCourante = 0
  let photoSuivante = photoCourante === pictures?.length - 1 ? 0 : photoCourante + 1
  let photoPrecedente = photoCourante === 0 ? pictures?.length - 1 : photoCourante - 1

  function setPhotoSuivante (suivant) {
    const imgLogement = document.getElementById('imgLogement')
    if (imgLogement !== null) {
      if (suivant) {
        imgLogement.setAttribute('src', pictures?.[photoSuivante])
        photoCourante = photoSuivante
        photoSuivante = photoCourante === pictures?.length - 1 ? 0 : photoCourante + 1
        photoPrecedente = photoCourante === 0 ? pictures?.length - 1 : photoCourante - 1
      } else {
        imgLogement.setAttribute('src', pictures?.[photoPrecedente])
        photoCourante = photoPrecedente
        photoSuivante = photoCourante === pictures?.length - 1 ? 0 : photoCourante + 1
        photoPrecedente = photoCourante === 0 ? pictures?.length - 1 : photoCourante - 1
      }
    }
  }

  return (
    <section className='galerie'>
      <button id='precedent' onClick={() => setPhotoSuivante(false)}> <i className='fa-solid fa-3x fa-angle-left' /> </button>
      <img id='imgLogement' src={pictures?.[0]} alt='logement' />
      <button id='suivant' onClick={() => setPhotoSuivante(true)}> <i className='fa-solid fa-3x fa-angle-right' /> </button>
    </section>
  )
}

export default Galerie
