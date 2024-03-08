const { clash, runtime } = require("../lib/");
const { tiny } = require("@toxickichux/fancytext");

clash({ pattern: "ping", fromMe: false, desc: "Info of bot ping.", type: "info" },
  async ({ msg }) => {
    const start = new Date().getTime();
    const message = await msg.tinyreply("*Ping!*");
    const end = new Date().getTime();
    const speed = end - start;
    await msg.editmsg(tiny(`*Rapidity: ${speed}ms*`), message.key);
  });


clash({ pattern: "runtime", fromMe: false, desc: "Info of how long the bot is alive.", type: "info" },
  async ({ msg }) => {
    await msg.tinyreply(`*Runtime: ${await runtime()}*`);
  });
