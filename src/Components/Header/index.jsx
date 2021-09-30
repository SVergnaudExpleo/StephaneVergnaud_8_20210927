// Import react modules //
import React from 'react'
// import project modules //
import Logo from '../Logo'
import HeaderLink from '../HeaderLink/HeaderLink'
import screenSize from '../../Utils/Styles/breakpoint'


// style management //
const headerContainer = (state)=>{
    let margin =''
    if (state.isPhoneV === true || state.isPhoneH === true) {
        margin = '20px 20px 16px 20px'
    }else if (state.isDesktop === true) {
        margin = '40px 100px 63px 100px'
    }

    return(
        {
            margin: margin,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, auto)',
            alignItems: 'center',
        }
    )
}

const linkContainer = (state)=> {
    let gap =''
    if (state.isPhoneV === true || state.isPhoneH === true) {
        gap = '10px'
    }else if (state.isDesktop === true) {
        gap = '57px'
    }
    return(
        {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, auto)',
            justifySelf: 'flex-end',
            columnGap: gap,

        }
    )
}

// main component //
class Header extends React.Component {
    constructor(props){
        super(props)
        let screenState = new screenSize('400px','800px','2000px')
        this.state = {
            isPhoneV: screenState.phoneScreenVerti.matches,
            isPhoneH: screenState.phoneScreenHori.matches,
            isDesktop: screenState.desktopScreen.matches
        }
        this.updateState = this.updateState.bind(this)
        screenState.phoneScreenVerti.addEventListener('change',this.updateState)
        screenState.phoneScreenHori.addEventListener('change',this.updateState)
        screenState.desktopScreen.addEventListener('change',this.updateState)
    }
    
    updateState() {
        let screenUpdate = new screenSize('400px','800px','2000px')
        this.setState({
            isPhoneV: screenUpdate.phoneScreenVerti.matches,
            isPhoneH: screenUpdate.phoneScreenHori.matches,
            isDesktop: screenUpdate.desktopScreen.matches
        })
    }

    render() {
        return (
            <div style={headerContainer(this.state)}>
                <Logo name={'truc'}/>
                <nav style={linkContainer(this.state)}>
                    <HeaderLink pageRedirect={'/'} pageName={'Accueil'}/>
                    <HeaderLink pageRedirect={'aPropos'} pageName={'A Propos'}/>
                </nav>
            </div>
        )
    }
}

export default Header