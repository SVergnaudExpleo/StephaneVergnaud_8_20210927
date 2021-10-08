// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import preject component //
import './styles.css'

// main component //
class Card extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
        this.style = {
            backgroundImage: `
                linear-gradient(to bottom, rgba(255, 255, 255, 0) 70%, rgba(255, 96, 96, 0.6) 85%,rgba(255, 96, 96, 0.8) 95%),
                url(${props.imgBg})
            `,
            backgroundSize:'cover',
            backgroundPosition: 'center'
        }
    }

    render() {
        return (
            <Link className='card' style={this.style} to={'/detail/'+this.props.buildingData.id} >
                <div className='card-title'>
                    {this.props.locationTitle}
                </div>
            </Link>
        )
    }
}

Card.propTypes = {
    locationTitle: PropTypes.string.isRequired,
    imgBg: PropTypes.string.isRequired,
    buildingData: PropTypes.object.isRequired,
}

export default Card
