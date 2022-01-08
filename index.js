const activities_list = [
	'Chill ITA',
	'le droghe',
	'le stanze',
	'le donne',
	'i maschi',
	'i bambini',
	'gli eterosessuali',
	'i porno',
	'il culo delle tipe'
];


require('dotenv').config();
const { Collection, Client, Discord } = require('discord.js');
const fs = require('fs');
const client = new Client({
	disableEveryone: true
});
const config = require('./config.json');
const prefix = config.prefix;
const token = config.token;
const mongoose = require('mongoose');

mongoose.connect(
	'//',
	{ useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.set('useFindAndModify', false);

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync('./commands/');
['command'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

client.once('ready', () => {
	console.log('sono online su chill ita!');
	setInterval(() => {
		const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
		client.user.setActivity(activities_list[index], { type: 'WATCHING' }); // sets bot's activities to one of the phrases in the arraylist.
	}, 10000);
});

client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	if (!message.guild) return;
	if (!message.member)
		message.member = await message.guild.fetchMember(message);
	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/g);
	const cmd = args.shift().toLowerCase();
	if (cmd.length == 0) return;
	let command = client.commands.get(cmd);
	if (!command) command = client.commands.get(client.aliases.get(cmd));
	if (command) command.run(client, message, args);
});


client.login(token);

const activities_list = [
    "Chill ITA", 
    "le droghe ^_^",
    "le stanze",
    "le donne uWu"
    ];

    
const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
const mongoose = require('mongoose');

mongoose.connect('//', { useNewUrlParser: true, useUnifiedTopology: true, })
mongoose.set('useFindAndModify', false);

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 



client.once('ready', () => {
    console.log('sono online su chill ita!')
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], { type: 'WATCHING' }); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000);
})

client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})



client.login(process.env.token)

