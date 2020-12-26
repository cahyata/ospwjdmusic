const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "volume",
    description: "Mengatur volume",
    usage: "[volume]",
    aliases: ["v", "vol"],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel;
    if (!channel)return sendError("Anda harus memasuki voice channel terlebih dahulu!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("Tidak ada musik yang dimainkan", message.channel);
    if (!args[0])return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
     if(isNaN(args[0])) return message.channel.send(':notes: Hanya angka!').catch(err => console.log(err));
    if(parseInt(args[0]) > 150 ||(args[0]) < 0) return sendError('Maksimal 150 dan minimal 0',message.channel).catch(err => console.log(err));
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    let xd = new MessageEmbed()
    .setDescription(`I set the volume to: **${args[0]/1}/100**`)
    .setAuthor("Server Volume Manager", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
    .setColor("PURPLE")
    return message.channel.send(xd);
  },
};
