// import react modules //
import React from "react"
// import project components //
import Header from '../../Container/Header'
import ImageSlider from "../../Components/ImageSlider"
import './styles.css'

class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }
    render() {
        return (
            <div className='detail-container'>
                <Header/>
                <div className='picture-container'>
                    <ImageSlider />
                </div>
            </div>
        )
    }
}

export default Detail