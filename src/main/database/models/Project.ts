import {Database, Statement} from 'better-sqlite3';
import { v4 as uuidv4 } from 'uuid';
let database: Database;
let insertStatement:Statement;
let collectionStatement:Statement;
function init(db: Database) {
    database = db;
    database.prepare('CREATE TABLE IF NOT EXISTS project (id TEXT PRIMARY KEY, name TEXT);').run();
    insertStatement = database.prepare('INSERT INTO project (id, name) VALUES (@id, @name)');
    collectionStatement = database.prepare('SELECT id, name FROM project');
}

function get(id: string) {

}
function getCollection(){
    return collectionStatement.all();
}

function create(name: string) {
    console.log(name);
    insertStatement.run({
        id: uuidv4(),
        name
    })
}

export default {
    init,
    get,
    getCollection,
    create
}