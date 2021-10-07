// import react modules //
import React from "react"
// import project components //
import Header from "../../Container/Header"
import PictureTitle from "../../Components/PictureTitle"
import titleBgApropos from '../../Assets/titleBgApropos.png'
import './styles.css'


class Apropos extends React.Component{

  render() {
    return (
      <div className='aPropos-container'>
        <Header />
        <div className='picture-container'>
          <PictureTitle text={''} imgBg={titleBgApropos} />
        </div>
      </div>
    )
  }
}

export default Apropos