const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
});

client.login('NjU1ODU0OTQ4NTMzMjcyNTg2.XfaM4g.ndQ8Zr-2bt_Pcdr7sc3m0bVcnYk');