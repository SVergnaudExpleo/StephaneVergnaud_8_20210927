// this class define the screen size case. values set by default can be manuly set as needed.
class screenSize {
    constructor(phoneV='400px',phoneH='800px', desk='1200px'){
        this.phoneScreenVerti = window.matchMedia('(max-width:'+phoneV+')').matches
        this.phoneScreenHori = window.matchMedia('(max-width:'+phoneH+')').matches
        this.desktopScreen = window.matchMedia('(max-width:'+desk+')').matches
    }
}

export default screenSize