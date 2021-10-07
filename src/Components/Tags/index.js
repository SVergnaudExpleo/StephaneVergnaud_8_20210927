// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import project components //
import './styles.css'

// main component //
class Tags extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
 
    render() {
        return (
            <div className='tags-container'>
                {
                    this.props.datas.tags.map((tag,index)=> (
                        <div className='tag' key={tag+index}>{tag}</div>

                ))}
            </div>
        )
    }
}

Tags.propTypes = {
    datas: PropTypes.object.isRequired,
}

export default Tags