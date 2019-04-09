#! /bin/bash
if [ ! $1 ];then
	echo "usage: bash revert-deploy.sh 1554792240"
	exit 1;
fi
echo "revert backup $1 from server."
SERVER=root@101.200.53.74
DIR=/var/www/downloadfile/software/teacher
timestamp=$1

ssh -p 65522 ${SERVER} "cp ${DIR}/latest.${timestamp}.yml ${DIR}/latest.yml; cp ${DIR}/latest-mac.${timestamp}.yml ${DIR}/latest-mac.yml; cp ${DIR}/latest-mac.${timestamp}.json ${DIR}/latest-mac.json;"

# echo "upload to old server."
SERVER=root@59.110.14.106
DIR=/usr/share/nginx/html/muwen/teacher

ssh ${SERVER} "cp ${DIR}/latest.${timestamp}.yml ${DIR}/latest.yml; cp ${DIR}/latest-mac.${timestamp}.yml ${DIR}/latest-mac.yml; cp ${DIR}/latest-mac.${timestamp}.json ${DIR}/latest-mac.json;"

echo "revert deploy done. Timestamp ${timestamp}"