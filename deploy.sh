#! /bin/bash
if [ ! $1 ];then
	echo "usage: bash deploy.sh 1.0.4"
	exit 1;
fi
echo "upload to server."
SERVER=root@59.110.14.106
DIR=/usr/share/nginx/html/muwen
VERSION=$1

scp build/*.json ${SERVER}:${DIR}
scp build/*.yml  ${SERVER}:${DIR}
scp build/*${VERSION}.exe  ${SERVER}:${DIR}
scp build/*${VERSION}*.zip  ${SERVER}:${DIR}

echo "deploy done."