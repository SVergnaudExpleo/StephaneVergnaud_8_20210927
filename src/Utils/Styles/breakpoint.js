// this class define the screen size case. Values set by default can be manuly set as needed.
class screenSize {
    constructor(phoneV,phoneH, desk){
        this.phoneScreenVerti = window.matchMedia('(max-width:'+phoneV+')')
        this.phoneScreenHori = window.matchMedia('(max-width:'+phoneH+')')
        this.desktopScreen = window.matchMedia('(max-width:'+desk+')')
    }
}

export default screenSize


// integrate this code to object //

/* constructor(props){
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
} */