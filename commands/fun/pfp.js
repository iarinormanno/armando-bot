const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "avatar",
  aliases: ["icon", "pfp"],
  category: "fun",
  description: "Show Member Avatar!",
  usage: "Avatar | <Mention Member>",
  accessableby: "everyone",
  run: async (client, message, args) => {
    //Start

    let Member = message.mentions.users.first() || message.guild.channels.cache.get(args[0]);

    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField(
        "Links",
        `[Png](${Member.displayAvatarURL({
          format: "png",
          dynamic: true
        })}) | [Jpg](${Member.displayAvatarURL({
          format: "jpg",
          dynamic: true
        })}) | [Webp](${Member.displayAvatarURL({
          format: "webp",
          dynamic: true
        })})`
      )
      .setImage(Member.displayAvatarURL({ dynamic: true }))
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};