'use strict';

let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');

// Configure the bot API endpoint, details for your bot

// heckingcat
let bot = new Bot({
    username: 'heckingcat',
    apiKey: 'ecd601c9-62d1-4bf9-a27b-8341569e6935',
    baseUrl: 'https://damp-brushlands-59548.herokuapp.com/'
  });

  bot.updateBotConfiguration();

  bot.send(Bot.Message.text('ayylmao'), 'konekoooo');


  //bot.onTextMessage((incoming, bot) => {
  //     incoming.reply('Hi');
  // });

  bot.onTextMessage(/^hi|hello|suh dude|suh|howdy|hey$/i, (incoming, next) => {
       incoming.reply('suh dude');
   });

   bot.onTextMessage(/^darn|damn|son|shit|shoot|crap|fuck|heck|kek|dern toot$/i, (incoming, next) => {
        incoming.reply('kekekekek heck');
    });

  bot.onTextMessage(/^yo|oh|lol|lmao|rad$/i, (incoming, next) => {
        incoming.reply('heck');
    });

    bot.onTextMessage(/^oh shit son$/i, (incoming, next) => {
         incoming.reply('kekekekek');
     });

     bot.onTextMessage(/^no|nope|nah|lel no|never|not at all|not$/i, (incoming, next) => {
          incoming.reply('heck u');
      });

  // Set up your server and start listening
  let server = http
      .createServer(bot.incoming())
      .listen(process.env.PORT || 80);
