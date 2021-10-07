// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import project components //
import greyStar from '../../Assets/greyStar.svg'
import redStar from '../../Assets/redStar.svg'
import './styles.css'

// main component //
class Stars extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            red:[]
        }
        this.greyStyle = {
            backgroundImage: `url(${greyStar})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }
        this.redStyle = {
            backgroundImage: `url(${redStar})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }
        this.greys = [1,2,3,4,5]
        this.updateState=this.updateState.bind(this)
    }
 
    updateState(){
        let rating = this.props.datas.rating
        let starsNumber = parseInt(rating, 10)
        let table = []
        while (starsNumber > 0) {
            table.push('x')
            starsNumber = starsNumber-1
        }
        this.setState({
            red: table
        })
    }

    componentDidMount(){
        this.updateState()
    }

    render() {
        return (
            <div className='stars-container'>
                <div className='grey-container'>
                    {this.greys.map((e,index)=>(
                        <div className='grey' style={this.greyStyle} key={index}></div>
                    ))}
                </div>
                <div className='red-container'>
                    {this.state.red.map((e,index)=>(
                        <div className='red' style={this.redStyle} key={index}></div>
                    ))}
                </div>

            </div>
        )
    }
}

Stars.propTypes = {
    datas: PropTypes.object.isRequired,
}

export default Stars