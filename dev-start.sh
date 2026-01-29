#!/bin/bash

# Скрипт для запуска dev сервера с правильными настройками
# Обход проблем с inotify watchers на Linux системах

echo "🚀 Запуск dev сервера с оптимизированными настройками..."
echo "Используем порт: 3000"

# Установка переменных окружения для обхода проблем с watchers
export PORT=3000
export CHOKIDAR_USEPOLLING=true
export WATCHPACK_POLLING=true
export WATCHPACK_WATCHERPOOL=watchpack
export WEBPACK_WATCH=false
export FAST_REFRESH=false
export GENERATE_SOURCEMAP=false
export CI=false
export NODE_OPTIONS="--max-old-space-size=4096 --trace-warnings"
export UV_THREADPOOL_SIZE=64

# Запуск с правильными настройками
echo "Запуск react-scripts..."
exec npx react-scripts start