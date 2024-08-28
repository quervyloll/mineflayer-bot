module.exports = {
    name: 'example',
    description: 'I am an example command! Write all about me here!',
    execute(bot, username, args) {
        bot.chat("Thanks for using my example bot!")
    }
}