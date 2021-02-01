"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnaylsis = void 0;
var utils_1 = require("./utils/utils");
var WinAnaylsis = /** @class */ (function () {
    function WinAnaylsis() {
    }
    WinAnaylsis.prototype.run = function (matches) {
        var win = 0;
        var team = 'Man United';
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === 'Man United' && match[5] === utils_1.MatchResult.HomeWin) {
                win++;
            }
            if (match[2] === 'Man United' && match[5] === utils_1.MatchResult.AwayWin) {
                win++;
            }
        }
        return team + " won " + win + " games";
    };
    return WinAnaylsis;
}());
exports.WinAnaylsis = WinAnaylsis;
