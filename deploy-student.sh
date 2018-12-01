#! /bin/bash
if [ ! $1 ];then
	echo "usage: bash deploy.sh 1.0.4"
	exit 1;
fi
echo "upload to server."
SERVER=root@39.106.221.44
VERSION=$1
DIR=/var/www/downloadfile/software

scp build/student/*${VERSION}.exe  ${SERVER}:${DIR}
scp build/student/*${VERSION}*.zip  ${SERVER}:${DIR}
scp build/student/*${VERSION}*.dmg  ${SERVER}:${DIR}
scp build/student/*.yml  ${SERVER}:${DIR}
scp build/student/*.json ${SERVER}:${DIR}

# echo "upload to old server."
SERVER=root@59.110.14.106
DIR=/usr/share/nginx/html/muwen

scp build/student/*${VERSION}.exe  ${SERVER}:${DIR}
scp build/student/*${VERSION}*.zip  ${SERVER}:${DIR}
scp build/student/*${VERSION}*.dmg  ${SERVER}:${DIR}
scp build/student/*.yml  ${SERVER}:${DIR}
scp build/student/*.json ${SERVER}:${DIR}

echo "deploy done."