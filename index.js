const Discord = require('discord.js');
const client = new Discord.Client();
const {token} = require('./config.json');
const parseCommandString = require("./commands");
const ActionQueue = require("./ActionQueue");

const actionQueue = new ActionQueue();

client.once('ready', () => console.log('Ready!'));

function handleMessage(msg) {
    let action = parseCommandString(msg.content);
    actionQueue.add(action);
}

client.on("message", handleMessage);

client.login(token);

/*
//formats a template literal as a discord message object, for testing.
function d(strs) {
    return {content: strs.join()}
}

handleMessage(d`a 5`);
handleMessage(d`a 5s`);
handleMessage(d`a`);
*/
