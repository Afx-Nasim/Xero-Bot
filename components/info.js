const {clash, runtime} = require("../lib/");
const config = require("../config.js");
const {tiny} = require("@toxickichux/fancytext");

clash({pattern: "ping", fromMe: false, desc: "Info of bot ping.", type: "info",},
async ({msg}) => {
const start = new Date().getTime();
let { key } = await msg.tinyreply("*testing!*");
const end = new Date().getTime();
var speed = end - start;
await msg.tinyreply(`*Response:${speed}ms*`);
});

clash({pattern: "runtime", fromMe: false, desc: "Info of how long the bot is alive.", type: "info",},
async ({msg}) => {
await msg.tinyreply(`*Runtime:${await runtime()}*`);
});

clash({pattern: "alive", fromMe: false, desc: "check if bot running", type: "info",},
async ({msg,conn}) => {
await conn.sendMessage(msg.from ,  { image : { url : config.ALIVE_LOGO} ,  caption : config.ALIVE_MSG } , { quoted : msg } )
});

clash({pattern: "sc" , fromMe: false, desc: "Show the source code of the bot", type: "info", react: "💌",},
async ({msg,conn}) => {
await msg.reply("*Thank You For Choosing Me*\n\n *SourceCode:* \n\n *https://GitHub.com/Afx-Nasim/Xero-Md*\n\n\n*© XERO-MD*")
});
