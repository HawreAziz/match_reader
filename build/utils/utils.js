"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = exports.parseStringToDate = void 0;
var parseStringToDate = function (dateStr) {
    var _a = dateStr.split('/').reverse().map(function (col) {
        return parseInt(col);
    }), year = _a[0], month = _a[1], day = _a[2];
    return new Date(year, month - 1, day);
};
exports.parseStringToDate = parseStringToDate;
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
