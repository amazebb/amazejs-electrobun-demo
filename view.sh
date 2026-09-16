#!/bin/sh
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"

usage() {
	echo "usage: $0 mvp|index [dev|build]" >&2
	exit 1
}

case "$1" in
	mvp) VIEW=mvp ;;
	index) VIEW=index ;;
	*) usage ;;
esac
shift

CMD=${1:-dev}
case "$CMD" in
	dev|build|start) ;;
	*) usage ;;
esac

export AMAZE_VIEW=$VIEW
cd "$ROOT"
exec hutch run "$CMD"
