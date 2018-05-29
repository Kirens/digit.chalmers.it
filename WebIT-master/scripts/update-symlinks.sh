# DIR - absolute path to the dir this file is contained in.
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Create system links
ln -sf $DIR/../node_modules $DIR/../../node_modules
ln -sf $DIR/../.babelrc $DIR/../../.babelrc
