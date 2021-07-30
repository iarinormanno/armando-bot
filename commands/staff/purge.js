module.exports = {
    name : 'clear', onlyStaff: true,
    aliases : ['purge'],
    /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('❌ -> Non hai permessi per farlo!')
        if(!args[0]) return message.channel.send('Specifica il numero di messaggi da cancellare da 1 - 99')
        if(isNaN(args[0])) return message.channel.send('Solo numeri sono ammessi')
        if(parseInt(args[0]) > 99) return message.channel.send('Il numero massimo di messaggi che posso cancellare sono 99')
        await message.channel.bulkDelete(parseInt(args[0]) + 1)
            .catch(err => console.log(err))
        await message.channel.send('``Cancellati ' + args[0]  + " messaggi.``").then(msg => {
            msg.delete({ timeout: 1000 })
          })
          .catch(console.error);
        
    }
}