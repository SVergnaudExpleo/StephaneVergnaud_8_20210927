// Import react modules //
import React from 'react'
// import project modules //
import Logo from '../../Components/Logo'
import LinkComponent from '../../Components/LinkComponent'
import './styles.css'

// main component //
class Header extends React.Component {
    render() {
        return (
            <div className='header-container'>
                <Logo />
                <nav className='link-container'>
                    <LinkComponent pageRedirect={'/'} text={'Accueil'} place={'header'}/>
                    <LinkComponent pageRedirect={'/aPropos'} text={'A Propos'} place={'header'}/>
                </nav>
            </div>
        )
    }
}

export default Header