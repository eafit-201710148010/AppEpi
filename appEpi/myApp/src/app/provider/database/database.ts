import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {SQLite, SQLiteObject} from 'ionic-native/sqlite';

@Injectable()
export class DatabaseProvider{

    private db: SQLiteObject;
    private idOpen : boolean;

    constructor(
        public http: HttpClient,
        public storage: SQLite
        ){
            if(!this.isOpen){
                this.storage = new SQLite();
                this.storage.create({name: "data.db", location:"default"}).them((db:SQLiteObject) => {
                    this.db = db;
                    db.executesql("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, usuario TEXT, contraseña TEXT ", []);
                    this.isOpen = true;
                }).catch((error) => {
                    console.log(error);
                })
            }
        
    }
}