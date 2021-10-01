// import react modules //
import React from 'react'
import { Link } from 'react-router-dom'
// import project components //
import './styles.css'

// main component //
class HeaderLink extends React.Component{
    render() {
        return (
            <Link className='link-header' to={this.props.pageRedirect} >{this.props.pageName}</Link>
        )
    }
}

export default HeaderLink