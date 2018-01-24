   exports.run = (client, message, args) => {
const fs = require("fs");

let hr = JSON.parse(fs.readFileSync("./hr.json", "utf8"));
const config = require("./config.json");

if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;

 if (!hr[message.author.id]) hr[message.author.id] = {
    points: 0,
    temp: 0,
	seconde: 0,
  };


    let userData2 = hr[message.author.id];
  if(userData2.temp == "0")
  {
	  userData2.temp += 60;
	  userData2.seconde += 61;
	  setTimeout(timer, 1000)
	  function timer {
		  if(userData2.seconde == "1")
		  {
			  userData2.temp --;
			  userData2.seconde += 61;
		  }
		  userData2.seconde --;
		  setTimeout(timer, 1000)
	  }
	  
  }
  if(userData2.temp !== "0")
  {message.channel.send(`Revenez dans ${userData2.temp} et ${userData2.seconde} secondes. `)}

  fs.writeFile("./hr.json", JSON.stringify(hr), (err) => {
    if (err) console.error(err)
  });
  }
