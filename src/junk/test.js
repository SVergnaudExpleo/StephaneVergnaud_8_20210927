// exemple de code//
let screenState =''
let React = ""
let screenUpdate = ''

function titleStyle(state){
    return(
        {   
            position:'absolute',
        }
    )
}
titleStyle()

// main component //
class HomeTitle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isPhoneV: screenState.phoneScreenVerti.matches,
        }
        this.updateState = this.updateState.bind(this)
        screenState.phoneScreenVerti.addEventListener('change',this.updateState)
    }
    updateState() {
        this.setState({
            isPhoneV: screenUpdate.phoneScreenVerti.matches,
        })
    }
    render() {
        return (
            <div >
                <div >
                    Chez vous, partout et ailleurs
                </div>
                <img src={'homeTitleBg'} alt='title img'/>
            </div>
        )
    }
}
HomeTitle()