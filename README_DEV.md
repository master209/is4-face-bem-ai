# Запуск проекта в режиме разработки

## 🚀 Быстрый запуск

Используйте стандартную команду:

```bash
npm start
```

Это автоматически запустит dev сервер на порту 3000 с оптимизированными настройками.

## 🔧 Ручные варианты запуска

### Вариант 1: Оптимизированный запуск (рекомендуется)
```bash
npm start
# или
./dev-start.sh
```

### Вариант 2: Простой запуск (если проблемы с watchers)
```bash
npm run start:simple
```

### Вариант 3: Ручной запуск с переменными
```bash
PORT=3000 CHOKIDAR_USEPOLLING=true npm run start:dev
```

## 🐛 Решение проблем с watchers

Если возникают ошибки `ENOSPC: System limit for number of file watchers reached`:

1. **Используйте оптимизированный запуск:**
   ```bash
   npm start
   ```

2. **Или увеличьте системный лимит (если есть sudo):**
   ```bash
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

3. **Или используйте простой режим:**
   ```bash
   npm run start:simple
   ```

## 📋 Переменные окружения

Проект использует следующие переменные для оптимизации:

- `PORT=3000` - фиксированный порт
- `CHOKIDAR_USEPOLLING=true` - обход проблем с inotify
- `WATCHPACK_POLLING=true` - polling вместо watchers
- `FAST_REFRESH=false` - отключение fast refresh
- `GENERATE_SOURCEMAP=false` - отключение source maps

## 🔍 Проверка работы

После запуска сервер должен быть доступен по адресу:
- **http://localhost:3000**

Если порт занят, сервер автоматически выберет другой порт.