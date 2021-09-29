// import react modules //
import React from 'react'
import { Link } from 'react-router-dom'
// import project components //
import colors from '../../Utils/Styles/colors'
import screenSize from '../../Utils/Styles/breakpoint'

// style management //
function headerLinkStyle(state) {
    let textSize = ''
    if (state.isPhoneV === true || state.isPhoneH === true) {
        textSize='12px'
    }else if (state.isDesktop === true) {
        textSize='24px'
    }
    return(
        {
            textDecoration: 'none',
            color: colors.primary,
            fontSize: textSize,
        }
    )
}

class HeaderLink extends React.Component{

    constructor(props){
        super(props)
        let screenState = new screenSize('400px','800px','2000px')
        this.state = {
            isPhoneV: screenState.phoneScreenVerti.matches,
            isPhoneH: screenState.phoneScreenHori.matches,
            isDesktop: screenState.desktopScreen.matches
        }
        this.updateState = this.updateState.bind(this)
        screenState.phoneScreenVerti.addListener(this.updateState)
        screenState.phoneScreenHori.addListener(this.updateState)
        screenState.desktopScreen.addListener(this.updateState)
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
            <Link to={this.props.pageRedirect} style={headerLinkStyle(this.state)} >{this.props.pageName}</Link>
        )
    }
}

export default HeaderLink