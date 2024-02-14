> const fetch = require("node-fetch");
const axios = require("axios");
async function play() {
let res = await axios.get(`https://toxic-kichux-aswin-sparky.koyeb.app/api/play?text=Dusk+till-Dwan+Slowed`);
let result = await res.data
const aud = await (await fetch(`${result.result.download_url}`)).buffer();
await msg.reply(`_*Downloading ${result.result.title}*_`);
return await conn.sendMessage(msg.from,{audio: aud, mimetype : 'audio/mpeg'} , { quoted : msg})
}
play()
