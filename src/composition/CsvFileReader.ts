import fs from 'fs';

export class CsvFileReader {
    constructor(private fileName: string) { }
    read(): string[][] {
        return fs.readFileSync(this.fileName, { encoding: 'utf-8' })
            .split("\n").map((row: string) => {
                return row;
            }).map((row: string) => {
                return row.split(',');
            });
    }
}