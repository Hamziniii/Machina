import { SlashCommandBuilder } from "@discordjs/builders"
import { CommandInteraction } from "discord.js"
import { Machi } from "../machina"

import axios from 'axios'

export const joke: Machi = {
    data: (new SlashCommandBuilder()).setDescription("lets go"),
    execute: async (interaction: CommandInteraction) => {
        let res = await axios.get('https://official-joke-api.appspot.com/random_joke')
        interaction.reply(`${res.data.setup} \n||${res.data.punchline}||`)
    },
    inDev: false 
}