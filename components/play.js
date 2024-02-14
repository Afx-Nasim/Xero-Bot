const {clash} = require("../lib/");
const fetch = require("node-fetch");
const axios = require("axios");

clash({pattern: "play", fromMe: false, desc: "", type: "",},
async ({msg, args, conn}) => {
if (!args) return await msg.tinyreply("*_Provide a song name or yt video song url!_*");
let res = await axios.get(`https://toxic-kichux-aswin-sparky.koyeb.app/api/play?text=${args}`)
let result = await res.data
const aud = await (await fetch(`${result.result.download_url}`)).buffer();
const thumb = await (await fetch(`${result.result.thumbnail}`)).buffer();
await conn.sendMessage(msg.from,{image: thumb, caption:`_*Downloading ${result.result.title}*_\n\n*©TOXIC-KICHUX || XERO-MD*`},{quoted:msg});
return await conn.sendMessage(msg.from,{audio: aud, mimetype : 'audio/mpeg'} , { quoted : msg})
});
