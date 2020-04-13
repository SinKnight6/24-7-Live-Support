const Discord = require ('discord.js');

const bot = new Discord.Client();

const token = process.env.token;

// Break

bot.on('ready', () => {
  console.log(' is online!')
  let statuses = [
      `${bot.guilds.cache.size} Servers`,
      "servers",
      `over ${bot.users.cache.size} users!`,
       "chating with users",
  ]
  setInterval(function() {
      let status = statuses[Math.floor(Math.random() * statuses.length)]
      bot.user.setActivity(status, {type: "WATCHING"});
  }, 5000)
  

})

// Break

const prefix = "!";
bot.on('message', async message => {

    if (message.author.bot) return;

// Brealk 

    if (message.content.startsWith (prefix + "live chat") || (message.content.startsWith (prefix + "Live chat"))) {
      let uEmbed1 = new Discord.MessageEmbed()
      .setColor(0x00FF44)
      .setTitle('**Please type ``!help`` to get started. This will await and will be cancelled in 2 minutes if you dont use a command.**')
      message.channel.send({embed: uEmbed1})
      .then(() => {
       message.channel.awaitMessages(response => response.content === '!help' || message.channel.awaitMessages(response => response.content === '!Help'),{
         max: 1,
         time: 120000,
         errors: ['time'],
       })
       .then((collected) => {
        let uEmbed2 = new Discord.MessageEmbed()
        .setColor(0x001AFF)
         .setTitle(`**Another bot has sent you a message Please check your PM (private messages) for: ${collected.first().content}**`);
         message.channel.send({embed: uEmbed2});
         })
         .catch(() => {
          let uEmbed3 = new Discord.MessageEmbed()
          message.channel.send(`${member}`)
          .setColor(0xFF0000)
          .setTitle(`Your help request was cancelled`)
           .addField('Error','**You did not say any commands within the time limit!, to summon me again please use ``*live support`` command.**');
           message.channel.send({embed: uEmbed3});
         });
     });
     
     }

})

bot.login (token);