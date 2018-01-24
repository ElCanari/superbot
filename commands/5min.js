   exports.run = (client, message, args) => {
const fs = require("fs");

let points = JSON.parse(fs.readFileSync("./stats.json", "utf8"));

const config = require("./config.json");
let member = message.mentions.members.first();
let stone = args[1];
let cb = args[2];
 
if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    a: 1,
    b: 0,
    c: 0,
    d: 0,
	e: 0,
	f: 0,
	g: 0,
	h: 0,
	i: 0,
	j: 0,
	k: 0,
  };
  let userData = points[message.author.id];
  userData.points++;
if(userData.k == "0")
{
	message.channel.send("A dans 5 minute ! Vous avez recu de la stones")
	if(userData.j == "1")
	{userData.a += 10;
	}
	if(userData.j == "0")
	{userData.a += 5}

	userData.k += 500;
	setTimeout(Timer1, 1000)
	function Timer1
	{
		if(userData.k == "0")
		{
			return;
			
		}
		userData.k --;
		setTimeout(Timer1, 1000)
	}

	}
	
	



if(userData.k !== "0")
{	message.channel.send(`Tu a besoin dattendre ${userData.k} secondes`)
}

  fs.writeFile("./stats.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
  }