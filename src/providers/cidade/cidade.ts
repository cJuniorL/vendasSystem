import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cidade } from '../../model/cidade'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class CidadeProvider {

   cidade$: FirebaseListObservable<any>;
   buscaCidade$: FirebaseListObservable<any>;

  constructor(private dataBase : AngularFireDatabase) {
     this.cidade$ = this.dataBase.list('/cidade', {
       query: {
         orderByChild: 'nome'
      }
     });
  }

  createCidade(cidade){
    return this.cidade$.push({
      nome: cidade.nome,
      estado: cidade.estado,
      cep: cidade.cep
    });
  }

  updateCidade(key, cidade){
    return this.cidade$.update(key, {
      nome: cidade.nome,
      estado: cidade.estado,
      cep: cidade.cep
    }); 
  }
  
  listCidade(){
    return this.cidade$;
  }

  removeCidade(key){
    this.cidade$.remove(key);
  }

  getCidade(key){
    let buscaCidade = this.dataBase.list('/cidade/' + key);
  }

 
}
