import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cliente } from '../../model/cliente'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ClienteProvider {

  cliente$ : FirebaseListObservable<any>;

  constructor(public http: Http, private database : AngularFireDatabase) {
    this.cliente$ = this.database.list('/cliente',{
       query: {
         orderByChild: 'nome'
      }
     });
  }

  create(cliente){
    return this.cliente$.push({
      nome: cliente.nome,
      keyCidade: cliente.keyCidade
    });
  }

  listCliente(){
    return this.cliente$;
  }

  removerCliente(key){
    this.cliente$.remove(key);
  }

}
