import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable()
export class DatabaseProvider<T> {
  private key: string;
  private ref: any;

  constructor(private db: AngularFireDatabase) {
    console.log('Hello DatabaseProvider Provider');
  }

  get(key: string){
    this.key = key;
    this.ref = this.db.list<T>(key);
    return this.ref;
  }

  add(obj: any){
    return this.ref.push(obj);
  }

  edit(obj: any){
    return this.ref.update(obj.key, obj)
  }

  remove(obj: any){
    return this.ref.remove(obj.key);
  }
}
