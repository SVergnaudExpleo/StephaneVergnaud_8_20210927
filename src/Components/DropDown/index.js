// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import project components //
import chevronUp from '../../Assets/chevronUp.svg'
import chevronDown from '../../Assets/chevronDown.svg'
import './styles.css'

// main component //
class DropDown extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            clickState: 'up',
            textHeight: {height: '0em'},
        }
        this.updateChevronState = this.updateChevronState.bind(this)
    }

    updateChevronState(){
        let clickUpdate = ''
        let heightUpdate = '' 
        if (this.state.clickState === 'up') {
            clickUpdate ='down'
            heightUpdate = {height: '1em'}
        }else if (this.state.clickState === 'down') {
            clickUpdate = 'up'
            heightUpdate= {height: '0em'}
        }
        this.setState({
            clickState: clickUpdate,
            textHeight: heightUpdate,
        })
    }

    render() {
        return (
            <div className='dropDown' >
                <div 
                    className={this.props.whereUsed === 'aPropos' ? 'dropTitle-aPropos' : 'dropTitle-detail'}
                    onClick={this.updateChevronState}
                >
                    <div>{this.props.title}</div>
                    <img 
                        className='dropDown-chevron' 
                        alt='chevron' 
                        src={this.state.clickState === 'up' ? chevronDown : chevronUp} 
                    />
                </div>
                <div className='dropDown-text' style={this.state.textHeight}>
                    {this.props.text}
                </div>

            </div>
        )
    }
}

DropDown.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    whereUsed: PropTypes.string.isRequired
}

export default DropDown