
exports.run = (client, message, args) => {
const mlist = message.guild.members.map(g => g.role.username)

    message.channel.send(message.guild.roles).catch(console.error);

}
