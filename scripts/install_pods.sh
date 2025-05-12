#!/bin/bash

echo "🧹 Limpando Pods, Podfile.lock e build..."
cd ios || exit 1
rm -rf Pods Podfile.lock build

echo "📦 Instalando pods com bundle e atualizando repositórios..."
bundle exec pod install --repo-update

echo "🧼 (Opcional) Limpando cache do Xcode..."
rm -rf ~/Library/Developer/Xcode/DerivedData

echo "✅ Pods instalados com sucesso!"
