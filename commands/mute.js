   exports.run = (client, message, args) => {
  let member = message.mentions.members.first();
   let role = message.guild.roles.find("name", "Mute");
   let Targs = args[1];
   let Hargs = args[2];
   if (message.member.hasPermission("MANAGE_MESSAGES"))
   {

        if (Targs !== "")
{
    if (Hargs !== "min" && Hargs !== "h" && Hargs !== "")
        {
         message.channel.send("Assurez vous de mêtre min pour minute et h pour heure")
            }

        if (Hargs == "min")
	{

    let temp = Math.floor(60000 * Math.sqrt(Targs));
   setTimeout(Timer, temp);
	member.addRole(role).catch(console.error);
          message.channel.send(member + "a été mute pour " + Targs + "minutes");
	function Timer() {

    member.removeRole(role).catch(console.error)
  console.log(`DONE ! `);
}
	}
		if (temps == "h")
	{
    let hr = Math.floor(600000 * Math.sqrt(Targs));
   setTimeout(Timer, hr);
	 message.channel.send( member + "a été mute pour"+ Targs + " heures ");
	function Timer() {

 member.removeRole(role).catch(console.error)
  console.log(`DONE ! `);
}
    }

     }
    else
   {
	   message.channel.send("Assurez vous d'avoir un rule nommer Mute ou d'avoir la permissions pour suprimer les messages ")

   }

   }