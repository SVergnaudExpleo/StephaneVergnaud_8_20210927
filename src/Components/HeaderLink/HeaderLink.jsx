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
        textSize='50px'
    }else if (state.isDesktop === true) {
        textSize='200px'
    }
    return(
        {
            textDecoration: 'none',
            color: colors.primary,
            fontSize: textSize,
        }
    )
}

// main component //
class HeaderLink extends React.Component{
    constructor(props){
        super(props)
        let screenState = new screenSize()
        this.state = {
            isPhoneV: screenState.phoneScreenVerti,
            isPhoneH: screenState.phoneScreenHori,
            isDesktop: screenState.desktopScreen
        }
        this.updateState = this.updateState.bind(this)
        window.addEventListener('resize', this.updateState)
    }

    updateState() {
        let screenUpdate = new screenSize()
        this.setState({
            isPhoneV: screenUpdate.smartPhoneScreen,
            isPhoneH: screenUpdate.phoneScreenHori,
            isDesktop: screenUpdate.desktopScreen
        })
    }

    render() {
        return (
            <Link to={this.props.pageRedirect} style={headerLinkStyle(this.state)} >{this.props.pageName}</Link>
        )
    }
}

export default HeaderLink