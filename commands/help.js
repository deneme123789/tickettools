const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;
  
if(!args[0]) {
  
const embed = new Discord.RichEmbed()
.setColor('GREEN')
.addField(`${prefix}yardım komutlar`, `Komutları Gösterir`, true)
message.channel.send(embed)  }

if(args[0] === 'komutlar') {
  
const embed = new Discord.RichEmbed()
.setColor('GREEN')
.setDescription(`Narcos Code Ticket Tools bot altyapı`)
.addField(`==================================
Ticket Commands
==================================

\`${prefix}ekle [Etiket] (kanal)\``, `*Açıklama: Ticket a başka birisini/rolü eklersiniz.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`${prefix}sil [Etiket] (kanal)\``, `*Açıklama: Ticket a ekli birisini/rolü silersiniz.
Ekstra kullanım: ${prefix}kaldır*`, true)

.addField(`\`${prefix}kapat [Etiket] (kanal)\``, `*Açıklama: Ticket ı kapatırsınız.
Ekstra kullanım: Bulunmuyor.*`, true)

.addField(`\`${prefix}aç [Etiket] (kanal)\``, `*Açıklama: Ticket ı açarsınız.
Ekstra kullanım: Bulunmuyor.*`, true)

.addField(`\`${prefix}bilet-sil \``, `*Açıklama: Ticket ı silersiniz.
Ekstra kullanım: Bulunmuyor.*`, true)

.addField(`\`${prefix}ping [gönder])\``, `*Açıklama: Botun pingini gösterir.
Ekstra kullanım: Bulunmuyor.*`, true)

.addField(`\`${prefix}ticket-kanal [ayarla/sıfırla] (kanal)\``, `*Açıklama: Ticket mesajının kanalını ayarlarsınız.
Ekstra kullanım: Bulunmuyor.*`, true)

.addField(`\`${prefix}ticket [gönder])\``, `*Açıklama: Ticket mesajını yollar.
Ekstra kullanım: Bulunmuyor.*`, true)

.setFooter('Narcos Code Ticket Tool bot altyapı')
message.channel.send(embed)  }  

  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};