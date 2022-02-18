#!/usr/bin/env bash
# Useful functions to help you operate with docker!

# Holy Bash who art in heaven.
# Cursed be thy pitfalls
# set -euxo pipefail
set -x
# Commented by default as we don't want to set the error flag stuff if we're
# sourcing the file

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"

# Default to 80 so we can just open up localhost and see the page
PROJECT_PORT="${DEFAULT_PORT:-3000}"
INTERNAL_DOCKER_PORT="${DOCKER_PORT:-3000}"

RED='\033[0;31m'
NC='\033[0m' # No Color

# Run arbitrary npm commands through the container
# If no args passed runs the container's default instruction (`CMD [...]`)
function dnpm() {
	if [ $# -eq 0 ]; then
		_docker_run_what
	else
		_docker_run_what npm "$@"
	fi
}

# Get the Container Tag
# (uses branches so we can quickly switch without rebuilding)
function get_docker_tag() {
	# Note, that docker doesn't accept any special characters except _
	# https://docs.docker.com/engine/reference/commandline/tag/#extended-description:%7E:text=A%20tag%20name%20must%20be,a%20maximum%20of%20128%20characters.
	# so we just use sed
	echo "npm_builder:$(git rev-parse --abbrev-ref HEAD | sed 's/[^a-zA-Z0-9]/_/g')"
}

# Serve a specific docker container
# Ideal to serve multiple branches in your local network
function docker_serve() {
	local tag
	if [ -n "$1" ]; then
		tag=$(get_docker_tag)
	else
		tag="$1"
	fi
	docker run \
		--rm \
		-p "${PROJECT_PORT}":80 \
		-t "$tag"
}

# Dev server for everyday use
function docker_dev_server() {
	docker run \
		--rm \
		--volume "$PROJECT_DIR"/src:/js_install/src \
		-p "${PROJECT_PORT}":"${INTERNAL_DOCKER_PORT}" \
		-t "$(get_docker_tag)" npm run dev
}

# inspect currently running containers
function docker_inspect() {
	docker exec -it "$(_npm_builder_id)" sh
}

function build_npm_container() {
	docker build -t "$(get_docker_tag)" \
		-t npm_builder:latest \
		-f "$PROJECT_DIR"/npm_builder.dockerfile "$PROJECT_DIR"
}

function _docker_run_what() {
	docker run \
		--rm \
		--volume "$PROJECT_DIR":/js_install \
		-t "$(get_docker_tag)" "$@"
}

# quickly get npm_builder's id
function _npm_builder_id() {
	local running_container
	running_container=$(docker ps | grep 'npm_builder' | awk '{ print $1 }')
	if [[ -z $running_container ]]; then
		echo -e "${RED}\nERROR\n${NC}"
		echo 'Could not find any npm_builder containers!'
		exit 1
	fi
	echo "$running_container"
}

# This file is a modulino
# Meaning: That it does different things when you import it, as opposed to
# when you run it.
# Usage:
# $ source docker_functions.sh     # functions are now known to your shell!
# $ ./docker_functions.sh          # Executes build + run
if [[ "${BASH_SOURCE[0]}" = "${0}" ]]; then
	build_npm_container
	docker_dev_server
fi
