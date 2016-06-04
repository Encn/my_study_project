# study_rethinkdb

My study project about rethinkdb.

## preparetion

- install rethinkdb

https://www.rethinkdb.com/docs/install/

- how to launch rethinkdb

Find a directory, just type rethinkdb in the command line

- know basic es6/7 grammer

https://babeljs.io/docs/learn-es2015/

- npm i

## using es6/7 for scripts

When at the root of the project, run script with command:

```
./node_modules/.bin/babel-node filename.js
```

## backup database

https://www.rethinkdb.com/docs/backup/

### install rethinkdb python driver first

before you install driver, you need to have pip

`sudo pip install rethinkdb`

### backup and restore database

`rethinkdb dump -f a.tar.gz`

[options] -c -a -f -e --client --temp-dir -h

`rethinkdb restore --force filename`

[options] -c -a -f -i --client --temp-dir -h --hard-durability --force --no-secondary-indexes

## extra

http://stackoverflow.com/questions/38549/difference-between-inner-and-outer-joins
