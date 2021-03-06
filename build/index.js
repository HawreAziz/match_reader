"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./composition/CsvFileReader");
var MatchReader_1 = require("./composition/MatchReader");
var WinAnalysis_1 = require("./WinAnalysis");
var HtmlTarget_1 = require("./HtmlTarget");
var Summary_1 = require("./Summary");
var matchReader = new MatchReader_1.MatchReader(new CsvFileReader_1.CsvFileReader('src/football.csv'));
var matches = matchReader.parse();
var summary = new Summary_1.Summary(new WinAnalysis_1.WinAnaylsis(), new HtmlTarget_1.HtmlTarget());
summary.generateReport(matches);
