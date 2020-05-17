import BetterSqlite3, {Database} from 'better-sqlite3';
import {init as projectInit} from './models/Project';
import * as fs from "fs";
let db: Database;
const dir = 'db';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, 0o744);
}
export function init(){
    db = BetterSqlite3('db/data_refiner_db')
    projectInit(db);
}

