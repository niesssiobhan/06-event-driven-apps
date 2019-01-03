'use strict';

jest.mock('fs');

const file = require('../lib/files.js');
console.log('file', file);

describe('files module', () => {
  it('can load a file', () => {
    return file.loadFile('foo.txt')
    .then(contents => {
      expect(Buffer.isBuffer(contents)).toBeTruthy();
    });
  });

  it('can save a file', () => {
    const str = 'test words';
    const b = Buffer.from(str);
    return file.saveFile('foo.txt', b)
      .then(success => {
        expect(success).toBeUndefined();
      })
      .catch(err => {
        expect(err).toBeDefined();
      });
  });

  it('can uppercase a buffer', () => {
    const str = 'test words';
    const STR = 'TEST WORDS';
    const b = Buffer.from(str);
    const B = Buffer.from(STR);
    expect(file.convertBuffer(b)).toEqual(B);
    });

  it('can alter a file', () => {
    return file.alterFile('foo.txt')
    .then(success => {
      expect(success).toBeTruthy();
    })
    .catch(err => expect (err).toBeUndefined());
  });

  it('raises an error given a bad file', () => {
    return file.alterFile(undfined)
    .then(success => {
      expect(success).toBeFalsy();
    })
    .catch(err => expect(err).toBeDefined());
  });

});