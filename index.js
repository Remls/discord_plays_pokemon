const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');
var emu = require("robotjs");

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    let lower = message.content.toLowerCase()
    let args = lower.trim().split(' ')

    if(args.length == 1) {
        switch(message.content) {
            case 'a':
                emu.keyTap('a')
                break
            case 'b':
                emu.keyTap('b')
                break
            case 'x':
                emu.keyTap('x')
                break
            case 'y':
                emu.keyTap('y')
                break
            case 'up':
                emu.keyTap('up')
                break
            case 'left':
                emu.keyTap('left')
                break
            case 'down':
                emu.keyTap('down')
                break
            case 'right':
                emu.keyTap('right')
                break
            default:
                break
        }
    } else if (args[1] == 'on' || args[1] == 'off') {
        if (args[1] == 'on'){
            emu.keyToggle('b', 'down')
            message.channel.send('Run is toggled **ON**')
        } else {
            emu.keyToggle('b', 'up')
            message.channel.send('Run is toggled **OFF**')
        }

    } else if (args[2] == 'seconds' || args[2] == 's'){
        if(args[0] == 'up' || args[0] == 'down' || args[0] == 'left' || args[0] == 'right' || args[0] == 'a' || args[0] == 'b' || args[0] == 'x' || args[0] == 'y') {
            timeCommands(args[0], args[1])
        }  

    } else{
        if(args[0] == 'up' || args[0] == 'down' || args[0] == 'left' || args[0] == 'right' || args[0] == 'a' || args[0] == 'b' || args[0] == 'x' || args[0] == 'y') {
            loopCommands(args[0], args[1])
        }   
    }
});

function timeCommands(key, number) {
    let time = number * 1000

    var interval = setInterval(function () {
        emu.keyToggle(key, 'down')
    }, 0);
    
    setTimeout(function() {
        clearInterval(interval);
        emu.keyToggle(key, 'up')
    }, time);
}

function loopCommands (key, number) {
    let i;
    for (i = 0; i < number; i++){
        emu.keyTap(key)
    }
}

client.login(token);