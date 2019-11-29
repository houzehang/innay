#! /bin/bash

if [ $1 ];then
	TYPE=${1}/
fi
timestamp="$(date +"%s")"
mkdir -p rollback/${TYPE}
cd rollback/${TYPE}

wget -O latest-mac.json http://file.mw019.com/software/${TYPE}latest-mac.json?noCache=${timestamp}

if [ $? -ne 0 ];then
	echo "backup failed!"
	exit 1;
fi

wget -O latest-mac.yml http://file.mw019.com/software/${TYPE}latest-mac.yml?noCache=${timestamp}

if [ $? -ne 0 ];then
	echo "backup failed!"
	exit 1;
fi

wget -O latest.yml http://file.mw019.com/software/${TYPE}latest.yml?noCache=${timestamp}

if [ $? -ne 0 ];then
	echo "backup failed!"
	exit 1;
fi
