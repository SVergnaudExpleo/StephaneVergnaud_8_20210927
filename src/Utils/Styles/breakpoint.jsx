// this class define the screen size case. Values set by default can be manuly set as needed.
class screenSize {
    constructor(phoneV,phoneH, desk){
        this.phoneScreenVerti = window.matchMedia('(max-width:'+phoneV+')')
        this.phoneScreenHori = window.matchMedia('(max-width:'+phoneH+')')
        this.desktopScreen = window.matchMedia('(max-width:'+desk+')')
    }
}

export default screenSize