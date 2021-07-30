const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'badges',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const user = message.mentions.users.first() || message.author;

        const flags = user.flags.toArray();
        
        message.channel.send(`${user}'s badges: ${flags.join(', ')}`)
    }
}