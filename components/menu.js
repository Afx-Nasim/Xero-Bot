const {commands, clash, formatp} = require("../lib/");
const config = require("../config.js");
const os = require("os");
const now = require("performance-now");

clash({pattern: "menu", fromMe: false, desc: "Show all bot commands.", type: "info",},
async ({msg}) => {
const speed = now() - now();
let [date, time] = new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata"}).split(",");
let menu = `   ╔════════════╗
                ${config.BOT_NAME.toLowerCase()}
   ╚════════════╝

╔══════════════╗
╠»Owner : ${config.OWNER_NAME}
╠» mode :${config.WORK_TYPE.toLowerCase()}
╠» Date : ${date}
╠» Time : ${time}
╠» Commands :${commands.length}
╚══════════════╝\n`
let cmnd = [];
let cmd;
let category = [];
commands.map((clash) => {
if (clash.pattern) {
cmd = clash.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
}
if (!clash.dontAddCommandList && cmd !== undefined) {
let type;
if (!clash.type) {
type = "misc";
} else {
type = clash.type.toLowerCase();
}
cmnd.push({cmd, type: type});
if (!category.includes(type)) category.push(type);
}
});
cmnd.sort();
category.sort().forEach((cmmd) => {
menu += `╔══════════════╗\n╠═ ⪼ ${cmmd.toLowerCase()}
╚══════════════╝`;
let comad = cmnd.filter(({ type }) => type == cmmd);
comad.forEach(({cmd}, num) => {
menu += `\n*  ${(num += 1)}:${cmd.trim()}`
});
menu += `\n`;
});
  let text = align(txt, centerAlign);
        *return await client.sendMessage(m.jid , { text : `${menu}` , contextInfo: { externalAdReply: { title: font.tiny(`Hey there  ${m.pushName}`), sourceUrl: "ʜᴇᴍ", mediaUrl: "https://instagram.com/_viper.x0_", mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true, thumbnailUrl: "https://i.imgur.io/3T1zSxj_d.webp?maxwidth=640&shape=thumb&fidelity=medium" }} }, {quoted: m })
return await msg.tinyreply(menu);
});
