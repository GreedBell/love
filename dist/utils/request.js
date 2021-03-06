'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (uri, options) {
    var promise = new Promise(function (resolve, reject) {
        _request(uri, options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
        });
    });
    return promise;
};

/**
 * Created by Bell on 16/6/22.
 */

var _request = require('request');
//# sourceMappingURL=request.js.map
