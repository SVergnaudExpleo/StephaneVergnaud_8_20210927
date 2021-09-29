// Import react modules //
import React from 'react'
import styled from 'styled-components'
// import project modules //
import Logo from '../Logo'
import HeaderLink from '../HeaderLink/HeaderLink'


// style management //
const HeaderContainer = styled.nav`
// prévoir des mediaquery
`


// main component //
class Header extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <Logo name={'truc'}/>
                <HeaderLink pageRedirect={'/'} pageName={'Accueil'}/>
                <HeaderLink pageRedirect={'aPropos'} pageName={'A Propos'}/>
            </HeaderContainer>
        )
    }
}

export default Header