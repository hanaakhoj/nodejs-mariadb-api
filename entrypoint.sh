#!/bin/bash

echo "installing dependencies"
npm i
echo "--> dependencies installed"

echo "--> synchronising the models with the db"
node ./initdb/sync.js
echo "--> synchronised \n\n\n"

if [ $NODE_ENV = "production" ]; then
    npm run start
else
    npm run dev
fi
