import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Sass/main.scss'
import Accueil from './pages/Accueil'
import Error from './components/Error'
import Header from './components/Header'
import APropos from './pages/APropos'
import Footer from './components/Footer'
import Logement from './pages/Logement'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <main className='design'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Accueil />} />
          <Route path='/logement/:idLogement' element={<Logement />} />
          <Route path='/apropos' element={<APropos />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
