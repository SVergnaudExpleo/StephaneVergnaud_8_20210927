// Import react modules //
import React from 'react'
// import project modules //
import Logo from '../Logo'
import HeaderLink from '../HeaderLink/HeaderLink'
import './styles.css'

// main component //
class Header extends React.Component {
    render() {
        return (
            <div className='header-container'>
                <Logo />
                <nav className='link-container'>
                    <HeaderLink pageRedirect={'/'} pageName={'Accueil'}/>
                    <HeaderLink pageRedirect={'aPropos'} pageName={'A Propos'}/>
                </nav>
            </div>
        )
    }
}

export default Header