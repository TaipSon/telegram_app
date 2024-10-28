from telegram import Update, WebAppInfo, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

# Замените 'YOUR_BOT_TOKEN' на ваш токен
TOKEN = '7840764387:AAESCJq16ArvE5LzcFmXGIwf4nhF9-oAVKo'

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    keyboard = [[InlineKeyboardButton("Открыть игру", web_app=WebAppInfo(url="telegram-app-one.vercel.app"))]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("Привет! Готов начать игру?", reply_markup=reply_markup)

def main() -> None:
    application = ApplicationBuilder().token(TOKEN).build()
    application.add_handler(CommandHandler("start", start))
    application.run_polling()

if __name__ == '__main__':
    main()
