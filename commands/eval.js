exports.run = (client, message, args) => {
const config = require("./config.json");

const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}


  const args2 = message.content.split(" ").slice(1);


    if(message.author.id !== "295908783081914378" && message.author.id !== "296298745518227457") return;
    try {
      const code = args2.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  


}