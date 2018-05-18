import React from 'react';
import { hide } from '../actions'
import { connect } from 'react-redux'

class Dialog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		setTimeout(()=>{
			this.setState({showing: true})
		},100)
	}

	hide() {
		if (this.props.cancel) {
			this.props.cancel()
		}
		this.setState({showing: false})
		setTimeout(()=>{
			this.props.dispatchHide()
		},300)
	}

	sure() {
		if (this.props.sure) {
			this.props.sure()
		}
		this.hide()
	}

	render() {
		let buttons = []
		const { type } = this.props
		if (type == "confirm") {
			buttons.push(<button className="cancel-btn" key="cancel-btn" onClick={this.hide.bind(this)}>取消</button>)
		}
		buttons.push(<button className="ok-btn" key="ok-btn" onClick={this.sure.bind(this)}>确定</button>)
		return <div className={"mask dialog-layer " + (this.state.showing?"show":"")}>
			<div className="dialog">
				<div className="title">
					{this.props.title || "提示"}
					<div className="close-btn" onClick={this.hide.bind(this)}></div>
				</div>
				<div className="content">
					<div className="texts">{this.props.content}</div>
					<div className="btns">{buttons}</div>
				</div>
			</div>
		</div>
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		dispatchHide: () => {
			dispatch(hide())
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Dialog)