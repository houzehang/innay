import React from 'react';

class Devices extends React.Component {
	constructor(props) {
		super(props)
		let currentVideoDevice 	 = this.props.rtc.getCurrentVideoDevice(),
			currentSpeakerDevice = this.props.rtc.getCurrentAudioPlaybackDevice(),
			currentAudioDevice   = this.props.rtc.getCurrentAudioRecordingDevice()
		this.state = {
			currentVideoDevice, 
			currentSpeakerDevice,
			currentAudioDevice
		}
	}
	render() {
		return  <div className="sound-tester">
			<div className="label">摄像头</div>
			<select className="camera-select" value={this.state.currentVideoDevice} onChange={(event)=>{
				this.setState({currentVideoDevice : event.target.value})
				this.props.rtc.setVideoDevice(event.target.value);
			}}>
			{
				this.props.video_devices.length > 0 ?
					this.props.video_devices.map((device)=>(
					<option key={device.deviceid} value={device.deviceid}>
						{device.devicename}
					</option>
					))
				:
					<option key="nothing" disabled selected>
						无可用摄像头设备
					</option>
			}
			</select>
			<div className="label">麦克风</div>
			<select className="micro-select" value={this.state.currentAudioDevice} onChange={(event)=>{
				this.setState({currentAudioDevice : event.target.value})
				this.props.rtc.setAudioRecordingDevice(event.target.value);
			}}>
			{
				this.props.audio_devices.length > 0 ?
					this.props.audio_devices.map((device)=>(
					<option key={device.deviceid} value={device.deviceid}>
						{device.devicename}
					</option>
					))
				:
					<option key="nothing" disabled selected>
						无可用麦克风设备
					</option>
			}
			</select>
			<div className="label">扬声器</div>
			<select className="speaker-select" value={this.state.currentSpeakerDevice} onChange={(event)=>{
				this.setState({currentSpeakerDevice : event.target.value})
				this.props.rtc.setAudioPlaybackDevice(event.target.value)
			}}>
			{
				this.props.speaker_devices.length > 0 ?
					this.props.speaker_devices.map((device)=>(
					<option key={device.deviceid} value={device.deviceid}>
						{device.devicename}
					</option>
					))
				:
					<option key="nothing" disabled selected>
						无可用扬声器设备
					</option>
			}
			</select>
		</div>
	}
}

export default Devices