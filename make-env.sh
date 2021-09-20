#!/bin/sh

touch src/env.json
cat <<EOF >src/env.json
{
"client_id" : "$1",
"client_secret" : "$2"
}
EOF