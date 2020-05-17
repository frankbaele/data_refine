import {Database, Statement} from 'better-sqlite3';
import { v4 as uuidv4 } from 'uuid';
let database: Database;
let insertStatement:Statement;
let collectionStatement:Statement;
export function init(db: Database) {
    database = db;
    database.prepare('CREATE TABLE IF NOT EXISTS project (id TEXT PRIMARY KEY, name TEXT);').run();
    insertStatement = database.prepare('INSERT INTO project (id, name) VALUES (@id, @name)');
    collectionStatement = database.prepare('SELECT id, name FROM project');
}

export function get(id: string) {

}
export function getCollection(){
    return collectionStatement.all();
}

export function create(name: string) {
    insertStatement.run({
        id: uuidv4(),
        name
    })
}