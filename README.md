# grammY Telegram Bot Starter

This is a starter project for creating Telegram bots using the grammY framework. The project is named "grammY-js-bot-starter" and provides a solid foundation for building feature-rich Telegram bots with JavaScript and ECMAScript Modules.

## Features

- Built with grammY framework
- Uses ECMAScript Modules for better code organization
- Middleware for response time measurement
- Session management
- Robust error handling
- Interactive counter with inline keyboard as example of session management
- Efficient long polling with @grammyjs/runner
- Automatic flood control with @grammyjs/auto-retry
- Enhanced object interactions with @grammyjs/hydrate

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory and add your Telegram Bot Token:
   ```
   BOT_TOKEN=your_bot_token_here
   ```
4. Run the bot:
   - For production:
     ```
     npm start
     ```
   - For development (with nodemon):
     ```
     npm run dev
     ```

## Project Structure

- `src/bot.js`: Main bot file with command handlers and error handling
- `src/middleware/logger.js`: Custom middleware for response time measurement
- `.env`: Environment variables (don't commit this file)

## Available Commands

- `/start`: Welcome message
- `/help`: List available commands
- `/count`: Display an interactive counter with inline keyboard
- `/error`: Test error handling (throws a test error)

## Interactive Counter

The `/count` command displays an interactive counter with the following inline keyboard buttons:

- `+`: Increment the counter
- `-`: Decrement the counter
- `🔄 Reset`: Reset the counter to 0

## Running the Bot

This starter provides two ways to run your bot:

1. Production mode:

   ```
   npm start
   ```

   This runs the bot using Node.js directly.

2. Development mode:
   ```
   npm run dev
   ```
   This uses nodemon to run the bot, which automatically restarts the bot when you make changes to the code.

In both modes:

- The bot uses long polling to continuously poll the Telegram server for updates.
- Errors are logged, and the bot stops on critical errors (GrammyError or HttpError) to prevent infinite error loops.

## Plugins

This starter project uses the following grammY plugins:

1. [@grammyjs/runner](https://grammy.dev/plugins/runner): Provides an efficient way to run your bot, handling concurrent bot updates effectively.

2. [@grammyjs/auto-retry](https://grammy.dev/plugins/auto-retry): Automatically retries failed requests to the Telegram API, helping to handle network issues and rate limits.

3. [@grammyjs/hydrate](https://grammy.dev/plugins/hydrate): Adds useful methods to the context object and API results, making it easier to interact with Telegram objects.

4. [Session](https://grammy.dev/plugins/session): Allows you to store data between multiple updates from the same user, enabling stateful interactions.

## Error Handling

This starter includes robust error handling:

- Errors are logged
- The bot stops on critical errors (GrammyError or HttpError) to prevent infinite error loops

To test error handling, use the `/error` command when interacting with the bot.

## ECMAScript Modules

This project uses ECMAScript Modules (ES Modules) instead of CommonJS. This means:

- We use `import` and `export` statements instead of `require()` and `module.exports`.
- The `package.json` file includes `"type": "module"` to enable ES Module support.
- File extensions (.js) are required when importing local files.

## Deployment

For information on deploying your bot to various hosting platforms, please refer to the [grammY Hosting Comparison Guide](https://grammy.dev/hosting/comparison). This guide provides detailed instructions and comparisons for deploying your bot on different hosting services.

## Customization

To add new features or commands to your bot:

1. Add new command handlers in `src/bot.js`
2. Create new middleware functions in `src/middleware/` if needed
3. Update the README with any new commands or features

Remember to use ES Module syntax when importing and exporting.

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements or find any bugs.

## License

This project is open-source and available under the MIT License.

## Русская версия (Russian Version)

Это стартовый проект для создания Telegram-ботов с использованием фреймворка grammY. Проект называется "grammY-js-bot-starter" и предоставляет прочную основу для создания функциональных Telegram-ботов на JavaScript с использованием ECMAScript модулей.

### Особенности

- Построен на фреймворке grammY
- Использует ECMAScript модули для лучшей организации кода
- Промежуточное ПО для измерения времени отклика
- Управление сессиями
- Надежная обработка ошибок
- Интерактивный счетчик с встроенной клавиатурой в качестве примера работы с сессиями
- Эффективный long polling с использованием @grammyjs/runner
- Автоматический контроль флуда с помощью @grammyjs/auto-retry
- Улучшенное взаимодействие с объектами с помощью @grammyjs/hydrate

### Начало работы

1. Клонируйте этот репозиторий
2. Установите зависимости:
   ```
   npm install
   ```
3. Создайте файл `.env` в корневой директории и добавьте ваш токен Telegram-бота:
   ```
   BOT_TOKEN=ваш_токен_бота_здесь
   ```
4. Запустите бота:
   - Для продакшн:
     ```
     npm start
     ```
   - Для разработки (с nodemon):
     ```
     npm run dev
     ```

### Доступные команды

- `/start`: Приветственное сообщение
- `/help`: Список доступных команд
- `/count`: Отображение интерактивного счетчика с встроенной клавиатурой
- `/error`: Тестирование обработки ошибок (вызывает тестовую ошибку)

### Запуск бота

Этот стартер предоставляет два способа запуска вашего бота:

1. Режим продакшн:

   ```
   npm start
   ```

   Это запускает бота напрямую с использованием Node.js.

2. Режим разработки:
   ```
   npm run dev
   ```
   Это использует nodemon для запуска бота, который автоматически перезапускает бота при внесении изменений в код.

В обоих режимах:

- Бот использует long polling для постоянного опроса сервера Telegram на наличие обновлений.
- Ошибки логируются, и бот останавливается при критических ошибках (GrammyError или HttpError) для предотвращения бесконечных циклов ошибок.

### ECMAScript модули

Этот проект использует ECMAScript модули (ES модули) вместо CommonJS. Это означает:

- Мы используем операторы `import` и `export` вместо `require()` и `module.exports`.
- Файл `package.json` включает `"type": "module"` для включения поддержки ES модулей.
- При импорте локальных файлов требуется указывать расширения файлов (.js).

Для получения дополнительной информации о структуре проекта, плагинах, обработке ошибок, развертывании и настройке, пожалуйста, обратитесь к английской версии README выше.
