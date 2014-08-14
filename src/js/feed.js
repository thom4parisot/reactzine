'use strict';

var xhr = require('xhr');

module.exports = {
  get: function(url, onSuccess, onError){
    xhr({ url: url, json: true, timeout: 1000 }, function(err, response, body){
      if (err){
        if (typeof onError === 'function'){
          return onError(err);
        }
        else {
          throw Error(err);
        }
      }

      onSuccess(body);
    });
  }
};