const fs = require('node:fs')
const mineflayer = require('mineflayer')
const { username, password, server, version, auth, port, prefix} = require('./config.json')


function createBot() {
    const bot = mineflayer.createBot({
    host: server,
    auth: auth, 
    username: username,
    password: password, 
    version: version,
    port: port
})


bot.on('error', (err) => console.log(err))
bot.on('kicked', console.log)
bot.on('end', () => {
    setTimeout(createBot, 5000)
})

bot.on('login', () => {
    console.log(`Bot is on ${server}!`)
})

bot.commands = new Map()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    bot.commands.set(command.name, command)
}

bot.on('chat', (username, message) => {
    if (username === bot.username) return
    if (!message.startsWith(prefix)) return

    const args = message.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()

    if (!bot.commands.has(commandName)) return

    const command = bot.commands.get(commandName)

    try {
        command.execute(bot, username, args)
    } catch (error) {
        console.error(error)
        bot.chat('The bot encountered an error executing the command!')
        }
    })

}
createBot()
