'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = undefined;

var _bluebird = require('bluebird');

var index = exports.index = function () {
    var ref = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee(ctx) {
        var url, option, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        url = _github2.default.domain + '/repos/greedlab/node-front-template';
                        option = {
                            headers: {
                                'User-Agent': _github2.default.useragent,
                                'Accept': _github2.default.accept
                            }
                        };
                        _context.next = 5;
                        return (0, _request2.default)(url, option);

                    case 5:
                        response = _context.sent;

                        ctx.body = template(path.join(__dirname, '../views/test'), JSON.parse(response));
                        _context.next = 12;
                        break;

                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](0);

                        console.log(_context.t0);

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 9]]);
    }));
    return function index(_x) {
        return ref.apply(this, arguments);
    };
}();

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _github = require('../config/github');

var _github2 = _interopRequireDefault(_github);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Bell on 16/6/16.
 */

var template = require('art-template');
var path = require('path');
var debug = require('debug')('node-front-template:controllers:test');
//# sourceMappingURL=test.js.map
