// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import preject component //
import './styles.css'

// main component //
class CardsContainer extends React.Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }

    render() {
        return (
            <div className='card-container'>
                card list
            </div>
        )
    }
}

CardsContainer.propTypes = {

}

export default CardsContainer

