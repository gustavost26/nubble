#!/bin/bash

FILE="../ios/Pods/glog/src/base/mutex.h"

# Verifica se o arquivo existe
if [ ! -f "$FILE" ]; then
  echo "Arquivo $FILE não encontrado."
  exit 1
fi

# Substitui MutexType por pthread_mutex_t
if grep -q "MutexType mutex_" "$FILE"; then
  echo "Corrigindo tipo do mutex..."
  sed -i '' 's/MutexType/pthread_mutex_t/g' "$FILE"
else
  echo "Tipo do mutex já corrigido."
fi

# Adiciona #include <pthread.h> se ainda não estiver presente
if ! grep -q "#include <pthread.h>" "$FILE"; then
  echo "Adicionando include de pthread.h..."
  sed -i '' '1s;^;#include <pthread.h>\n;' "$FILE"
else
  echo "#include <pthread.h> já está presente."
fi
