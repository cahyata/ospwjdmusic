const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "stop",
    description: "Memberhentikan musik dan menghapus antrian",
    usage: "",
    aliases: [],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel
    if (!channel)return sendError("Anda harus memasuki voice channel terlebih dahulu!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return sendError("Tidak ada musik yang dimainkan", message.channel);
   if(!serverQueue.connection)return
if(!serverQueue.connection.dispatcher)return
     try{
      serverQueue.connection.dispatcher.end();
      } catch (error) {
        message.guild.me.voice.channel.leave();
        message.client.queue.delete(message.guild.id);
        return sendError(`:notes: Musik diberhentikan dan antrian dikosongkan: ${error}`, message.channel);
      }
    message.client.queue.delete(message.guild.id);
    serverQueue.songs = [];
    message.react("✅")
  },
};