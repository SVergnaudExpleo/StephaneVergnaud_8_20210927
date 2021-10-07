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
            backgroundSize:'cover',
            backgroundPosition: 'center'
        }
    }

    render() {
        return (
            <div className='bg-title' style={this.style}>
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
}

export default PictureTitle