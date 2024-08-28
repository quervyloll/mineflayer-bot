module.exports = {
    name: 'ping',
    description: 'Ping command that responds with Pong!',
    execute(bot, username, args) {
        bot.chat('Pong!');
    }
}