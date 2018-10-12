import React from 'react';
import { hide } from '../actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Dialog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {showing: false}
	}

	componentDidMount() {
	}

	componentWillUnmount() {
		clearTimeout(this.$show_timer)
	}

	hide() {
		this.setState({showing: false})
		this.props.dispatchHide()
		if (this.props.data.configure.cancel) {
			this.props.data.configure.cancel()
		}
	}

	sure() {
		this.hide()
		if (this.props.data.configure.sure) {
			this.props.data.configure.sure()
		}
	}

	render() {
		let buttons = []
		console.log("this.props.data",this.props.data)
		const { type,configure,showing } = this.props.data
		if (type == "confirm") {
			buttons.push(<button className="cancel-btn" key="cancel-btn" onClick={this.hide.bind(this)}>{configure.cancel_txt||"取消"}</button>)
		}
		buttons.push(<button className="ok-btn" key="ok-btn" onClick={this.sure.bind(this)}>{configure.sure_txt||"确定"}</button>)
		if (!this.state.showing && showing) {
			if (configure.noanim) {
				this.setState({showing: true})
			} else {
				this.$show_timer = setTimeout(()=>{
					this.setState({showing: true})
				},100)
			}
		}
		return <div className={"mask dialog-layer " + (this.state.showing?"show":"")} style={{display:showing?"":"none"}}>
			<div className={"dialog "+(configure.classname||"")} style={configure.styles}>
				<div className="title">
					{configure.title || "提示"}
					<div className="close-btn" onClick={this.hide.bind(this)}></div>
				</div>
				<div className={configure.nobutton?"content nobtn":"content"}>
					<div className="texts">{configure.content}</div>
					{configure.nobutton?"":<div className="btns">{buttons}</div>}
				</div>
			</div>
		</div>
	}
}

Dialog.propTypes = {
	data: PropTypes.shape({
		configure: PropTypes.shape({
			title		: PropTypes.string,
			content		: PropTypes.any.isRequired,
			sure_txt	: PropTypes.string,
			cancel_txt  : PropTypes.string,
			sure		: PropTypes.func,
			cancel		: PropTypes.func,
			viewport	: PropTypes.shape({
				width 	: PropTypes.string.isRequired,
				height	: PropTypes.string
			})
		}),
		type 	: PropTypes.string,
		showing : PropTypes.bool
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