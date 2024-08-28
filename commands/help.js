module.exports = {
    name: 'help',
    description: 'A simple help command to list all commands!',
    execute(bot, username, args) {
        botCommands = Array.from(bot.commands.keys())
        bot.chat(`${botCommands.join(', ')}`)
    }
}