module.exports = {
    name: "slowmode",
    category: "moderation",
    description: "Lets you set slowmode on the channel.",
    args: true,
    usage: "<time>",
    run: (client, message, args) => {
      const amount = parseInt(args[0]);
      if (message.member.hasPermission("MANAGE_CHANNEL"))
        if (isNaN(amount))
          return message.channel.send("Inserisci un numero valido");
      if (args[0] === amount + "s") {
        message.channel.setRateLimitPerUser(amount);
        if (amount > 1) {
          message.channel.send("slowmode settato su " + amount + " secondi");
          return;
        } else {
          message.channel.send("slowmode settato su " + amount + " secondo");
          return;
        }
      }
      if (args[0] === amount + "min") {
        message.channel.setRateLimitPerUser(amount * 60);
        if (amount > 1) {
          message.channel.send("slowmode settato su " + amount + " minuti");
          return;
        } else {
          message.channel.send("slowmode settato su " + amount + " minuto");
  
          return;
        }
      }
      if (args[0] === amount + "h") {
        message.channel.setRateLimitPerUser(amount * 60 * 60);
        if (amount > 1) {
          message.channel.send("slowmode settato su " + amount + " ore");
          return;
        } else {
          message.channel.send("slowmode settato su " + amount + " ora");
          return;
        }
      } else {
        message.channel.send(
          "È possibile impostare solo secondi (s), minuti (min) e ore (h)"
        );
      }
    }
  };