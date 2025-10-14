# Инструкция по деплою на GitHub Pages

## Настройка GitHub Pages

### 1. Включение GitHub Pages в настройках репозитория

1. Перейдите в ваш репозиторий на GitHub
2. Нажмите на вкладку **Settings** (Настройки)
3. Прокрутите вниз до раздела **Pages** в левом меню
4. В разделе **Source** выберите **GitHub Actions**
5. Сохраните изменения

### 2. Настройка ветки

Убедитесь, что ваш основной код находится в ветке `main` или `master`. GitHub Actions workflow настроен для работы с обеими ветками.

### 3. Автоматический деплой

После настройки GitHub Pages, каждый раз когда вы будете пушить изменения в основную ветку, GitHub Actions автоматически:

1. Соберет проект (`npm run build`)
2. Задеплоит его на GitHub Pages

### 4. Проверка деплоя

После успешного деплоя ваш сайт будет доступен по адресу:
```
https://[ваш-username].github.io/pocket-planner-shine-main/
```

### 5. Ручной деплой (альтернативный способ)

Если вы хотите задеплоить вручную:

1. Установите зависимости:
   ```bash
   npm install
   ```

2. Запустите деплой:
   ```bash
   npm run deploy
   ```

## Возможные проблемы и решения

### Проблема: Сайт не открывается
**Решение:** 
- Убедитесь, что в настройках репозитория включен GitHub Pages
- Проверьте, что выбрана ветка `gh-pages` как источник
- Подождите несколько минут после деплоя

### Проблема: Ресурсы не загружаются (CSS, JS файлы)
**Решение:**
- Проверьте, что в `vite.config.ts` правильно настроен `base` путь
- Убедитесь, что имя репозитория в конфигурации совпадает с реальным

### Проблема: GitHub Actions не запускается
**Решение:**
- Проверьте, что файл `.github/workflows/deploy.yml` существует
- Убедитесь, что вы пушите в основную ветку (`main` или `master`)
- Проверьте логи в разделе Actions вашего репозитория

## Структура файлов для деплоя

```
.github/
  workflows/
    deploy.yml          # GitHub Actions workflow
vite.config.ts          # Конфигурация Vite с base path
package.json            # Скрипты и зависимости
```

## Полезные ссылки

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
