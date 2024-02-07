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
    .setState('𝗅𝗈𝗏𝖾𝗋    ...   𝗹𝗼𝘃𝗲𝗿   ... ')
    .setName('𝗒𝗈𝗎  𝗮𝗻𝗱   𝗆𝖾   𝗒𝗈𝗎  𝗮𝗻𝗱  𝗆𝖾')
    .setDetails(` ⏜   ུ ︵𖧁୧︵   ུ⏜   `)
  
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/966134238481088582/1204589068264939591/Untitled75_20240206194513.png?ex=65d547fe&is=65c2d2fe&hm=bde7bb7168f210863834db23298249d952bfb117be5a5ae2d9d26e8c503c0129&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('𝗒𝗈𝗎  𝗮𝗻𝗱   𝗆𝖾   𝗒𝗈𝗎  𝗮𝗻𝗱  𝗆𝖾') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/966134238481088582/1204589067946430474/Untitled77_20240206194630.png?ex=65d547fd&is=65c2d2fd&hm=d4c3020edeae8b46cec1b59c796802801e228b10c0bd6fb4f5f10280a716e2d8&') //You can put links in tenor or discord and etc.
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
