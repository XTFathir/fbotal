const fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
    m.reply('Awokwokwok :v')

}

handler.command = /^(wkwk)$/i

module.exports = handler
