const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();




client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1204271221202747412')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/developer') //Must be a youtube video link 
    .setState('𝒔𝒘𝒆𝒆𝒕  𝒃𝒂𝒌𝒆𝒓𝒚')
    .setName('𝒔𝒘𝒆𝒆𝒕  𝒃𝒂𝒌𝒆𝒓𝒚')
    .setDetails(`⌣⌣`)
  
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/966134238481088582/1204275410423119952/Untitled59_20240205203956.png?ex=65d423e0&is=65c1aee0&hm=2b32f3efa538bab0d846986cb8ff978fd08c8fc13b7e38d942ada932d5d347e4&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('◡◡   dαytime   stαr     ݈݈ ᧆ') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/966134238481088582/1204277455234404473/Untitled60_20240205230828.png?ex=65d425c7&is=65c1b0c7&hm=cf5408740317882ab03e761db68b082b6eed8095334b59b943e324c470515400&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('mayoi') //Text when you hover the Small image
    .addButton('𐂯ྀི', 'https://rentry.co/dolybmi')
    

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
