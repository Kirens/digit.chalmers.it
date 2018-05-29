# DIR - absolute path to the dir this file is contained in.
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/../

# Install Software
sudo npm install webpack -g
sudo gem install sass --no-user-install

# Install and update node_modules
npm install
npm update

# Run setup scripts
source scripts/update-symlinks.sh
