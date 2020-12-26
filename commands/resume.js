const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "resume",
    description: "Melanjutkan musik yang dijeda",
    usage: "",
    aliases: [],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ Melanjutkan musik")
      .setColor("YELLOW")
      .setAuthor("Musik dilanjutkan", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
      return message.channel.send(xd);
    }
    return sendError("Tidak ada musik yang dimainkan", message.channel);
  },
};
