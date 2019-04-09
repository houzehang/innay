#! /bin/bash
if [ ! $1 ];then
	echo "usage: bash deploy.sh 1.0.4"
	exit 1;
fi
echo "upload to server."
SERVER=root@101.200.53.74
VERSION=$1
DIR=/var/www/downloadfile/software/native

timestamp=$(date +%s)
ssh -p 65522 ${SERVER} "cp ${DIR}/latest.yml ${DIR}/latest.${timestamp}.yml; cp ${DIR}/latest-mac.yml ${DIR}/latest-mac.${timestamp}.yml; cp ${DIR}/latest-mac.json ${DIR}/latest-mac.${timestamp}.json;"

scp -P 65522 build/native/*${VERSION}.exe  ${SERVER}:${DIR}
scp -P 65522 build/native/*${VERSION}*.zip  ${SERVER}:${DIR}
scp -P 65522 build/native/*${VERSION}*.dmg  ${SERVER}:${DIR}
scp -P 65522 build/native/*.yml  ${SERVER}:${DIR}
scp -P 65522 build/native/*.json ${SERVER}:${DIR}

# echo "upload to old server."
SERVER=root@59.110.14.106
DIR=/usr/share/nginx/html/muwen/native

ssh ${SERVER} "cp ${DIR}/latest.yml ${DIR}/latest.${timestamp}.yml; cp ${DIR}/latest-mac.yml ${DIR}/latest-mac.${timestamp}.yml; cp ${DIR}/latest-mac.json ${DIR}/latest-mac.${timestamp}.json;"

scp build/native/*${VERSION}.exe  ${SERVER}:${DIR}
scp build/native/*${VERSION}*.zip  ${SERVER}:${DIR}
scp build/native/*${VERSION}*.dmg  ${SERVER}:${DIR}
scp build/native/*.yml  ${SERVER}:${DIR}
scp build/native/*.json ${SERVER}:${DIR}

echo "deploy done."