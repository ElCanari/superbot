const Discord = require("discord.js");
const client = new Discord.Client({forceFetchUsers: true});
const fs = require("fs");

const config = require("./commands/config.json");

//let points = JSON.parse(fs.readFileSync("./stone.json", "utf8"));




client.on("message", message => {
 



  if (message.author.bot)return;

 
 if(message.content.indexOf(config.prefix) !== 0)return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);

  console.log("I am ready!");
});
client.login(config.token);