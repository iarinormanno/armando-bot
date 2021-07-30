const db = require('../../models/warns')
const { Message, MessageEmbed } = require('discord.js')
module.exports = {
    name : 'remove-all-warns',
    run : async(client, message, args) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌ -> Non hai permessi per farlo!')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send('User not found.')
        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                await db.findOneAndDelete({ user : user.user.id, guildid: message.guild.id})
                message.channel.send(`Cleared ${user.user.tag}'s warns`)
                user.send(new MessageEmbed()
                .setDescription(`all warns have been taken away from you in **${message.guild.name}**.Respect Rules!`)
                .setColor("GREEN")
            )
            } else {
                message.channel.send('This user does not have any warns in this server!')
            }
        })
    }
}