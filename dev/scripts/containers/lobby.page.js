import React from 'react';
import { connect } from 'react-redux'
import GlobalMsg from '../components/globalMsg'
import "../../less/mainpage.less"
import * as types from '../constants/ActionTypes'
import Toast from './toast'
import { 
	confirm, alert, hide,
	showLoading,
	hideLoading,
	onShowGlobalMsg,
	onShowTost
} from '../actions'

class Main extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {  
	}

	componentWillUnmount() {
	}

	render() {
        let globalMsg;
		if (this.props.globalMsg) {
			globalMsg = <GlobalMsg></GlobalMsg>
        }
        let content = <div>空页面</div>
		return (<div className="full-h" onDragStart={(e)=>{
			e.preventDefault()
		}}>{content}{globalMsg}{this.props.showToastState.showing?<Toast data={this.props.showToastState} /> : ''}</div>)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		showToastState : state.toast
	}
}

const mapDispatchToProps = dispatch => ({
	confirm 	   		: (data) => dispatch(confirm(data)),
	alert 	   	   		: (data) => dispatch(alert(data)),
	hide 				: () => dispatch(hide()),
	hideLoading 		: () => dispatch(hideLoading()),
	showLoading 		: (message) => dispatch(showLoading(message)),
	onShowGlobalMsg 	: (message) => dispatch(onShowGlobalMsg(message)),
	onShowTost   		: (configure) => dispatch(onShowTost(configure))
})
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)