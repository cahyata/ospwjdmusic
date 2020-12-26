module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  const status = [
    `;help`,
    `SELAMAT NATAL 2020`,
    `TAHUN BARU 2021`
    ]
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "LISTENING"}) //watching bisa kalian ganti sama playing dan semacamnya
  }, 2000)
  client.user.setStatus("dnd");
  
  const channel = client.channels.cache.get("783883868234448986");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    // Yay, it worked!
    console.log("Successfully connected.");
  }).catch(e => {
    // Oh no, it errored! Let's log it to console :)
    console.error(e);
});
}
