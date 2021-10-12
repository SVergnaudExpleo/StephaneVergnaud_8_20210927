// import react modules //
import React from "react"
// import project components //
import LinkComponent from "../../Components/LinkComponent"
import Header from '../../Container/Header'
import Footer from '../../Container/Footer'
import './styles.css'

class Error extends React.Component{
  render() {
    return (
      <div>
        <div className='errorPage-container'>
          <Header/>
          <div className='error-container'>
            <div className='error-number'>
              404
            </div>
            <div className='error-description'>
              Oups! La page que vous demandez n'existe pas.
            </div>
            <LinkComponent className='error-link' pageRedirect={'/'} place={'error'} text={'Retourner sur la page d’accueil'} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Error