    // import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import preject component //
import DetailTitle from '../../Components/DetailTitle'
import Host from '../../Components/Host'
import './styles.css'
import Tags from '../../Components/Tags'


// main component //
class SubHeaderDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className='subHeader-container'>
                <div className='detail-title'>
                    <DetailTitle 
                        datas={this.props.datas}
                    />
                </div>
                <div className='detail-host'>
                    <Host 
                        datas={this.props.datas}
                    />         
                </div>
                <div className='detail-tags'>
                    <Tags 
                        datas={this.props.datas}
                    />
                </div>

            </div>
        )
    }
}

SubHeaderDetail.propTypes = {
    datas: PropTypes.object.isRequired
}

export default SubHeaderDetail