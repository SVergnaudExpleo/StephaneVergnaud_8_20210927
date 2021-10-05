// import react modules //
import React from "react";
// import project components //
import Header from "../../Container/Header"
import PictureTitle from "../../Components/PictureTitle";
import CardsContainer from "../../Container/CardsContainer";
import titleBgHome from '../../Assets/homeTitleBg.png'


class Home extends React.Component{

  render() {
    return (
      <div>
        <Header />
        <PictureTitle 
          text={'Chez vous, partout et ailleurs'} 
          imgBg={titleBgHome} 
          darkBg={true} 
        />
        <CardsContainer />
      </div>
    )
  }
}

export default Home
