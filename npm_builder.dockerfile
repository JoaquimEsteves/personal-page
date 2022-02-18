# node_modules_builder
# 	- Installs all of the necessary npm shenanigans

# Usage:
# $ docker build -t npm_builder -f npm_builder.dockerfile "$PROJECT_PATH"
# $ docker run \
#   --volume "$PROJECT_PATH":/js_install \
#   -p <host_port>:<container_port> \
#   -t npm_builder \
#   npm start (or whatever other command you want)
FROM mhart/alpine-node:16 AS node_modules_builder

# These are needed for some of the dependencies
# namely sass, which is a _huge_ pain!
RUN apk update && \
    apk upgrade && \
    apk add git g++ gcc libgcc libstdc++ linux-headers make python2 && \
    apk update && \
    npm install npm@latest -g
# Note above: I use npm@latest. This _might_ not be the cleverest idea.
# I don't particularly care.

WORKDIR /npm_build_files

COPY package.json package-lock.json ./

RUN npm ci

ENV NODE_OPTIONS "--max-old-space-size=8192"

FROM node_modules_builder AS MAIN_STAGE

WORKDIR /js_install

# Note, that a volume will override _all_ of your node_modules!
# Volumes won't care about your .dockerignore file.
COPY --from=node_modules_builder /npm_build_files/node_modules /js_install/node_modules

COPY . /js_install/

CMD ["npm", "run", "dev:server"]
