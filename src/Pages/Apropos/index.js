// import react modules //
import React from "react"
// import project components //
import Header from "../../Container/Header"
import PictureTitle from "../../Components/PictureTitle"
import titleBgApropos from '../../Assets/titleBgApropos.png'
import DropDown from "../../Components/DropDown"
import Footer from "../../Components/Footer"
import './styles.css'

// droipdown text configuration //
const fiabiliteText = ['Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.']
const respectText = ['La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.']
const serviceText = ["Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."]
const securiteText = ["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]
class Apropos extends React.Component{
  render() {
    return (
      <div>
        <div className='aPropos-container'>
          <Header />
          <div className='pictureApropos-container'>
            <PictureTitle text={''} imgBg={titleBgApropos} />
          </div>
          <div className='dropDown-container'>
            <DropDown whereUsed='aPropos' title={'Fiabilité'} text={fiabiliteText} />
            <DropDown whereUsed='aPropos' title={'Respect'} text={respectText} />
            <DropDown whereUsed='aPropos' title={'Service'} text={serviceText} />
            <DropDown whereUsed='aPropos' title={'Sécurité'} text={securiteText} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Apropos