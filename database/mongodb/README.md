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

## refers
[https://www.mongodb.com](https://www.mongodb.com)

[http://api.mongodb.org/](http://api.mongodb.org/)

API doc [http://mongodb.github.io/node-mongodb-native/2.0/api/](http://mongodb.github.io/node-mongodb-native/2.0/api/)
