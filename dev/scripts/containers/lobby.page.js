import React from 'react';
import { connect } from 'react-redux'
import GlobalMsg from '../components/globalMsg'
import "../../less/lobby.less"
import * as types from '../constants/ActionTypes'
import Toast from './toast'
import { 
	confirm, alert, hide,
	showLoading,
	hideLoading,
	onShowGlobalMsg,
	onShowTost
} from '../actions'
import {remote} from 'electron'

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
        let content = 
		<div className ="window">
			<header className ="toolbar toolbar-header">
			<h1 className ="title">压多宝</h1>
	
			<button className ="btn btn-default close" onClick={()=>{
				remote.app.quit()
			}}>
				<span className ="icon icon-cancel-squared close"></span>
			</button>

			<button className ="btn btn-default minus" onClick={()=>{
				let win = remote.getCurrentWindow()
				win.minimize();
			}}>
				<span className ="icon icon-minus-squared minus"></span>
			</button>
			
			<div className ="toolbar-actions">
	
				<div className ="btn-group">
				<button className ="btn btn-default">
					<span className ="icon icon-home"></span>
				</button>
				<button className ="btn btn-default">
					<span className ="icon icon-folder"></span>
				</button>
				<button className ="btn btn-default active">
					<span className ="icon icon-cloud"></span>
				</button>
				<button className ="btn btn-default">
					<span className ="icon icon-popup"></span>
				</button>
				<button className ="btn btn-default">
					<span className ="icon icon-shuffle"></span>
				</button>
				</div>
	
				<button className ="btn btn-default">
				<span className ="icon icon-home icon-text"></span>
				Filters
				</button>
	
			</div>
			</header>
	
			<div className ="window-content">
			<div className ="pane-group">
				<div className ="pane pane-sm sidebar">
				<nav className ="nav-group">
					<h5 className ="nav-group-title">Favorites</h5>
					<span className ="nav-group-item">
					<span className ="icon icon-home"></span>
					connors
					</span>
					<span className ="nav-group-item active">
					<span className ="icon icon-light-up"></span>
					Photon
					</span>
					<span className ="nav-group-item">
					<span className ="icon icon-download"></span>
					Downloads
					</span>
					<span className ="nav-group-item">
					<span className ="icon icon-folder"></span>
					Documents
					</span>
					<span className ="nav-group-item">
					<span className ="icon icon-window"></span>
					Applications
					</span>
					<span className ="nav-group-item">
					<span className ="icon icon-signal"></span>
					AirDrop
					</span>
					<span className ="nav-group-item">
					<span className ="icon icon-monitor"></span>
					Desktop
					</span>
				</nav>
	
				<nav className ="nav-group">
					<h5 className ="nav-group-title">Tags</h5>
					<span className ="nav-group-item">
						<span className ="icon icon-record"></span>
						Red
					</span>
					<span className ="nav-group-item" href="#">
						<span className ="icon icon-record"></span>
					Orange
					</span>
					<span className ="nav-group-item" href="#">
					<span className ="icon icon-record"></span>
					Green
					</span>
					<span className ="nav-group-item" href="#">
					<span className ="icon icon-record"></span>
					Blue
					</span>
				</nav>
				<nav className ="nav-group">
					<h5 className ="nav-group-title">Devices</h5>
					<span className ="nav-group-item">
					<span className ="icon icon-drive"></span>
					Backup disk
					</span>
					<span className ="nav-group-item">
					<span className ="icon icon-drive"></span>
					Backup disk
					</span>
					<span className ="nav-group-item">
					<span className ="icon icon-drive"></span>
					Backup disk
					</span>
					<span className ="nav-group-item">
					<span className ="icon icon-drive"></span>
					Backup disk
					</span>
				</nav>
				</div>
				<div className ="pane">
				<table className ="table-striped">
					<thead>
					<tr>
						<th>Name</th>
						<th>Kind</th>
						<th>Date Modified</th>
						<th>Author</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>bars.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>base.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>button-groups.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>buttons.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>docs.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>forms.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>grid.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>icons.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>images.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>lists.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>mixins.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>navs.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>normalize.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>photon.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>tables.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>tabs.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>utilities.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					<tr>
						<td>variables.scss</td>
						<td>Document</td>
						<td>Oct 13, 2015</td>
						<td>connors</td>
					</tr>
					</tbody>
				</table>
				</div>
			</div>
			</div>
		</div>
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