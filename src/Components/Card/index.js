// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import preject component //
import './styles.css'

// main component //
class Card extends React.Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }

    render() {
        return (
            <div className='card'>
                <div>
                    {this.props.locationTitle}
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    locationTitle: PropTypes.string.isRequired
}

export default Card
