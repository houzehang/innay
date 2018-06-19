#! /bin/bash
if [ -d ./output ];then
	echo "removing output dir"
	rm -rf ./output
fi
TOTAL_STEP=4
echo 'module.exports = {DEBUG : false}' > env.js
echo "step(1/${TOTAL_STEP}) compiling files"
npm run build; 
mkdir output
echo "step(2/${TOTAL_STEP}) copy files"
cp -r dist output
cp -r installers output
cp const.js output
cp env.js output
cp main.js output
cp package.json output

rm -rf output/dist/libs/AgoraSDK/native-win

echo "step(3/${TOTAL_STEP}) package bundles"

if [ "$1" = "-mac" -o "$1" = "-all" ];then

	echo "packaging for mac platform"
	electron-packager ./output muwen --platform=darwin --arch=x64 --asar --electron-version=2.0.2 --overwrite --icon=./icns/mac-icon.icns 
	electron-osx-sign "./muwen-darwin-x64/muwen.app" --platform=darwin --type=distribution

fi
if [ "$1" = "-win" -o "$1" = "-all" ];then

	echo "packaging for windows platform"
	electron-packager ./output muwen --platform=win32 --arch=ia32 --electron-version=2.0.2 --overwrite --icon=./icns/win-icon.ico;

fi

echo "step(4/${TOTAL_STEP}) cleaning files"
echo 'module.exports = {DEBUG : true}' > env.js;
rm -rf ./output