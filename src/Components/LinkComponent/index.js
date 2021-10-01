// import react modules //
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import project components //
import './styles.css'

// main component //
class LinkComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            class: '',
            underline: {
                textDecoration: 'underline'
            }
        }
    }

    

    componentDidMount(){
        // class management
        let classUpdate =''
        if (this.props.place === 'header' ) {
            classUpdate = 'link-header'
        }else if (this.props.place === 'error') {
            classUpdate = 'link-error'
        }

        // underlining style management
        let underlineUpdate = {}
        let path = window.location.pathname
        if (this.props.pageRedirect === path ) {
            underlineUpdate = {textDecoration: 'underline'}
        }else if (this.props.pageRedirect === 'error') {
            underlineUpdate = {textDecoration: 'initial'}
        }
        this.setState({
            class: classUpdate,
            underline: underlineUpdate,
        })
    }
    

    render() {
        return (
            <Link className={this.state.class} to={this.props.pageRedirect} style={this.state.underline} >{this.props.text}</Link>
        )
    }
}

LinkComponent.propTypes = {
    place: PropTypes.string.isRequired,
    pageRedirect: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default LinkComponent