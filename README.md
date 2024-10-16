# grammY Telegram Bot Starter

This is a starter project for creating Telegram bots using the grammY framework.

## Features

- Built with grammY framework
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
   ```
   npm start
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

## Long Polling Mode

This starter uses long polling mode for running your bot. This mode is suitable for both development and production environments.

To run the bot:

1. Ensure your `.env` file contains your bot token.
2. Run the bot using `npm run dev`.

In this mode:

- The bot continuously polls the Telegram server for updates.
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

## Deployment

For information on deploying your bot to various hosting platforms, please refer to the [grammY Hosting Comparison Guide](https://grammy.dev/hosting/comparison). This guide provides detailed instructions and comparisons for deploying your bot on different hosting services.

## Customization

To add new features or commands to your bot:

1. Add new command handlers in `src/bot.js`
2. Create new middleware functions in `src/middleware/` if needed
3. Update the README with any new commands or features

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements or find any bugs.

## License

This project is open-source and available under the MIT License.

## Русская версия (Russian Version)

Это стартовый проект для создания Telegram-ботов с использованием фреймворка grammY.

### Особенности

- Построен на фреймворке grammY
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
   ```
   npm start
   ```

### Доступные команды

- `/start`: Приветственное сообщение
- `/help`: Список доступных команд
- `/count`: Отображение интерактивного счетчика с встроенной клавиатурой
- `/error`: Тестирование обработки ошибок (вызывает тестовую ошибку)

### Режим Long Polling

Этот стартер использует режим long polling для работы вашего бота. Этот режим подходит как для разработки, так и для продакшн-среды.

Для запуска бота:

1. Убедитесь, что ваш файл `.env` содержит токен бота.
2. Запустите бота с помощью команды `npm run dev`.

В этом режиме:

- Бот постоянно опрашивает сервер Telegram на наличие обновлений.
- Ошибки логируются, и бот останавливается при критических ошибках (GrammyError или HttpError) для предотвращения бесконечных циклов ошибок.

Для получения дополнительной информации о структуре проекта, плагинах, обработке ошибок, развертывании и настройке, пожалуйста, обратитесь к английской версии README выше.
