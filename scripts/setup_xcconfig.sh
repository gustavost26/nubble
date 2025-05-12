#!/bin/bash

CONFIG_DIR="ios/Configs"
DEBUG_FILE="$CONFIG_DIR/Debug.xcconfig"
RELEASE_FILE="$CONFIG_DIR/Release.xcconfig"

# Conteúdo padrão dos arquivos .xcconfig
XCCONFIG_CONTENT="SDKROOT = iphoneos
SUPPORTED_PLATFORMS = iphonesimulator iphoneos
SUPPORTS_MACCATALYST = NO
EXCLUDED_ARCHS[sdk=iphonesimulator*] = arm64"

# Cria a pasta Configs se não existir
if [ ! -d "$CONFIG_DIR" ]; then
  echo "📁 Criando diretório $CONFIG_DIR..."
  mkdir -p "$CONFIG_DIR"
fi

# Cria Debug.xcconfig se não existir
if [ ! -f "$DEBUG_FILE" ]; then
  echo "📝 Criando $DEBUG_FILE..."
  echo "$XCCONFIG_CONTENT" > "$DEBUG_FILE"
else
  echo "⚠️ $DEBUG_FILE já existe. Ignorando."
fi

# Cria Release.xcconfig se não existir
if [ ! -f "$RELEASE_FILE" ]; then
  echo "📝 Criando $RELEASE_FILE..."
  echo "$XCCONFIG_CONTENT" > "$RELEASE_FILE"
else
  echo "⚠️ $RELEASE_FILE já existe. Ignorando."
fi

echo "✅ Arquivos .xcconfig prontos em $CONFIG_DIR"
