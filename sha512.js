// 作用于windows安装包数字签名后，更新latest.yml中的sha512值
// 使用方法: node sha512.js native[/teacher/student]

const fs    = require('fs')
const shell = require('shelljs')
const path  = require('path')

let arg1    = process.argv[2]
let rootPath= path.join(__dirname, 'build', arg1)
let ymlPath = path.join(rootPath, 'latest.yml')
let ymlCon  = fs.readFileSync(ymlPath, 'utf8')
let exeFile = /\path[^\n]+/.exec(ymlCon)[0].replace(/path:\W?/,'')
let exePath = path.join(rootPath, exeFile)
    exePath = exePath.replace(/ /g,'\\ ')
let hash    = shell.exec(`shasum -a512 ${exePath}`, {silent:true}).stdout
    hash    = hash.replace(/\W+[^\n]+[\n]*/g,'')
    
let sha512  = Buffer.from(hash, 'hex').toString('base64')
ymlCon      = ymlCon.replace(/sha512[^\n]+/g,`sha512: ${sha512}`)

fs.writeFileSync(ymlPath, ymlCon, 'utf8')

console.log('update sha512 complete!')

