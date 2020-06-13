#! /bin/bash
if [ -d ./output ];then
	echo "removing output dir"
	rm -rf ./output
fi
TOTAL_STEP=4
CONFIG_FILE=./electron-builder-native.yml

echo "step(1/${TOTAL_STEP}) compiling files"
npm run build; 
mkdir output
echo "step(2/${TOTAL_STEP}) copy files"
mv dist/main.js output
cp package.json output
cp -r dist output

echo "step(3/${TOTAL_STEP}) package bundles"

if [ "$1" = "-mac" -o "$1" = "-all" ];then
	echo "packaging for mac platform"
	./node_modules/.bin/electron-builder --config $CONFIG_FILE --mac -p never
fi
if [ "$1" = "-win" -o "$1" = "-all" ];then
	echo "packaging for windows platform"
	./node_modules/.bin/electron-builder --config $CONFIG_FILE --win -p never
fi

echo "step(4/${TOTAL_STEP}) cleaning files"
rm -rf ./output