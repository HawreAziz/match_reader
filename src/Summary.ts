import { MatchData } from './utils/utils';

export interface Analyzer {
    run(data: MatchData[]): string;
}


export interface OutputTarget {
    print(report: string): void;
}


export class Summary {
    constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) { }
    generateReport(matches: MatchData[]): void {
        this.outputTarget.print(this.analyzer.run(matches));
    }
}