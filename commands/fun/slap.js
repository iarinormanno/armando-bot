const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "slap",
  aliases: ["batmanslap", "slp"],
  category: "Image",
  description: "Return A Slap Image!",
  usage: "Slap <Mention Or ID> | <Text>",
  run: async (client, message, args) => {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!Member) return message.channel.send("Specifica un utente oppure un ID");
   
    const Other = args.slice(1).join(" ") || "Smetti di essere gay";
    if (Other.length > 50) return message.channel.send("Limite caratteri raggiunto - 50!");

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI(`https://vacefron.nl/api/batmanslap?text1=bruh&text2=${Other}&batman=${message.author.avatarURL({ format: "png" })}&robin=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};