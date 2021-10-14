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
            textHeight: {
                height:'0',
                paddingTop:'0',
                paddingBottom:'0',
            },
        }
        this.updateChevronState = this.updateChevronState.bind(this)
    }

    updateChevronState(){
        let clickUpdate = ''
        let heightUpdate = '' 
        if (this.state.clickState === 'up') {
            clickUpdate ='down'
            heightUpdate = {
                height:'100%',
            }
        }else if (this.state.clickState === 'down') {
            clickUpdate = 'up'
            heightUpdate= {
               height:'0',
               paddingTop:'0',
               paddingBottom:'0',
            }
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
                    className={this.props.whereUsed === 'aPropos' ? 'dropTitle dropTi-aPropos' : 'dropTitle dropTi-detail'}
                    onClick={this.updateChevronState}
                >
                    <div>{this.props.title}</div>
                    <img 
                        className='dropDown-chevron' 
                        alt='chevron' 
                        src={this.state.clickState === 'up' ? chevronDown : chevronUp} 
                    />
                </div>
                <div
                    className={this.props.whereUsed === 'aPropos' ? 'dropText dropTe-aPropos' : 'dropText dropTe-detail'}
                    style={this.state.textHeight}
                >
                    {
                    this.props.text.map((txt,index)=> (
                        <div key={txt+index}>{txt}</div>
                    ))}
                </div>

            </div>
        )
    }
}

DropDown.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.array.isRequired,
    whereUsed: PropTypes.string.isRequired,

}

export default DropDown