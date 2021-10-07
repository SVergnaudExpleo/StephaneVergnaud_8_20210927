// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import project components //
import './styles.css'

// main component //
class LinkComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
        this.updateClass = this.updateClass.bind(this)
    }

    updateState(){
        this.setState({})
    }

    componentDidMount(){
       this.updateClass()
    }
 
    render() {
        return (
            <div>

            </div>
        )
    }
}

LinkComponent.propTypes = {
    place: PropTypes.string.isRequired,
}

export default LinkComponent