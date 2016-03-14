#!/bin/bash

CUR_DIR=$(cd `dirname $0`;pwd)

cd $CUR_DIR
cd ..
[ ! -d db ] && mkdir db
cd db

if [ ! -d mongodb ]; then
    curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.2.1.tgz
    tar -zxvf mongodb-linux-x86_64-3.2.1.tgz
    mv mongodb-linux-x86_64-3.2.1 mongodb
    rm mongodb-linux-x86_64-3.2.1.tgz
    mkdir data
fi
