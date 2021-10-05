// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import preject component //
import './styles.css'

// main component //
class PictureTitle extends React.Component{
    constructor(props){
        super(props)
        this.style = {
            backgroundImage: `url(${props.imgBg})`,
            backgroundSize:'cover'
        }
        this.darkStyle = {
            backgroundImage: `url(${props.imgBg})`,
            backgroundSize:'cover',
            border: 'solid 5px'
        }
    }

    render() {
        return (
            <div className='bg-title' style={this.props.darkBg === true ? this.darkStyle : this.style}>
                <div className='text-title' >
                    {this.props.text}
                </div>
            </div>
        )
    }
}

PictureTitle.propTypes = {
    text: PropTypes.string.isRequired,
    imgBg: PropTypes.string.isRequired,
    darkBg: PropTypes.bool.isRequired
}

export default PictureTitle