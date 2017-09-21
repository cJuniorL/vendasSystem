import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cliente } from '../../model/cliente'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

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
      telefone1: cliente.telefone1,
      telefone2: cliente.telefone2,
      keyCidade: cliente.keyCidade,
      bairro: cliente.bairro,
      rua: cliente.rua,
      num: cliente.num
    });
  }

  update(key, cliente){
    return this.cliente$.update(key, {
      nome: cliente.nome,
      telefone1: cliente.telefone1,
      telefone2: cliente.telefone2,
      keyCidade: cliente.keyCidade,
      bairro: cliente.bairro,
      rua: cliente.rua,
      num: cliente.num
    });
  }

  listCliente(){
    return this.cliente$;
  }

  removerCliente(key){
    this.cliente$.remove(key);
  }

}
