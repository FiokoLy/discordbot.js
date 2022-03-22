console.log(process.version)
console.log("Lettura riga 2")
const Discord = require("discord.js")
const client = new Discord.Client(
  { intents: ["32767"] }
)

console.log("Read token 1 / 2")
client.login(" Your Token On This  ")
console.log("Read token 2 / 2")

client.on("message", message => {
  if (message.content.startsWith(".ban (my prefix it's .)")) {
    var utente = message.mentions.members.first();
    if (!message.member.permissions.has('BAN_MEMBERS')) {
      return message.channel.send('You don''t have permession to ban :(');
    }
    if (!utente) {
      return message.channel.send('You don''t ping a person');
    }
    if (!utente.bannable) {
      return message.channel.send('i''m don''t have permession ');
    }
    utente.ban()
      .then(() => {
        var embed = new Discord.MessageEmbed()
          .setTitle(`${utente.user.username} Banned ✅`)
          .setDescription(`Banned by ${message.author.toString()}`)

        message.channel.send({ embeds: [embed] })
      })
  }
})
client.on("ready", () => {
    console.log("The bot it's online!")
})
