sudo dockerd dockerdaemon.out &
sudo docker run -i -t -p "8888:80" -v ${PWD}/app:/app alexmorley/codeofconduct.io
