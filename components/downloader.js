const {clash} = require("../lib/");
const fetch = require("node-fetch");
const axios = require("axios");
const config = require("../config.js);
const { getBuffer } = require('../lib/');

clash({pattern: "insta", fromMe: false, desc: "Download posts from Instagram", type: "downloader",},
async ({args, msg, conn}) => {
if(!args) return await msg.tinyreply("*_Enter instagram post url!_*");
let {key} = await msg.tinyreply("*_Please wait ..._*");
try{
var res = await axios.get(`https://api-viper-x.koyeb.app/api/insta?url=${args}`)
let response = await res.data
for (let i of response.data) {
var type = i.type
//var media = await (await fetch(`${i.url}`)).buffer()
await conn.sendMessage(msg.from,{[type]:{url:i.url}},{quoted:msg});
return await msg.editmsg("*_Downloading Successful!_*", key);
}
} catch (e) {
console.log(e);
msg.editmsg("*_Error!_*", key);
}
});

clash({ pattern: "img", fromMe: false, desc: "Download images", type: "downloader" },
async ({ args, msg, conn }) => {
  if (!args) return await msg.tinyreply("*_Enter a text_*");
  let { key } = await msg.tinyreply("*_Please wait ..._*");
  try {
    const endpoint = `${config.ABHI_API}api/search/gimage?text=${args}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    const searchResults = data.result.searchResults;
    const selectedLinks = selectRandomLinks(searchResults, 5);
    for (let link of selectedLinks) {
      const buffer = await getBuffer(link);
      conn.sendMessage(msg.from, { image: { url: link } }, { quoted: msg });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    conn.sendMessage(msg.from, { text: 'An error occurred while fetching data.' });
  }
});

async function selectRandomLinks(links, count) {
  const selected = [];
  const shuffled = links.sort(() => 0.5 - Math.random());
  for (let i = 0; i < count; i++) {
    selected.push(shuffled[i]);
  }
  return selected;
}
