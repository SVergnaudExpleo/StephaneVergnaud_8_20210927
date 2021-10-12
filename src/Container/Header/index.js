// Import react modules //
import React from 'react'
// import project modules //
import LinkComponent from '../../Components/LinkComponent'
import logo from '../../Assets/logo.svg'
import './styles.css'

// main component //
class Header extends React.Component {
    render() {
        return (
            <div className='header-container'>
                <img className='logo-header' alt='logo Kasa' src={logo} />
                <nav className='link-container'>
                    <LinkComponent pageRedirect={'/'} text={'Accueil'} place={'header'}/>
                    <LinkComponent pageRedirect={'/aPropos'} text={'A Propos'} place={'header'}/>
                </nav>
            </div>
        )
    }
}

export default Header