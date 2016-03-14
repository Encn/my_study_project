https://www.rethinkdb.com/docs/backup/

## install rethinkdb python driver first

before you install driver, you need to have pip

`sudo pip install rethinkdb`

## backup and restore database

`rethinkdb dump -f a.tar.gz`

[options] -c -a -f -e --client --temp-dir -h

`rethinkdb restore --force filename`

[options] -c -a -f -i --client --temp-dir -h --hard-durability --force --no-secondary-indexes
