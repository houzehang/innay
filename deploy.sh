#! /bin/bash
echo "upload to server."
SERVER=root@59.110.14.106
DIR=/usr/share/nginx/html/muwen

scp build/*.json ${SERVER}:${DIR}
scp build/*.yml  ${SERVER}:${DIR}
scp build/*.exe  ${SERVER}:${DIR}
scp build/*.zip  ${SERVER}:${DIR}

echo "deploy done."