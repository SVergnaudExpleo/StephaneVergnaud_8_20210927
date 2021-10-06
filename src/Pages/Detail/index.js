// import react modules //
import React from "react"
// import project components //
import Header from '../../Container/Header'
import ImageSlider from "../../Components/ImageSlider"

class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }
    render() {
        return (
            <div>
                <Header/>
                <ImageSlider />
            </div>
        )
    }
}

export default Detail