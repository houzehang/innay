"use strict";
const Utils_1 = {
    deprecate: (replaceApi) => {
        console.warn('This method will be deprecated soon. ', replaceApi ? `Please use ${replaceApi} instead` : '');
    }
}
import Renderer_1 from './Renderer'
import events_1 from 'events'

class AgoraRtcEngine extends events_1.EventEmitter {
  constructor() {
      super();
      this.rtcEngine = new agora.NodeRtcEngine();
      this.initEventHandler();
      this.streams = new Map();
      this.renderMode = this._checkWebGL() ? 1 : 2;
      this.customRenderer = Renderer_1.CustomRenderer;
  }
  /**
   * Decide whether to use webgl/software/custom rendering.
   * @param {1|2|3} mode:
   * - 1 for old webgl rendering.
   * - 2 for software rendering.
   * - 3 for custom rendering.
   */
  setRenderMode(mode = 1) {
      this.renderMode = mode;
  }
  /**
   * Use this method to set custom Renderer when set renderMode in the
   * {@link setRenderMode} method to 3.
   * CustomRender should be a class.
   * @param {IRenderer} customRenderer Customizes the video renderer.
   */
  setCustomRenderer(customRenderer) {
      this.customRenderer = customRenderer;
  }
  /**
   * @private
   * @ignore
   * check if WebGL will be available with appropriate features
   * @return {boolean}
   */
  _checkWebGL() {
      const canvas = document.createElement('canvas');
      let gl;
      canvas.width = 1;
      canvas.height = 1;
      const options = {
          // Turn off things we don't need
          alpha: false,
          depth: false,
          stencil: false,
          antialias: false,
          preferLowPowerToHighPerformance: true
          // Still dithering on whether to use this.
          // Recommend avoiding it, as it's overly conservative
          // failIfMajorPerformanceCaveat: true
      };
      try {
          gl =
              canvas.getContext('webgl', options) ||
                  canvas.getContext('experimental-webgl', options);
      }
      catch (e) {
          return false;
      }
      if (gl) {
          return true;
      }
      else {
          return false;
      }
  }
  /**
   * init event handler
   * @private
   * @ignore
   */
  initEventHandler() {
      const self = this;
      const fire = (event, ...args) => {
          setImmediate(() => {
              this.emit(event, ...args);
          });
      };
      this.rtcEngine.onEvent('apierror', (funcName) => {
          console.error(`api ${funcName} failed. this is an error
            thrown by c++ addon layer. it often means sth is
            going wrong with this function call and it refused
            to do what is asked. kindly check your parameter types
            to see if it matches properly.`);
      });
      this.rtcEngine.onEvent('joinchannel', function (channel, uid, elapsed) {
          fire('joinedchannel', channel, uid, elapsed);
          fire('joinedChannel', channel, uid, elapsed);
      });
      this.rtcEngine.onEvent('rejoinchannel', function (channel, uid, elapsed) {
          fire('rejoinedchannel', channel, uid, elapsed);
          fire('rejoinedChannel', channel, uid, elapsed);
      });
      this.rtcEngine.onEvent('warning', function (warn, msg) {
          fire('warning', warn, msg);
      });
      this.rtcEngine.onEvent('error', function (err, msg) {
          fire('error', err, msg);
      });
      // this.rtcEngine.onEvent('audioquality', function(uid: number, quality: AgoraNetworkQuality, delay: number, lost: number) {
      //   fire('audioquality', uid, quality, delay, lost);
      //   fire('audioQuality', uid, quality, delay, lost);
      // });
      this.rtcEngine.onEvent('audiovolumeindication', function (speakers, speakerNumber, totalVolume) {
          if (speakers[0]) {
              fire('audiovolumeindication', speakers[0]['uid'], speakers[0]['volume'], speakerNumber, totalVolume);
              fire('audioVolumeIndication', speakers[0]['uid'], speakers[0]['volume'], speakerNumber, totalVolume);
          }
          fire('groupAudioVolumeIndication', speakers, speakerNumber, totalVolume);
      });
      this.rtcEngine.onEvent('leavechannel', function () {
          fire('leavechannel');
          fire('leaveChannel');
      });
      this.rtcEngine.onEvent('rtcstats', function (stats) {
          fire('rtcstats', stats);
          fire('rtcStats', stats);
      });
      this.rtcEngine.onEvent('localvideostats', function (stats) {
          fire('localvideostats', stats);
          fire('localVideoStats', stats);
      });
      this.rtcEngine.onEvent('localAudioStats', function (stats) {
          fire('localAudioStats', stats);
      });
      this.rtcEngine.onEvent('remotevideostats', function (stats) {
          fire('remotevideostats', stats);
          fire('remoteVideoStats', stats);
      });
      this.rtcEngine.onEvent('remoteAudioStats', function (stats) {
          fire('remoteAudioStats', stats);
      });
      this.rtcEngine.onEvent('remoteAudioTransportStats', function (uid, delay, lost, rxKBitRate) {
          fire('remoteAudioTransportStats', {
              uid,
              delay,
              lost,
              rxKBitRate
          });
      });
      this.rtcEngine.onEvent('remoteVideoTransportStats', function (uid, delay, lost, rxKBitRate) {
          fire('remoteVideoTransportStats', {
              uid,
              delay,
              lost,
              rxKBitRate
          });
      });
      this.rtcEngine.onEvent('audiodevicestatechanged', function (deviceId, deviceType, deviceState) {
          fire('audiodevicestatechanged', deviceId, deviceType, deviceState);
          fire('audioDeviceStateChanged', deviceId, deviceType, deviceState);
      });
      // this.rtcEngine.onEvent('audiomixingfinished', function() {
      //   fire('audiomixingfinished');
      //   fire('audioMixingFinished');
      // });
      this.rtcEngine.onEvent('audioMixingStateChanged', function (state, err) {
          fire('audioMixingStateChanged', state, err);
      });
      this.rtcEngine.onEvent('apicallexecuted', function (api, err) {
          fire('apicallexecuted', api, err);
          fire('apiCallExecuted', api, err);
      });
      this.rtcEngine.onEvent('remoteaudiomixingbegin', function () {
          fire('remoteaudiomixingbegin');
          fire('remoteAudioMixingBegin');
      });
      this.rtcEngine.onEvent('remoteaudiomixingend', function () {
          fire('remoteaudiomixingend');
          fire('remoteAudioMixingEnd');
      });
      this.rtcEngine.onEvent('audioeffectfinished', function (soundId) {
          fire('audioeffectfinished', soundId);
          fire('audioEffectFinished', soundId);
      });
      this.rtcEngine.onEvent('videodevicestatechanged', function (deviceId, deviceType, deviceState) {
          fire('videodevicestatechanged', deviceId, deviceType, deviceState);
          fire('videoDeviceStateChanged', deviceId, deviceType, deviceState);
      });
      this.rtcEngine.onEvent('networkquality', function (uid, txquality, rxquality) {
          fire('networkquality', uid, txquality, rxquality);
          fire('networkQuality', uid, txquality, rxquality);
      });
      this.rtcEngine.onEvent('lastmilequality', function (quality) {
          fire('lastmilequality', quality);
          fire('lastMileQuality', quality);
      });
      this.rtcEngine.onEvent('lastmileProbeResult', function (result) {
          fire('lastmileProbeResult', result);
      });
      this.rtcEngine.onEvent('firstlocalvideoframe', function (width, height, elapsed) {
          fire('firstlocalvideoframe', width, height, elapsed);
          fire('firstLocalVideoFrame', width, height, elapsed);
      });
      this.rtcEngine.onEvent('firstremotevideodecoded', function (uid, width, height, elapsed) {
          fire('addstream', uid, elapsed);
          fire('addStream', uid, elapsed);
          fire('firstRemoteVideoDecoded', uid, width, height, elapsed);
      });
      this.rtcEngine.onEvent('videosizechanged', function (uid, width, height, rotation) {
          fire('videosizechanged', uid, width, height, rotation);
          fire('videoSizeChanged', uid, width, height, rotation);
      });
      this.rtcEngine.onEvent('firstremotevideoframe', function (uid, width, height, elapsed) {
          fire('firstremotevideoframe', uid, width, height, elapsed);
          fire('firstRemoteVideoFrame', uid, width, height, elapsed);
      });
      this.rtcEngine.onEvent('userjoined', function (uid, elapsed) {
          console.log('user : ' + uid + ' joined.');
          fire('userjoined', uid, elapsed);
          fire('userJoined', uid, elapsed);
      });
      this.rtcEngine.onEvent('useroffline', function (uid, reason) {
          fire('userOffline', uid, reason);
          if (!self.streams) {
              self.streams = new Map();
              console.log('Warning!!!!!!, streams is undefined.');
              return;
          }
          self.destroyRender(uid);
          self.rtcEngine.unsubscribe(uid);
          fire('removestream', uid, reason);
          fire('removeStream', uid, reason);
      });
      this.rtcEngine.onEvent('usermuteaudio', function (uid, muted) {
          fire('usermuteaudio', uid, muted);
          fire('userMuteAudio', uid, muted);
      });
      this.rtcEngine.onEvent('usermutevideo', function (uid, muted) {
          fire('usermutevideo', uid, muted);
          fire('userMuteVideo', uid, muted);
      });
      this.rtcEngine.onEvent('userenablevideo', function (uid, enabled) {
          fire('userenablevideo', uid, enabled);
          fire('userEnableVideo', uid, enabled);
      });
      this.rtcEngine.onEvent('userenablelocalvideo', function (uid, enabled) {
          fire('userenablelocalvideo', uid, enabled);
          fire('userEnableLocalVideo', uid, enabled);
      });
      this.rtcEngine.onEvent('cameraready', function () {
          fire('cameraready');
          fire('cameraReady');
      });
      this.rtcEngine.onEvent('videostopped', function () {
          fire('videostopped');
          fire('videoStopped');
      });
      this.rtcEngine.onEvent('connectionlost', function () {
          fire('connectionlost');
          fire('connectionLost');
      });
      // this.rtcEngine.onEvent('connectioninterrupted', function() {
      //   fire('connectioninterrupted');
      //   fire('connectionInterrupted');
      // });
      // this.rtcEngine.onEvent('connectionbanned', function() {
      //   fire('connectionbanned');
      //   fire('connectionBanned');
      // });
      // this.rtcEngine.onEvent('refreshrecordingservicestatus', function(status: any) {
      //   fire('refreshrecordingservicestatus', status);
      //   fire('refreshRecordingServiceStatus', status);
      // });
      this.rtcEngine.onEvent('streammessage', function (uid, streamId, msg, len) {
          fire('streammessage', uid, streamId, msg, len);
          fire('streamMessage', uid, streamId, msg, len);
      });
      this.rtcEngine.onEvent('streammessageerror', function (uid, streamId, code, missed, cached) {
          fire('streammessageerror', uid, streamId, code, missed, cached);
          fire('streamMessageError', uid, streamId, code, missed, cached);
      });
      this.rtcEngine.onEvent('mediaenginestartcallsuccess', function () {
          fire('mediaenginestartcallsuccess');
          fire('mediaEngineStartCallSuccess');
      });
      this.rtcEngine.onEvent('requestchannelkey', function () {
          fire('requestchannelkey');
          fire('requestChannelKey');
      });
      this.rtcEngine.onEvent('firstlocalaudioframe', function (elapsed) {
          fire('firstlocalaudioframe', elapsed);
          fire('firstLocalAudioFrame', elapsed);
      });
      this.rtcEngine.onEvent('firstremoteaudioframe', function (uid, elapsed) {
          fire('firstremoteaudioframe', uid, elapsed);
          fire('firstRemoteAudioFrame', uid, elapsed);
      });
      this.rtcEngine.onEvent('firstRemoteAudioDecoded', function (uid, elapsed) {
          fire('firstRemoteAudioDecoded', uid, elapsed);
      });
      this.rtcEngine.onEvent('remoteVideoStateChanged', function (uid, state, reason, elapsed) {
          fire('remoteVideoStateChanged', uid, state, reason, elapsed);
      });
      this.rtcEngine.onEvent('cameraFocusAreaChanged', function (x, y, width, height) {
          fire('cameraFocusAreaChanged', x, y, width, height);
      });
      this.rtcEngine.onEvent('cameraExposureAreaChanged', function (x, y, width, height) {
          fire('cameraExposureAreaChanged', x, y, width, height);
      });
      this.rtcEngine.onEvent('tokenPrivilegeWillExpire', function (token) {
          fire('tokenPrivilegeWillExpire', token);
      });
      this.rtcEngine.onEvent('streamPublished', function (url, error) {
          fire('streamPublished', url, error);
      });
      this.rtcEngine.onEvent('streamUnpublished', function (url) {
          fire('streamUnpublished', url);
      });
      this.rtcEngine.onEvent('transcodingUpdated', function () {
          fire('transcodingUpdated');
      });
      this.rtcEngine.onEvent('streamInjectStatus', function (url, uid, status) {
          fire('streamInjectStatus', url, uid, status);
      });
      this.rtcEngine.onEvent('localPublishFallbackToAudioOnly', function (isFallbackOrRecover) {
          fire('localPublishFallbackToAudioOnly', isFallbackOrRecover);
      });
      this.rtcEngine.onEvent('remoteSubscribeFallbackToAudioOnly', function (uid, isFallbackOrRecover) {
          fire('remoteSubscribeFallbackToAudioOnly', uid, isFallbackOrRecover);
      });
      this.rtcEngine.onEvent('microphoneEnabled', function (enabled) {
          fire('microphoneEnabled', enabled);
      });
      this.rtcEngine.onEvent('connectionStateChanged', function (state, reason) {
          fire('connectionStateChanged', state, reason);
      });
      this.rtcEngine.onEvent('activespeaker', function (uid) {
          fire('activespeaker', uid);
          fire('activeSpeaker', uid);
      });
      this.rtcEngine.onEvent('clientrolechanged', function (oldRole, newRole) {
          fire('clientrolechanged', oldRole, newRole);
          fire('clientRoleChanged', oldRole, newRole);
      });
      this.rtcEngine.onEvent('audiodevicevolumechanged', function (deviceType, volume, muted) {
          fire('audiodevicevolumechanged', deviceType, volume, muted);
          fire('audioDeviceVolumeChanged', deviceType, volume, muted);
      });
      this.rtcEngine.onEvent('videosourcejoinsuccess', function (uid) {
          fire('videosourcejoinedsuccess', uid);
          fire('videoSourceJoinedSuccess', uid);
      });
      this.rtcEngine.onEvent('videosourcerequestnewtoken', function () {
          fire('videosourcerequestnewtoken');
          fire('videoSourceRequestNewToken');
      });
      this.rtcEngine.onEvent('videosourceleavechannel', function () {
          fire('videosourceleavechannel');
          fire('videoSourceLeaveChannel');
      });
      this.rtcEngine.onEvent('localUserRegistered', function (uid, userAccount) {
          fire('localUserRegistered', uid, userAccount);
      });
      this.rtcEngine.onEvent('userInfoUpdated', function (uid, userInfo) {
          fire('userInfoUpdated', uid, userInfo);
      });
      this.rtcEngine.onEvent('localVideoStateChanged', function (localVideoState, err) {
          fire('localVideoStateChanged', localVideoState, err);
      });
      this.rtcEngine.onEvent('localAudioStateChanged', function (state, err) {
          fire('localAudioStateChanged', state, err);
      });
      this.rtcEngine.onEvent('remoteAudioStateChanged', function (uid, state, reason, elapsed) {
          fire('remoteAudioStateChanged', uid, state, reason, elapsed);
      });
      this.rtcEngine.onEvent('audioMixingStateChanged', function (state, errorCode) {
          fire('audioMixingStateChanged', state, errorCode);
      });
      this.rtcEngine.onEvent('channelMediaRelayState', function (state, code) {
          fire('channelMediaRelayState', state, code);
      });
      this.rtcEngine.onEvent('channelMediaRelayEvent', function (event) {
          fire('channelMediaRelayEvent', event);
      });
      this.rtcEngine.registerDeliverFrame(function (infos) {
          self.onRegisterDeliverFrame(infos);
      });
  }
  /**
   * @private
   * @ignore
   * @param {number} type 0-local 1-remote 2-device_test 3-video_source
   * @param {number} uid uid get from native engine, differ from electron engine's uid
   */
  _getRenderer(type, uid) {
      if (type < 2) {
          if (uid === 0) {
              return this.streams.get('local');
          }
          else {
              return this.streams.get(String(uid));
          }
      }
      else if (type === 2) {
          // return this.streams.devtest;
          console.warn('Type 2 not support in production mode.');
          return;
      }
      else if (type === 3) {
          return this.streams.get('videosource');
      }
      else {
          console.warn('Invalid type for getRenderer, only accept 0~3.');
          return;
      }
  }
  /**
   * check if data is valid
   * @private
   * @ignore
   * @param {*} header
   * @param {*} ydata
   * @param {*} udata
   * @param {*} vdata
   */
  _checkData(header, ydata, udata, vdata) {
      if (header.byteLength != 20) {
          console.error('invalid image header ' + header.byteLength);
          return false;
      }
      if (ydata.byteLength === 20) {
          console.error('invalid image yplane ' + ydata.byteLength);
          return false;
      }
      if (udata.byteLength === 20) {
          console.error('invalid image uplanedata ' + udata.byteLength);
          return false;
      }
      if (ydata.byteLength != udata.byteLength * 4 ||
          udata.byteLength != vdata.byteLength) {
          console.error('invalid image header ' +
              ydata.byteLength +
              ' ' +
              udata.byteLength +
              ' ' +
              vdata.byteLength);
          return false;
      }
      return true;
  }
  /**
   * register renderer for target info
   * @private
   * @ignore
   * @param {number} infos
   */
  onRegisterDeliverFrame(infos) {
      const len = infos.length;
      for (let i = 0; i < len; i++) {
          const info = infos[i];
          const { type, uid, header, ydata, udata, vdata } = info;
          if (!header || !ydata || !udata || !vdata) {
              console.log('Invalid data param ： ' +
                  header +
                  ' ' +
                  ydata +
                  ' ' +
                  udata +
                  ' ' +
                  vdata);
              continue;
          }
          const renderer = this._getRenderer(type, uid);
          if (!renderer) {
              console.warn("Can't find renderer for uid : " + uid);
              continue;
          }
          if (this._checkData(header, ydata, udata, vdata)) {
              renderer.drawFrame({
                  header,
                  yUint8Array: ydata,
                  uUint8Array: udata,
                  vUint8Array: vdata
              });
          }
      }
  }
  /**
   * Resizes the renderer.
   *
   * When the size of the view changes, this method refresh the zoom level so
   * that video is sized appropriately while waiting for the next video frame
   * to arrive.
   *
   * Calling this method prevents a view discontinutity.
   * @param key Key for the map that store the renderers,
   * e.g, `uid` or `videosource` or `local`.
   */
  resizeRender(key) {
      if (this.streams.has(String(key))) {
          const renderer = this.streams.get(String(key));
          if (renderer) {
              renderer.refreshCanvas();
          }
      }
  }
  /**
   * Initializes the renderer.
   * @param key Key for the map that store the renderers,
   * e.g, uid or `videosource` or `local`.
   * @param view The Dom elements to render the video.
   */
    initRender(key, view) {
        if (this.streams.has(String(key))) {
            this.destroyRender(key);
        }
        let renderer
        if (view && view.cocos) {
            renderer = new AgoraRender()
        } else {
            renderer = new Renderer_1.GlRenderer();
        }
        renderer.bind(view);
        this.streams.set(String(key), renderer);
    }
  /**
   * Destroys the renderer.
   * @param key Key for the map that store the renderers,
   * e.g, `uid` or `videosource` or `local`.
   * @param onFailure The error callback for the {@link destroyRenderer}
   * method.
   */
  destroyRender(key, onFailure) {
      if (!this.streams.has(String(key))) {
          return;
      }
      const renderer = this.streams.get(String(key));
      try {
          renderer.unbind();
          this.streams.delete(String(key));
      }
      catch (err) {
          onFailure && onFailure(err);
      }
  }
  // ===========================================================================
  // BASIC METHODS
  // ===========================================================================
  /**
   * Initializes the agora real-time-communicating engine with your App ID.
   * @param appid The App ID issued to you by Agora.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  initialize(appid) {
      return this.rtcEngine.initialize(appid);
  }
  /**
   * Create a channel object, use this only if you want to join multiple channel at one time
   * @param channelName name of the channel to create
   */
  createChannel(channelName) {
      let rtcChannel = this.rtcEngine.createChannel(channelName);
      if (!rtcChannel) {
          return null;
      }
      return new AgoraRtcChannel(rtcChannel);
  }
  /**
   * Returns the version and the build information of the current SDK.
   * @return The version of the current SDK.
   */
  getVersion() {
      return this.rtcEngine.getVersion();
  }
  /**
   * Retrieves the error description.
   * @param {number} errorCode The error code.
   * @return The error description.
   */
  getErrorDescription(errorCode) {
      return this.rtcEngine.getErrorDescription(errorCode);
  }
  /**
   * Gets the connection state of the SDK.
   * @return {ConnectionState} Connect states. See {@link ConnectionState}.
   */
  getConnectionState() {
      return this.rtcEngine.getConnectionState();
  }
  /**
   * Allows a user to join a channel.
   *
   * Users in the same channel can talk to each other, and multiple users in
   * the same channel can start a group chat.
   * Users with different App IDs cannot call each other.You must call the
   * {@link leaveChannel} method to exit the current call
   * before entering another channel.
   *
   * This method call triggers the following callbacks:
   *
   * - The local client: joinedChannel
   * - The remote client: userJoined, if the user joining the channel is in
   * the Communication profile,
   * or is a BROADCASTER in the Live Broadcast profile.
   *
   * When the connection between the client and Agora's server is interrupted
   * due to poor network conditions,
   * the SDK tries reconnecting to the server. When the local client
   * successfully rejoins the channel, the SDK
   * triggers the rejoinedChannel callback on the local client.
   *
   * @param {string} token token The token generated at your server:
   * - For low-security requirements: You can use the temporary token
   * generated at Dashboard. For details, see
   * [Get a temporary token](https://docs.agora.io/en/Voice/token?platform=All
   * %20Platforms#get-a-temporary-token).
   * - For high-security requirements: Set it as the token generated at your
   * server. For details, see
   * [Get a token](https://docs.agora.io/en/Voice/token?platform=All%
   * 20Platforms#get-a-token).
   * @param {string} channel (Required) Pointer to the unique channel name for
   * the Agora RTC session in the string format smaller than 64 bytes.
   * Supported characters:
   * - The 26 lowercase English letters: a to z.
   * - The 26 uppercase English letters: A to Z.
   * - The 10 numbers: 0 to 9.
   * - The space.
   * - "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".",
   * ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
   * @param {string} info (Optional) Pointer to additional information about
   * the channel. This parameter can be set to NULL or contain channel related
   * information.
   * Other users in the channel will not receive this message.
   * @param {number} uid The User ID. A 32-bit unsigned integer with a value
   * ranging from 1 to 2<sup>32</sup>-1. The `uid` must be unique. If a `uid`
   * is not assigned (or set to 0),
   * the SDK assigns a `uid`.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  joinChannel(token, channel, info, uid) {
      return this.rtcEngine.joinChannel(token, channel, info, uid);
  }
  /**
   * Allows a user to leave a channel.
   *
   * Allows a user to leave a channel, such as hanging up or exiting a call.
   * The user must call the method to end the call before
   * joining another channel after call the {@link joinChannel} method.
   * This method returns 0 if the user leaves the channel and releases all
   * resources related to the call.
   * This method call is asynchronous, and the user has not left the channel
   * when the method call returns.
   *
   * Once the user leaves the channel, the SDK triggers the leavechannel
   * callback.
   *
   * A successful leavechannel method call triggers the removeStream callback
   * for the remote client when the user leaving the channel
   * is in the Communication channel, or is a BROADCASTER in the Live Broadcast
   * profile.
   *
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  leaveChannel() {
      return this.rtcEngine.leaveChannel();
  }
  /**
   * Releases the AgoraRtcEngine instance.
   *
   * Once the App calls this method to release the created AgoraRtcEngine
   * instance, no other methods in the SDK
   * can be used and no callbacks can occur. To start it again, initialize
   * {@link initialize} to establish a new
   * AgoraRtcEngine instance.
   *
   * **Note**: Call this method in the subthread.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  release() {
      return this.rtcEngine.release();
  }
  /**
   * @deprecated This method is deprecated. Agora does not recommend using
   * this method. Use {@link setAudioProfile} instead.
   * Sets the high-quality audio preferences.
   *
   * Call this method and set all parameters before joining a channel.
   * @param {boolean} fullband Sets whether to enable/disable full-band
   * codec (48-kHz sample rate).
   * - true: Enable full-band codec.
   * - false: Disable full-band codec.
   * @param {boolean} stereo Sets whether to enable/disable stereo codec.
   * - true: Enable stereo codec.
   * - false: Disable stereo codec.
   * @param {boolean} fullBitrate Sets whether to enable/disable high-bitrate
   * mode.
   * - true: Enable high-bitrate mode.
   * - false: Disable high-bitrate mode.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setHighQualityAudioParameters(fullband, stereo, fullBitrate) {
      Utils_1.deprecate('setAudioProfile');
      return this.rtcEngine.setHighQualityAudioParameters(fullband, stereo, fullBitrate);
  }
  /**
   * Subscribes to a remote user and initializes the corresponding renderer.
   * @param {number} uid The user ID of the remote user.
   * @param {Element} view The Dom where to initialize the renderer.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  subscribe(uid, view) {
      this.initRender(uid, view);
      return this.rtcEngine.subscribe(uid);
  }
  setupRemoteVideo(uid, view, channel) {
      if (view) {
          //bind
          this.initRender(uid, view);
          return this.rtcEngine.subscribe(uid, channel);
      }
      else {
          //unbind
          this.destroyRender(uid);
          return this.rtcEngine.unsubscribe(uid, channel);
      }
  }
  /**
   * Sets the local video view and the corresponding renderer.
   * @param {Element} view The Dom element where you initialize your view.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setupLocalVideo(view) {
      this.initRender('local', view);
      return this.rtcEngine.setupLocalVideo();
  }
  /**
   * Sets the renderer dimension of video.
   *
   * This method ONLY affects size of data sent to js layer, while native video
   * size is determined by {@link setVideoEncoderConfiguration}.
   * @param {*} rendertype The renderer type:
   * - 0: The local renderer.
   * - 1: The remote renderer.
   * - 2: The device test
   * - 3: The video source.
   * @param {*} uid The user ID of the targeted user.
   * @param {*} width The target width.
   * @param {*} height The target height.
   */
  setVideoRenderDimension(rendertype, uid, width, height) {
      this.rtcEngine.setVideoRenderDimension(rendertype, uid, width, height);
  }
  /**
   * Sets the global renderer frame rate (fps).
   *
   * This method is mainly used to improve the performance of js rendering
   * once set, the video data will be sent with this frame rate. This can
   * reduce the CPU consumption of js rendering.
   * This applies to ALL views except the ones added to the high frame rate
   * stream.
   * @param {number} fps The renderer frame rate (fps).
   */
  setVideoRenderFPS(fps) {
      this.rtcEngine.setFPS(fps);
  }
  /**
   * Sets renderer frame rate for the high stream.
   *
   * The high stream here has nothing to do with the dual stream.
   * It means the stream that is added to the high frame rate stream by calling
   * the {@link addVideoRenderToHighFPS} method.
   *
   * This is often used when we want to set the low frame rate for most of
   * views, but high frame rate for one
   * or two special views, e.g. screen sharing.
   * @param {number} fps The renderer high frame rate (fps).
   */
  setVideoRenderHighFPS(fps) {
      this.rtcEngine.setHighFPS(fps);
  }
  /**
   * Adds a video stream to the high frame rate stream.
   * Streams added to the high frame rate stream will be controlled by the
   * {@link setVideoRenderHighFPS} method.
   * @param {number} uid The User ID.
   */
  addVideoRenderToHighFPS(uid) {
      this.rtcEngine.addToHighVideo(uid);
  }
  /**
   * Removes a stream from the high frame rate stream.
   * Streams removed from the high frame rate stream will be controlled by the
   * {@link setVideoRenderFPS} method.
   * @param {number} uid The User ID.
   */
  removeVideoRenderFromHighFPS(uid) {
      this.rtcEngine.removeFromHighVideo(uid);
  }
  /**
   * Sets the view content mode.
   * @param {number | 'local' | 'videosource'} uid The user ID for operating
   * streams.
   * @param {0|1} mode The view content mode:
   * - 0: Cropped mode. Uniformly scale the video until it fills the visible
   * boundaries (cropped). One dimension of the video may have clipped
   * contents.
   * - 1: Fit mode. Uniformly scale the video until one of its dimension fits
   * the boundary (zoomed to fit). Areas that are not filled due to the
   * disparity
   * in the aspect ratio will be filled with black.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setupViewContentMode(uid, mode) {
      if (this.streams.has(String(uid))) {
          const renderer = this.streams.get(String(uid));
          renderer.setContentMode(mode);
          return 0;
      }
      else {
          return -1;
      }
  }
  /**
   * Renews the token when the current token expires.
   *
   * The key expires after a certain period of time once the Token schema is
   * enabled when:
   * - The onError callback reports the ERR_TOKEN_EXPIRED(109) error, or
   * - The requestChannelKey callback reports the ERR_TOKEN_EXPIRED(109) error,
   * or
   * - The user receives the tokenPrivilegeWillExpire callback.
   *
   * The app should retrieve a new token from the server and then call this
   * method to renew it. Failure to do so results in the SDK disconnecting
   * from the server.
   * @param {string} newtoken The new token.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  renewToken(newtoken) {
      return this.rtcEngine.renewToken(newtoken);
  }
  /**
   * Sets the channel profile.
   *
   * The AgoraRtcEngine applies different optimization according to the app
   * scenario.
   *
   * **Note**:
   * -  Call this method before the {@link joinChannel} method.
   * - Users in the same channel must use the same channel profile.
   * @param {number} profile The channel profile:
   * - 0: for communication
   * - 1: for live broadcasting
   * - 2: for in-game
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setChannelProfile(profile) {
      return this.rtcEngine.setChannelProfile(profile);
  }
  /**
   * Sets the role of a user (Live Broadcast only).
   *
   * This method sets the role of a user, such as a host or an audience
   * (default), before joining a channel.
   *
   * This method can be used to switch the user role after a user joins a
   * channel. In the Live Broadcast profile,
   * when a user switches user roles after joining a channel, a successful
   * {@link setClientRole} method call triggers the following callbacks:
   * - The local client: clientRoleChanged
   * - The remote client: userJoined
   *
   * @param {ClientRoleType} role The client role:
   *
   * - 1: The broadcaster
   * - 2: The audience
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setClientRole(role) {
      return this.rtcEngine.setClientRole(role);
  }
  /**
   * @deprecated The method is deprecated. Use
   * {@link startEchoTestWithInterval} instead.
   * Starts an audio call test.
   *
   * This method launches an audio call test to determine whether the audio
   * devices (for example, headset and speaker) and the network connection are
   * working properly.
   *
   * To conduct the test, the user speaks, and the recording is played back
   * within 10 seconds.
   *
   * If the user can hear the recording in 10 seconds, it indicates that
   * the audio devices
   * and network connection work properly.
   *
   * **Note**:
   * - Call this method before the {@link joinChannel} method.
   * - After calling this method, call the {@link stopEchoTest} method to end
   * the test. Otherwise, the app cannot run the next echo test,
   * nor can it call the {@link joinChannel} method to start a new call.
   * - In the Live Broadcast profile, only hosts can call this method.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  startEchoTest() {
      Utils_1.deprecate('startEchoTestWithInterval');
      return this.rtcEngine.startEchoTest();
  }
  /**
   * Stops the audio call test.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  stopEchoTest() {
      return this.rtcEngine.stopEchoTest();
  }
  /**
   * Starts an audio call test.
   *
   * This method starts an audio call test to determine whether the audio
   * devices
   * (for example, headset and speaker) and the network connection are working
   * properly.
   *
   * In the audio call test, you record your voice. If the recording plays back
   * within the set time interval,
   * the audio devices and the network connection are working properly.
   *
   * **Note**:
   * - Call this method before the {@link joinChannel} method.
   * - After calling this method, call the {@link stopEchoTest} method to end
   * the test. Otherwise, the app cannot run the next echo test,
   * nor can it call the {@link joinChannel} method to start a new call.
   * - In the Live Broadcast profile, only hosts can call this method.
   * @param interval The time interval (s) between when you speak and when the
   * recording plays back.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  startEchoTestWithInterval(interval) {
      return this.rtcEngine.startEchoTestWithInterval(interval);
  }
  /**
   * Enables the network connection quality test.
   *
   * This method tests the quality of the users' network connections and is
   * disabled by default.
   *
   * Before users join a channel or before an audience switches to a host,
   * call this method to check the uplink network quality.
   * This method consumes additional network traffic, which may affect the
   * communication quality.
   *
   * Call the {@link disableLastmileTest} method to disable this test after
   * receiving the lastmileQuality callback, and before the user joins a
   * channel or switches the user role.
   * **Note**:
   * - Do not call any other methods before receiving the lastmileQuality
   * callback. Otherwise,
   * the callback may be interrupted by other methods, and hence may not be
   * triggered.
   * - A host should not call this method after joining a channel
   * (when in a call).
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  enableLastmileTest() {
      return this.rtcEngine.enableLastmileTest();
  }
  /**
   * This method disables the network connection quality test.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  disableLastmileTest() {
      return this.rtcEngine.disableLastmileTest();
  }
  /**
   * Starts the last-mile network probe test before
   * joining a channel to get the uplink and downlink last-mile network
   * statistics,
   * including the bandwidth, packet loss, jitter, and average round-trip
   * time (RTT).
   *
   * Once this method is enabled, the SDK returns the following callbacks:
   * - lastmileQuality: the SDK triggers this callback within two seconds
   * depending on the network conditions.
   * This callback rates the network conditions with a score and is more
   * closely linked to the user experience.
   * - lastmileProbeResult: the SDK triggers this callback within 30 seconds
   * depending on the network conditions.
   * This callback returns the real-time statistics of the network conditions
   * and is more objective.
   *
   * Call this method to check the uplink network quality before users join
   * a channel or before an audience switches to a host.
   *
   * **Note**:
   * - This method consumes extra network traffic and may affect communication
   * quality. We do not recommend calling this method together with
   * {@link enableLastmileTest}.
   * - Do not call other methods before receiving the lastmileQuality and
   * lastmileProbeResult callbacks. Otherwise, the callbacks may be interrupted
   * by other methods.
   * - In the Live Broadcast profile, a host should not call this method after
   * joining a channel.
   *
   * @param {LastmileProbeConfig} config The configurations of the last-mile
   * network probe test. See  {@link LastmileProbeConfig}.
   */
  startLastmileProbeTest(config) {
      return this.rtcEngine.startLastmileProbeTest(config);
  }
  /**
   * Stops the last-mile network probe test.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  stopLastmileProbeTest() {
      return this.rtcEngine.stopLastmileProbeTest();
  }
  /**
   * Enables the video module.
   *
   * You can call this method either before joining a channel or during a call.
   * If you call this method before joining a channel,
   * the service starts in the video mode. If you call this method during an
   * audio call, the audio mode switches to the video mode.
   *
   * To disable the video, call the {@link disableVideo} method.
   *
   * **Note**:
   * - This method affects the internal engine and can be called after calling
   * the {@link leaveChannel} method. You can call this method either before
   * or after joining a channel.
   * - This method resets the internal engine and takes some time to take
   * effect. We recommend using the following API methods to control the video
   * engine modules separately:
   *   - {@link enableLocalVideo}: Whether to enable the camera to create the
   * local video stream.
   *   - {@link muteLocalVideoStream}: Whether to publish the local video
   * stream.
   *   - {@link muteLocalVideoStream}: Whether to publish the local video
   * stream.
   *   - {@link muteAllRemoteVideoStreams}: Whether to subscribe to and play
   * all remote video streams.
   *
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  enableVideo() {
      return this.rtcEngine.enableVideo();
  }
  /**
   * Disables the video module.
   *
   * You can call this method before joining a channel or during a call. If you
   * call this method before joining a channel,
   * the service starts in audio mode. If you call this method during a video
   * call, the video mode switches to the audio mode.
   *
   * To enable the video mode, call the {@link enableVideo} method.
   *
   * **Note**:
   * - This method affects the internal engine and can be called after calling
   * the {@link leaveChannel} method. You can call this method either before
   * or after joining a channel.
   * - This method resets the internal engine and takes some time to take
   * effect. We recommend using the following API methods to control the video
   * engine modules separately:
   *   - {@link enableLocalVideo}: Whether to enable the camera to create the
   * local video stream.
   *   - {@link muteLocalVideoStream}: Whether to publish the local video
   * stream.
   *   - {@link muteLocalVideoStream}: Whether to publish the local video
   * stream.
   *   - {@link muteAllRemoteVideoStreams}: Whether to subscribe to and play
   * all remote video streams.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  disableVideo() {
      return this.rtcEngine.disableVideo();
  }
  /**
   * Starts the local video preview before joining a channel.
   *
   * Before starting the preview, always call {@link setupLocalVideo} to set
   * up the preview window and configure the attributes,
   * and also call the {@link enableVideo} method to enable video.
   *
   * If startPreview is called to start the local video preview before
   * calling {@link joinChannel} to join a channel, the local preview
   * remains after after you call {@link leaveChannel} to leave the channel.
   * Call {@link stopPreview} to disable the local preview.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  startPreview() {
      return this.rtcEngine.startPreview();
  }
  /**
   * Stops the local video preview and closes the video.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  stopPreview() {
      return this.rtcEngine.stopPreview();
  }
  /**
   * @deprecated This method is deprecated. Use
   * {@link setVideoEncoderConfiguration} instead.
   * Sets the video profile.
   * @param {VIDEO_PROFILE_TYPE} profile The video profile. See
   * {@link VIDEO_PROFILE_TYPE}.
   * @param {boolean} [swapWidthAndHeight = false] Whether to swap width and
   * height:
   * - true: Swap the width and height.
   * - false: Do not swap the width and height.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setVideoProfile(profile, swapWidthAndHeight = false) {
      return this.rtcEngine.setVideoProfile(profile, swapWidthAndHeight);
  }
  /**
   * Sets the camera capturer configuration.
   *
   * For a video call or live broadcast, generally the SDK controls the camera
   * output parameters.
   * When the default camera capture settings do not meet special requirements
   * or cause performance problems, we recommend using this method to set the
   * camera capture preference:
   * - If the resolution or frame rate of the captured raw video data are
   * higher than those set by {@link setVideoEncoderConfiguration},
   * processing video frames requires extra CPU and RAM usage and degrades
   * performance. We recommend setting config as
   * CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE(1) to avoid such problems.
   * - If you do not need local video preview or are willing to sacrifice
   * preview quality,
   * we recommend setting config as CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE(1)
   * to optimize CPU and RAM usage.
   * - If you want better quality for the local video preview, we recommend
   * setting config as CAPTURER_OUTPUT_PREFERENCE_PREVIEW(2).
   * **Note**: Call this method before enabling the local camera. That said,
   * you can call this method before calling {@link joinChannel},
   * {@link enableVideo}, or {@link enableLocalVideo},
   * depending on which method you use to turn on your local camera.
   * @param {CameraCapturerConfiguration} config The camera capturer
   * configuration. See {@link CameraCapturerConfiguration}.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setCameraCapturerConfiguration(config) {
      return this.rtcEngine.setCameraCapturerConfiguration(config);
  }
  /**
   * Sets the video encoder configuration.
   *
   * Each video encoder configuration corresponds to a set of video parameters,
   * including the resolution, frame rate, bitrate, and video orientation.
   * The parameters specified in this method are the maximum values under ideal
   * network conditions. If the video engine cannot render the video using
   * the specified parameters due to poor network conditions, the parameters
   * further down the list are considered until a successful configuration is
   * found.
   *
   * If you do not set the video encoder configuration after joining the
   * channel, you can call this method before calling the {@link enableVideo}
   * method to reduce the render time of the first video frame.
   * @param {VideoEncoderConfiguration} config - The local video encoder
   * configuration. See {@link VideoEncoderConfiguration}.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setVideoEncoderConfiguration(config) {
      const { width = 640, height = 480, frameRate = 15, minFrameRate = -1, bitrate = 0, minBitrate = -1, orientationMode = 0, degradationPreference = 0 } = config;
      return this.rtcEngine.setVideoEncoderConfiguration({
          width,
          height,
          frameRate,
          minFrameRate,
          bitrate,
          minBitrate,
          orientationMode,
          degradationPreference
      });
  }
  /**
   * Enables/Disables image enhancement and sets the options
   * @param {boolean} enable Sets whether or not to enable image enhancement:
   * - true: Enables image enhancement.
   * - false: Disables image enhancement.
   * @param {Object} options The image enhancement options. It contains the
   * following parameters:
   * @param {number} options.lighteningContrastLevel The lightening contrast
   * level: 0 for low, 1 (default) for normal, and 2 for high.
   * @param {number} options.lighteningLevel The brightness level. The value
   * ranges from 0.0 (original) to 1.0.
   * @param {number} options.smoothnessLevel The sharpness level. The value
   * ranges between 0 (original) and 1. This parameter is usually used to
   * remove blemishes.
   * @param {number} options.rednessLevel The redness level. The value ranges
   * between 0 (original) and 1. This parameter adjusts the red saturation
   * level.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setBeautyEffectOptions(enable, options) {
      return this.rtcEngine.setBeautyEffectOptions(enable, options);
  }
  /**
   * Sets the priority of a remote user's media stream.
   *
   * Use this method with the {@link setRemoteSubscribeFallbackOption} method.
   * If the fallback function is enabled for a subscribed stream, the SDK
   * ensures
   * the high-priority user gets the best possible stream quality.
   *
   * **Note**: The Agora SDK supports setting userPriority as high for one
   * user only.
   * @param {number} uid The ID of the remote user.
   * @param {Priority} priority The priority of the remote user. See {@link Priority}.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setRemoteUserPriority(uid, priority) {
      return this.rtcEngine.setRemoteUserPriority(uid, priority);
  }
  /**
   * Enables the audio module.
   *
   * The audio module is enabled by default.
   *
   * **Note**:
   * - This method affects the internal engine and can be called after calling
   * the {@link leaveChannel} method. You can call this method either before
   * or after joining a channel.
   * - This method resets the internal engine and takes some time to take
   * effect. We recommend using the following API methods to control the
   * audio engine modules separately:
   *   - {@link enableLocalAudio}: Whether to enable the microphone to create
   * the local audio stream.
   *   - {@link muteLocalAudioStream}: Whether to publish the local audio
   * stream.
   *   - {@link muteRemoteAudioStream}: Whether to subscribe to and play the
   * remote audio stream.
   *   - {@link muteAllRemoteAudioStreams}: Whether to subscribe to and play
   * all remote audio streams.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  enableAudio() {
      return this.rtcEngine.enableAudio();
  }
  /**
   * Disables the audio module.
   *
   * **Note**:
   * - This method affects the internal engine and can be called after calling
   * the {@link leaveChannel} method. You can call this method either before
   * or after joining a channel.
   * - This method resets the internal engine and takes some time to take
   * effect. We recommend using the following API methods to control the audio
   * engine modules separately:
   *   - {@link enableLocalAudio}: Whether to enable the microphone to create
   * the local audio stream.
   *   - {@link muteLocalAudioStream}: Whether to publish the local audio
   * stream.
   *   - {@link muteRemoteAudioStream}: Whether to subscribe to and play the
   * remote audio stream.
   *   - {@link muteAllRemoteAudioStreams}: Whether to subscribe to and play
   * all remote audio streams.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  disableAudio() {
      return this.rtcEngine.disableAudio();
  }
  /**
   * Sets audio parameters and application scenarios.
   * @param {number} profile Sets the sample rate, bitrate, encoding mode, and
   * the number of channels:
   * - 0: Default. In the Communication profile, the default value is 1:
   * Speech standard; in the Live Broadcast profile, the default value is 2:
   * Music standard.
   * - 1: speech standard. A sample rate of 32 kHz, audio encoding, mono, and
   * a bitrate of up to 18 Kbps.
   * - 2: Music standard. A sample rate of 48 kHz, music encoding, mono, and
   * a bitrate of up to 48 Kbps.
   * - 3: Music standard stereo. A sample rate of 48 kHz, music encoding,
   * stereo, and a bitrate of up to 56 Kbps.
   * - 4: Music high quality. A sample rate of 48 kHz, music encoding, mono,
   * and a bitrate of up to 128 Kbps.
   * - 5: Music high quality stereo.  A sample rate of 48 kHz, music encoding,
   * stereo, and a bitrate of up to 192 Kbps.
   * @param {number} scenario Sets the audio application scenarios:
   * - 0: Default.
   * - 1: Chatroom entertainment. The entertainment scenario, supporting voice
   * during gameplay.
   * - 2: Education. The education scenario, prioritizing fluency and
   * stability.
   * - 3: Game streaming. The live gaming scenario, enabling the gaming audio
   * effects in the speaker mode in a live broadcast scenario. Choose this
   * scenario for high-fidelity music playback.
   * - 4: Showroom. The showroom scenario, optimizing the audio quality with
   * external professional equipment.
   * - 5: Chatroom gaming. The game chatting scenario.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setAudioProfile(profile, scenario) {
      return this.rtcEngine.setAudioProfile(profile, scenario);
  }
  /**
   * @deprecated This method is deprecated. Use
   * {@link setCameraCapturerConfiguration} and
   * {@link setVideoEncoderConfiguration} instead.
   * Sets the preference option for the video quality (Live Broadcast only).
   * @param {boolean} preferFrameRateOverImageQuality Sets the video quality
   * preference:
   * - true: Frame rate over image quality.
   * - false: (Default) Image quality over frame rate.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setVideoQualityParameters(preferFrameRateOverImageQuality) {
      return this.rtcEngine.setVideoQualityParameters(preferFrameRateOverImageQuality);
  }
  /**
   * Enables built-in encryption with an encryption password before joining
   * a channel.
   *
   * All users in a channel must set the same encryption password.
   * The encryption password is automatically cleared once a user has left
   * the channel.
   * If the encryption password is not specified or set to empty, the
   * encryption function will be disabled.
   *
   * **Note**:
   * - For optimal transmission, ensure that the encrypted data size does not
   * exceed the original data size + 16 bytes. 16 bytes is the maximum padding
   * size for AES encryption.
   * - Do not use this method for CDN live streaming.
   * @param {string} secret Encryption Password
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setEncryptionSecret(secret) {
      return this.rtcEngine.setEncryptionSecret(secret);
  }
  /**
   * Sets the built-in encryption mode.
   *
   * The Agora SDK supports built-in encryption, which is set to aes-128-xts
   * mode by default.
   * Call this method to set the encryption mode to use other encryption modes.
   * All users in the same channel must use the same encryption mode and
   * password.
   *
   * Refer to the information related to the AES encryption algorithm on the
   * differences between the encryption modes.
   *
   * **Note**: Call the {@link setEncryptionSecret} method before calling
   * this method.
   * @param mode Sets the encryption mode:
   * - "aes-128-xts": 128-bit AES encryption, XTS mode.
   * - "aes-128-ecb": 128-bit AES encryption, ECB mode.
   * - "aes-256-xts": 256-bit AES encryption, XTS mode.
   * - "": When encryptionMode is set as null, the encryption is in
   * “aes-128-xts” by default.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setEncryptionMode(mode) {
      return this.rtcEngine.setEncryptionMode(mode);
  }
  /**
   * Stops/Resumes sending the local audio stream.
   *
   * A successful muteLocalAudioStream method call triggers the userMuteAudio
   * callback on the remote client.
   *
   * **Note**: muteLocalAudioStream(true) does not disable the microphone and
   * thus does not affect any ongoing recording.
   * @param {boolean} mute Sets whether to send/stop sending the local audio
   * stream:
   * - true: Stop sending the local audio stream.
   * - false: (Default) Send the local audio stream.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  muteLocalAudioStream(mute) {
      return this.rtcEngine.muteLocalAudioStream(mute);
  }
  /**
   * Stops/Resumes receiving all remote audio streams.
   * @param {boolean} mute Sets whether to receive/stop receiving all remote
   * audio streams:
   * - true: Stop receiving all remote audio streams.
   * - false: (Default) Receive all remote audio streams.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  muteAllRemoteAudioStreams(mute) {
      return this.rtcEngine.muteAllRemoteAudioStreams(mute);
  }
  /**
   * Sets whether to receive all remote audio streams by default.
   *
   * You can call this method either before or after joining a channel. If you
   * call this method after joining a channel,
   * the remote audio streams of all subsequent users are not received.
   * @param {boolean} mute Sets whether or not to receive/stop receiving all
   * remote audio streams by default:
   * - true: Stop receiving all remote audio streams by default.
   * - false: (Default) Receive all remote audio streams by default.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setDefaultMuteAllRemoteAudioStreams(mute) {
      return this.rtcEngine.setDefaultMuteAllRemoteAudioStreams(mute);
  }
  /**
   * Stops/Resumes receiving a specified audio stream.
   * @param {number} uid ID of the specified remote user.
   * @param {boolean} mute Sets whether to receive/stop receiving the specified
   * remote user's audio stream:
   * - true: Stop receiving the specified remote user’s audio stream.
   * - false: (Default) Receive the specified remote user’s audio stream.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  muteRemoteAudioStream(uid, mute) {
      return this.rtcEngine.muteRemoteAudioStream(uid, mute);
  }
  /**
   * Stops/Resumes sending the local video stream.
   *
   * A successful muteLocalVideoStream method call triggers the userMuteVideo
   * callback on the remote client.
   *
   * **Note**: muteLocalVideoStream(true) does not disable the camera and thus
   * does not affect the retrieval of the local video streams.
   * @param {boolean} mute Sets whether to send/stop sending the local video
   * stream:
   * - true: Stop sending the local video stream.
   * - false: (Default) Send the local video stream.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  muteLocalVideoStream(mute) {
      return this.rtcEngine.muteLocalVideoStream(mute);
  }
  /**
   * Disables/Re-enables the local video capture.
   *
   * This method disables or re-enables the local video capturer, and does not
   * affect receiving the remote video stream.
   *
   * After you call the {@link enableVideo} method, the local video capturer
   * is enabled
   * by default. You can call enableLocalVideo(false) to disable the local
   * video capturer. If you want to re-enable it, call enableLocalVideo(true).
   *
   * After the local video capturer is successfully disabled or re-enabled,
   * the SDK triggers the userEnableVideo callback on the remote client.
   *
   * @param {boolean} enable Sets whether to disable/re-enable the local video,
   * including the capturer, renderer, and sender:
   * - true: (Default) Re-enable the local video.
   * - false: Disable the local video. Once the local video is disabled, the
   * remote users can no longer receive the video stream of this user,
   * while this user can still receive the video streams of other remote users.
   * When you set enabled as false, this method does not require a local
   * camera.
   *
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  enableLocalVideo(enable) {
      return this.rtcEngine.enableLocalVideo(enable);
  }
  /**
   * Enables/Disables the local audio capture.
   *
   * The audio function is enabled by default. This method disables/re-enables
   * the local audio function, that is, to stop or restart local audio capture
   * and processing.
   *
   * This method does not affect receiving or playing the remote audio streams,
   * and enableLocalAudio(false) is applicable to scenarios where the user
   * wants to receive remote
   * audio streams without sending any audio stream to other users in the
   * channel.
   *
   * The SDK triggers the microphoneEnabled callback once the local audio
   * function is disabled or re-enabled.
   * @param {boolean} enable Sets whether to disable/re-enable the local audio
   * function:
   * - true: (Default) Re-enable the local audio function, that is, to start
   * local audio capture and processing.
   * - false: Disable the local audio function, that is, to stop local audio
   * capture and processing.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  enableLocalAudio(enable) {
      return this.rtcEngine.enableLocalAudio(enable);
  }
  /**
   * Stops/Resumes receiving all remote video streams.
   *
   * @param {boolean} mute Sets whether to receive/stop receiving all remote
   * video streams:
   * - true: Stop receiving all remote video streams.
   * - false: (Default) Receive all remote video streams.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  muteAllRemoteVideoStreams(mute) {
      return this.rtcEngine.muteAllRemoteVideoStreams(mute);
  }
  /**
   * Sets whether to receive all remote video streams by default.
   * @param {boolean} mute Sets whether to receive/stop receiving all remote
   * video streams by default:
   * - true: Stop receiving all remote video streams by default.
   * - false: (Default) Receive all remote video streams by default.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setDefaultMuteAllRemoteVideoStreams(mute) {
      return this.rtcEngine.setDefaultMuteAllRemoteVideoStreams(mute);
  }
  /**
   * Enables the groupAudioVolumeIndication callback at a set time interval to
   * report on which users are speaking and the speakers' volume.
   *
   * Once this method is enabled, the SDK returns the volume indication in the
   * groupAudioVolumeIndication callback at the set time interval,
   * regardless of whether any user is speaking in the channel.
   * @param {number} interval Sets the time interval between two consecutive
   * volume indications:
   * - ≤ 0: Disables the volume indication.
   * - > 0: Time interval (ms) between two consecutive volume indications. We
   * recommend setting interval ≥ 200 ms.
   * @param {number} smooth The smoothing factor sets the sensitivity of the
   * audio volume indicator. The value ranges between 0 and 10.
   * The greater the value, the more sensitive the indicator. The recommended
   * value is 3.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  enableAudioVolumeIndication(interval, smooth) {
      return this.rtcEngine.enableAudioVolumeIndication(interval, smooth);
  }
  /**
   * Stops/Resumes receiving a specified remote user's video stream.
   * @param {number} uid User ID of the specified remote user.
   * @param {boolean} mute Sets whether to receive/stop receiving a specified
   * remote user's video stream:
   * - true: Stop receiving a specified remote user’s video stream.
   * - false: (Default) Receive a specified remote user’s video stream.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  muteRemoteVideoStream(uid, mute) {
      return this.rtcEngine.muteRemoteVideoStream(uid, mute);
  }
  /**
   * Sets the volume of the in-ear monitor.
   * @param {number} volume Sets the volume of the in-ear monitor. The value
   * ranges between 0 and 100 (default).
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setInEarMonitoringVolume(volume) {
      return this.rtcEngine.setInEarMonitoringVolume(volume);
  }
  /**
   * @deprecated This method is deprecated. Use {@link disableAudio} instead.
   * Disables the audio function in the channel.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  pauseAudio() {
      Utils_1.deprecate('disableAudio');
      return this.rtcEngine.pauseAudio();
  }
  /**
   * @deprecated  This method is deprecated. Use {@link enableAudio} instead.
   * Resumes the audio function in the channel.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  resumeAudio() {
      Utils_1.deprecate('enableAudio');
      return this.rtcEngine.resumeAudio();
  }
  /**
   * Specifies an SDK output log file.
   *
   * The log file records all log data for the SDK’s operation. Ensure that
   * the directory for the log file exists and is writable.
   *
   * @param {string} filepath File path of the log file. The string of the
   * log file is in UTF-8.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setLogFile(filepath) {
      return this.rtcEngine.setLogFile(filepath);
  }
  /**
   * Sets the log file size (KB).
   *
   * The Agora SDK has two log files, each with a default size of 512 KB.
   * If you set size as 1024 KB, the SDK outputs log files with a total
   * maximum size of 2 MB.
   * If the total size of the log files exceed the set value, the new output
   * log files overwrite the old output log files.
   * @param {number} size The SDK log file size (KB).
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setLogFileSize(size) {
      return this.rtcEngine.setLogFileSize(size);
  }
  /**
   * Specifies an SDK output log file for the video source object.
   *
   * **Note**: Call this method after the {@link videoSourceInitialize} method.
   * @param {string} filepath filepath of log. The string of the log file is
   * in UTF-8.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  videoSourceSetLogFile(filepath) {
      return this.rtcEngine.videoSourceSetLogFile(filepath);
  }
  /**
   * Sets the output log level of the SDK.
   *
   * You can use one or a combination of the filters. The log level follows
   * the sequence of OFF, CRITICAL, ERROR, WARNING, INFO, and DEBUG.
   * Choose a level to see the logs preceding that level. For example, if you
   * set the log level to WARNING, you see the logs within levels CRITICAL,
   * ERROR, and WARNING.
   * @param {number} filter Sets the filter level:
   * - LOG_FILTER_OFF = 0: Do not output any log.
   * - LOG_FILTER_DEBUG = 0x80f: Output all the API logs. Set your log filter
   * as DEBUG if you want to get the most complete log file.
   * - LOG_FILTER_INFO = 0x0f: Output logs of the CRITICAL, ERROR, WARNING and
   * INFO level. We recommend setting your log filter as this level.
   * - LOG_FILTER_WARNING = 0x0e: Output logs of the CRITICAL, ERROR and
   * WARNING level.
   * - LOG_FILTER_ERROR = 0x0c: Output logs of the CRITICAL and ERROR level.
   * - LOG_FILTER_CRITICAL = 0x08: Output logs of the CRITICAL level.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setLogFilter(filter) {
      return this.rtcEngine.setLogFilter(filter);
  }
  /**
   * Enables/Disables the dual video stream mode.
   *
   * If dual-stream mode is enabled, the receiver can choose to receive the
   * high stream (high-resolution high-bitrate video stream)
   * or low stream (low-resolution low-bitrate video stream) video.
   * @param {boolean} enable Sets the stream mode:
   * - true: Dual-stream mode.
   * - false: (Default) Single-stream mode.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  enableDualStreamMode(enable) {
      return this.rtcEngine.enableDualStreamMode(enable);
  }
  /**
   * Sets the video stream type of the remotely subscribed video stream when
   * the remote user sends dual streams.
   *
   * If the dual-stream mode is enabled by calling enableDualStreamMode, you
   * will receive the
   * high-video stream by default. This method allows the application to adjust
   * the
   * corresponding video-stream type according to the size of the video windows
   * to save the bandwidth
   * and calculation resources.
   *
   * If the dual-stream mode is not enabled, you will receive the high-video
   * stream by default.
   * The result after calling this method will be returned in
   * apiCallExecuted. The Agora SDK receives
   * the high-video stream by default to save the bandwidth. If needed, users
   * can switch to the low-video
   * stream using this method.
   * @param {number} uid ID of the remote user sending the video stream.
   * @param {StreamType} streamType Sets the video stream type:
   * - 0: High-stream video, the high-resolution, high-bitrate video.
   * - 1: Low-stream video, the low-resolution, low-bitrate video.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setRemoteVideoStreamType(uid, streamType) {
      return this.rtcEngine.setRemoteVideoStreamType(uid, streamType);
  }
  /**
   * Sets the default video-stream type of the remotely subscribed video stream
   * when the remote user sends dual streams.
   * @param {StreamType} streamType Sets the video stream type:
   * - 0: High-stream video, the high-resolution, high-bitrate video.
   * - 1: Low-stream video, the low-resolution, low-bitrate video.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setRemoteDefaultVideoStreamType(streamType) {
      return this.rtcEngine.setRemoteDefaultVideoStreamType(streamType);
  }
  /**
   * Enables interoperability with the Agora Web SDK (Live Broadcast only).
   *
   * Use this method when the channel profile is Live Broadcast.
   * Interoperability with the Agora Web SDK is enabled by default when the
   * channel profile is Communication.
   * @param {boolean} enable Sets whether to enable/disable interoperability
   * with the Agora Web SDK:
   * - true: Enable.
   * - false: (Default) Disable.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  enableWebSdkInteroperability(enable) {
      return this.rtcEngine.enableWebSdkInteroperability(enable);
  }
  /**
   * Sets the local video mirror mode.
   *
   * Use this method before startPreview, or it does not take effect until you
   * re-enable startPreview.
   * @param {number} mirrortype Sets the local video mirror mode:
   * - 0: The default mirror mode, that is, the mode set by the SDK
   * - 1: Enable the mirror mode
   * - 2: Disable the mirror mode
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setLocalVideoMirrorMode(mirrortype) {
      return this.rtcEngine.setLocalVideoMirrorMode(mirrortype);
  }
  /**
   * Changes the voice pitch of the local speaker.
   * @param {number} pitch - The value ranges between 0.5 and 2.0.
   * The lower the value, the lower the voice pitch.
   * The default value is 1.0 (no change to the local voice pitch).
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setLocalVoicePitch(pitch) {
      return this.rtcEngine.setLocalVoicePitch(pitch);
  }
  /**
   * Sets the local voice equalization effect.
   * @param {number} bandFrequency - Sets the band frequency.
   * The value ranges between 0 and 9, representing the respective 10-band
   * center frequencies of the voice effects
   * including 31, 62, 125, 500, 1k, 2k, 4k, 8k, and 16k Hz.
   * @param {number} bandGain - Sets the gain of each band in dB. The value
   * ranges between -15 and 15.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setLocalVoiceEqualization(bandFrequency, bandGain) {
      return this.rtcEngine.setLocalVoiceEqualization(bandFrequency, bandGain);
  }
  /**
   * Sets the local voice reverberation.
   * @param {number} reverbKey Sets the audio reverberation key.
   * - AUDIO_REVERB_DRY_LEVEL = 0: Level of the dry signal (-20 to 10 dB).
   * - AUDIO_REVERB_WET_LEVEL = 1: Level of the early reflection signal
   * (wet signal) (-20 to 10 dB).
   * - AUDIO_REVERB_ROOM_SIZE = 2: Room size of the reflection (0 to 100 dB).
   * - AUDIO_REVERB_WET_DELAY = 3: Length of the initial delay of the wet
   * signal (0 to 200 ms).
   * - AUDIO_REVERB_STRENGTH = 4: Strength of the late reverberation
   * (0 to 100).
   * @param {number} value Sets the value of the reverberation key.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setLocalVoiceReverb(reverbKey, value) {
      return this.rtcEngine.setLocalVoiceReverb(reverbKey, value);
  }
  /**
   * Sets the local voice changer option.
   * @param {VoiceChangerPreset} preset The local voice changer option.
   * See {@link VoiceChangerPreset}.
   */
  setLocalVoiceChanger(preset) {
      return this.rtcEngine.setLocalVoiceChanger(preset);
  }
  /**
   * Sets the preset local voice reverberation effect.
   *
   * **Note**:
   * - Do not use this method together with {@link setLocalVoiceReverb}.
   * - Do not use this method together with {@link setLocalVoiceChanger},
   * or the method called eariler does not take effect.
   * @param {AudioReverbPreset} preset The local voice reverberation preset.
   * See {@link AudioReverbPreset}.
   */
  setLocalVoiceReverbPreset(preset) {
      return this.rtcEngine.setLocalVoiceReverbPreset(preset);
  }
  /**
   * Sets the fallback option for the locally published video stream based on
   * the network conditions.
   * The default setting for option is STREAM_FALLBACK_OPTION_AUDIO_ONLY, where
   * there is no fallback for the locally published video stream when the
   * uplink network conditions are poor.
   * If `option` is set toSTREAM_FALLBACK_OPTION_AUDIO_ONLY, the SDK will:
   * - Disable the upstream video but enable audio only when the network
   * conditions worsen and cannot support both video and audio.
   * - Re-enable the video when the network conditions improve.
   * When the locally published stream falls back to audio only or when the
   * audio stream switches back to the video,
   * the localPublishFallbackToAudioOnly callback is triggered.
   * **Note**:
   * Agora does not recommend using this method for CDN live streaming, because
   * the remote CDN live user will have a noticeable lag when the locally
   * publish stream falls back to audio-only.
   * @param {number} option Sets the fallback option for the locally published
   * video stream.
   * - STREAM_FALLBACK_OPTION_DISABLED = 0: (Default) No fallback behavior for
   * the local/remote video stream when the uplink/downlink network conditions
   * are poor. The quality of the stream is not guaranteed.
   * - STREAM_FALLBACK_OPTION_AUDIO_ONLY = 2: Under poor uplink network
   * conditions, the locally published video stream falls back to audio only.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setLocalPublishFallbackOption(option) {
      return this.rtcEngine.setLocalPublishFallbackOption(option);
  }
  /**
   * Sets the fallback option for the remote video stream based
   * on the network conditions.
   *
   * If `option` is set as STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW or
   * STREAM_FALLBACK_OPTION_AUDIO_ONLY(2):
   * - the SDK automatically switches the video from a high-stream to a
   * low-stream, or disables the video when the downlink network condition
   * cannot support both audio and video
   * to guarantee the quality of the audio.
   * - The SDK monitors the network quality and restores the video stream when
   * the network conditions improve.
   *
   * When the remote video stream falls back to audio only or when
   * the audio-only stream switches back to the video stream,
   * the SDK triggers the remoteSubscribeFallbackToAudioOnly callback.
   * @param {number} option Sets the fallback option for the remote stream.
   * - STREAM_FALLBACK_OPTION_DISABLED = 0: No fallback behavior for the
   * local/remote video stream when the uplink/downlink network conditions
   * are poor. The quality of the stream is not guaranteed.
   * - STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW = 1: (Default) The remote video
   * stream falls back to the low-stream video when the downlink network
   * condition worsens. This option works only
   * for this method and not for the {@link setLocalPublishFallbackOption}
   * method.
   * - STREAM_FALLBACK_OPTION_AUDIO_ONLY = 2: Under poor downlink network
   * conditions, the remotely subscribed video stream first falls back to the
   * low-stream video; and then to an audio-only stream if the network
   * condition worsens.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setRemoteSubscribeFallbackOption(option) {
      return this.rtcEngine.setRemoteSubscribeFallbackOption(option);
  }
  /**
   * Registers a user account.
   * Once registered, the user account can be used to identify the local user
   * when the user joins the channel. After the user successfully registers a
   * user account,  the SDK triggers the onLocalUserRegistered callback on the
   * local client,
   * reporting the user ID and user account of the local user.
   *
   * To join a channel with a user account, you can choose either of the
   * following:
   * - Call the {@link registerLocalUserAccount} method to create a user
   * account, and then the {@link joinChannelWithUserAccount} method to
   * join the channel.
   * - Call the {@link joinChannelWithUserAccount} method to join the
   * channel.
   *
   * The difference between the two is that for the former, the time elapsed
   * between calling the {@link joinChannelWithUserAccount} method and joining
   * the channel is shorter than the latter.
   *
   * To ensure smooth communication, use the same parameter type to identify
   * the user. For example, if a user joins the channel with a user ID, then
   * ensure all the other users use the user ID too. The same applies to the
   * user account. If a user joins the channel with the Agora Web SDK, ensure
   * that the `uid` of the user is set to the same parameter type.
   *
   * **Note**:
   * - Ensure that you set the `userAccount` parameter. Otherwise, this method
   * does not take effect.
   * - Ensure that the value of the `userAccount` parameter is unique in the
   * channel.
   *
   * @param {string} appId The App ID of your project.
   * @param {string} userAccount The user account. The maximum length of this
   * parameter is 255 bytes. Ensure that you set this parameter and do not
   * set it as null. Ensure that you set this parameter and do not set it as
   * null.
   * Supported character scopes are:
   * - The 26 lowercase English letters: a to z.
   * - The 26 uppercase English letters: A to Z.
   * - The 10 numbers: 0 to 9.
   * - The space.
   * - "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".",
   * ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  registerLocalUserAccount(appId, userAccount) {
      return this.rtcEngine.registerLocalUserAccount(appId, userAccount);
  }
  /**
   * Joins the channel with a user account.
   *
   * After the user successfully joins the channel, the SDK triggers the
   * following callbacks:
   * - The local client: localUserRegistered and userInfoUpdated.
   * - The remote client: userJoined and userInfoUpdated, if the user joining
   * the channel is in the Communication profile, or is a BROADCASTER in the
   * Live Broadcast profile.
   *
   * **Note**: To ensure smooth communication, use the same parameter type to
   * identify the user. For example, if a user joins the channel with a user
   * ID, then ensure all the other users use the user ID too.
   * The same applies to the user account. If a user joins the channel with
   * the Agora Web SDK, ensure that the `uid` of the user is set to the same
   * parameter type.
   * @param {string} token The token generated at your server.
   * - For low-security requirements: You can use the temporary token generated
   * at Dashboard. For details, see
   * [Get a temporary token](https://docs.agora.io/en/Voice/token?platform=All
   * %20Platforms#get-a-temporary-token).
   * - For high-security requirements: Set it as the token generated at your
   * server. For details, see
   * [Get a token](https://docs.agora.io/en/Voice/token?platform=All
   * %20Platforms#get-a-token).
   * @param {string} channel The channel name. The maximum length of this
   * parameter is 64 bytes. Supported character scopes are:
   * - The 26 lowercase English letters: a to z.
   * - The 26 uppercase English letters: A to Z.
   * - The 10 numbers: 0 to 9.
   * - The space.
   * - "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".",
   * ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
   * @param {string} userAccount The user account. The maximum length of this
   * parameter is 255 bytes. Ensure that you set this parameter and do not set
   * it as null.
   * Supported character scopes are:
   * - The 26 lowercase English letters: a to z.
   * - The 26 uppercase English letters: A to Z.
   * - The 10 numbers: 0 to 9.
   * - The space.
   * - "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".",
   * ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  joinChannelWithUserAccount(token, channel, userAccount) {
      return this.rtcEngine.joinChannelWithUserAccount(token, channel, userAccount);
  }
  /**
   * Gets the user information by passing in the user account.
   *
   * After a remote user joins the channel, the SDK gets the user ID and user
   * account of the remote user, caches them in a mapping table object
   * (UserInfo),
   * and triggers the userInfoUpdated callback on the local client.
   * After receiving the callback, you can call this method to get the user ID
   * of the remote user from the UserInfo object by passing in the user
   * account.
   * @param  userAccount The user account. Ensure that you set this parameter.
   * @param errCode Error code.
   * @param userInfo [in/out] A UserInfo object that identifies the user:
   * - Input: A UserInfo object.
   * - Output: A UserInfo object that contains the user account and user ID
   * of the user.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  getUserInfoByUserAccount(userAccount) {
      return this.rtcEngine.getUserInfoByUserAccount(userAccount);
  }
  /**
   * Gets the user information by passing in the user ID.
   *
   * After a remote user joins the channel, the SDK gets the user ID and user
   * account of the remote user, caches them in a mapping table object
   * (UserInfo), and triggers the userInfoUpdated callback on the local client.
   * After receiving the callback, you can call this method to get the user
   * account of the remote user from the UserInfo object by passing in the
   * user ID.
   * @param uid The user ID. Ensure that you set this parameter.
   * @param errCode Error code.
   * @param userInfo [in/out] A UserInfo object that identifies the user:
   * - Input: A UserInfo object.
   * - Output: A UserInfo object that contains the user account and user ID
   * of the user.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  getUserInfoByUid(uid) {
      return this.rtcEngine.getUserInfoByUid(uid);
  }
  /**
   * Switches to a different channel.
   *
   * This method allows the audience of a Live-broadcast channel to switch to
   * a different channel.
   *
   * After the user successfully switches to another channel, the leavechannel
   * and joinedChannel callbacks are triggered to indicate that the user has
   * left the original channel and joined a new one.
   *
   * **Note**:
   *
   * This method applies to the audience role in a Live-broadcast channel only.
   *
   * @param token The token generated at your server:
   * - For low-security requirements: You can use the temporary token generated
   * at Dashboard. For details,
   * see [Get a temporary token](https://docs.agora.io/en/Voice/token?
   * platform=All%20Platforms#get-a-temporary-token).
   * - For high-security requirements: Set it as the token generated at your
   * server. For details,
   * see [Get a token](https://docs.agora.io/en/Voice/token
   * ?platform=All%20Platforms#get-a-token).
   * @param channel (Required) Pointer to the unique channel name for the
   * Agora RTC session in the string format smaller than 64 bytes.
   * Supported characters:
   * - The 26 lowercase English letters: a to z.
   * - The 26 uppercase English letters: A to Z.
   * - The 10 numbers: 0 to 9.
   * - The space.
   * - "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".",
   * ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  switchChannel(token, channel) {
      return this.rtcEngine.switchChannel(token, channel);
  }
  /**
   * Adjusts the recording volume.
   * @param {number} volume Recording volume. The value ranges between 0 and
   * 400:
   * - 0: Mute.
   * - 100: Original volume.
   * - 400: (Maximum) Four times the original volume with signal-clipping
   * protection.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  adjustRecordingSignalVolume(volume) {
      return this.rtcEngine.adjustRecordingSignalVolume(volume);
  }
  /**
   * Adjusts the playback volume of the voice.
   * @param volume Playback volume of the voice. The value ranges between 0
   * and 400:
   * - 0: Mute.
   * - 100: Original volume.
   * - 400: (Maximum) Four times the original volume with signal-clipping
   * protection.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  adjustPlaybackSignalVolume(volume) {
      return this.rtcEngine.adjustPlaybackSignalVolume(volume);
  }
  // ===========================================================================
  // DEVICE MANAGEMENT
  // ===========================================================================
  /**
   * Sets the external audio source.
   * @param {boolean} enabled Sets whether to enable/disable the external
   * audio sink:
   * - true: Enable the external audio source.
   * - false: (Default) Disable the external audio source.
   * @param {number} samplerate Sets the sample rate of the external audio
   * source, which can be set as 8000, 16000, 32000, 44100, or 48000 Hz.
   * @param {number} channels Sets the number of external audio source
   * channels (two channels maximum).
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setExternalAudioSource(enabled, samplerate, channels) {
      return this.rtcEngine.setExternalAudioSource(enabled, samplerate, channels);
  }
  /**
   * Gets the list of the video devices.
   * @return {Array} The array of the video devices.
   */
  getVideoDevices() {
      return this.rtcEngine.getVideoDevices();
  }
  /**
   * Sets the video device using the device Id.
   * @param {string} deviceId The device Id.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setVideoDevice(deviceId) {
      return this.rtcEngine.setVideoDevice(deviceId);
  }
  /**
   * Gets the current video device.
   * @return {Object} The video device.
   */
  getCurrentVideoDevice() {
      return this.rtcEngine.getCurrentVideoDevice();
  }
  /**
   * Starts a video-capture device test.
   *
   * **Note**:
   * This method tests whether the video-capture device works properly.
   * Ensure that you call the {@link enableVideo} method before calling this
   * method and that the HWND window handle of the incoming parameter is valid.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  startVideoDeviceTest() {
      return this.rtcEngine.startVideoDeviceTest();
  }
  /**
   * Stops the video-capture device test.
   *
   * **Note**:
   * This method stops testing the video-capture device.
   * You must call this method to stop the test after calling the
   * {@link startVideoDeviceTest} method.
   *
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  stopVideoDeviceTest() {
      return this.rtcEngine.stopVideoDeviceTest();
  }
  /**
   * Retrieves the audio playback device associated with the device ID.
   * @return {Array} The array of the audio playback device.
   */
  getAudioPlaybackDevices() {
      return this.rtcEngine.getAudioPlaybackDevices();
  }
  /**
   * Sets the audio playback device using the device ID.
   * @param {string} deviceId The device ID of the audio playback device.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setAudioPlaybackDevice(deviceId) {
      return this.rtcEngine.setAudioPlaybackDevice(deviceId);
  }
  /**
   * Retrieves the audio playback device information associated with the
   * device ID and device name.
   * @param {string} deviceId The device ID of the audio playback device.
   * @param {string} deviceName The device name of the audio playback device.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  getPlaybackDeviceInfo(deviceId, deviceName) {
      return this.rtcEngine.getPlaybackDeviceInfo(deviceId, deviceName);
  }
  /**
   * Gets the current audio playback device.
   * @return {Object} The current audio playback device.
   */
  getCurrentAudioPlaybackDevice() {
      return this.rtcEngine.getCurrentAudioPlaybackDevice();
  }
  /**
   * Sets the volume of the audio playback device.
   * @param {number} volume Sets the volume of the audio playback device. The
   * value ranges between 0 (lowest volume) and 255 (highest volume).
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setAudioPlaybackVolume(volume) {
      return this.rtcEngine.setAudioPlaybackVolume(volume);
  }
  /**
   * Retrieves the volume of the audio playback device.
   * @return The audio playback device volume.
   */
  getAudioPlaybackVolume() {
      return this.rtcEngine.getAudioPlaybackVolume();
  }
  /**
   * Retrieves the audio recording device associated with the device ID.
   * @return {Array} The array of the audio recording device.
   */
  getAudioRecordingDevices() {
      return this.rtcEngine.getAudioRecordingDevices();
  }
  /**
   * Sets the audio recording device using the device ID.
   * @param {string} deviceId The device ID of the audio recording device.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setAudioRecordingDevice(deviceId) {
      return this.rtcEngine.setAudioRecordingDevice(deviceId);
  }
  /**
   * Retrieves the audio recording device information associated with the
   * device ID and device name.
   * @param {string} deviceId The device ID of the recording audio device.
   * @param {string} deviceName  The device name of the recording audio device.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  getRecordingDeviceInfo(deviceId, deviceName) {
      return this.rtcEngine.getRecordingDeviceInfo(deviceId, deviceName);
  }
  /**
   * Gets the current audio recording device.
   * @return {Object} The audio recording device.
   */
  getCurrentAudioRecordingDevice() {
      return this.rtcEngine.getCurrentAudioRecordingDevice();
  }
  /**
   * Retrieves the volume of the microphone.
   * @return {number} The microphone volume. The volume value ranges between
   * 0 (lowest volume) and 255 (highest volume).
   */
  getAudioRecordingVolume() {
      return this.rtcEngine.getAudioRecordingVolume();
  }
  /**
   * Sets the volume of the microphone.
   * @param {number} volume Sets the volume of the microphone. The value
   * ranges between 0 (lowest volume) and 255 (highest volume).
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setAudioRecordingVolume(volume) {
      return this.rtcEngine.setAudioRecordingVolume(volume);
  }
  /**
   * Starts the audio playback device test.
   *
   * This method tests if the playback device works properly. In the test,
   * the SDK plays an audio file specified by the user.
   * If the user can hear the audio, the playback device works properly.
   * @param {string} filepath The path of the audio file for the audio playback
   * device test in UTF-8:
   * - Supported file formats: wav, mp3, m4a, and aac.
   * - Supported file sample rates: 8000, 16000, 32000, 44100, and 48000 Hz.
   * @return
   * - 0: Success, and you can hear the sound of the specified audio file.
   * - < 0: Failure.
   */
  startAudioPlaybackDeviceTest(filepath) {
      return this.rtcEngine.startAudioPlaybackDeviceTest(filepath);
  }
  /**
   * Stops the audio playback device test.
   *
   * This method stops testing the audio playback device.
   * You must call this method to stop the test after calling the
   * {@link startAudioPlaybackDeviceTest} method.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  stopAudioPlaybackDeviceTest() {
      return this.rtcEngine.stopAudioPlaybackDeviceTest();
  }
  /**
   * Starts the audio device loopback test.
   *
   * This method tests whether the local audio devices are working properly.
   * After calling this method, the microphone captures the local audio and
   * plays it through the speaker.
   *
   * **Note**:
   * This method tests the local audio devices and does not report the network
   * conditions.
   * @param {number} interval The time interval (ms).
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  startAudioDeviceLoopbackTest(interval) {
      return this.rtcEngine.startAudioDeviceLoopbackTest(interval);
  }
  /**
   * Stops the audio device loopback test.
   *
   * **Note**:
   * Ensure that you call this method to stop the loopback test after calling
   * the {@link startAudioDeviceLoopbackTest} method.
   *
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  stopAudioDeviceLoopbackTest() {
      return this.rtcEngine.stopAudioDeviceLoopbackTest();
  }
  /**
   * Enables the loopback recording. Once enabled, the SDK collects all local
   * sounds.
   * @param {boolean} [enable = false] Enable the loop back recording.
   * @param {string|null} [deviceName = null] The audio device.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  enableLoopbackRecording(enable = false, deviceName = null) {
      return this.rtcEngine.enableLoopbackRecording(enable, deviceName);
  }
  /**
   * Starts the microphone test.
   *
   * This method checks whether the microphone works properly.
   * @param {number} indicateInterval The interval period (ms).
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  startAudioRecordingDeviceTest(indicateInterval) {
      return this.rtcEngine.startAudioRecordingDeviceTest(indicateInterval);
  }
  /**
   * Stops the microphone test.
   *
   * **Note**:
   * This method stops the microphone test.
   * You must call this method to stop the test after calling the
   * {@link startAudioRecordingDeviceTest} method.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  stopAudioRecordingDeviceTest() {
      return this.rtcEngine.stopAudioRecordingDeviceTest();
  }
  /**
   * check whether selected audio playback device is muted
   * @return {boolean} muted/unmuted
   */
  getAudioPlaybackDeviceMute() {
      return this.rtcEngine.getAudioPlaybackDeviceMute();
  }
  /**
   * Mutes the audio playback device.
   * @param {boolean} mute Sets whether to mute/unmute the audio playback
   * device:
   * - true: Mutes.
   * - false: Unmutes.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setAudioPlaybackDeviceMute(mute) {
      return this.rtcEngine.setAudioPlaybackDeviceMute(mute);
  }
  /**
   * Retrieves the mute status of the audio playback device.
   * @return {boolean} Whether to mute/unmute the audio playback device:
   * - true: Mutes.
   * - false: Unmutes.
   */
  getAudioRecordingDeviceMute() {
      return this.rtcEngine.getAudioRecordingDeviceMute();
  }
  /**
   * Mutes/Unmutes the microphone.
   * @param {boolean} mute Sets whether to mute/unmute the audio playback
   * device:
   * - true: Mutes.
   * - false: Unmutes.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setAudioRecordingDeviceMute(mute) {
      return this.rtcEngine.setAudioRecordingDeviceMute(mute);
  }
  // ===========================================================================
  // VIDEO SOURCE
  // NOTE. video source is mainly used to do screenshare, the api basically
  // aligns with normal sdk apis, e.g. videoSourceInitialize vs initialize.
  // it is used to do screenshare with a separate process, in that case
  // it allows user to do screensharing and camera stream pushing at the
  // same time - which is not allowed in single sdk process.
  // if you only need to display camera and screensharing one at a time
  // use sdk original screenshare, if you want both, use video source.
  // ===========================================================================
  /**
   * Initializes agora real-time-communicating video source with the app Id.
   * @param {string} appId The app ID issued to you by Agora.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  videoSourceInitialize(appId) {
      return this.rtcEngine.videoSourceInitialize(appId);
  }
  /**
   * Sets the video renderer for video source.
   * @param {Element} view The dom element where video source should be
   * displayed.
   */
  setupLocalVideoSource(view) {
      this.initRender('videosource', view);
  }
  /**
   * Enables the web interoperability of the video source, if you set it to
   * true.
   *
   * **Note**:
   * You must call this method after calling the {@link videoSourceInitialize}
   * method.
   *
   * @param {boolean} enabled Set whether or not to enable the web
   * interoperability of the video source.
   * - true: Enables the web interoperability.
   * - false: Disables web interoperability.
   *
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  videoSourceEnableWebSdkInteroperability(enabled) {
      return this.rtcEngine.videoSourceEnableWebSdkInteroperability(enabled);
  }
  /**
   * Allows a user to join a channel when using the video source.
   *
   * @param {string} token The token generated at your server:
   * - For low-security requirements: You can use the temporary token
   * generated at Dashboard. For details, see
   * [Get a temporary token](https://docs.agora.io/en/Voice/token?platform=All
   * %20Platforms#get-a-temporary-token).
   * - For high-security requirements: Set it as the token generated at your
   * server. For details, see
   * [Get a token](https://docs.agora.io/en/Voice/token?platform=All%
   * 20Platforms#get-a-token).
   * @param {string} cname (Required) Pointer to the unique channel name for
   * the Agora RTC session in the string format smaller than 64 bytes.
   * Supported characters:
   * - The 26 lowercase English letters: a to z.
   * - The 26 uppercase English letters: A to Z.
   * - The 10 numbers: 0 to 9.
   * - The space.
   * - "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".",
   * ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
   * @param {string} info Pointer to additional information about the channel.
   * This parameter can be set to NULL or contain channel related information.
   * Other users in the channel will not receive this message.
   * @param {number} uid The User ID.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  videoSourceJoin(token, cname, info, uid) {
      return this.rtcEngine.videoSourceJoin(token, cname, info, uid);
  }
  /**
   * Allows a user to leave a channe when using the video source.
   *
   * **Note**:
   * You must call this method after calling the {@link videoSourceJoin} method.
   *
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  videoSourceLeave() {
      return this.rtcEngine.videoSourceLeave();
  }
  /**
   * Gets a new token for a user using the video source when the current token
   * expires after a period of time.
   *
   * The application should call this method to get the new `token`.
   * Failure to do so will result in the SDK disconnecting from the server.
   *
   * @param {string} token The new token.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  videoSourceRenewToken(token) {
      return this.rtcEngine.videoSourceRenewToken(token);
  }
  /**
   * Sets the channel profile when using the video source.
   *
   * @param {number} profile Sets the channel profile:
   * - 0:(Default) Communication.
   * - 1: Live Broadcast.
   * - 2: Gaming.
   *
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  videoSourceSetChannelProfile(profile) {
      return this.rtcEngine.videoSourceSetChannelProfile(profile);
  }
  /**
   * Sets the video profile when using the video source.
   * @param {VIDEO_PROFILE_TYPE} profile The video profile. See
   * {@link VIDEO_PROFILE_TYPE}.
   * @param {boolean} [swapWidthAndHeight = false] Whether to swap width and
   * height:
   * - true: Swap the width and height.
   * - false: Do not swap the width and height.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  videoSourceSetVideoProfile(profile, swapWidthAndHeight = false) {
      return this.rtcEngine.videoSourceSetVideoProfile(profile, swapWidthAndHeight);
  }
  /**
   * Gets the window ID when using the video source.
   *
   * This method gets the ID of the whole window and relevant inforamtion.
   * You can share the whole or part of a window by specifying the window ID.
   * @return {Array} The array list of the window ID and relevant information.
   */
  getScreenWindowsInfo() {
      return this.rtcEngine.getScreenWindowsInfo();
  }
  /**
   * Gets the display ID when using the video source.
   *
   * This method gets the ID of the whole display and relevant inforamtion.
   * You can share the whole or part of a display by specifying the window ID.
   * @return {Array} The array list of the display ID and relevant information.
   */
  getScreenDisplaysInfo() {
      return this.rtcEngine.getScreenDisplaysInfo();
  }
  /**
   * @deprecated This method is deprecated. Use
   * {@link videoSourceStartScreenCaptureByScreen} or
   * {@link videoSourceStartScreenCaptureByWindow} instead.
   * Starts the video source.
   * @param {number} wndid Sets the video source area.
   * @param {number} captureFreq (Mandatory) The captured frame rate. The value
   * ranges between 1 fps and 15 fps.
   * @param {*} rect Specifies the video source region. `rect` is valid when
   * `wndid` is set as 0. When `rect` is set as NULL, the whole screen is
   * shared.
   * @param {number} bitrate The captured bitrate.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  startScreenCapture2(windowId, captureFreq, rect, bitrate) {
      Utils_1.deprecate('"videoSourceStartScreenCaptureByScreen" or "videoSourceStartScreenCaptureByWindow"');
      return this.rtcEngine.startScreenCapture2(windowId, captureFreq, rect, bitrate);
  }
  /**
   * Stop the video source.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  stopScreenCapture2() {
      return this.rtcEngine.stopScreenCapture2();
  }
  /**
   * Starts the video source preview.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  startScreenCapturePreview() {
      return this.rtcEngine.videoSourceStartPreview();
  }
  startScreenCaptureByWindow(windowSymbol, rect, param) {
      return this.rtcEngine.startScreenCaptureByWindow(windowSymbol, rect, param);
  }
  startScreenCaptureByScreen(screenSymbol, rect, param) {
      return this.rtcEngine.startScreenCaptureByScreen(screenSymbol, rect, param);
  }
  updateScreenCaptureParameters(param) {
      return this.rtcEngine.updateScreenCaptureParameters(param);
  }
  setScreenCaptureContentHint(hint) {
      return this.rtcEngine.setScreenCaptureContentHint(hint);
  }
  /**
   * Stops the video source preview.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  stopScreenCapturePreview() {
      return this.rtcEngine.videoSourceStopPreview();
  }
  /**
   * Enables the dual-stream mode for the video source.
   * @param {boolean} enable Whether or not to enable the dual-stream mode:
   * - true: Enables the dual-stream mode.
   * - false: Disables the dual-stream mode.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  videoSourceEnableDualStreamMode(enable) {
      return this.rtcEngine.videoSourceEnableDualStreamMode(enable);
  }
  /**
   * Sets the video source parameters.
   * @param {string} parameter Sets the video source encoding parameters.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  videoSourceSetParameters(parameter) {
      return this.rtcEngine.videoSourceSetParameter(parameter);
  }
  /**
   * Updates the screen capture region for the video source.
   * @param {*} rect {left: 0, right: 100, top: 0, bottom: 100} (relative
   * distance from the left-top corner of the screen)
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  videoSourceUpdateScreenCaptureRegion(rect) {
      return this.rtcEngine.videoSourceUpdateScreenCaptureRegion(rect);
  }
  /**
   * Releases the video source object.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  videoSourceRelease() {
      return this.rtcEngine.videoSourceRelease();
  }
  // 2.4 new Apis
  /**
   * Shares the whole or part of a screen by specifying the screen rect.
   * @param {ScreenSymbol} screenSymbol The display ID：
   * - macOS: The display ID.
   * - Windows: The screen rect.
   * @param {CaptureRect} rect Sets the relative location of the region
   * to the screen.
   * @param {CaptureParam} param Sets the video source encoding parameters.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  videoSourceStartScreenCaptureByScreen(screenSymbol, rect, param) {
      return this.rtcEngine.videosourceStartScreenCaptureByScreen(screenSymbol, rect, param);
  }
  /**
   * Shares the whole or part of a window by specifying the window ID.
   * @param {number} windowSymbol The ID of the window to be shared.
   * @param {CaptureRect} rect The ID of the window to be shared.
   * @param {CaptureParam} param Sets the video source encoding parameters.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  videoSourceStartScreenCaptureByWindow(windowSymbol, rect, param) {
      return this.rtcEngine.videosourceStartScreenCaptureByWindow(windowSymbol, rect, param);
  }
  /**
   * Updates the video source parameters.
   * @param {CaptureParam} param Sets the video source encoding parameters.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  videoSourceUpdateScreenCaptureParameters(param) {
      return this.rtcEngine.videosourceUpdateScreenCaptureParameters(param);
  }
  /**
   *  Updates the video source parameters.
   * @param {VideoContentHint} hint Sets the content hint for the video source.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  videoSourceSetScreenCaptureContentHint(hint) {
      return this.rtcEngine.videosourceSetScreenCaptureContentHint(hint);
  }
  // ===========================================================================
  // SCREEN SHARE
  // When this api is called, your camera stream will be replaced with
  // screenshare view. i.e. you can only see camera video or screenshare
  // one at a time via this section's api
  // ===========================================================================
  /**
   * @deprecated This method is deprecated. Use
   * {@link videoSourceStartScreenCaptureByScreen} or
   * {@link videoSourceStartScreenCaptureByWindow} instead.
   * Starts the screen sharing.
   * @param {number} wndid Sets the screen sharing area.
   * @param {number} captureFreq (Mandatory) The captured frame rate. The
   * value ranges between 1 fps and 15 fps.
   * @param {*} rect Specifies the screen sharing region. `rect` is valid
   * when `wndid` is set as 0. When `rect` is set as NULL, the whole screen
   * is shared.
   * @param {number} bitrate The captured bitrate.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  startScreenCapture(windowId, captureFreq, rect, bitrate) {
      Utils_1.deprecate();
      return this.rtcEngine.startScreenCapture(windowId, captureFreq, rect, bitrate);
  }
  /**
   * Stops screen sharing.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  stopScreenCapture() {
      return this.rtcEngine.stopScreenCapture();
  }
  /**
   * Updates the screen capture region.
   * @param {*} rect {left: 0, right: 100, top: 0, bottom: 100} (relative
   * distance from the left-top corner of the screen)
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  updateScreenCaptureRegion(rect) {
      return this.rtcEngine.updateScreenCaptureRegion(rect);
  }
  // ===========================================================================
  // AUDIO MIXING
  // ===========================================================================
  /**
   * Starts playing and mixing the music file.
   *
   * This method mixes the specified local audio file with the audio stream
   * from the microphone, or replaces the microphone’s audio stream with the
   * specified
   * local audio file. You can choose whether the other user can hear the
   * local audio playback
   * and specify the number of loop playbacks. This API also supports online
   * music playback.
   *
   * The SDK returns the state of the audio mixing file playback in the
   * audioMixingStateChanged callback.
   *
   * **Note**:
   * - Call this method when you are in the channel, otherwise it may cause
   * issues.
   * - If the local audio mixing file does not exist, or if the SDK does not
   * support the file format
   * or cannot access the music file URL, the SDK returns the warning code 701.
   *
   * @param {string} filepath Specifies the absolute path of the local or
   * online audio file to be mixed.
   *            Supported audio formats: mp3, aac, m4a, 3gp, and wav.
   * @param {boolean} loopback Sets which user can hear the audio mixing:
   * - true: Only the local user can hear the audio mixing.
   * - false: Both users can hear the audio mixing.
   * @param {boolean} replace Sets the audio mixing content:
   * - true: Only publish the specified audio file; the audio stream from the
   * microphone is not published.
   * - false: The local audio file is mixed with the audio stream from the
   * microphone.
   * @param {number} cycle Sets the number of playback loops:
   * - Positive integer: Number of playback loops.
   * - -1: Infinite playback loops.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  startAudioMixing(filepath, loopback, replace, cycle) {
      return this.rtcEngine.startAudioMixing(filepath, loopback, replace, cycle);
  }
  /**
   * Stops playing or mixing the music file.
   *
   * Call this API when you are in a channel.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  stopAudioMixing() {
      return this.rtcEngine.stopAudioMixing();
  }
  /**
   * Pauses playing and mixing the music file.
   *
   *  Call this API when you are in a channel.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  pauseAudioMixing() {
      return this.rtcEngine.pauseAudioMixing();
  }
  /**
   * Resumes playing and mixing the music file.
   *
   *  Call this API when you are in a channel.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  resumeAudioMixing() {
      return this.rtcEngine.resumeAudioMixing();
  }
  /**
   * Adjusts the volume of audio mixing.
   *
   *  Call this API when you are in a channel.
   * @param {number} volume Audio mixing volume. The value ranges between 0
   * and 100 (default).
   * 100 is the original volume.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  adjustAudioMixingVolume(volume) {
      return this.rtcEngine.adjustAudioMixingVolume(volume);
  }
  /**
   * Adjusts the audio mixing volume for local playback.
   * @param {number} volume Audio mixing volume for local playback. The value
   * ranges between 0 and 100 (default). 100 is the original volume.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  adjustAudioMixingPlayoutVolume(volume) {
      return this.rtcEngine.adjustAudioMixingPlayoutVolume(volume);
  }
  /**
   * Adjusts the audio mixing volume for publishing (sending to other users).
   * @param {number} volume Audio mixing volume for publishing. The value
   * ranges between 0 and 100 (default). 100 is the original volume.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  adjustAudioMixingPublishVolume(volume) {
      return this.rtcEngine.adjustAudioMixingPublishVolume(volume);
  }
  /**
   * Gets the duration (ms) of the music file.
   *
   * Call this API when you are in a channel.
   * @return
   * - ≥ 0: The audio mixing duration, if this method call succeeds.
   * - < 0: Failure.
   */
  getAudioMixingDuration() {
      return this.rtcEngine.getAudioMixingDuration();
  }
  /**
   * Gets the playback position (ms) of the music file.
   *
   * Call this API when you are in a channel.
   * @return
   * - ≥ 0: The current playback position of the audio mixing, if this method
   * call succeeds.
   * - < 0: Failure.
   */
  getAudioMixingCurrentPosition() {
      return this.rtcEngine.getAudioMixingCurrentPosition();
  }
  /**
   * Adjusts the audio mixing volume for publishing (for remote users).
   *
   * Call this API when you are in a channel.
   *
   * @return
   * - ≥ 0: The audio mixing volume for local playout, if this method call
   * succeeds. The value range is [0,100].
   * - < 0: Failure.
   */
  getAudioMixingPlayoutVolume() {
      return this.rtcEngine.getAudioMixingPlayoutVolume();
  }
  /**
   * Retrieves the audio mixing volume for publishing.
   *
   * Call this API when you are in a channel.
   *
   * @return
   * - ≥ 0: The audio mixing volume for publishing, if this method call
   * succeeds. The value range is [0,100].
   * - < 0: Failure.
   */
  getAudioMixingPublishVolume() {
      return this.rtcEngine.getAudioMixingPublishVolume();
  }
  /**
   * Sets the playback position of the music file to a different starting
   * position.
   *
   * This method drags the playback progress bar of the audio mixing file to
   * where
   * you want to play instead of playing it from the beginning.
   * @param {number} position The playback starting position (ms) of the music
   * file.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setAudioMixingPosition(position) {
      return this.rtcEngine.setAudioMixingPosition(position);
  }
  // ===========================================================================
  // CDN STREAMING
  // ===========================================================================
  /**
   * Publishes the local stream to a specified CDN live RTMP address. (CDN
   * live only)
   *
   * The SDK returns the result of this method call in the streamPublished
   * callback.
   * **Note**:
   * - Ensure that the user joins the channel before calling this method.
   * - This method adds only one stream RTMP URL address each time it is
   * called.
   * - The RTMP URL address must not contain special characters, such as
   * Chinese language characters.
   * - This method applies to Live Broadcast only.
   * @param {string} url The CDN streaming URL in the RTMP format. The
   * maximum length of this parameter is 1024 bytes.
   * @param {bool} transcodingEnabled Sets whether transcoding is
   * enabled/disabled:
   * - true: Enable transcoding. To transcode the audio or video streams when
   * publishing them to CDN live,
   * often used for combining the audio and video streams of multiple hosts
   * in CDN live.
   * - false: Disable transcoding.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  addPublishStreamUrl(url, transcodingEnabled) {
      return this.rtcEngine.addPublishStreamUrl(url, transcodingEnabled);
  }
  /**
   * Removes an RTMP stream from the CDN. (CDN live only)
   * **Note**:
   * - This method removes only one RTMP URL address each time it is called.
   * - The RTMP URL address must not contain special characters, such as
   * Chinese language characters.
   * - This method applies to Live Broadcast only.
   * @param {string} url The RTMP URL address to be removed. The maximum
   * length of this parameter is 1024 bytes.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  removePublishStreamUrl(url) {
      return this.rtcEngine.removePublishStreamUrl(url);
  }
  /**
   * ets the video layout and audio settings for CDN live. (CDN live only)
   * @param {TranscodingConfig} transcoding Sets the CDN live audio/video
   * transcoding settings.
   * @return {number}
   * - 0: Success.
   * - < 0: Failure.
   */
  setLiveTranscoding(transcoding) {
      return this.rtcEngine.setLiveTranscoding(transcoding);
  }
  // ===========================================================================
  // STREAM INJECTION
  // ===========================================================================
  /**
   * Adds a voice or video stream HTTP/HTTPS URL address to a live broadcast.
   *
   * This method applies to the Native SDK v2.4.1 and later.
   *
   * If this method call is successful, the server pulls the voice or video
   * stream and injects it into a live channel.
   * This is applicable to scenarios where all audience members in the channel
   * can watch a live show and interact with each other.
   *
   * The {@link addInjectStreamUrl} method call triggers the following
   * callbacks:
   * - The local client:
   *  - streamInjectStatus, with the state of the injecting the online stream.
   *  - userJoined (uid: 666), if the method call is successful and the online
   * media stream is injected into the channel.
   * - The remote client:
   *  - userJoined (uid: 666), if the method call is successful and the online
   * media stream is injected into the channel.
   *
   * @param {string} url The HTTP/HTTPS URL address to be added to the ongoing
   * live broadcast. Valid protocols are RTMP, HLS, and FLV.
   * - Supported FLV audio codec type: AAC.
   * - Supported FLV video codec type: H264 (AVC).
   * @param {InjectStreamConfig} config The InjectStreamConfig object which
   * contains the configuration information for the added voice or video stream.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  addInjectStreamUrl(url, config) {
      return this.rtcEngine.addInjectStreamUrl(url, config);
  }
  /**
   * Removes the injected online media stream from a live broadcast.
   *
   * @param {string} url HTTP/HTTPS URL address of the added stream to be
   * removed.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  removeInjectStreamUrl(url) {
      return this.rtcEngine.removeInjectStreamUrl(url);
  }
  // ===========================================================================
  // RAW DATA
  // ===========================================================================
  /**
   * Sets the audio recording format.
   * @param {number} sampleRate Sets the sample rate (`samplesPerSec`)
   * returned,
   * which can set be as 8000, 16000, 32000, 44100 or 48000 Hz.
   * @param {number} channel Sets the number of audio channels (`channels`)
   * returned:
   * - 1: Mono
   * - 2: Stereo
   * @param {number} mode Sets the use mode:
   * - 0: Read-only mode: Users only read the AudioFrame data without modifying
   * anything. For example, when users acquire the data with the Agora SDK
   * then push the RTMP streams.
   * - 1: Write-only mode: Users replace the AudioFrame data with their own
   * data and pass the data to the SDK for encoding. For example, when users
   * acquire the data.
   * - 2: Read and write mode: Users read the data from AudioFrame, modify it,
   * and then play it. For example, when users have their own sound-effect
   * processing module and perform some voice pre-processing, such as a voice
   * change.
   *
   * @param {number} samplesPerCall Sets the sample points (`samples`)
   * returned. `samplesPerCall` is usually set as 1024 for stream pushing.
   * samplesPerCall = (int)(samplesPerSec × sampleInterval × numChannels),
   * where sampleInterval ≥ 0.01 in seconds.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setRecordingAudioFrameParameters(sampleRate, channel, mode, samplesPerCall) {
      return this.rtcEngine.setRecordingAudioFrameParameters(sampleRate, channel, mode, samplesPerCall);
  }
  /**
   * Sets the audio playback format.
   * @param {number} sampleRate Sets the sample rate (`samplesPerSec`)
   * returned, which can be set as 8000, 16000, 32000, 44100, or 48000 Hz.
   * @param {number} channel Sets the number of audio channels (`channels`)
   * returned:
   * - 1: Mono
   * - 2: Stereo
   * @param {number} mode Sets the use mode:
   * - 0: Read-only mode: Users only read the AudioFrame data without modifying
   * anything. For example, when users acquire the data with the Agora SDK then
   * push the RTMP streams.
   * - 1: Write-only mode: Users replace the AudioFrame data with their own
   * data and pass the data to the SDK for encoding. For example, when users
   * acquire the data.
   * - 2: Read and write mode: Users read the data from AudioFrame, modify it,
   * and then play it. For example, when users have their own sound-effect
   * processing module and perform some voice pre-processing, such as a voice
   * change.
   * @param {number} samplesPerCall Sets the sample points (`samples`)
   * returned. `samplesPerCall` is usually set as 1024 for stream pushing.
   * samplesPerCall = (int)(samplesPerSec × sampleInterval × numChannels),
   * where sampleInterval ≥ 0.01 in seconds.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setPlaybackAudioFrameParameters(sampleRate, channel, mode, samplesPerCall) {
      return this.rtcEngine.setPlaybackAudioFrameParameters(sampleRate, channel, mode, samplesPerCall);
  }
  /**
   * Sets the mixed audio format.
   * @param {number} sampleRate Sets the sample rate (`samplesPerSec`)
   * returned, which can be set as 8000, 16000, 32000, 44100, or 48000 Hz.
   * @param {number} samplesPerCall Sets the sample points (`samples`)
   * returned. `samplesPerCall` is usually set as 1024 for stream pushing.
   * samplesPerCall = (int)(samplesPerSec × sampleInterval × numChannels),
   * where sampleInterval ≥ 0.01 in seconds.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setMixedAudioFrameParameters(sampleRate, samplesPerCall) {
      return this.rtcEngine.setMixedAudioFrameParameters(sampleRate, samplesPerCall);
  }
  // ===========================================================================
  // DATA CHANNEL
  // ===========================================================================
  /**
   * Creates a data stream.
   *
   * Each user can create up to five data streams during the lifecycle of the
   * AgoraRtcEngine.
   *
   * **Note**:
   * Set both the `reliable` and `ordered` parameters to true or false. Do not
   * set one as true and the other as false.
   * @param {boolean} reliable Sets whether or not the recipients are
   * guaranteed to receive the data stream from the sender within five seconds:
   * - true: The recipients will receive data from the sender within 5 seconds.
   * If the recipient does not receive the sent data within 5 seconds, the data
   * channel will report an error to the application.
   * - false: There is no guarantee that the recipients receive the data stream
   * within five seconds and no error message is reported for any delay or
   * missing data stream.
   * @param {boolean} ordered Sets whether or not the recipients receive the
   * data stream in the sent order:
   * - true: The recipients receive the data stream in the sent order.
   * - false: The recipients do not receive the data stream in the sent order.
   * @return
   * - Returns the ID of the data stream, if this method call succeeds.
   * - < 0: Failure and returns an error code.
   */
  createDataStream(reliable, ordered) {
      return this.rtcEngine.createDataStream(reliable, ordered);
  }
  /**
   * Sends data stream messages to all users in a channel.
   *
   * The SDK has the following restrictions on this method:
   * - Up to 30 packets can be sent per second in a channel with each packet
   * having a maximum size of 1 kB.
   * - Each client can send up to 6 kB of data per second.
   * - Each user can have up to five data streams simultaneously.
   *
   * A successful {@link sendStreamMessage} method call triggers the
   * streamMessage callback on the remote client, from which the remote user
   * gets the stream message.
   *
   * A failed {@link sendStreamMessage} method call triggers the
   * streamMessageError callback on the remote client.
   *
   * **Note**:
   * This method applies only to the Communication profile or to the hosts in
   * the Live-broadcast profile.
   * If an audience in the Live-broadcast profile calls this method, the
   * audience may be switched to a host.
   * @param {number} streamId ID of the sent data stream, returned in the
   * {@link createDataStream} method.
   * @param {string} msg Data to be sent.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  sendStreamMessage(streamId, msg) {
      return this.rtcEngine.sendStreamMessage(streamId, msg);
  }
  // ===========================================================================
  // CHANNEL MEDIA RELAY
  // ===========================================================================
  /**
   * Starts to relay media streams across channels.
   *
   * After a successful method call, the SDK triggers the
   * channelMediaRelayState and channelMediaRelayEvent callbacks,
   * and these callbacks report the states and events of the media stream
   * relay.
   *
   * - If the channelMediaRelayState callback reports the state code `1` and
   * `0` in {@link ChannelMediaRelayState}, and the and the
   * channelMediaRelayEvent
   * callback reports the event code `4` in {@link ChannelMediaRelayEvent}, the
   * SDK starts relaying media streams between the original and the
   * destination channel.
   * - If the channelMediaRelayState callback  reports the state code `3` in
   * {@link ChannelMediaRelayState}, an exception occurs during the media
   * stream relay.
   *
   * **Note**:
   * - Call this method after the {@link joinChannel} method.
   * - This method takes effect only when you are a broadcaster in a
   * Live-broadcast channel.
   * - After a successful method call, if you want to call this method again,
   * ensure that you call the {@link stopChannelMediaRelay} method to quit
   * the current relay.
   *
   * @param config The configuration of the media stream relay:
   * {@link ChannelMediaRelayConfiguration}.
   *
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  startChannelMediaRelay(config) {
      return this.rtcEngine.startChannelMediaRelay(config);
  }
  /**
   * Updates the channels for media stream relay.
   *
   * After the channel media relay starts, if you want to relay the media
   * stream to more channels, or leave the current relay channel, you can call
   * the {@link updateChannelMediaRelay} method.
   *
   * After a successful method call, the SDK triggers the
   * channelMediaRelayState callback with the state code `7` in
   * {@link ChannelMediaRelayEvent}.
   *
   * **Note**:
   *
   * Call this method after the {@link startChannelMediaRelay} method to
   * update the destination channel.
   *
   * @param config The media stream relay configuration:
   * {@link channelMediaRelayConfiguration}.
   *
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  updateChannelMediaRelay(config) {
      return this.rtcEngine.updateChannelMediaRelay(config);
  }
  /**
   * Stops the media stream relay.
   *
   * Once the relay stops, the broadcaster quits all the destination channels.
   *
   * After a successful method call, the SDK triggers the
   * channelMediaRelayState callback. If the callback reports the state
   * code `0` and `1` in {@link ChannelMediaRelayState} the broadcaster
   * successfully stops the relay.
   *
   * **Note**:
   * If the method call fails, the SDK triggers the
   * channelMediaRelayState callback with the error code `2` and `8` in
   * {@link ChannelMediaRelayError}. You can leave the channel by calling
   * the {@link leaveChannel} method, and
   * the media stream relay automatically stops.
   *
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  stopChannelMediaRelay() {
      return this.rtcEngine.stopChannelMediaRelay();
  }
  // ===========================================================================
  // MANAGE AUDIO EFFECT
  // ===========================================================================
  /**
   * Retrieves the volume of the audio effects.
   *
   * The value ranges between 0.0 and 100.0.
   * @return
   * - ≥ 0: Volume of the audio effects, if this method call succeeds.
   * - < 0: Failure.
   */
  getEffectsVolume() {
      return this.rtcEngine.getEffectsVolume();
  }
  /**
   * Sets the volume of the audio effects.
   * @param {number} volume Sets the volume of the audio effects. The value
   * ranges between 0 and 100 (default).
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setEffectsVolume(volume) {
      return this.rtcEngine.setEffectsVolume(volume);
  }
  /**
   * Sets the volume of a specified audio effect.
   * @param {number} soundId ID of the audio effect. Each audio effect has a
   * unique ID.
   * @param {number} volume Sets the volume of the specified audio effect.
   * The value ranges between 0.0 and 100.0 (default).
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setVolumeOfEffect(soundId, volume) {
      return this.rtcEngine.setVolumeOfEffect(soundId, volume);
  }
  /**
   * Plays a specified local or online audio effect file.
   *
   * This method allows you to set the loop count, pitch, pan, and gain of the
   * audio effect file, as well as whether the remote user can hear the audio
   * effect.
   *
   * To play multiple audio effect files simultaneously, call this method
   * multiple times with different soundIds and filePaths.
   * We recommend playing no more than three audio effect files at the same
   * time.
   *
   * When the audio effect file playback finishes, the SDK returns the
   * audioEffectFinished callback.
   * @param {number} soundId ID of the specified audio effect. Each audio
   * effect has a unique ID.
   * @param {string} filePath The absolute path to the local audio effect
   * file or the URL of the online audio effect file.
   * @param {number} loopcount Sets the number of times the audio effect
   * loops:
   * - 0: Play the audio effect once.
   * - 1: Play the audio effect twice.
   * - -1: Play the audio effect in an indefinite loop until the
   * {@link stopEffect} or {@link stopEffect} method is called.
   * @param {number} pitch Sets the pitch of the audio effect. The value ranges
   * between 0.5 and 2.
   * The default value is 1 (no change to the pitch). The lower the value, the
   * lower the pitch.
   * @param {number} pan Sets the spatial position of the audio effect. The
   * value ranges between -1.0 and 1.0:
   * - 0.0: The audio effect displays ahead.
   * - 1.0: The audio effect displays to the right.
   * - -1.0: The audio effect displays to the left.
   * @param {number} gain Sets the volume of the audio effect. The value ranges
   * between 0.0 and 100.0 (default).
   * The lower the value, the lower the volume of the audio effect.
   * @param {boolean} publish Sets whether or not to publish the specified
   * audio effect to the remote stream:
   * - true: The locally played audio effect is published to the Agora Cloud
   * and the remote users can hear it.
   * - false: The locally played audio effect is not published to the Agora
   * Cloud and the remote users cannot hear it.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  playEffect(soundId, filePath, loopcount, pitch, pan, gain, publish) {
      return this.rtcEngine.playEffect(soundId, filePath, loopcount, pitch, pan, gain, publish);
  }
  /**
   * Stops playing a specified audio effect.
   * @param {number} soundId ID of the audio effect to stop playing. Each
   * audio effect has a unique ID.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  stopEffect(soundId) {
      return this.rtcEngine.stopEffect(soundId);
  }
  /**
   * Stops playing all audio effects.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  stopAllEffects() {
      return this.rtcEngine.stopAllEffects();
  }
  /**
   * Preloads a specified audio effect file into the memory.
   *
   * To ensure smooth communication, limit the size of the audio effect file.
   * We recommend using this method to preload the audio effect before calling
   * the {@link joinChannel} method.
   *
   * Supported audio formats: mp3, aac, m4a, 3gp, and wav.
   *
   * **Note**:
   * This method does not support online audio effect files.
   *
   * @param {number} soundId ID of the audio effect. Each audio effect has a
   * unique ID.
   * @param {string} filePath The absolute path of the audio effect file.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  preloadEffect(soundId, filePath) {
      return this.rtcEngine.preloadEffect(soundId, filePath);
  }
  /**
   * Releases a specified preloaded audio effect from the memory.
   * @param {number} soundId ID of the audio effect. Each audio effect has a
   * unique ID.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  unloadEffect(soundId) {
      return this.rtcEngine.unloadEffect(soundId);
  }
  /**
   * Pauses a specified audio effect.
   * @param {number} soundId ID of the audio effect. Each audio effect has a
   * unique ID.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  pauseEffect(soundId) {
      return this.rtcEngine.pauseEffect(soundId);
  }
  /**
   * Pauses all the audio effects.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  pauseAllEffects() {
      return this.rtcEngine.pauseAllEffects();
  }
  /**
   * Resumes playing a specified audio effect.
   * @param {number} soundId sound id
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  resumeEffect(soundId) {
      return this.rtcEngine.resumeEffect(soundId);
  }
  /**
   * Resumes playing all audio effects.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  resumeAllEffects() {
      return this.rtcEngine.resumeAllEffects();
  }
  /**
   * Enables/Disables stereo panning for remote users.
   *
   * Ensure that you call this method before {@link joinChannel} to enable
   * stereo panning
   * for remote users so that the local user can track the position of a
   * remote user
   * by calling {@link setRemoteVoicePosition}.
   * @param {boolean} enable Sets whether or not to enable stereo panning for
   * remote users:
   * - true: enables stereo panning.
   * - false: disables stereo panning.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  enableSoundPositionIndication(enable) {
      return this.rtcEngine.enableSoundPositionIndication(enable);
  }
  /**
   * Sets the sound position and gain of a remote user.
   *
   * When the local user calls this method to set the sound position of a
   * remote user, the sound difference between the left and right channels
   * allows
   * the local user to track the real-time position of the remote user,
   * creating a real sense of space. This method applies to massively
   * multiplayer online games, such as Battle Royale games.
   *
   * **Note**:
   * - For this method to work, enable stereo panning for remote users by
   * calling the {@link enableSoundPositionIndication} method before joining
   * a channel.
   * - This method requires hardware support. For the best sound positioning,
   * we recommend using a stereo speaker.
   * @param {number} uid The ID of the remote user.
   * @param {number} pan The sound position of the remote user. The value
   * ranges from -1.0 to 1.0:
   * - 0.0: The remote sound comes from the front.
   * - -1.0: The remote sound comes from the left.
   * - 1.0: The remote sound comes from the right.
   * @param {number} gain Gain of the remote user. The value ranges from 0.0
   * to 100.0. The default value is 100.0 (the original gain of the
   * remote user).
   * The smaller the value, the less the gain.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  setRemoteVoicePosition(uid, pan, gain) {
      return this.rtcEngine.setRemoteVoicePosition(uid, pan, gain);
  }
  // ===========================================================================
  // EXTRA
  // ===========================================================================
  /**
   * Retrieves the current call ID.
   * When a user joins a channel on a client, a `callId` is generated to
   * identify the call from the client.
   * Feedback methods, such as {@link rate} and {@link complain}, must be
   * called after the call ends to submit feedback to the SDK.
   *
   * The {@link rate} and {@link complain} methods require the `callId`
   * parameter retrieved from the {@link getCallId} method during a call.
   * `callId` is passed as an argument into the {@link rate} and
   * {@link complain} methods after the call ends.
   *
   * @return The current call ID.
   */
  getCallId() {
      return this.rtcEngine.getCallId();
  }
  /**
   * Allows a user to rate a call after the call ends.
   * @param {string} callId Pointer to the ID of the call, retrieved from
   * the {@link getCallId} method.
   * @param {number} rating Rating of the call. The value is between 1
   * (lowest score) and 5 (highest score).
   * @param {string} desc (Optional) Pointer to the description of the rating,
   * with a string length of less than 800 bytes.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  rate(callId, rating, desc) {
      return this.rtcEngine.rate(callId, rating, desc);
  }
  /**
   * Allows a user to complain about the call quality after a call ends.
   * @param {string} callId Call ID retrieved from the {@link getCallId} method.
   * @param {string} desc (Optional) Pointer to the description of the
   * complaint, with a string length of less than 800 bytes.
   * @return
   * - 0: Success.
   * - < 0: Failure.
   */
  complain(callId, desc) {
      return this.rtcEngine.complain(callId, desc);
  }
  // ===========================================================================
  // replacement for setParameters call
  // ===========================================================================
  /**
   * Private Interfaces.
   * @ignore
  */
  setBool(key, value) {
      return this.rtcEngine.setBool(key, value);
  }
  /**
   * Private Interfaces.
   * @ignore
   */
  setInt(key, value) {
      return this.rtcEngine.setInt(key, value);
  }
  /**
   * Private Interfaces.
   * @ignore
   */
  setUInt(key, value) {
      return this.rtcEngine.setUInt(key, value);
  }
  /**
   * Private Interfaces.
   * @ignore
   */
  setNumber(key, value) {
      return this.rtcEngine.setNumber(key, value);
  }
  /**
   * Private Interfaces.
   * @ignore
   */
  setString(key, value) {
      return this.rtcEngine.setString(key, value);
  }
  /**
   * Private Interfaces.
   * @ignore
   */
  setObject(key, value) {
      return this.rtcEngine.setObject(key, value);
  }
  /**
   * Private Interfaces.
   * @ignore
   */
  getBool(key) {
      return this.rtcEngine.getBool(key);
  }
  /**
   * Private Interfaces.
   * @ignore
   */
  getInt(key) {
      return this.rtcEngine.getInt(key);
  }
  /**
   * Private Interfaces.
   * @ignore
   */
  getUInt(key) {
      return this.rtcEngine.getUInt(key);
  }
  /**
   * Private Interfaces.
   * @ignore
   */
  getNumber(key) {
      return this.rtcEngine.getNumber(key);
  }
  /**
   * Private Interfaces.
   * @ignore
   */
  getString(key) {
      return this.rtcEngine.getString(key);
  }
  /**
   * Private Interfaces.
   * @ignore
   */
  getObject(key) {
      return this.rtcEngine.getObject(key);
  }
  /**
   * Private Interfaces.
   * @ignore
   */
  getArray(key) {
      return this.rtcEngine.getArray(key);
  }
  /**
   * Private Interfaces.
   * @ignore
   */
  setParameters(param) {
      return this.rtcEngine.setParameters(param);
  }
  /**
   * Private Interfaces.
   * @ignore
   */
  convertPath(path) {
      return this.rtcEngine.convertPath(path);
  }
  /**
   * Private Interfaces.
   * @ignore
   */
  setProfile(profile, merge) {
      return this.rtcEngine.setProfile(profile, merge);
  }
  // ===========================================================================
  // plugin apis
  // ===========================================================================
  initializePluginManager() {
      return this.rtcEngine.initializePluginManager();
  }
  releasePluginManager() {
      return this.rtcEngine.releasePluginManager();
  }
  registerPlugin(info) {
      return this.rtcEngine.registerPlugin(info);
  }
  unregisterPlugin(pluginId) {
      return this.rtcEngine.unregisterPlugin(pluginId);
  }
  getPlugins() {
      return this.rtcEngine.getPlugins().map(item => {
          return this.createPlugin(item.id);
      });
  }
  /**
   * @ignore
   * @param pluginId
   */
  createPlugin(pluginId) {
      return {
          id: pluginId,
          enable: () => {
              return this.enablePlugin(pluginId, true);
          },
          disable: () => {
              return this.enablePlugin(pluginId, false);
          },
          setParameter: (param) => {
              return this.setPluginParameter(pluginId, param);
          }
      };
  }
  /**
   * @ignore
   * @param pluginId
   * @param enabled
   */
  enablePlugin(pluginId, enabled) {
      return this.rtcEngine.enablePlugin(pluginId, enabled);
  }
  /**
   * @ignore
   * @param pluginId
   * @param param
   */
  setPluginParameter(pluginId, param) {
      return this.rtcEngine.setPluginParameter(pluginId, param);
  }
}
class AgoraRtcChannel extends events_1.EventEmitter {
  constructor(rtcChannel) {
      super();
      this.rtcChannel = rtcChannel;
      this.initEventHandler();
  }
  /**
   * init event handler
   * @private
   * @ignore
   */
  initEventHandler() {
      const fire = (event, ...args) => {
          setImmediate(() => {
              this.emit(event, ...args);
          });
      };
      this.rtcChannel.onEvent('apierror', (funcName) => {
          console.error(`api ${funcName} failed. this is an error
            thrown by c++ addon layer. it often means sth is
            going wrong with this function call and it refused
            to do what is asked. kindly check your parameter types
            to see if it matches properly.`);
      });
      this.rtcChannel.onEvent('joinChannelSuccess', (uid, elapsed) => {
          fire('joinChannelSuccess', uid, elapsed);
      });
      this.rtcChannel.onEvent('channelWarning', (warn, message) => {
          fire('channelWarning', warn, message);
      });
      this.rtcChannel.onEvent('channelError', (error, message) => {
          fire('channelError', error, message);
      });
      this.rtcChannel.onEvent('rejoinChannelSuccess', (uid, elapsed) => {
          fire('rejoinChannelSuccess', uid, elapsed);
      });
      this.rtcChannel.onEvent('leaveChannel', (stats) => {
          fire('leaveChannel', stats);
      });
      this.rtcChannel.onEvent('clientRoleChanged', (oldRole, newRole) => {
          fire('clientRoleChanged', oldRole, newRole);
      });
      this.rtcChannel.onEvent('userJoined', (uid, elapsed) => {
          fire('userJoined', uid, elapsed);
      });
      this.rtcChannel.onEvent('userOffline', (uid, reason) => {
          fire('userOffline', uid, reason);
      });
      this.rtcChannel.onEvent('connectionLost', () => {
          fire('connectionLost');
      });
      this.rtcChannel.onEvent('requestToken', () => {
          fire('requestToken');
      });
      this.rtcChannel.onEvent('tokenPrivilegeWillExpire', (token) => {
          fire('tokenPrivilegeWillExpire', token);
      });
      this.rtcChannel.onEvent('rtcStats', (stats) => {
          fire('rtcStats', stats);
      });
      this.rtcChannel.onEvent('networkQuality', (uid, txQuality, rxQuality) => {
          fire('networkQuality', uid, txQuality, rxQuality);
      });
      this.rtcChannel.onEvent('remoteVideoStats', (stats) => {
          fire('remoteVideoStats', stats);
      });
      this.rtcChannel.onEvent('remoteAudioStats', (stats) => {
          fire('remoteAudioStats', stats);
      });
      this.rtcChannel.onEvent('remoteAudioStateChanged', (uid, state, reason, elapsed) => {
          fire('remoteAudioStateChanged', uid, state, reason, elapsed);
      });
      this.rtcChannel.onEvent('activeSpeaker', (uid) => {
          fire('activeSpeaker', uid);
      });
      this.rtcChannel.onEvent('firstRemoteVideoFrame', (uid, width, height, elapsed) => {
          fire('firstRemoteVideoFrame', uid, width, height, elapsed);
      });
      this.rtcChannel.onEvent('userMuteAudio', (uid, muted) => {
          fire('userMuteAudio', uid, muted);
      });
      this.rtcChannel.onEvent('firstRemoteAudioDecoded', (uid, elapsed) => {
          fire('firstRemoteAudioDecoded', uid, elapsed);
      });
      this.rtcChannel.onEvent('videoSizeChanged', (uid, width, height, rotation) => {
          fire('videoSizeChanged', uid, width, height, rotation);
      });
      this.rtcChannel.onEvent('remoteVideoStateChanged', (uid, state, reason, elapsed) => {
          fire('remoteVideoStateChanged', uid, state, reason, elapsed);
      });
      this.rtcChannel.onEvent('streamMessage', (uid, streamId, data) => {
          fire('streamMessage', uid, streamId, data);
      });
      this.rtcChannel.onEvent('streamMessageError', (uid, streamId, code, missed, cached) => {
          fire('streamMessage', uid, streamId, code, missed, cached);
      });
      this.rtcChannel.onEvent('channelMediaRelayStateChanged', (state, code) => {
          fire('channelMediaRelayStateChanged', state, code);
      });
      this.rtcChannel.onEvent('channelMediaRelayEvent', (code) => {
          fire('channelMediaRelayEvent', code);
      });
      this.rtcChannel.onEvent('firstRemoteAudioFrame', (uid, elapsed) => {
          fire('firstRemoteAudioFrame', uid, elapsed);
      });
      this.rtcChannel.onEvent('rtmpStreamingStateChanged', (url, state, errCode) => {
          fire('rtmpStreamingStateChanged', url, state, errCode);
      });
      this.rtcChannel.onEvent('streamPublished', (url, error) => {
          fire('streamPublished', url, error);
      });
      this.rtcChannel.onEvent('streamUnpublished', (url) => {
          fire('streamUnpublished', url);
      });
      this.rtcChannel.onEvent('transcodingUpdated', () => {
          fire('transcodingUpdated');
      });
      this.rtcChannel.onEvent('streamInjectedStatus', (url, uid, status) => {
          fire('streamInjectedStatus', url, uid, status);
      });
      this.rtcChannel.onEvent('remoteSubscribeFallbackToAudioOnly', (uid, isFallbackOrRecover) => {
          fire('remoteSubscribeFallbackToAudioOnly', uid, isFallbackOrRecover);
      });
      this.rtcChannel.onEvent('connectionStateChanged', (state, reason) => {
          fire('connectionStateChanged', state, reason);
      });
  }
  joinChannel(token, info, uid, options) {
      return this.rtcChannel.joinChannel(token, info, uid, options || {
          autoSubscribeAudio: true,
          autoSubscribeVideo: true
      });
  }
  joinChannelWithUserAccount(token, userAccount, options) {
      return this.rtcChannel.joinChannelWithUserAccount(token, userAccount, options || {
          autoSubscribeAudio: true,
          autoSubscribeVideo: true
      });
  }
  channelId() {
      return this.rtcChannel.channelId();
  }
  getCallId() {
      return this.rtcChannel.getCallId();
  }
  setClientRole(role) {
      return this.rtcChannel.setClientRole(role);
  }
  setRemoteUserPriority(uid, priority) {
      return this.rtcChannel.setRemoteUserPriority(uid, priority);
  }
  renewToken(newtoken) {
      return this.rtcChannel.renewToken(newtoken);
  }
  setEncryptionSecret(secret) {
      return this.rtcChannel.setEncryptionSecret(secret);
  }
  setEncryptionMode(mode) {
      return this.rtcChannel.setEncryptionMode(mode);
  }
  setRemoteVoicePosition(uid, pan, gain) {
      return this.rtcChannel.setRemoteVoicePosition(uid, pan, gain);
  }
  setDefaultMuteAllRemoteAudioStreams(mute) {
      return this.rtcChannel.setDefaultMuteAllRemoteAudioStreams(mute);
  }
  setDefaultMuteAllRemoteVideoStreams(mute) {
      return this.rtcChannel.setDefaultMuteAllRemoteVideoStreams(mute);
  }
  muteAllRemoteAudioStreams(mute) {
      return this.rtcChannel.muteAllRemoteAudioStreams(mute);
  }
  muteRemoteAudioStream(uid, mute) {
      return this.rtcChannel.muteRemoteAudioStream(uid, mute);
  }
  muteAllRemoteVideoStreams(mute) {
      return this.rtcChannel.muteAllRemoteVideoStreams(mute);
  }
  muteRemoteVideoStream(uid, mute) {
      return this.rtcChannel.muteRemoteVideoStream(uid, mute);
  }
  setRemoteVideoStreamType(uid, streamType) {
      return this.rtcChannel.setRemoteVideoStreamType(uid, streamType);
  }
  setRemoteDefaultVideoStreamType(streamType) {
      return this.rtcChannel.setRemoteDefaultVideoStreamType(streamType);
  }
  createDataStream(reliable, ordered) {
      return this.rtcChannel.createDataStream(reliable, ordered);
  }
  sendStreamMessage(streamId, msg) {
      return this.rtcChannel.sendStreamMessage(streamId, msg);
  }
  addPublishStreamUrl(url, transcodingEnabled) {
      return this.rtcChannel.addPublishStreamUrl(url, transcodingEnabled);
  }
  removePublishStreamUrl(url) {
      return this.rtcChannel.removePublishStreamUrl(url);
  }
  setLiveTranscoding(transcoding) {
      return this.rtcChannel.setLiveTranscoding(transcoding);
  }
  addInjectStreamUrl(url, config) {
      return this.rtcChannel.addInjectStreamUrl(url, config);
  }
  removeInjectStreamUrl(url) {
      return this.rtcChannel.removeInjectStreamUrl(url);
  }
  startChannelMediaRelay(config) {
      return this.rtcChannel.startChannelMediaRelay(config);
  }
  updateChannelMediaRelay(config) {
      return this.rtcChannel.updateChannelMediaRelay(config);
  }
  stopChannelMediaRelay() {
      return this.rtcChannel.stopChannelMediaRelay();
  }
  getConnectionState() {
      return this.rtcChannel.getConnectionState();
  }
  publish() {
      return this.rtcChannel.publish();
  }
  unpublish() {
      return this.rtcChannel.unpublish();
  }
  leaveChannel() {
      return this.rtcChannel.leaveChannel();
  }
  release() {
      return this.rtcChannel.release();
  }
}
export default AgoraRtcEngine;
