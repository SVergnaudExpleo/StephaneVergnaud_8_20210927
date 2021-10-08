// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import preject component //
import './styles.css'

// main component //
class PictureTitle extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render() {
        return (
            <div className='pictureTitle-container' >
                <img className='title-image' alt='title' src={this.props.imgBg} />
                <div className='title-text' >
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