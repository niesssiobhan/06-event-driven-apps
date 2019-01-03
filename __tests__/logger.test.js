'use strict';

const events = require('../lib/events.js');
const logger = require('../lib/logger.js');

describe('logger', () => {
  it('throws an error on file-error with payload', () => {
    except(() => {
      logger.err('octopus');
    }).toThrow();
  });

  it('ignores errors on file-error without payload', () => {
    except(() => {
      logger.err(); 
    }).not.toThrow();
  });

  it('logs the payload on file-save', () => {
    let spy = jest.spyOn(console, 'log');
    logger.save('foo');
    expect(spy).toHaveBeenCalledWith('file saved, foo');
    spy.mockRestore();
  });

  it('does not log the payload on file-save without payload', () => {
    let spy = jest.spyOn(console, 'log');
    logger.save();
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

});