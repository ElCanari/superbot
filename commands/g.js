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
  let rece = points[message.member.id]
	if(stone !== "stone")
	{
		message.channel.send("Veuillez specifier une ressource valide")
		return;
	}
	if(userData.stone < cb)
		{
		message.channel.send("Tu n'a pas les ressources nécéssaires")
			return;
			
		}
//  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
userData -= cb;
rece += cb;


  fs.writeFile("./stats.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
  }