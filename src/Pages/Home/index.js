// import react modules //
import React from "react";
// import project components //
import Header from "../../Container/Header"
import PictureTitle from "../../Components/PictureTitle"
import CardsContainer from "../../Container/CardsContainer"
import titleBgHome from '../../Assets/homeTitleBg.png'
import Footer from "../../Components/Footer"
import './styles.css'


class Home extends React.Component{
  render() {
    return (
      <div>
        <div className='home-container'>
          <Header />
          <div className='pictureTitle-container'>
            <PictureTitle 
              text={'Chez vous, partout et ailleurs'} 
              imgBg={titleBgHome} 
              darkBg={true} 
            />
          </div>
          <div className='cardsContainer-container'>
            <CardsContainer />
          </div>
          
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
