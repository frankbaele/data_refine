import BetterSqlite3, {Database} from 'better-sqlite3';
import Project from './models/Project'
let db: Database;
export function init(){
    db = BetterSqlite3('db/data_refiner_db')
    Project.init(db);
}

