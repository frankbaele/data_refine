import parse, {Options} from 'csv-parse';
import {createReadStream} from 'fs';

export async function readRows(file: string, rows: number, options: Options): Promise<any[]> {
    const result: any[] = [];
    const parser = parse(options);
    const readableStream = await createReadStream(file);
    const stream = readableStream.pipe(parser);
    let i = 0;
    return new Promise((resolve, reject) => {
        try {
            stream
                .on('data', function (item) {
                    i++;
                    if(i < rows){
                        result.push(item);
                    }
                    if (i === rows) {
                        readableStream.close();
                        resolve(result);
                    }
                })
                .on('end', () => {
                    resolve(result);
                })
                .on('error', e => {
                    console.log(e);
                });
        } catch (e) {
            reject(e);
        }
    });
}