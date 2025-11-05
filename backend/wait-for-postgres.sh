#!/bin/sh
set -e

: "${DATABASE_HOST:?DATABASE_HOST is required}"
: "${DATABASE_PORT:?DATABASE_PORT is required}"
: "${DATABASE_USER:?DATABASE_USER is required}"

echo "Waiting for Postgres at ${DATABASE_HOST}:${DATABASE_PORT}..."
until pg_isready -h "${DATABASE_HOST}" -p "${DATABASE_PORT}" -U "${DATABASE_USER}" > /dev/null 2>&1; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 2
done

>&2 echo "Postgres is up - starting backend"

exec "$@"  # run the CMD/ENTRYPOINT command
