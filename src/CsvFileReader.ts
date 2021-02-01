import fs from 'fs';

export class CsvFileReader {
    constructor(private fileName: string) { }
    read(): string[][] {
        const data = fs.readFileSync(this.fileName, { encoding: 'utf-8' });
        return data.split("\n").map((row: string) => {
            return row;
        }).map((row: string) => {
            return row.split(',');
        })
    }
}