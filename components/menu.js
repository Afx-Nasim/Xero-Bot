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
╠» Owner : ${config.OWNER_NAME}
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
menu += `\n ➪  ${cmd.trim()}`
});
menu += `\n`;
});
var _0x1026c5=_0x5465;function _0x5465(_0x5d4a0c,_0x4446fe){var _0x19f7b8=_0x19f7();return _0x5465=function(_0x546511,_0x1b3027){_0x546511=_0x546511-0x1d8;var _0x5b2443=_0x19f7b8[_0x546511];return _0x5b2443;},_0x5465(_0x5d4a0c,_0x4446fe);}(function(_0x171f8c,_0x1f4c0e){var _0x488f0c=_0x5465,_0x56916b=_0x171f8c();while(!![]){try{var _0x1a2488=-parseInt(_0x488f0c(0x1e4))/0x1+parseInt(_0x488f0c(0x1e3))/0x2+parseInt(_0x488f0c(0x1d8))/0x3*(parseInt(_0x488f0c(0x1da))/0x4)+-parseInt(_0x488f0c(0x1dc))/0x5*(parseInt(_0x488f0c(0x1db))/0x6)+-parseInt(_0x488f0c(0x1e1))/0x7*(-parseInt(_0x488f0c(0x1e0))/0x8)+parseInt(_0x488f0c(0x1dd))/0x9*(parseInt(_0x488f0c(0x1df))/0xa)+parseInt(_0x488f0c(0x1d9))/0xb;if(_0x1a2488===_0x1f4c0e)break;else _0x56916b['push'](_0x56916b['shift']());}catch(_0x2b8260){_0x56916b['push'](_0x56916b['shift']());}}}(_0x19f7,0x9488a));function _0x19f7(){var _0x219648=['710YHcwwe','824600kAVtFH','28rqKMhf','sendMessage','923448MrKXKN','470582ARxcCL','6000KdYwTS','5800355dfdLMq','356QQZQcT','4840734YfwcBd','5WJGIFN','38844gOCUBg','from'];_0x19f7=function(){return _0x219648;};return _0x19f7();}return await conn[_0x1026c5(0x1e2)](msg[_0x1026c5(0x1de)],{'image':{'url':config['THUMB_NAIL']},'caption':tiny(menu)},{'quoted':msg});
});
