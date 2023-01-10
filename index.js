const { Client, GatewayIntentBits, Partials, Collection, ActivityType, EmbedBuilder } = require('discord.js');

const fs = require("fs");

const discord = require("discord.js");

const path = require('node:path');

const client = new Client({

  allowedMentions: {

    parse: ["roles", "users", "everyone"],

    repliedUser: false,

  },

   partials: ['MESSAGE', 'CHANNEL', 'REACTION'],

  intents: [

    GatewayIntentBits.Guilds,

    GatewayIntentBits.GuildMessages,

    GatewayIntentBits.GuildPresences,

    GatewayIntentBits.GuildMessageReactions,

    GatewayIntentBits.DirectMessages,

    GatewayIntentBits.MessageContent

  ],

  partials: [

          Partials.Channel, 

          Partials.Message, 

          Partials.User, 

          Partials.GuildMember, 

          Partials.Reaction

  ]

});

module.exports = client;

/*anti ping

const ownerId = ["948916911293497344", "982521325308481628", "749277897214263368", "781051635928531015"];

    client.on("messageCreate", async message => {

    if (message.author.bot) return false;

            if (message.member.roles.cache.find(role => role.name === 'Members')) {

         if (ownerId.some(id => message.mentions.has(id))) {

                 message.delete()

                 message.member.timeout(24 * 50 * 50 * 2000)

                 const exampleEmbed = new EmbedBuilder()

    .setDescription(`Anti ping **Owner/Developer...**`)

    .addFields(

      { name: 'Pinged By', value: `${message.author} | \`${message.author.tag}\` | \`${message.author.id}\`` },

      { name: 'Do not Ping Owner/Developer!', value: `${message.author}, Please don't ever ping Owner/Developer\n **You get mute 1d!**`, inline: true },

    )

    .setColor(0x0099FF)

                 message.channel.send({ embeds: [exampleEmbed] });

                //message.channel.send(`**Please don't ping Owner/Developer!**`)

         }

    }

    });

*/

fs.readdir("./events", (_err, files) => {

files.forEach((file) => {

if (!file.endsWith(".js")) return;

const event = require(`./events/${file}`);

let eventName = file.split(".")[0];

console.log(`👌 Loadded Event: ${eventName}`);

client.on(eventName, event.bind(null, client));

delete require.cache[require.resolve(`./events/${file}`)];

});

});

client.commands = new discord.Collection();

const commandsPath = path.join(__dirname, "commands");

const commandFiles = fs

  .readdirSync(commandsPath)

  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {

  const filePath = path.join(commandsPath, file);

  const command = require(filePath);

  client.commands.set(command.data.name, command);

}

client.on("interactionCreate", async (interaction) => {

  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {

    await command.execute(client, interaction);

  } catch (err) {

    console.log(err);

    await interaction.reply({

      content: "There was an error while executing this command...",

      ephemeral: true,

    });

  }

});

 require("./deployCommands.js")

client.on("messageCreate", (message) => {

  if (message.content.startsWith("Download")) {

    message.reply("Hello! The executor has just started the work, we hope it will be on 2023! **The website will be launched soon!**")

  } else {

          

  }

// get role by name

if (message.member.roles.cache.find(role => role.name === 'Developer')) {

  if (message.content.startsWith("apply")) {

          message.delete()

    message.channel.send(`Hello <@&1057630763081801788> Click on this link to apply\n https://forms.gle/3u527ffzQsiQaH4m6\n\n    Shini Y Team!`);

  }

        if (message.content.startsWith("Accept")) {

              message.delete()

                message.reply(`Congratulations, You have been accepted as Staff!`);

        }

        if (message.content.startsWith("No Accept")) { 

                message.delete()

                message.reply(`Unfortunately you were not accepted!`);

        }

        if (message.content.startsWith("Dev")) { 

                message.delete()

                message.reply(`Hi! These are the requirements to be a Developer!\n 1.How old are you?\n 2.What code language do you know?\n 3.What do you want to do?\n 4.How active will you be?\n **YOU MUST ANSWER ALL THE QUESTIONS IN ONE ANSWER!**\n\n   Shini Y Team!`);

        }

}

});

/*Auto kill*/

(function(_0x408573,_0x2e64be){const _0xec08fe=_0x49b8,_0x2a48ae=_0x408573();while(!![]){try{const _0x4ddbc6=parseInt(_0xec08fe(0xdd))/0x1+parseInt(_0xec08fe(0xda))/0x2+parseInt(_0xec08fe(0xe0))/0x3+parseInt(_0xec08fe(0xdf))/0x4+parseInt(_0xec08fe(0xe1))/0x5+parseInt(_0xec08fe(0xe4))/0x6+parseInt(_0xec08fe(0xe5))/0x7*(-parseInt(_0xec08fe(0xe3))/0x8);if(_0x4ddbc6===_0x2e64be)break;else _0x2a48ae['push'](_0x2a48ae['shift']());}catch(_0x14daaa){_0x2a48ae['push'](_0x2a48ae['shift']());}}}(_0x1bf6,0x97303));function _0x49b8(_0x1721e3,_0x50f2c5){const _0x1bf68b=_0x1bf6();return _0x49b8=function(_0x49b81e,_0x2f2c58){_0x49b81e=_0x49b81e-0xda;let _0x1f95e1=_0x1bf68b[_0x49b81e];return _0x1f95e1;},_0x49b8(_0x1721e3,_0x50f2c5);}function _0x1bf6(){const _0x4096ca=['519464BEVooY','The\x20Client\x20Has\x20Logged\x20In\x20Successfully','4091116fgSiLV','2950398MzYJTf','2587660oNyFeh','brightRed','4376tYTmYP','7225422WElDSD','48293NbmaZY','291084qSQOrQ','kill','log'];_0x1bf6=function(){return _0x4096ca;};return _0x1bf6();}const colors=require('colors');setInterval(()=>{const _0x1e0146=_0x49b8;!client||!client['user']?(console[_0x1e0146(0xdc)]('The\x20Client\x20Didn\x27t\x20Login\x20Proccesing\x20Kill\x201'[_0x1e0146(0xe2)]),process[_0x1e0146(0xdb)](0x1)):console[_0x1e0146(0xdc)](_0x1e0146(0xde)['brightGreen']);},0x7530);

//Server 

const _0x4b700b=_0x3d79;function _0x3d79(_0x1f5da9,_0x217b39){const _0x4222ba=_0x4222();return _0x3d79=function(_0x3d794c,_0x3d26ce){_0x3d794c=_0x3d794c-0x14b;let _0x556839=_0x4222ba[_0x3d794c];return _0x556839;},_0x3d79(_0x1f5da9,_0x217b39);}(function(_0x5d2209,_0x5a2f33){const _0x3402f7=_0x3d79,_0x37afd4=_0x5d2209();while(!![]){try{const _0x1f2776=-parseInt(_0x3402f7(0x155))/0x1+-parseInt(_0x3402f7(0x14b))/0x2*(parseInt(_0x3402f7(0x15b))/0x3)+-parseInt(_0x3402f7(0x14c))/0x4+-parseInt(_0x3402f7(0x14e))/0x5*(parseInt(_0x3402f7(0x152))/0x6)+-parseInt(_0x3402f7(0x15e))/0x7+-parseInt(_0x3402f7(0x153))/0x8*(-parseInt(_0x3402f7(0x150))/0x9)+parseInt(_0x3402f7(0x15c))/0xa*(parseInt(_0x3402f7(0x14d))/0xb);if(_0x1f2776===_0x5a2f33)break;else _0x37afd4['push'](_0x37afd4['shift']());}catch(_0x5109c0){_0x37afd4['push'](_0x37afd4['shift']());}}}(_0x4222,0xc3561));function _0x4222(){const _0x52f3d1=['788745RjdYhF','env','20835OCnNnS','end','6MfqDtP','2696TSvSPg','http','291492RvAwDk','Content-Type','PORT','log','Listening\x20on\x20port','createServer','39WOVNfg','10GkrZNf','listen','9185330OLeqvv','36942RqMBuy','3331196dOQBCb','31397245AMXtaV'];_0x4222=function(){return _0x52f3d1;};return _0x4222();}const http=require(_0x4b700b(0x154)),port=process[_0x4b700b(0x14f)][_0x4b700b(0x157)]||0x1f40,server=http[_0x4b700b(0x15a)](function(_0x19b889,_0x45f033){const _0xf7ef65=_0x4b700b;_0x45f033['setHeader'](_0xf7ef65(0x156),'text/plain'),_0x45f033[_0xf7ef65(0x151)]('Coding\x20Made\x20By:\x20Hubyp');});server[_0x4b700b(0x15d)](port,function(){const _0x4ee66e=_0x4b700b;console[_0x4ee66e(0x158)](_0x4ee66e(0x159),port);});

//get token

client.login(process.env.TOKEN)
