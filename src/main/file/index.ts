import * as csv from './csv'
import {Options} from "csv-parse";


export async function readRows(type:string, file: string, rows: number,  options: Options) {
    let result: any[] = [];
    switch (type) {
        case 'csv':
            result = await csv.readRows(file, rows, options);
            break;
    }
    return result;
}