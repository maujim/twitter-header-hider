#!/bin/sh


if command -v pnpm >/dev/null 2>&1; then
  echo "Found pnpm, running prettier..."
  pnpm dlx prettier --write .
elif command -v npx >/dev/null 2>&1; then
  echo "Found npm, running prettier..."
  npx prettier --write .
else
  echo "Neither pnpm nor npm found. Please install one to format files."
  exit 1
fi
