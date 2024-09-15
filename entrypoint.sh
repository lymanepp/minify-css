#!/bin/bash
set -e

# referenced by postcss.config.js
export SITE_PATH=$INPUT_PATH

node /app/node_modules/postcss-cli/index.js "$INPUT_CSS" --config /app/postcss.config.js --output "$INPUT_CSS"