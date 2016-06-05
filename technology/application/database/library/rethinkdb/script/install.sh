#!/bin/bash

cd `dirname $0`

[! -d db ] && mkdir db

cd db

if [ ! -f rethinkdb-2.3.1.tgz ]; then
    wget https://download.rethinkdb.com/dist/rethinkdb-2.3.1.tgz
fi

[ -d rethinkdb-2.3.1 ] && rm -r rethinkdb-2.3.1

tar xf rethinkdb-2.3.1.tgz

cd rethinkdb-2.3.1

./configure --allow-fetch
make
