// import react modules //
import React from "react"
// import project components //
import Header from "../../Container/Header"
import PictureTitle from "../../Components/PictureTitle"
import titleBgApropos from '../../Assets/titleBgApropos.png'
import './styles.css'
import DropDown from "../../Components/DropDown"

let title = 'je suis un titre'
let text = 'ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'

class Apropos extends React.Component{

  render() {
    return (
      <div className='aPropos-container'>
        <Header />
        <div className='picture-container'>
          <PictureTitle text={''} imgBg={titleBgApropos} />
        </div>
        <div className='dropDown-container'>
          <DropDown whereUsed='aPropos' title={title} text={text} />
        </div>
      </div>
    )
  }
}

export default Apropos