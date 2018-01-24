   exports.run = (client, message, args) => {
  let member = message.mentions.members.first();
  let role = args.slice(1).join(" ");
   
   if (message.member.hasPermission("MANAGE_NICKNAMES"))
   {
	message.guild.members.get(member.user.id).setNickname(role);
	message.channel.send(member + ` a été renommé pour ` + role)
   }   
   else 
   {
	   message.channel.send("Assurez vous que le bot est les permissions nécéssaire ou de mentionner un joueur correctement")
	   
   }

   }
