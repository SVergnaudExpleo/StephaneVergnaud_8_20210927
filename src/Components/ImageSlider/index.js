// import react modules //
import React from "react"
import PropTypes from 'prop-types'
// import project components //
import './styles.css'

class ImageSlider extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            currentSlide: 0,
        }
        this.updateStateNext = this.updateStateNext.bind(this)
        this.updateStatePrev = this.updateStatePrev.bind(this)
    }

    updateStateNext(){
        let tableLength = this.props.pictures.length
        let newValue = 0
        if (this.state.currentSlide === tableLength-1) {
            newValue = 0
        }else{
            newValue = this.state.currentSlide + 1
        }
        this.setState({
            currentSlide: newValue
        })
    }

    updateStatePrev(){
        let tableLength = this.props.pictures.length
        let newValue = 0
        if (this.state.currentSlide === 0) {
            newValue = tableLength-1
        }else{
            newValue = this.state.currentSlide-1
        }
        this.setState({
            currentSlide: newValue
        })
    }
    
    render() {
        return (
            <div className='slider-container'>
                <button 
                    className={this.props.pictures.length === 1 ? 'triger-hiden' : 'slider-triger next'} 
                    onClick={this.updateStateNext}
                />
                <button 
                    className= {this.props.pictures.length === 1 ? 'triger-hiden' : 'slider-triger previous'}
                    onClick={this.updateStatePrev}                    
                />
                <div className='slider-wrapper' >
                    {this.props.pictures.map((image, index) => (
                        <div 
                            className='slider'
                            key={index}
                            style={{
                                backgroundImage: `url(${image})`,
                                marginLeft: index === 0 ? `-${this.state.currentSlide * 100}% ` : undefined,
                                transition: `margin-left 1s`
                            }}
                        >
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}


ImageSlider.propTypes = {
   pictures: PropTypes.array.isRequired
}

export default ImageSlider