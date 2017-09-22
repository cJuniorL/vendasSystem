import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Produto } from '../../model/produto';
import { ProdutoProvider } from '../../providers/produto/produto';

@IonicPage()
@Component({
  selector: 'page-cadastro-produto',
  templateUrl: 'cadastro-produto.html',
})
export class CadastroProdutoPage {

  produto : Produto = new Produto();
  botaoConfirm : string;
  header : string;
  keyProduto : string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private pProvider : ProdutoProvider, private toast : ToastController) {
    this.verificarEntrada();
  }

  verificarEntrada(){
      if (this.navParams.data.produto){
        let ref = this.navParams.data.produto;
        this.botaoConfirm = "Editar";   
        this.header = "Editar Produto";   
        this.keyProduto = ref.$key;
        this.produto.nome = ref.nome;  
        this.produto.valorVenda = ref.valorVenda;
      }
      else{
        this.botaoConfirm = "Gravar";
        this.header = "Novo Produto";
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroProdutoPage');
  }

  cadastroUpdateProduto(){
    this.produto.arrumarNull();
    let toast = this.toast.create({duration: 3000, position: 'bottom'});
    if (this.keyProduto == ""){
      this.pProvider.create(this.produto);
      toast.setMessage("Produto Criado com Sucesso!");
    }
    else{
      this.pProvider.update(this.keyProduto ,this.produto);
      toast.setMessage("Produto Atualizado com Sucesso!");
    }
    toast.present();
    this.navCtrl.pop();
  }
}
