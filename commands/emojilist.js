  exports.run = (client, message, args) => {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  message.channel.send(emojiList);
}