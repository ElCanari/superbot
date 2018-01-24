   exports.run = (client, message, args) => {
const fs = require("fs");

let points = JSON.parse(fs.readFileSync("./stats.json", "utf8"));

const config = require("./config.json");

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

//  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
message.channel.send({embed: {
    color: 3000000,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Inventaire",
    url: "",
    description: "",
    fields: [{
        name: "stone",
        value: `${userData.a} stone`
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "©:baby_chick:"
    }
  }
});


  fs.writeFile("./stats.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
  }