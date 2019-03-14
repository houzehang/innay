const EventEmitter = require('events').EventEmitter;
const WebglUtils = {
  defaultShaderType: [
    "VERTEX_SHADER",
    "FRAGMENT_SHADER",
  ],
  loadShader: function(gl, shaderSource, shaderType, opt_errorCallback) {
    var errFn = opt_errorCallback || console.error;
    // Create the shader object
    var shader = gl.createShader(shaderType);

    // Load the shader source
    gl.shaderSource(shader, shaderSource);

    // Compile the shader
    gl.compileShader(shader);

    // Check the compile status
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
      // Something went wrong during compilation; get the error
      var lastError = gl.getShaderInfoLog(shader);
      errFn("*** Error compiling shader '" + shader + "':" + lastError);
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }, 
	createProgram: function(
		gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
	  var errFn = opt_errorCallback || console.error;
	  var program = gl.createProgram();
	  shaders.forEach(function(shader) {
		gl.attachShader(program, shader);
	  });
	  if (opt_attribs) {
		obj_attrib.forEach(function(attrib, ndx) {
		  gl.bindAttribLocation(
			  program,
			  opt_locations ? opt_locations[ndx] : ndx,
			  attrib);
		});
	  }
	  gl.linkProgram(program);
	
	  // Check the link status
	  var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
	  if (!linked) {
		  // something went wrong with the link
		  var lastError = gl.getProgramInfoLog(program);
		  errFn("Error in program linking:" + lastError);
	
		  gl.deleteProgram(program);
		  return null;
	  }
	  return program;
	},

	createProgramFromSources: function (
		gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
	  var shaders = [];
	  for (var ii = 0; ii < shaderSources.length; ++ii) {
		shaders.push(WebglUtils.loadShader(
			gl, shaderSources[ii], gl[WebglUtils.defaultShaderType[ii]], opt_errorCallback));
	  }
	  return WebglUtils.createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback);
	}
}

const AgoraRender = function() {
  let gl;
  let program;
  let positionLocation;
  let texCoordLocation;
  let yTexture;
  let uTexture;
  let vTexture;
  let texCoordBuffer;
  let surfaceBuffer;
  const that = {
    view: undefined,
    mirrorView: false,
    container: undefined,
    canvas: undefined,
    renderImageCount: 0,
    initWidth: 0,
    initHeight: 0,
    initRotation: 0,
    canvasUpdated: false,
    clientWidth: 0,
    clientHeight: 0,
    // 0 - cover, 1 - fit
    contentMode: 0,
    event: new EventEmitter(),
    firstFrameRender: false
  };

  that.bind = function(size) {
		initCanvas(
			that.mirrorView,
			size.width,
			size.height,
			that.initRotation,
			console.warn
		);
  };

  that.unbind = function() {
    try {
      gl.getExtension('WEBGL_lose_context').loseContext();
    } catch (err) {
      console.warn(err)
    }
    program = undefined;
    positionLocation = undefined;
    texCoordLocation = undefined;

    deleteTexture(yTexture);
    deleteTexture(uTexture);
    deleteTexture(vTexture);
    yTexture = undefined;
    uTexture = undefined;
    vTexture = undefined;

    deleteBuffer(texCoordBuffer);
    deleteBuffer(surfaceBuffer);
    texCoordBuffer = undefined;
    surfaceBuffer = undefined;
    
    gl = undefined;

    that.canvas = undefined;
    that.mirrorView = false;
  };

  that.renderImage = function(image) {
    // Rotation, width, height, left, top, right, bottom, yplane, uplane, vplane
    if (!gl) {
      console.log('!gl');
      return;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    const xWidth = image.width + image.left + image.right;
    const xHeight = image.height + image.top + image.bottom;
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        image.left / xWidth,
        image.bottom / xHeight,
        1 - image.right / xWidth,
        image.bottom / xHeight,
        image.left / xWidth,
        1 - image.top / xHeight,
        image.left / xWidth,
        1 - image.top / xHeight,
        1 - image.right / xWidth,
        image.bottom / xHeight,
        1 - image.right / xWidth,
        1 - image.top / xHeight
      ]),
      gl.STATIC_DRAW
    );
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

    uploadYuv(xWidth, xHeight, image.yplane, image.uplane, image.vplane);

    updateCanvas(image.rotation, image.width, image.height);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    that.renderImageCount += 1;

    if (!that.firstFrameRender) {
      that.firstFrameRender = true;
      that.event.emit('ready');
    }
  };

      /**
   * draw image with params
   * @private
   * @param {*} render 
   * @param {*} header 
   * @param {*} yplanedata 
   * @param {*} uplanedata 
   * @param {*} vplanedata 
   */
  that.drawFrame = function({header, yUint8Array, uUint8Array, vUint8Array}) {
    var headerLength = 20;
    var dv = new DataView(header);
    var format = dv.getUint8(0);
    var mirror = dv.getUint8(1);
    var width = dv.getUint16(2);
    var height = dv.getUint16(4);
    var left = dv.getUint16(6);
    var top = dv.getUint16(8);
    var right = dv.getUint16(10);
    var bottom = dv.getUint16(12);
    var rotation = dv.getUint16(14);
    var ts = dv.getUint32(16);
    var xWidth = width + left + right;
    var xHeight = height + top + bottom;
    var yLength = xWidth * xHeight;
    var yBegin = headerLength;
    var yEnd = yBegin + yLength;
    var uLength = yLength / 4;
    var uBegin = yEnd;
    var uEnd = uBegin + uLength;
    var vLength = yLength / 4;
    var vBegin = uEnd;
    var vEnd = vBegin + vLength;
    that.renderImage({
      mirror: mirror,
      width: width,
      height: height,
      left: left,
      top: top,
      right: right,
      bottom: bottom,
      rotation: rotation,
      yplane: new Uint8Array(yUint8Array),
      uplane: new Uint8Array(uUint8Array),
      vplane: new Uint8Array(vUint8Array)
    });
    var now32 = (Date.now() & 0xffffffff) >>> 0;
    var latency = now32 - ts;
  }

  function uploadYuv(width, height, yplane, uplane, vplane) {
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, yTexture);

    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.LUMINANCE,
      width,
      height,
      0,
      gl.LUMINANCE,
      gl.UNSIGNED_BYTE,
      yplane
    );
    var e = gl.getError();
    if (e != gl.NO_ERROR) {
      console.log('upload y plane ', width, height, yplane.byteLength, ' error', e);
    }
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, uTexture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.LUMINANCE,
      width / 2,
      height / 2,
      0,
      gl.LUMINANCE,
      gl.UNSIGNED_BYTE,
      uplane
    );
    var e = gl.getError();
    if (e != gl.NO_ERROR) {
      console.log('upload u plane ', width, height, uplane.byteLength, '  error', e);
    }

    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, vTexture);
    ('');
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.LUMINANCE,
      width / 2,
      height / 2,
      0,
      gl.LUMINANCE,
      gl.UNSIGNED_BYTE,
      vplane
    );
    var e = gl.getError();
    if (e != gl.NO_ERROR) {
      console.log('upload v plane ', width, height, vplane.byteLength, '  error', e);
    }
  }

  function deleteBuffer(buffer) {
    if (buffer && gl) {
      gl.deleteBuffer(buffer);
    }
  }

  function deleteTexture(texture) {
    if (texture && gl) {
      gl.deleteTexture(texture);
    }
  }

  const vertexShaderSource =
    'attribute vec2 a_position;' +
    'attribute vec2 a_texCoord;' +
    'uniform vec2 u_resolution;' +
    'varying vec2 v_texCoord;' +
    'void main() {' +
    'vec2 zeroToOne = a_position / u_resolution;' +
    '   vec2 zeroToTwo = zeroToOne * 2.0;' +
    '   vec2 clipSpace = zeroToTwo - 1.0;' +
    '   gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);' +
    'v_texCoord = a_texCoord;' +
    '}';
  const yuvShaderSource =
    'precision mediump float;' +
    'uniform sampler2D Ytex;' +
    'uniform sampler2D Utex,Vtex;' +
    'varying vec2 v_texCoord;' +
    'void main(void) {' +
    '  float nx,ny,r,g,b,y,u,v;' +
    '  mediump vec4 txl,ux,vx;' +
    '  nx=v_texCoord[0];' +
    '  ny=v_texCoord[1];' +
    '  y=texture2D(Ytex,vec2(nx,ny)).r;' +
    '  u=texture2D(Utex,vec2(nx,ny)).r;' +
    '  v=texture2D(Vtex,vec2(nx,ny)).r;' +
    '  y=1.1643*(y-0.0625);' +
    '  u=u-0.5;' +
    '  v=v-0.5;' +
    '  r=y+1.5958*v;' +
    '  g=y-0.39173*u-0.81290*v;' +
    '  b=y+2.017*u;' +
    '  gl_FragColor=vec4(r,g,b,1.0);' +
    '}';

  function initCanvas(mirror, width, height, rotation, onFailure) {
    that.mirrorView = mirror;
    that.canvasUpdated = false;

    that.canvas = document.createElement('canvas');
    if (rotation == 0 || rotation == 180) {
      that.canvas.width = width;
      that.canvas.height = height;
    } else {
      that.canvas.width = height;
      that.canvas.height = width;
    }
    that.initWidth = width;
    that.initHeight = height;
    that.initRotation = rotation;
    try {
      // Try to grab the standard context. If it fails, fallback to experimental.
      gl =
        that.canvas.getContext('webgl', { preserveDrawingBuffer: true }) ||
        that.canvas.getContext('experimental-webgl');
    } catch (e) {
      console.log(e);
    }

    if (!gl) {
      gl = undefined;
      onFailure({ error: 'Browser not support! No WebGL detected.' });
      return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Enable depth testing
    gl.enable(gl.DEPTH_TEST);
    // Near things obscure far things
    gl.depthFunc(gl.LEQUAL);
    // Clear the color as well as the depth buffer.
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Setup GLSL program
    program = WebglUtils.createProgramFromSources(gl, [vertexShaderSource, yuvShaderSource]);
    gl.useProgram(program);

    initTextures();
  }

  function initTextures() {
    positionLocation = gl.getAttribLocation(program, 'a_position');
    texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');

    surfaceBuffer = gl.createBuffer();
    texCoordBuffer = gl.createBuffer();

    // Create a texture.
    gl.activeTexture(gl.TEXTURE0);
    yTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, yTexture);
    // Set the parameters so we can render any size image.
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

    gl.activeTexture(gl.TEXTURE1);
    uTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, uTexture);
    // Set the parameters so we can render any size image.
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

    gl.activeTexture(gl.TEXTURE2);
    vTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, vTexture);
    // Set the parameters so we can render any size image.
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

    const y = gl.getUniformLocation(program, 'Ytex');
    gl.uniform1i(y, 0); /* Bind Ytex to texture unit 0 */

    const u = gl.getUniformLocation(program, 'Utex');
    gl.uniform1i(u, 1); /* Bind Utex to texture unit 1 */

    const v = gl.getUniformLocation(program, 'Vtex');
    gl.uniform1i(v, 2); /* Bind Vtex to texture unit 2 */
  }

  function updateCanvas(rotation, destWidth, destHeight) {
    var width = that.initWidth, height = that.initHeight
    gl.bindBuffer(gl.ARRAY_BUFFER, surfaceBuffer);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    // Console.log('image rotation from ', that.imageRotation, ' to ', rotation);
    // 4 vertex, 1(x1,y1), 2(x2,y1), 3(x2,y2), 4(x1,y2)
    //  0: 1,2,4/4,2,3
    // 90: 2,3,1/1,3,4
    // 180: 3,4,2/2,4,1
    // 270: 4,1,3/3,1,2
    var scale       = Math.max(width/destWidth, height/destHeight),
        deltaWidth  = destWidth * scale - width >> 1,
        deltaHeight = destHeight * scale - height >> 1

    const p1 = { x: -deltaWidth, y: -deltaHeight };
    const p2 = { x: width + deltaWidth, y: -deltaHeight };
    const p3 = { x: width + deltaWidth, y: height + deltaHeight };
    const p4 = { x: -deltaWidth, y: height + deltaHeight };
    
    let pp1, pp2, pp3, pp4
	  
    if (that.mirrorView) {
      pp1 = p2,
      pp2 = p1,
      pp3 = p4,
      pp4 = p3;
    } else {
      pp1 = p1,
      pp2 = p2,
      pp3 = p3,
      pp4 = p4;
    }

    switch (rotation) {
      case 0:
        break;
      case 90:
        pp1 = p2;
        pp2 = p3;
        pp3 = p4;
        pp4 = p1;
        break;
      case 180:
        pp1 = p3;
        pp2 = p4;
        pp3 = p1;
        pp4 = p2;
        break;
      case 270:
        pp1 = p4;
        pp2 = p1;
        pp3 = p2;
        pp4 = p3;
        break;
      default:
    }
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        pp1.x,
        pp1.y,
        pp2.x,
        pp2.y,
        pp4.x,
        pp4.y,
        pp4.x,
        pp4.y,
        pp2.x,
        pp2.y,
        pp3.x,
        pp3.y
      ]),
      gl.STATIC_DRAW
    );

    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    gl.uniform2f(resolutionLocation, width, height);
    // That.canvasUpdated = true;
  }

  return that;
};

module.exports = AgoraRender;