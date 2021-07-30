const Discord = module.require("discord.js");

module.exports = {
   name: "lock",
   category: "staff",
   description: "Locks a Channel",

   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) 
   return message.channel.send("❌ -> Non hai permessi per farlo!")
 
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`:lock: ${message.channel} è stata bloccata`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
}
}