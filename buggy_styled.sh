#!/usr/bin/env bash

source ./docker_functions.sh
dnpm run build
cd dist
python3 -m http.server
