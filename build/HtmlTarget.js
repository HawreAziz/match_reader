"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlTarget = void 0;
var fs_1 = __importDefault(require("fs"));
var HtmlTarget = /** @class */ (function () {
    function HtmlTarget() {
    }
    HtmlTarget.prototype.print = function (report) {
        var content = "\n          <html>\n            <body>\n              <div>\n                <h1>Wind analysis</h1>\n                <h3>" + report + "</h3>\n              </div>\n            </body>\n          </html>\n        ";
        fs_1.default.writeFileSync("winAnalysis.html", content, { encoding: 'utf-8' });
    };
    return HtmlTarget;
}());
exports.HtmlTarget = HtmlTarget;
