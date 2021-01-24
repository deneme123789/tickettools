const Discord = require("discord.js");
const data = require("quick.db");

exports.run = async (client, message, args) => {
  const prefix =
    (await data.fetch(`prefix.${message.guild.id}`)) || client.ayarlar.prefix;
  const ad = await data.fetch(`numara.${message.channel.id}`);
  if (
    message.channel.name === `ticket-${ad}` ||
    message.channel.name === `closed-${ad}`
  ) {
    const ann = await data.fetch(
      `asd.${message.guild.id}.${message.channel.id}.${message.author.id}`
    );
    if (!ann) return message.channel.send(`Bu bilet senin değil.`);
    message.delete();

    message.channel.send(
      new Discord.RichEmbed()
        .setColor("#ffff00")
        .setDescription(`Ticket ${message.author} tarafından açıldı.`)
    );
    message.channel.setName(`ticket-${ad}`);
    //Narcos Code tarafından türkçe çevrildi
  } else {
    return message.channel.send(`Bu komutu bir bilet kanalında kullanın.`);
  }
};
exports.conf = {
  enabled: true, //Narcos Code tarafından türkçe çevrildi
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "aç"
}; //Narcos Code tarafından türkçe çevrildi
