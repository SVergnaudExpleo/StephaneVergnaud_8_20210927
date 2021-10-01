// import react modules //
import React from "react"
// import project components //
import logo from '../../Assets/logo.svg'
import './styles.css'
// main component //
class Logo extends React.Component {
    render() {
        return (
            <img className='logo-header' alt='logo Kasa' src={logo} />
        )
    }
}

export default Logo