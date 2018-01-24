   exports.run = (client, message, args) => {
const fs = require("fs");

let points = JSON.parse(fs.readFileSync("./stats.json", "utf8"));

const config = require("./config.json");
let stone = args[0];
let cb = args[1];
 
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
  let curLevel = Math.floor(1 - Math.sqrt(userData.j));
  let curLevel1 = Math.floor(2 + Math.sqrt(userData.j))
 /*if(cb <= curLevel)
 {return;}
if(cb >= curLevel1)
{return;
}*/
 
 if(userData.a < 5)
 {
	message.channel.send("Vous avez besoin de 5 stones") 
 }
if(cb !== "1")
{message.channel.send("Seulement un craft est disponible")}
userData.a -= 5;
userData.j ++ ;
  fs.writeFile("./stats.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
  }