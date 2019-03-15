#!/usr/bin/env bash
echo "Setting Keycloak endpoint to $KEYCLOAK_ENDPOINT" & sed -i "s#PLACEHOLDER_KEYCLOAK_ENDPOINT#$KEYCLOAK_ENDPOINT#g" /config.json
exec "$@"
