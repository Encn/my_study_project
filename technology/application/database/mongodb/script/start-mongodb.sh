#!/bin/bash

cd `dirname $0`
cd ..
db/mongodb/bin/mongod --dbpath=db/data --port 27017
