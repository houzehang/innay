import React from 'react';
import { hide } from '../actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ipcRenderer } from 'electron';
import Hotkey from '../../hotkey'
import Const from '../../const'
import { text } from 'body-parser';
class Dialog extends React.Component {
	constructor(props) {
		super(props)
		ipcRenderer.on('hotkey', (event, hotkeyName) => {
			if (this.onHotKey && typeof this.onHotKey === 'function') {
				this.onHotKey(hotkeyName);
			}
		});
	}


	hide() {
		this.props.dispatchHide()
		if (this.props.data.configure.cancel) {
			this.props.data.configure.cancel()
		}
	}

	sure() {
		this.props.dispatchHide()
		if (this.props.data.configure.sure) {
			this.props.data.configure.sure()
		}
	}

	render() {
		let buttons = []
		const { type,configure} 	= this.props.data
		let styleInfo    			= configure.style || Const.EBTN_STYLE_CONFIG.kNormal
		let classNameBtnOk	   		= `ok-btn ${styleInfo[0]}`
		let classNameBtnCancel 		= `cancel-btn ${styleInfo[1]}`
		let styleLine               = configure.linestyle || Const.LINE_CONFIRM_TITLE.lineTitle
        let showLine                = `${styleLine[0]}` 
		if (type == "confirm") {
			buttons.push(<button className={classNameBtnCancel} key="cancel-btn" onClick={this.hide.bind(this)}></button>)
		}
		buttons.push(<button className={classNameBtnOk} key="ok-btn" onClick={this.sure.bind(this)}></button>)
		return <div className="mask dialog-layer show">
			<div className={`${"dialog "+(configure.classname||"")}${configure.large_mod ? ' large' : ''}`} style={configure.styles}>
				<div className={configure.title_hidden ? 'title clear' : 'title'} >
					{configure.title=="个人信息"?<div className={showLine}>{configure.title_hidden ? '' : `${configure.title || "提示"}`}</div>:configure.title_hidden ? '' : `${configure.title || "提示"}`}
					{this.props.data.configure.close_hidden ? '' : <div className="close-btn" onClick={this.hide.bind(this)}></div>}
				</div>
				<div className={configure.nobutton?"content nobtn":"content"}>
					<div className={configure.large_mod ? "texts large" : "texts"}>{configure.content}</div>
					{configure.nobutton?"":<div className="btns">{buttons}</div>}
				</div>
			</div>
		</div>
	}

	onHotKey(hotkeyName) {
		if (!this.props.showing) return;

		switch (Hotkey[hotkeyName]) {
			case Hotkey.KEY_ENTER:
				this.sure();
				break;
			case Hotkey.KEY_ESC:
				this.hide();
				break;
			default:
				break;
		}
	}

	componentWillUnmount(){
		this.onHotKey = null;
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
			close_hidden: PropTypes.bool,
			title_hidden: PropTypes.bool,
			large_mod   : PropTypes.bool,
			viewport	: PropTypes.shape({
				width 	: PropTypes.string.isRequired,
				height	: PropTypes.string
			}),
			style		: PropTypes.strings
		}),
		type 	: PropTypes.string,
		showing : PropTypes.bool,
	})
}

const mapStateToProps = (state, ownProps) => {
	return {
		showing : state.dialog.showing
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
	mapStateToProps,
	mapDispatchToProps
)(Dialog)