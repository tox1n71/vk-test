# Тестовое задание на стажировку - Фронтенд VK

Это тестовое задание для стажировки в VK, разработанное с использованием [API Рика и Морти](https://rickandmortyapi.com/api).

## Обзор

Идея была сделать карточки персонажей, как представленные на [сайте API Рика и Морти](https://rickandmortyapi.com), но с добавленной функцией бесконечного скролла, как указано в требованиях.

## Используемые технологии

- **Язык:** TypeScript
- **Библиотека компонентов:** Material UI
- **Управление состоянием:** MobX
- **Сборщик:** Vite

## Функции

- **Бесконечный скролл:** Бесшовная загрузка дополнительных карточек персонажей по мере прокрутки вниз, с индикатором подгрузки, также из Materual UI.
- **Адаптивный дизайн:** Используются Material UI и CSS модули для современного, чистого интерфейса.
- **Локальное удаление:** Возможность удалять карточки персонажей локально, через измерение в локальном сторе.
- **Локальное изменение:** Возможность изменять данные карточки локально

## Установка
Клонирование репозитория
```bash
git clone https://github.com/tox1n71/vk-test.git
cd vk-test
```
Установка зависимостей проекта
```bash
npm install
```
Запуск проекта
```bash
npm run dev
```
