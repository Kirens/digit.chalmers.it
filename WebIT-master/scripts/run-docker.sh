# DIR - absolute path to the dir this file is contained in.
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/../

sudo docker-compose -f dev.docker-compose.yml up --build
