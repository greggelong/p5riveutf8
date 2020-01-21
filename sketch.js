// run locally make a server at the directory 
// python3 -m http.server 8888
// modified to utf8 and variable handling by greg k
// A2Z F18
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F18

function setup() {
  noCanvas();

  // Create a RiveScript bot
  const bot = new RiveScript({utf8: true});

  // Load the bot files (this can be more than one)
  const files = ['brainutf8/hello.rive','brainutf8/begin.rive','brainutf8/knockknock.rive','brainutf8/move.rive'];

  bot.loadFile(files)
    .then(() => {
      console.log("Bot loaded");
      bot.sortReplies();
    })
    .catch(error => console.error(error));

  // Grab some DOM elements
  const button = select('#submit');
  const input = select('#textinput');
  const output = select('#bot');

  // Whenever the user hits "submit" ask the bot to say something
  button.mousePressed(() => {
    // What did the user say?
    const txt = input.value();
    // What does the bot say?
    bot.reply("local-user",txt)  // this is missing from the shiffman web site
      .then(function(reply){     // anonymous function in a promise
  	 output.html(reply);
  	 input.value('');  // clear input
  	 console.log("boing");})
      .catch(error => console.error(error));
  });


 
  }
