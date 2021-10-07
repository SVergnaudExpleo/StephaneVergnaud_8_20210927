// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import preject component //
import './styles.css'
import data from '../../Assets/data'
import Card from '../../Components/Card'

// main component //
class CardsContainer extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }

    render() {
        return (
            <ul className='card-container'>
                {data.map((building) => (
                    <Card 
                        key={building.id} 
                        locationTitle={building.title} 
                        imgBg={building.cover} 
                        buildingData={building} 
                    />
                ))}
            </ul>
        )
    }
}

CardsContainer.propTypes = {

}

export default CardsContainer

