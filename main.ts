import { Machina } from './machina'
const env = require('dotenv').config().parsed
const bot = new Machina(env['TOKEN'], "790153776711073843", "422108779027496960")

;(async (b) => {
    await b.updateCommands()
    b.start()
})(bot)