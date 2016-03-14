#!/bin/bash

CUR_DIR=$(cd `dirname $0`;pwd)

cd $CUR_DIR
cd ..
[ ! -d db ] && mkdir db
cd db

if [ ! -d mongodb ]; then
    curl -O https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.2.1.tgz
    tar -zxvf mongodb-osx-x86_64-3.2.1.tgz
    mv mongodb-osx-x86_64-3.2.1 mongodb
    rm mongodb-osx-x86_64-3.2.1.tgz
    mkdir data
fi
