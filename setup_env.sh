#!/bin/bash
ENVIRONMENT=$1
DIR=$(dirname "$0")

echo "stub_app - SETUP ENVIRONMENT"

echo "Copy files to locations"
cp "${DIR}/environment/${ENVIRONMENT}/Config.tsx" src/Config/Config.tsx
