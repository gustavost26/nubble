#!/bin/bash

FILE="ios/Pods/glog/src/logging.cc"
START_LINE="static ssize_t pread(int fd, void* buf, size_t count, off_t offset) {"
END_LINE="return len;"

echo "🔍 Verificando $FILE"
if grep -q "$START_LINE" "$FILE"; then
  echo "✅ Função pread encontrada. Comentando..."
  sed -i '' '/static ssize_t pread/,/return len;/ s/^/\/\/ /' "$FILE"
else
  echo "⚠️ Função pread já está comentada ou não encontrada."
fi

