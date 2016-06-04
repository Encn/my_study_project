# study mongodb

## install

- mac

```
./script/install-mongodb-mac.sh
```

- linux

```
./script/install-mongodb.sh
```

## node

### install

```
npm i
```

### run node script

```
./node_modules/.bin/babel-node $scriptpath
```

## start db

```
./script/start-mongodb.sh
```

or

```
./db/mongodb/bin/mongod --dbpath=db/data --port 27017
```

There are some commands in `./db/mongodb/bin/`.

## mongo command

- connect to db

`mongo -u <user> -p <pass> --host <host> --port 28015`

- execute js file

`mongo script-file.js -u <user> -p`

- eval js code

`mongo --eval 'db.collection.find().forEach(printjson)'`

## basics

- basic steps

1. require client driver

2. connect to db

3. do query, delete, update etc...

4. close connection

- db url

`mongodb://hostname:port/dbName`

## refers

[https://www.mongodb.com](https://www.mongodb.com)

[http://api.mongodb.org/](http://api.mongodb.org/)

API doc [http://mongodb.github.io/node-mongodb-native/2.0/api/](http://mongodb.github.io/node-mongodb-native/2.0/api/)

mongo shell api [https://docs.mongodb.org/manual/reference/program/mongo/](https://docs.mongodb.org/manual/reference/program/mongo/)
