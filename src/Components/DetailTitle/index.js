// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import preject component //
import './styles.css'

// main component //
class DetailTitle extends React.Component{
    render() {
        return (
            <div className='title-container'>
                <div className='title'>{this.props.datas.title}</div>
                <div className='location'>{this.props.datas.location}</div>
            </div>
        )
    }
}

DetailTitle.propTypes = {
    datas: PropTypes.object.isRequired,
}

export default DetailTitle