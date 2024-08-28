module.exports = {
    name: 'example', // The name that can be used in minecraft chat. Make sure you use the prefix!
    description: 'I am an example command! Write all about me here!', // A description that can provide more insight to a command, doesn't have to be used. I personally like descriptions.
    execute(bot, username, args) {
        bot.chat("Thanks for using my example bot!") // The code for each command.
    }
}
