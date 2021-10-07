// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import project components //
import './styles.css'

// main component //
class Host extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
        this.style ={
            backgroundImage: `url"${this.props.datas.host.picture}"`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }
    }

    render() {
        return (
            <div className='host-container'>
                <div className='host-name'>{this.props.datas.host.name}</div>
                <img className='host-picture' alt='host' src={this.props.datas.host.picture} />
            </div>
        )
    }
}

Host.propTypes = {
    datas: PropTypes.object.isRequired,
}

export default Host