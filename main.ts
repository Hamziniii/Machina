import { Intents } from 'discord.js';
import { Machina } from './machina'
const env = require('dotenv').config().parsed // This is for the token in the .env file 

// Your token, client id of the bot, guild id of where you want the commands to be, and any extra permissions
const bot = new Machina(env['TOKEN'], "790153776711073843", "422108779027496960", Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS)

// This is a self calling function: it waits for the commands to updates, then starts the bot
;(async (b) => {
    await b.updateCommands()
    b.start()
})(bot)