/**
 * Wechaty - Wechat for Bot. Connecting ChatBots
 * 来源与开源库wechaty的库
 * Licenst: ISC
 * https://github.com/wechaty/wechaty
 *
 */
const https 	= require("https");
const http  	= require("http");
const url   	= require("url");
const crypto 	= require("crypto");

const MsgType   = {
  TEXT                : 1,
  IMAGE               : 3,
  VOICE               : 34,
  VERIFYMSG           : 37,
  POSSIBLEFRIEND_MSG  : 40,
  SHARECARD           : 42,
  VIDEO               : 43,
  EMOTICON            : 47,
  LOCATION            : 48,
  APP                 : 49,
  VOIPMSG             : 50,
  STATUSNOTIFY        : 51,
  VOIPNOTIFY          : 52,
  VOIPINVITE          : 53,
  MICROVIDEO          : 62,
  SYSNOTICE           : 9999,
  SYS                 : 10000,
  RECALLED            : 10002,
}

/**
 * bug compatible with:
 * https://github.com/wechaty/wechaty/issues/40#issuecomment-252802084
 */
// import * as ws from 'ws'

class UtilLib {
  stripHtml(html) {
    if (!html) {
      return ''
    }
    return html.replace(/(<([^>]+)>)/ig, '')
  }

  unescapeHtml(str) {
    if (!str) {
      return ''
    }
    return str
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&')
  }

  digestEmoji(html) {
    if (!html) {
      return ''
    }
    return html
          .replace(/<img class="(\w*?emoji) (\w*?emoji[^"]+?)" text="(.*?)_web" src=[^>]+>/g,
                   '$3'
                 ) // <img class="emoji emoji1f4a4" text="[流汗]_web" src="/zh_CN/htmledition/v2/images/spacer.gif" />
          .replace(/<span class="(\w*?emoji) (\w*?emoji[^"]+?)"><\/span>/g,
                   '[$2]'
                 ) // '<span class="emoji emoji1f334"></span>'
  }

  /**
   * unifyEmoji: the same emoji will be encoded as different xml code in browser. unify them.
   *
   *  from: <img class="emoji emoji1f602" text="_web" src="/zh_CN/htmledition/v2/images/spacer.gif" />
   *  to:   <span class=\"emoji emoji1f602\"></span>
   *
   */
  unifyEmoji(html) {
    if (!html) {
      return ''
    }
    return html
          .replace(/<img class="(\w*?emoji) (\w*?emoji[^"]+?)" text="(.*?)_web" src=[^>]+>/g,
                   '<emoji code="$2"/>'
                 ) // <img class="emoji emoji1f4a4" text="[流汗]_web" src="/zh_CN/htmledition/v2/images/spacer.gif" />
          .replace(/<span class="(\w*?emoji) (\w*?emoji[^"]+?)"><\/span>/g,
                   '<emoji code="$2"/>'
                 ) // '<span class="emoji emoji1f334"></span>'
  }

  stripEmoji(html) {
    if (!html) {
      return ''
    }
    return html
          .replace(/<img class="(\w*?emoji) (\w*?emoji[^"]+?)" text="(.*?)_web" src=[^>]+>/g,
                   ''
                 ) // <img class="emoji emoji1f4a4" text="[流汗]_web" src="/zh_CN/htmledition/v2/images/spacer.gif" />
          .replace(/<span class="(\w*?emoji) (\w*?emoji[^"]+?)"><\/span>/g,
                   ''
                 ) // '<span class="emoji emoji1f334"></span>'
  }

  plainText(html) {
    if (!html) {
      return ''
    }
    return UtilLib.stripHtml(
      UtilLib.unescapeHtml(
        UtilLib.stripHtml(
          UtilLib.digestEmoji(
            html
          )
        )
      )
    )
  }

  urlStream(href, cookies) {
    // const myurl = 'http://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgetmsgimg?&MsgID=3080011908135131569&skey=%40crypt_c117402d_53a58f8fbb21978167a3fc7d3be7f8c9'
    href = href.replace(/^https/i, 'http') // use http instead of https, because https will only success on the very first request!

    const u = url.parse(href)
    const protocol = 'https';

    let options, get

    if (protocol === 'https:') {
      // request       = https.request.bind(https)
      get           = https.get
      options       = u
      options.agent = https.globalAgent
    } else if (protocol === 'http:') {
      // request       = http.request.bind(http)
      get           = http.get
      options       = u
      options.agent = http.globalAgent
    } else {
      throw new Error('protocol unknown: ' + protocol)
    }

    options.headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',

      // Accept: 'image/webp,image/*,*/*;q=0.8',
      // Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8', //  MsgType.IMAGE | VIDEO
      Accept: '*/*',

      Host: options.hostname, // 'wx.qq.com',  // MsgType.VIDEO | IMAGE

      Referer: protocol + '//wx.qq.com/',

      // 'Upgrade-Insecure-Requests': 1, // MsgType.VIDEO | IMAGE

      Range: 'bytes=0-',

      // 'Accept-Encoding': 'gzip, deflate, sdch',
      // 'Accept-Encoding': 'gzip, deflate, sdch, br', // MsgType.IMAGE | VIDEO
      'Accept-Encoding': 'identity;q=1, *;q=0',

      'Accept-Language': 'zh-CN,zh;q=0.8', // MsgType.IMAGE | VIDEO
      // 'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.6,en-US;q=0.4,en;q=0.2',
    }

    /**
     * pgv_pvi=6639183872; pgv_si=s8359147520; webwx_data_ticket=gSeBbuhX+0kFdkXbgeQwr6Ck
     */
    options.headers['Cookie'] = cookies.map(c => `${c['name']}=${c['value']}`).join('; ')
    // log.verbose('Util', 'Cookie: %s', options.headers.Cookie)
// console.log(options)

    return new Promise((resolve, reject) => {
      // const req = request(options, (res) => {
      const req = get(options, (res) => {
        // console.log(`STATUS: ${res.statusCode}`);
        // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        // res.setEncoding('utf8');
        resolve(res)
      })

      req.on('error', (e) => {
        log.warn('WebUtil', `downloadStream() problem with request: ${e.message}`)
        reject(e)
      })

      // req.end(() => {
      //   log.verbose('UtilLib', 'urlStream() req.end() request sent')
      // })

    })
  }

  // credit - http://stackoverflow.com/a/2117523/1123955
  guid() {
    /* tslint:disable:no-bitwise */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }

  /**
   *
   * @param port is just a suggestion.
   * there's no grantuee for the number
   *
   * The IANA suggested ephemeral port range.
   * @see http://en.wikipedia.org/wiki/Ephemeral_ports
   *
   * const DEFAULT_IANA_RANGE = {min: 49152, max: 65535}
   *
   */
  getPort(port) {
    log.silly('UtilLib', 'getPort(%d)', port)
    let tryPort = nextPort(port || 38788)

    return new Promise((resolve, reject) => {
      // https://gist.github.com/mikeal/1840641
      function _getPort(cb) {
        const server = require('net').createServer()
        server.on('error', function(err) {
          if (err) {/* fail safe */ }
          tryPort = nextPort(port)
          _getPort(cb)
        })
        server.listen(tryPort, function(err) {
          if (err) {/* fail safe */}
          server.once('close', function() {
            cb(tryPort)
          })
          server.close()
        })
      }
      _getPort(okPort => {
        log.silly('UtilLib', 'getPort(%d) return: %d',
                  port,
                  okPort
        )
        resolve(okPort)
      })
    })

    function nextPort(currentPort) {
      const RANGE = 1733
      // do not use Math.random() here, because AVA will fork, then here will get the same random number, cause a race condition for socket listen
      // const n = Math.floor(Math.random() * BETWEEN_RANGE)

      /**
       * nano seconds from node: http://stackoverflow.com/a/18197438/1123955
       */
      const [, nanoSeed] = process.hrtime()
      const n = 1 + nanoSeed % RANGE // +1 to prevent same port

      if (currentPort + n > 65000) {
        return currentPort + n - RANGE
      }
      return currentPort + n
    }
  }

  md5(buffer) {
    let md5sum = crypto.createHash('md5')
    md5sum.update(buffer)
    return md5sum.digest('hex')
  }

  msgType(ext) {
    switch (ext) {
      case 'bmp':
      case 'jpeg':
      case 'jpg':
      case 'png':
        return MsgType.IMAGE
      case 'mp4':
        return MsgType.VIDEO
      default:
        return MsgType.APP
    }
  }

  mime(ext) {
    switch (ext) {
      case 'pdf':
        return 'application/pdf'
      case 'bmp':
        return 'image/bmp'
      case 'jpeg':
        return 'image/jpeg'
      case 'jpg':
        return 'image/jpeg'
      case 'png':
        return 'image/png'
      case 'mp4':
        return 'video/mp4'
      default:
        return 'application/octet-stream'
    }
  }
}

module.exports = new UtilLib
