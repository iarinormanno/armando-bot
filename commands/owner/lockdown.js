const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name:"lockdown",

     /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return;

        const role = message.guild.roles.everyone;

        if(!args.length) return message.reply("true | false")

        const query = args[0].toLowerCase();

        if(!["true","false"].includes(query))
            return message.reply("non è corretto")

        const perms = role.permissions.toArray();

        if(query === "false"){
            perms.push("SEND_MESSAGES")
            console.log(perms)
            await role.edit({permissions: perms})
            message.reply("server sbloccato 🔓, congratulazioni hai sventrato un raid")
        }else{
            const newPerms = perms.filter((perm)=> perm !== 'SEND_MESSAGES')
            console.log(newPerms)

            await role.edit({permissions: newPerms})
            message.reply('server bloccato 🔒')
        }
    }
}