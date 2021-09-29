// import react modules //
import React from "react"
// import project components //
import logo from '../../Assets/logo.svg'
import screenSize from "../../Utils/Styles/breakpoint"

// style management //
function logoStyle (state){
    let dim =''
    if (state.isPhoneV === true || state.isPhoneH === true) {
        dim='145px'
    }else if (state.isDesktop === true) {
        dim='210px'
    }
    return (
        {
            width: dim,
        }
    )
}

// main component //
class Logo extends React.Component {
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
            <div >
                <img alt='logo Kasa' src={logo} style={logoStyle(this.state)} />
            </div>
        )
    }
}

export default Logo