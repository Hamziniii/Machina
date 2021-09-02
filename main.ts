import { Machina } from './machina'
const env = require('dotenv').config().parsed
const bot = new Machina(env['TOKEN'], "790153776711073843", "422108779027496960")

// This is a self calling function, that waits for the commands to updates, then starts the bot
;(async (b) => {
    await b.updateCommands()
    b.start()
})(bot)