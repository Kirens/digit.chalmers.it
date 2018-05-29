# DIR - absolute path to the dir this file is contained in.
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/../

source scripts/update-symlinks.sh
sudo node server/main.js
