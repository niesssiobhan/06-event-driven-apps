'use strict';

const events = require('./lib/events.js');
const fs = require('fs');
const logger = require('./lib/logger.js');

let myFile = process.argv.slice(2).shift();

function alterFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) events.emit('error', {file: myFile});
      resolve(data);
    });
  });
}

alterFile(myFile).then((text) => {
  return text.toString().toUpperCase();
}).then ((text) => {
  fs.writeFile(myFile, Buffer.from(text), (err, data) => {
    if(err) events.emit('error', {file: myFile});
    events.emit('saved', {file: myFile});
  });
});

alterFile(myFile);