import { parseStringToDate, MatchData, MatchResult } from '../utils/utils';



interface Parser {
    read(): string[][];
}

export class MatchReader {
    constructor(private parser: Parser) { }
    parse(): MatchData[] {
        const data = this.parser.read();
        return data.map((row: string[]) => {
            return [
                parseStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6],
            ]
        });
    }
}