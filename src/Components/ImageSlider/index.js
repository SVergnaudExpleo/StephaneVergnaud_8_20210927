// import react modules //
import React from "react"
import PropTypes from 'prop-types'
// import project components //
import './styles.css'

let images=[
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
]

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
        let tableLength = images.length
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
        let tableLength = images.length
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
                    className='slider-triger next'
                    onClick={this.updateStateNext}
                />
                <button 
                    className='slider-triger previous'
                    onClick={this.updateStatePrev}                    
                />
                <div className='slider-wrapper' title='Faites défiler les immages pour un apperçu de votre future location'>
                    
                    {images.map((image, index) => (
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
   
}

export default ImageSlider