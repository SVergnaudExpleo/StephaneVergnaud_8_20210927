// import react modules //
import React from "react"
// import project components //
import Header from '../../Container/Header'
import Slider from "../../Components/Slider"
import './styles.css'

class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }
    render() {
        return (
            <div>
                <Header/>
                <Slider />
                <div >
                    Détail
                </div>
            </div>
        )
    }
}

export default Detail