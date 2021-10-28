// import react modules //
import React from "react"
// import project components //
import Header from '../../Container/Header'
import ImageSlider from "../../Components/ImageSlider"
import SubHeaderDetail from "../../Container/SubHeaderDetail"
import datas from '../../Assets/data'
import DropDown from "../../Components/DropDown"
import Footer from "../../Components/Footer"
import './styles.css'

class Detail extends React.Component{
    constructor(props){
        super(props)
        let neededId = window.location.pathname.substring(8)
        this.myData = datas.filter(data => data.id === neededId)
        this.describe = [this.myData[0].description]
    }
    
    render() {
        return (
            <div>
                <div className='detail-container'>
                    <Header/>
                    <div className='slider-container'>
                        <ImageSlider pictures={this.myData[0].pictures} />
                    </div>
                    <div className='subHeader-container'>
                        <SubHeaderDetail 
                            datas={this.myData[0]} 
                        />
                    </div>
                    <div className='dropDown-detailContainer'>
                        <DropDown title={'Description'} whereUsed={'detail'} text={this.describe} />
                        <DropDown title={'Equipements'} whereUsed={'detail'} text={this.myData[0].equipments} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Detail