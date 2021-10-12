// import react modules //
import React from 'react'
// import project components //
import logo from '../../Assets/logo.svg'
import './styles.css'

// main component //
class Footer extends React.Component{
    render() {
        return (
            <div className='footer-box'>
                <img alt='logo' className='footer-logo' src={logo}/>
                <div className='footer-text'>© 2021 Kasa. All rights reserved</div>
            </div>
        )
    }
}

export default Footer