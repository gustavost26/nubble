#!/bin/bash

# Caminho para o arquivo logging.cc (ajuste se necessário)
FILE="../ios/Pods/glog/src/logging.cc"

# Verificação inicial
if [ ! -f "$FILE" ]; then
  echo "❌ Arquivo não encontrado: $FILE"
  exit 1
fi

echo "🔍 Verificando presença da função pread no arquivo $FILE..."

# Verifica se a função já está comentada
if grep -q "^// static ssize_t pread" "$FILE"; then
  echo "✅ Função pread já está comentada. Nada a fazer."
  exit 0
fi

# Comenta o bloco da função pread
sed -i '' '/^static ssize_t pread(int fd, void\* buf, size_t count, off_t offset) {/,/^}/ s/^/\/\/ /' "$FILE"

echo "✅ Função pread comentada com sucesso!"
