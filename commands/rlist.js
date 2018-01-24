exports.run = (client, message, args) => {;
const emojiList = message.guild.role.map(e=>e.toString()).join(" ");
message.channel.send(emojiList);
}
