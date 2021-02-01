import { Analyzer } from './Summary';
import { MatchData, MatchResult } from './utils/utils';




export class WinAnaylsis implements Analyzer {
    run(matches: MatchData[]): string {
        let win = 0;
        const team = 'Man United';
        for (const match of matches) {
            if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
                win++;
            }
            if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
                win++;
            }
        }
        return `${team} won ${win} games`;
    }
}