const Discord = require('discord.js');

module.exports = {
    name: "an",
    category: "Moderation",
    description: "announcement",
    usage: "[COMMAND] + [Channel] + [Text]",
    run: async (client, message, args) => {
        if (!message.member.permissions.has('ADMINISTRATOR'))
        return message.channel.send(`❌ -> Non hai permessi per farlo!`);
        const channel = message.mentions.channels.first()
        if (!args.length) return message.channel.send(`Esempio: announcement #canale <testo>`) 
        if (!channel) {
            message.reply("Specifica il canale dove vuoi mandarlo")
            return
        } else {
            let announce = args.slice(1).join(" ")
            if(!announce) return message.channel.send(`Per favore dici cosa vuoi annunciare`)
            const embed = new Discord.MessageEmbed()
            .setTitle(`🔰Annuncio🔰`)
            .setDescription(`${announce}`)
            .setFooter("Mandato da:"+ message.author.username +'#'+ message.author.discriminator)
            .setColor("GREEN")
            channel.send(embed)
            channel.send(`@everyone`).then(m => m.delete())
        }
    }
} 