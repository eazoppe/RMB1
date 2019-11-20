const Command = require('../Command')

module.exports =
class HelpCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'RMB',
      properName: 'RoVer',
      aliases: ['rover'],
      description: 'Displays a description of RMB'
    })
  }

  async fn (msg) {
    const output = `Welcome to RMB, a bot that makes integrating your server with Roblox easy. If you need help, you can join our support server by using the \`${msg.guild.commandPrefix}support\` command. You can run \`${msg.guild.commandPrefix}help\` to see a list of commands.`

    msg.reply(output)
  }
}
