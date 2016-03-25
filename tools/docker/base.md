docker images

docker run [id|name]

docker run -it [id|name] command 

docker run -it [id|name] zsh 

rm **/.gitignore

docker pull [options] NAME[:TAG|@DIGEST]

docker build -t name .

## docker run bash

docker run -i -t --rm=true centos /bin/bash

## commit changes

docker ps -l

docker commit containerId repository/tag

## docker cp

docker cp .ssh/ 69eb007d79a6:/root
