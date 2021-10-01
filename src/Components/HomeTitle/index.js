// import react modules //
import React from 'react'
// import preject component //
import colors from '../../Utils/Styles/colors'
import screenSize from '../../Utils/Styles/breakpoint'
import homeTitleBg from '../../Assets/homeTitleBg.png'
// style management //
function containerStyle(state) {
    let height = ''
    let margin =''
    if (state.isPhoneV === true || state.isPhoneH === true) {
        height='100px'
        margin='0 20px 0 20px'
    }else if (state.isDesktop === true) {
        height='50px'
        margin='0 100px 0 100px'
    }
    return(
        {
            display:'grid',
            justifyItems:'center',
            alignItems:'center',
            fontSize:height,
            margin:margin,
            
        }
    )
}
function imgStyle(state){
    let radius = ''
    if (state.isPhoneV === true || state.isPhoneH === true) {
        radius='25px'
    }else if (state.isDesktop === true) {
        radius='10px'
    }
    return(
        {
            borderRadius: radius,
            opacity:'0.7',
            position:'relative',
            zIndex:'1',
            height: '100px',
            width: '100%',
        }
    )
}
function titleStyle(state){
    let font = ''
    if (state.isPhoneV === true || state.isPhoneH === true) {
        font='24px'
    }else if (state.isDesktop === true) {
        font='48px'
    }
    return(
        {   
            position:'absolute',
            zIndex:'2',
            fontSize: font,
            color:colors.secondary,
        }
    )
}

// main component //
class HomeTitle extends React.Component{
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
            <div style={containerStyle(this.state)}>
                <div style={titleStyle(this.state)}>
                    Chez vous, partout et ailleurs
                </div>
                <img style={imgStyle(this.state)} src={homeTitleBg} alt='title img'/>
            </div>
        )
    }
}

export default HomeTitle