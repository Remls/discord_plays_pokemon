# Discord Plays Pokemon
A discord bot that uses Robot.js to control the keyboard, and thus an emulator playing Pokemon

Modeled after the ever popular "Twitch Plays Pokemon" this bot allows you to control an emulated Pokemon game using just Discord Commands

Bot is currently set up to play Generation 1-5 games, since it only uses ABXY + arrow keys.

## Setup
1. Create and grab a bot token from Discord. Detailed instructions here: https://discordjs.guide/preparations/setting-up-a-bot-application.html
2. Create a config.json in the root directory (same as index.js) and put in your bot token like so: `{ "token": "your-bot-token" }`
3. Add the bot to your server: https://discordjs.guide/preparations/adding-your-bot-to-servers.html
4. Make sure in whatever emulator you're using (DeSmuME, VisualBoy etc.) that you set the main face buttons and the arrow keys to the corresponding buttons on your keyboard. Ex: `A key for A button, Up arrow for UP key etc.`. (The bot only uses face buttons and arrow keys, so don't worry about start/select L/R etc.)
5. Open the code in something like Visual Studio Code and run `node .` in the terminal, or run a batch file that runs `node .` to start the bot.
6. Open your desired game in your emulator of choice and keep the game focused.
7. On a phone or other computer, type a command into a discord channel that your bot can see. You should see the game react!

## Commands
- `a/b/x/y/up/right/down/left` - Any command used by itself will fire ONCE
- `a 7 s` - holds down the A button for 7 seconds (synchronous, have to wait until finished to issue another command) 
- `a 7` - presses a 7 times (it mashes pretty fast, so inputs can get eaten depending on what the game is doing)
- `run on/off` - toggles whether b is held down (asynchronous - can use other commands once this is toggled)

