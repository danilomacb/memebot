require("dotenv").config({ path: __dirname + "/../.env" });

const Discord = require("discord.js");
const Canvas = require("canvas");

const help = require("./help");
const text = require("./text");
const { prefix } = require("../config.json");
const json = require("../list.json");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", message => {
  json.forEach(group => {
    group.itens.forEach(async item => {
      if (message.content === prefix + item) {
        return message.channel.send(
          new Discord.Attachment("images/" + group.category + "/" + item + ".png")
        );
      }
      if (
        message.content === prefix + "big-" + item &&
        (group.category === "pepe" || group.category === "emojis")
      ) {
        const canvas = Canvas.createCanvas(300, 300);
        canvas
          .getContext("2d")
          .drawImage(
            await Canvas.loadImage("./images/" + group.category + "/" + item + ".png"),
            0,
            0,
            300,
            300
          );
        return message.channel.send(
          new Discord.Attachment(canvas.toBuffer(), "big-" + item + ".png")
        );
      }
    });
  });

  help(message);
  text(message);
});

client.login(process.env.TOKEN);
