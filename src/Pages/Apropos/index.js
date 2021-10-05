// import react modules //
import React from "react"
// import project components //
import Header from "../../Container/Header"
import PictureTitle from "../../Components/PictureTitle"
import titleBgApropos from '../../Assets/titleBgApropos.png'


class Apropos extends React.Component{

  render() {
    return (
      <div>
        <Header />
        <PictureTitle text={'Chez vous, partout et ailleurs'} imgBg={titleBgApropos} darkBg={true} />
      </div>
    )
  }
}

export default Apropos