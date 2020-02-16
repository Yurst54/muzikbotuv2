const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Muzik Komut Grupları')
.setTimestamp()
.addField('» -Çal- Müzik Dinlersiniz', 'prefix çal ')
.addField('» -Ses- Müziğin Sesin Ayarlarsınız', 'prefix ses 1/100')
.addField('» -Geç- Şarkıyı Geçersiniz', 'prefix geç')
.addField('» -Çalan- Çalan Şarkı Hakkında Bilgi Verir', 'prefix çalan')
.addField('» -Duraklat- Şarkıyı Durdurursunuz', 'prefix duraklat')
.addField('» -Devam- Şarkıyı Devam Ettirirsiniz', 'prefix devam')
.addField('» -Sıra- Kuyruğu Görürsünüz', '+sıra')
.setFooter('© 2019  Muzik', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['müzik','muzik'], 
  permLevel: 0 
};

exports.help = {
  name: 'müzik',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};
