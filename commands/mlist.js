
exports.run = (client, message, args) => {
const mlist = message.guild.members.map(g => g.user.username)
    message.channel.send(mlist).catch(console.error);
}
