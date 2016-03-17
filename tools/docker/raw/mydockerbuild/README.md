## build

docker build -t docker-whale .

## tag

docker images

docker tag imageID repository:version

$ docker tag 7d9495d03763 maryatdocker/docker-whale:latest

## login

docker login --username=yourhubusername --email=youremail@company.com

## push

docker push repository

## rmi

docker rmi -f imageId

## run

docker run repository
