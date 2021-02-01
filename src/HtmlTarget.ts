import { OutputTarget } from './Summary';
import fs from 'fs';


export class HtmlTarget implements OutputTarget {

    print(report: string): void {
        const content = `
          <html>
            <body>
              <div>
                <h1>Wind analysis</h1>
                <h3>${report}</h3>
              </div>
            </body>
          </html>
        `
        fs.writeFileSync("winAnalysis.html", content, { encoding: 'utf-8' });
    }
}