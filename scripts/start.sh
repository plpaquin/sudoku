#!/usr/bin/env bash

if [ ! -d ./public/locales ]; then
    ./scripts/locize.sh
fi
webpack-dev-server --config ./webpack/dev.config.js
