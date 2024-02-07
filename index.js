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
    .setState('どりーみんチュチュ★ ')
    .setName('チョコ la ta ta ta ta')
    .setDetails(` ⏜   ུ ︵𖧁୧︵   ུ⏜   `)
  
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1204618514191753257/1204631405053743165/IMG_2891.gif?ex=65d56f6b&is=65c2fa6b&hm=4de7ef69fb77f501527302018e1167f98f06e9bbe832e4d1a6d8e6d778bf8d11&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('チョコ la ta ta ta ta') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1204618514191753257/1204635178501279884/Untitled90_20240206224753.png?ex=65d572ef&is=65c2fdef&hm=43a703f8d004101199a8ef9645b38beac7ab99ef1e3684e33c27fe04e26ab21e&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('mayoi') //Text when you hover the Small image
    .addButton('𐂯ྀི', 'https://rentry.co/mayoibmi')
    

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
client.login(mySecret)
