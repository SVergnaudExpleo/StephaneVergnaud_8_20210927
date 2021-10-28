    // import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import preject component //
import DetailTitle from '../../Components/DetailTitle'
import Host from '../../Components/Host'
import './styles.css'
import Tags from '../../Components/Tags'
import Stars from '../../Components/Stars'


// main component //
class SubHeaderDetail extends React.Component{
    render() {
        return (
            <div className='subHeader-box'>
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
                <div className='detail-stars'>
                    <Stars 
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