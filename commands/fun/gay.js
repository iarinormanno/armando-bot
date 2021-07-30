const Discord = require('discord.js')

module.exports = {
    name: "gay",
    category: "Fun",
    description: "How gay are you?",
    usage: "[command | user]",
    run: async(client, message, args) => {
        const mentionedMember = message.mentions.users.first()
        if (!mentionedMember) return message.channel.send('Per favore menziona un utente!')
        const gayr8 = Math.floor(Math.random() * 100) + 0;
        const embed = new Discord.MessageEmbed()
           .setTitle(`Gayr8 Machine`)
           .setDescription(`:rainbow_flag: ${mentionedMember} è al ${gayr8}% gay`)
           .setColor(`RANDOM`)
           message.channel.send(embed)
    }
}