WebIT is a base project for building web services and is planned to be used at the IT-departement at Chalmers University of Technology (CTH). WebIT is not an independent running project and needs and extending project to work.

# Getting Started
**Install**
- [NodeJS + npm](https://nodejs.org/en/download/)
- [Gem](https://rubygems.org/pages/download) (optional, used to compile css)
- [Docker](https://www.docker.com/community-edition#/download) (optional, used for production)

**Setup an existing WebIT-based project**

1. Git clone a WebIT-based project.
2. Go to the root directory of the cloned project.
3. Run **git submodule init && git submodule update --remote** to setup and update the WebIT submodule.
4. Run **cd WebIT** to enter the root directory of the WebIT submodule.
5. Run **source scripts/install.sh** to install project dependencies.
6. Run **source scripts/compile-js.sh** to compile JS.
7. Run **source scripts/compile-css.sh** to compile CSS.
8. Run **source scripts/start-server.sh** to start server.

**Create a new WebIT project**

1. Setup a git project and go to its root directory.
2. Run **git submodule add https://www.github.com/NeonSky/WebIT** to add WebIT as a submodule to your project.
3. Go through steps 3-5 in **Setup Webit**.
4. Create a directory named **app** in the root directory of the whole project.
5. Add a App.js React component to the new app directory.
6. Go to the root directory of the WebIT submodule and go through steps 6-8 in **Setup Webit**.
