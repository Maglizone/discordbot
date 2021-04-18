const { Client } = require('discord.js');
const { play, stop } = require('./commands');

const bot = new Client();

bot.login('ODIzOTQ5MDQ1MDg0MzIzODUw.YFoQWA.XgaTE0GWy0goIeoYlsDRhJgatOU');

bot.on('ready', () => console.log('ErdoğanBotu Aktif'));

bot.on('message', (msg) => {
     if(msg.author.bot) return;

     const prefix = 'e'
       if (!msg.content.startsWith(prefix)) return;

       const commandName = getCommandName(prefix, msg.content);
       const args = getCommandArgs(prefix, msg.content);

            if (commandName == 'rdoğan')
         return play(msg, args);
       else if (commandName == 'rdoğansus')
         return stop(msg, args);

    
});

function getCommandName(prefix, content) {
   return content 
      .slice(prefix.length)
      .split(' ')[0];
}
function getCommandArgs(prefix, content){
    return content
       .slice(prefix.length)
       .split(' ')
       .slice(1);
}