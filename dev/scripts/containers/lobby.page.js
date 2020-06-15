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
		this.$home_major_cfg = {
			tiny: 1,
			localserver: 2
		}

		this.state = {
			selectedPage: 0,
			homeMajor: this.$home_major_cfg.tiny
		}
	}

	componentDidMount() {  
	}

	componentWillUnmount() {
	}

	__home_major(){
		let result = '';
		switch (this.state.homeMajor) {
			case this.$home_major_cfg.tiny:
				result = this.__home_major_tinypng()
				break;
			case this.$home_major_cfg.localserver:
				result = this.__home_major_localserver()
				break;
			default:
				result = this.__home_major_tinypng()
				break;
		}
		return result
	}

	__home_major_tinypng(){
		return <div className ="pane">
			<table className ="table-striped home-major">
				<thead>
					<tr>
						<th width="35%">文件</th>
						<th width="10%">压缩前</th>
						<th width="35%">当前进度</th>
						<th width="10%">压缩后</th>
						<th>减少</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar"></div>
							<span className="progress-num">100%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar"></div>
							<span className="progress-num">100%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar"></div>
							<span className="progress-num">100%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar"></div>
							<span className="progress-num">100%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
					<tr>
						<td width="35%">bars.png</td>
						<td width="10%">942Kb</td>
						<td width="35%" className="progress">
							<div className="progress-bar back"></div>
							<div className="progress-bar done"></div>
							<span className="progress-num">0%</span>
						</td>
						<td width="10%">68Kb</td>
						<td>-86%</td>
					</tr>
				</tbody>
			</table>
			<footer className="toolbar toolbar-footer fixed-bottom">
				<div className="toolbar-actions">
					<button className="btn btn-default">
					Cancel
					</button>

					<button className="btn btn-primary">
					Save
					</button>
				</div>
			</footer>
		</div>
	}

	__home_major_localserver(){
		return '敬请期待'
	}

	render() {
        let globalMsg;
		if (this.props.globalMsg) {
			globalMsg = <GlobalMsg></GlobalMsg>
		}
		let selectedPage = this.state.selectedPage
        let content = 
		<div className ="window">
			{/* 上部分 */}
			<header className ="toolbar toolbar-header">
				<h1 className ="title">程序宝</h1>
				{/* 退出 */}
				<button className ="btn btn-default close" onClick={()=>{
					remote.app.quit()
				}}>
					<span className ="icon icon-cancel-squared close"></span>
				</button>
				{/* 最小化 */}
				<button className ="btn btn-default minus" onClick={()=>{
					let win = remote.getCurrentWindow()
					win.minimize();
				}}>
					<span className ="icon icon-minus-squared minus"></span>
				</button>
				{/* 菜单栏 */}
				<div className ="toolbar-actions">
		
					<div className ="btn-group">
					<button className = {`btn btn-default ${selectedPage == 0 ? "active": ""}`} onClick={()=>{
						this.setState({
							selectedPage: 0
						})
					}}>
						<span className ="icon icon-home"></span>
					</button>
					<button className = {`btn btn-default ${selectedPage == 1 ? "active": ""}`} onClick={()=>{
						this.setState({
							selectedPage: 1
						})
					}}>
						<span className ="icon icon-key"></span>
					</button>
					<button className = {`btn btn-default ${selectedPage == 2 ? "active": ""}`} onClick={()=>{
						this.setState({
							selectedPage: 2
						})
					}}>
						<span className ="icon icon-share"></span>
					</button>
					</div>
					<button className ="btn btn-default">
					<span className ="icon icon-home icon-text"></span>
					Filters
					</button>
		
				</div>
			</header>
			{/* 下部分 */}
			<div className ="window-content">
				<div className ="pane-group">
					{/* 左侧导航 */}
					<div className ="pane pane-sm sidebar">
						<nav className ="nav-group">
							<h5 className ="nav-group-title">开发必备</h5>
							<span className ={`nav-group-item ${this.state.homeMajor == this.$home_major_cfg.tiny ? 'active' : ''}`} onClick={()=>{
								this.setState({
									homeMajor: this.$home_major_cfg.tiny
								})
							}}>
								<span className ="icon icon-picture"></span>无损压图
							</span>
							<span className ={`nav-group-item ${this.state.homeMajor == this.$home_major_cfg.localserver ? 'active' : ''}`} onClick={()=>{
								this.setState({
									homeMajor: this.$home_major_cfg.localserver
								})
							}}>
								<span className ="icon icon-rss"></span>本地服务
							</span>
						</nav>
					</div>
					{/* 右侧内容 */}
					{this.__home_major()}
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