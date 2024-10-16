require("dotenv").config();
const {
  Bot,
  session,
  GrammyError,
  HttpError,
  InlineKeyboard,
} = require("grammy");
const { run } = require("@grammyjs/runner");
const { responseTime } = require("./middleware/logger");
const { autoRetry } = require("@grammyjs/auto-retry");
const { hydrate } = require("@grammyjs/hydrate");

// Create bot
const bot = new Bot(process.env.BOT_TOKEN);

// Middleware
bot.api.config.use(autoRetry()); // Add auto-retry for flood control
bot.use(hydrate()); // Add hydrate plugin
bot.use(responseTime);
bot.use(session({ initial: () => ({ counter: 0 }) }));

// Command handler
bot.command("start", async (ctx) => {
  await ctx.reply("Welcome! I am your Telegram bot. Try /help for more info.");
});

bot.command("help", async (ctx) => {
  await ctx.reply(
    "Available commands:\n/start - Start the bot\n/count - Count your messages\n/error - Test error handling"
  );
});

bot.command("count", async (ctx) => {
  await ctx.reply(getCounterMessage(ctx.session.counter).text, {
    reply_markup: getCounterMessage(ctx.session.counter).reply_markup,
  });
});

bot.command("error", () => {
  throw new Error("This is a test error");
});

// Message handler
bot.on("message", async (ctx) => {
  if (ctx.message.text) {
    await ctx.reply("I received your text message!");
  } else if (ctx.message.photo) {
    await ctx.reply("You sent a photo.");
  } else if (ctx.message.video) {
    await ctx.reply("You sent a video.");
  } else if (ctx.message.audio) {
    await ctx.reply("You sent an audio file.");
  } else if (ctx.message.document) {
    await ctx.reply("You sent a document.");
  } else if (ctx.message.sticker) {
    await ctx.reply("You sent a sticker.");
  } else {
    await ctx.reply("You sent a media file.");
  }
});

// Callback query handler
bot.on("callback_query:data", async (ctx) => {
  const action = ctx.callbackQuery.data;

  switch (action) {
    case "increment":
      ctx.session.counter++;
      break;
    case "decrement":
      ctx.session.counter--;
      break;
    case "reset":
      ctx.session.counter = 0;
      break;
    default:
      console.log("Unknown callback query data:", action);
  }

  // Using hydrate plugin to simplify message editing
  await ctx.answerCallbackQuery();

  // Demonstrating the difference between hydrated context and regular API calls
  if (ctx.session.counter % 2 === 0) {
    // Using hydrated context (simplified)
    await ctx.editMessageText(getCounterMessage(ctx.session.counter).text, {
      reply_markup: getCounterMessage(ctx.session.counter).reply_markup,
    });
  } else {
    // Using regular API call (more verbose)
    await ctx.api.editMessageText(
      ctx.chat.id,
      ctx.callbackQuery.message.message_id,
      getCounterMessage(ctx.session.counter).text,
      {
        reply_markup: getCounterMessage(ctx.session.counter).reply_markup,
      }
    );
  }
});

// Function to create the counter message and keyboard
function getCounterMessage(count) {
  const keyboard = new InlineKeyboard()
    .text("+", "increment")
    .text("-", "decrement")
    .text("🔄 Reset", "reset");

  return {
    text: `Counter: ${count}`,
    reply_markup: keyboard,
  };
}

// Error handler
function handleError(err) {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
  } else {
    console.error("Unknown error:", e);
  }
}

// Start the bot
console.log("Bot is running in long polling mode");
bot.catch((err) => {
  handleError(err);
  // In long polling mode, we might want to stop the bot on critical errors
  if (err instanceof GrammyError || err instanceof HttpError) {
    console.error("Critical error occurred, stopping the bot");
    process.exit(1);
  }
});
run(bot);

module.exports.bot = bot;
