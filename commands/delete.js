const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;
const ad = await data.fetch(`numara.${message.channel.id}`)
if(message.channel.name === `ticket-${ad}` || message.channel.name === `closed-${ad}`) {
const ann = await data.fetch(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)
if(!ann) return message.channel.send(`Bu bilet senin değil.`)
message.delete()

message.channel.send(new Discord.RichEmbed()
.setColor('RED')
.setDescription(`Bilet 5 saniye sonra ebediyen silinecek.`)
  .setFooter('Narcos Code ticket tool bot altyapı '))
setTimeout(async () => {
message.channel.delete()
data.delete(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)
}, 5000)

} else { return message.channel.send(`Bu komutu bir bilet kanalında kullanın.`) }
//Narcos Code tarafından türkçe çevrildi
};
exports.conf = {
  enabled: true,//Narcos Code tarafından türkçe çevrildi
  guildOnly: true,
  aliases: [],
  permLevel: 0
}//Narcos Code tarafından türkçe çevrildi

exports.help = {//Narcos Code tarafından türkçe çevrildi
  name: 'bilet-sil'
};//Narcos Code tarafından türkçe çevrildi