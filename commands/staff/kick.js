const discord = require('discord.js')
module.exports = { 
    name: "kick",
    description: "kicks someone",
    run: async(client, message, args) => {
	  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("❌ -> Non hai permessi per farlo!")
        let target = message.mentions.members.first()

        if(!target) return message.reply("Per favore menziona un utente")

        if(target.id === message.author.id) {
            return message.reply("Non ti puoi kickare da solo!")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("Aggiungi un motivo!")

        let embed = new discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Utente Kickato")
        .addField("Target", target.user.tag)
        .addField("Staffer", message.author.tag)
        .addField("Motivo", `${reason}`)
        channel = client.channels.cache.get('867799269389631558')
        await channel.send(embed)
        await target.kick(reason)
    }
}