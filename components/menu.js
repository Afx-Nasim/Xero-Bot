const {commands, clash, formatp} = require("../lib/");
const config = require("../config.js");
const os = require("os");
const now = require("performance-now");
const {tiny} = require("@toxickichux/fancytext");
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

clash({pattern: "menu", fromMe: false, desc: "Show all bot commands.", type: "info",},
async ({msg, conn}) => {
const speed = now() - now();
let [date, time] = new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata"}).split(",");
let menu = `   ╔════════════╗
                ${config.BOT_NAME.toLowerCase()}
   ╚════════════╝

╔══════════════╗
╠» Owner : ${config.OWNER_NAME}
╠» mode :${config.WORK_TYPE.toLowerCase()}
╠» Date : ${date}
╠» Time : ${time}
╠» Commands :${commands.length}
╚══════════════╝
${readMore}\n`
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
menu += `\n ➪  ${cmd.trim()}`
});
menu += `\n`;
});
return await conn.sendMessage(msg.from, {image:{url:config.THUMB_NAIL}, caption:tiny(menu)}, {quoted:msg});
});
