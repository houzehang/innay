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


echo "step(3/${TOTAL_STEP}) package bundles"

if [ "$1" = "-mac" -o "$1" = "-all" ];then
	cp -r libs/AgoraSDK/native-mac output/dist/libs/AgoraSDK
	rm -rf output/dist/libs/AgoraSDK/native-win
	echo "packaging for mac platform"
	./node_modules/.bin/build --mac -p always
fi
if [ "$1" = "-win" -o "$1" = "-all" ];then
	cp -r libs/AgoraSDK/native-win output/dist/libs/AgoraSDK
	rm -rf output/dist/libs/AgoraSDK/native-mac
	echo "packaging for windows platform"
	./node_modules/.bin/build --win -p always
fi

echo "step(4/${TOTAL_STEP}) cleaning files"
echo 'module.exports = {DEBUG : true}' > env.js;
rm -rf ./output