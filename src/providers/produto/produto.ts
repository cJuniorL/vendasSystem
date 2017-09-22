import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Produto } from '../../model/produto'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class ProdutoProvider {

  produto$ : FirebaseListObservable<any>;

  constructor(public http: Http, private database : AngularFireDatabase) {
    this.produto$ = database.list('/produto', {
      query: {
        orderByChild: 'nome'
      }
    });
  }

  getProduto(){
    return this.produto$;
  }

  create(produto){
    return this.produto$.push({
      nome: produto.nome,
      valorVenda: produto.valorVenda,
      urlImagem: produto.urlImagem
    });
  }

  update(key, produto){
    return this.produto$.update(key, {
      nome: produto.nome,
      valorVenda: produto.valorVenda,
      urlImagem: produto.urlImagem
    });
  }
  
  remove(key){
    this.produto$.remove(key);
  }

}
