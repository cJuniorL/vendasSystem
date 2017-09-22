import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';
import { FirebaseListObservable } from 'angularfire2/database';
import { CadastroProdutoPage } from '../cadastro-produto/cadastro-produto';
/**
 * Generated class for the ListarProdutoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-produto',
  templateUrl: 'listar-produto.html',
})
export class ListarProdutoPage {

  produtos : FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private prodProvider : ProdutoProvider) {
    this.produtos = prodProvider.getProduto();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarProdutoPage');
  }

  criarProduto(){
    this.navCtrl.push(CadastroProdutoPage);
  }

  updateProduto(produto){
    this.navCtrl.push(CadastroProdutoPage, { 
      produto : produto });
  }
}
