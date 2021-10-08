// import react modules //
import React from "react"
// import project components //
import Header from '../../Container/Header'
import ImageSlider from "../../Components/ImageSlider"
import SubHeaderDetail from "../../Container/SubHeaderDetail"
import datas from '../../Assets/data'
import './styles.css'

class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
        let neededId = window.location.pathname.substring(8)
        this.myData = datas.filter(data => data.id === neededId)
    }

    render() {
        return (
            <div className='detail-container'>
                <Header/>
                <div className='slider-container'>
                    <ImageSlider pictures={this.myData[0].pictures} />
                </div>
                <div className='sub-header'>
                    <SubHeaderDetail 
                        datas={this.myData[0]} 
                    />
                </div>
            </div>
        )
    }
}

export default Detail