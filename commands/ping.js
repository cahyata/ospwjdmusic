const { MessageEmbed } = require('discord.js')

module.exports = {
  info: {
    name: "ping",
    description: "Ping",
    usage: "[ping]",
    aliases: ["ping"],
  },
  
  
  run: async function(client, message, args) {
    
    const embed = new MessageEmbed()
    .setAuthor("PING " + client.user.username, "https://i.imgur.com/1sPt9ja.png")
    .setColor('GREEN')
    .addField("LATENCY", `${Date.now() - message.createdTimestamp}ms`)
    .addField("API LATENCY", `${Math.round(client.ws.ping)}ms`)
    .setTimestamp()

    message.channel.send(embed)
  }
}