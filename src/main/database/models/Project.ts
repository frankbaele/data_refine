import {Database, Statement} from 'better-sqlite3';
import { v4 as uuidv4 } from 'uuid';
let database: Database;
let insertStatement:Statement;
let collectionStatement:Statement;
let itemStatement:Statement;
export function init(db: Database) {
    database = db;
    database.prepare('CREATE TABLE IF NOT EXISTS project (id TEXT PRIMARY KEY, name TEXT, file TEXT, imported BOOLEAN);').run();
    insertStatement = database.prepare('INSERT INTO project (id, name, file, imported) VALUES (@id, @name, @file, @imported)');
    collectionStatement = database.prepare('SELECT id, name, file, imported FROM project');
    itemStatement = database.prepare('SELECT id, name, file, imported FROM project where id = ?');
}

export function get(id: string) {
    return itemStatement.get(id);
}
export function getCollection(){
    return collectionStatement.all();
}

export function create({name, file}) {
    insertStatement.run({
        id: uuidv4(),
        name,
        file,
        imported: 0,
    })
}