import React from 'react';
import { hide } from '../actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Dialog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		this.setState({showing: true})
	}

	componentWillUnmount() {
		clearTimeout(this.$show_timer)
	}

	hide() {
		this.setState({showing: false})
		this.props.dispatchHide()
		if (this.props.configure.cancel) {
			setTimeout(()=>{
				this.props.configure.cancel()
			},0)
		}
	}

	sure() {
		this.hide()
		if (this.props.configure.sure) {
			setTimeout(()=>{
				this.props.configure.sure()
			},0)
		}
	}

	render() {
		let buttons = []
		const { type } = this.props
		if (type == "confirm") {
			buttons.push(<button className="cancel-btn" key="cancel-btn" onClick={this.hide.bind(this)}>{this.props.configure.cancel_txt||"取消"}</button>)
		}
		buttons.push(<button className="ok-btn" key="ok-btn" onClick={this.sure.bind(this)}>{this.props.configure.sure_txt||"确定"}</button>)
		return <div className={"mask dialog-layer " + (this.state.showing?"show":"")}>
			<div className={"dialog "+(this.props.configure.classname||"")} style={this.props.configure.styles}>
				<div className="title">
					{this.props.configure.title || "提示"}
					<div className="close-btn" onClick={this.hide.bind(this)}></div>
				</div>
				<div className={this.props.configure.nobutton?"content nobtn":"content"}>
					<div className="texts">{this.props.configure.content}</div>
					{this.props.configure.nobutton?"":<div className="btns">{buttons}</div>}
				</div>
			</div>
		</div>
	}
}

Dialog.propTypes = {
	configure: PropTypes.shape({
		title	: PropTypes.string,
		content	: PropTypes.any.isRequired,
		type	: PropTypes.string,
		sure	: PropTypes.func,
		cancel	: PropTypes.func,
		viewport: PropTypes.shape({
			width : PropTypes.string.isRequired,
			height: PropTypes.string
		})
	})
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