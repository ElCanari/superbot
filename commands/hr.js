   exports.run = (client, message, args) => {
const fs = require("fs");
const talkedRecently = new Set();
var temp = 60;

const config = require("./config.json");

// Inside your message event, this code will stop any command during cooldown.
// Should be placed after your code that checks for bots & prefix, for best performance

if(var temp == "60")
{
    setTimeout(Timer, 1000)
    message.channel.send("60 seconde timer test")    
  
      }


function Timer() 
{
 temp--;
 setTimeout(timer,1000)   
    }
    
    
message.channel.send("Vous devez attendre " + temp)

if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;

  }
