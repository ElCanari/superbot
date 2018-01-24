exports.run = (client, message, args) => {
let args4 = args[0];
let roleID = message.guild.roles.find("name", args4);
let membersWithRole = message.guild.roles.get(roleID).members;
message.channel.send(`Il y a ${membersWithRole.size} membres avec ce role`);
}