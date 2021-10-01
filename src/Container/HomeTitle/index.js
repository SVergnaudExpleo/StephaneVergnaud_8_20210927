// import react modules //
import React from 'react'
// import preject component //
import homeTitleBg from '../../Assets/homeTitleBg.png'
import './styles.css'

// main component //
class HomeTitle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            page: props.page,
        }
        //this.updateState = this.updateState.bind(this)
        
    }
/*     updateState = () => {
        this.setState({
            page: '',
        })
    } */



    render() {
        return (
            <div className='homeTitle-container'>
                <div className='home-title'>
                    Chez vous, partout et ailleurs
                </div>
                <img className='img-title' src={this.state.page} alt='title img'/>
            </div>
        )
    }
}

export default HomeTitle