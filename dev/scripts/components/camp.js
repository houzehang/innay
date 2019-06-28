import React from 'react'
import PropTypes from 'prop-types'
require("../../less/camp.less")
const ENV = require("../../../env")
const net = require("../network")
import * as types from '../constants/ActionTypes'

class Camp extends React.Component {
	constructor(props) {
		super(props)
		this.state = { 
		}
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	render() {
        let room = this.props.room
		return (
			<div className="camp-panel">
                
                <div key="1" className="lesson-box">
                    <div className="cover">
                        <img src={room.avatar} alt=""/>
                    </div>
                    <div className="info">
                        <div className="name"><span>{room.name}</span></div>
                        <div className="desc">课时简介：{room.content||'暂无'}</div>
                        <div className="tag">
                            <div className="date-label">开放时间</div>
                            <div className="date"><span>{room.open_date}</span></div>
                        </div>
                    </div>
                    
                </div>
                <div className="btns-panel">
                    <button className="start-btn" onClick={()=>{
						this.props.onStartLearning()
                    }}></button>
                </div>
            </div>
		)
	}
}

Camp.propTypes = {
	room	    	: PropTypes.shape({
		avatar  	: PropTypes.string.isRequired,
		name     	: PropTypes.string,
		content     : PropTypes.string,
		open_date	: PropTypes.string
	}),
	onStartLearning	: PropTypes.func.isRequired
}

export default Camp