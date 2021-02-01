

export const parseStringToDate = (dateStr: string): Date => {
    const [year, month, day] = dateStr.split('/').reverse().map((col: string) => {
        return parseInt(col);
    });
    return new Date(year, month - 1, day);
}


export type MatchData = [Date, string, string, number, number, string, string];


export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}