'use strict';

module.exports = exports = {};

exports.readFile = (file, cd) => {
  if(! file || file.match(/bad/i)) {
    cb('invalid file');
  }
  else {
    cb(undefined, new Buffer('file contents'));
  }
};

exports.writeFile =  (file, buffer, cb) => {
  if(! file || file.match(/bad/i)) {
    cb('invalid file');
  }
  else if(! Buffer.isBuffer(buffer)) {
    cb('invalid buffer', undefined);
  }
  else {
    cb(undefined, undefined);
  }
};