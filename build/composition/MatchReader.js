"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("../utils/utils");
var MatchReader = /** @class */ (function () {
    function MatchReader(parser) {
        this.parser = parser;
    }
    MatchReader.prototype.parse = function () {
        var data = this.parser.read();
        return data.map(function (row) {
            return [
                utils_1.parseStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
