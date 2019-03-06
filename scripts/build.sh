#!/usr/bin/env bash

rm -rf build
./scripts/locize.sh
webpack --config ./webpack/prod.config.js
mkdir build
cp ./public/* ./build/
