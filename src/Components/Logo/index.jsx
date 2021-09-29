// import react modules //
import React from "react"
// import project components //
import logo from '../../Assets/logo.svg'

// main component //
class Logo extends React.Component {
    render() {
        return (
            <div>
                <img alt='logo Kasa' src={logo}/>
            </div>
        )
    }
}

export default Logo