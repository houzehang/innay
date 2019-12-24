import React from 'react';
import { hide } from '../actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ipcRenderer } from 'electron';
import Hotkey from '../../hotkey'

class Toast extends React.Component {
	constructor(props) {
		super(props)
		ipcRenderer.on('hotkey', (event, hotkeyName) => {
			if (this.onHotKey && typeof this.onHotKey === 'function') {
				this.onHotKey(hotkeyName);
			}
		});
	}

    componentDidMount() {
        let timer= setTimeout(()=>{
            this.props.dispatchHide()
            clearTimeout(timer)
        },3000)
    }
	render() {
		const { type,configure } = this.props.data
		return <div className="toast-box">
			<div className="toast">
                <p>{configure.content}</p>
            </div>
		</div>
	}
	componentWillUnmount(){
	
	}
}

Toast.propTypes = {
	data: PropTypes.shape({
		configure: PropTypes.any.isRequired,
		showing : PropTypes.bool
	})
}

const mapStateToProps = (state, ownProps) => {
	return {
		showing : state.toast.showing
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
)(Toast)