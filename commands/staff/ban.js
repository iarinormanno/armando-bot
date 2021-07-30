const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    
    const target = message.mentions.members.first()
    
   
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`❌ -> Non hai permessi per farlo!`)
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(`Non ho i poteri per bannare questo utente`)
    
    if(!args[0]) return message.reply(`Per favore specifica chi bannare`)
    
    if(!target) return message.reply(`Non trovo l'utente`)
    
    if(target.roles.highest.position >= message.member.roles.highest.position || message.author.id !== message.guild.owner.id) {
      return message.reply(`Hanno piú potere di me`)
    }
    
    if(target.id === message.author.id) return message.reply(`Non posso bannarti`)
    let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("Specifica un motivo!")
    
    if(target.bannable) {
        let embed = new discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Utente bannato")
        .addField("Target", target.user.tag)
        .addField("Staffer", message.author.tag)
        .addField("Motivo", `${reason}`)
        channel = client.channels.cache.get('867799269389631558')
        await channel.send(embed)
      
        await target.ban()
      
      
    } else {
      return message.reply(`Non posso farlo hanno un ruolo superiore al mio`)
    }
    return undefined
  }
};