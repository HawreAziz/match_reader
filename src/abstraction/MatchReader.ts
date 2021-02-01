import { CsvFileReader } from './CsvFileReader';
import { parseStringToDate, MatchData, MatchResult } from '../utils/utils';







export class MatchReader extends CsvFileReader<MatchData> {
    parse(row: string[]): MatchData {
        return [
            parseStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6],
        ]
    }
}


