import fs from 'fs';
import { CsvFileReader } from './composition/CsvFileReader';
import { MatchReader } from './composition/MatchReader';
import { WinAnaylsis } from './WinAnalysis';
import { ConsoleTarget } from './ConsoleTarget';
import { HtmlTarget } from './HtmlTarget';
import { Summary } from './Summary';



const matchReader = new MatchReader(new CsvFileReader('src/football.csv'));
const matches = matchReader.parse();
const summary = new Summary(new WinAnaylsis(), new HtmlTarget());
summary.generateReport(matches);


