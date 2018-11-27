#! /bin/bash
if [ ! $1 ];then
	echo "usage: bash deploy.sh 1.0.4"
	exit 1;
fi
echo "upload to server."
SERVER=root@39.106.221.44
VERSION=$1

DIR=/var/www/downloadfile/software/teacher

scp build/teacher/*${VERSION}.exe  ${SERVER}:${DIR}
scp build/teacher/*${VERSION}*.zip  ${SERVER}:${DIR}
scp build/teacher/*${VERSION}*.dmg  ${SERVER}:${DIR}
scp build/teacher/*.yml  ${SERVER}:${DIR}
scp build/teacher/*.json ${SERVER}:${DIR}

# echo "upload to old server."
SERVER=root@59.110.14.106

DIR=/usr/share/nginx/html/muwen/teacher

scp build/teacher/*${VERSION}.exe  ${SERVER}:${DIR}
scp build/teacher/*${VERSION}*.zip  ${SERVER}:${DIR}
scp build/teacher/*${VERSION}*.dmg  ${SERVER}:${DIR}
scp build/teacher/*.yml  ${SERVER}:${DIR}
scp build/teacher/*.json ${SERVER}:${DIR}

echo "deploy done."