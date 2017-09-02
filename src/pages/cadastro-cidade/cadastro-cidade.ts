import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Cidade } from '../../model/cidade'
import { CidadeProvider } from '../../providers/cidade/cidade'
/**
 * Generated class for the CadastroCidadePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-cidade',
  templateUrl: 'cadastro-cidade.html',
})
export class CadastroCidadePage {

  cidade : Cidade = new Cidade();
  keyCidade = null;
  botaoConfirm : string;
  headerTitulo : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cidadeProvider : CidadeProvider, private toast : ToastController) {
    this.verificarEntrada();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroCidadePage');
  }

  carregarInputs(){
  
  }

  verificarEntrada(){

    if (this.navParams.data.cidade){
      var refCidade = this.navParams.data.cidade;
      this.botaoConfirm = "Atualizar";    
      this.cidade.nome = refCidade.nome;
      this.cidade.estado = refCidade.estado;
      this.cidade.cep = refCidade.cep;
      this.keyCidade = refCidade.$key;
      this.headerTitulo= "Atualizar Cidade";
    }  
    else{
      this.botaoConfirm = "Cadastrar";
      this.headerTitulo = "Cadastrar Cidade";
    }
  }

  cadastroUpdateCidade(){
    let toast = this.toast.create({duration: 3000, position: 'bottom'});
    if (this.keyCidade == null){
      this.cidadeProvider.createCidade(this.cidade);
      toast.setMessage("Cidade criada com sucesso!");
    }
    else{
      this.cidadeProvider.updateCidade(this.keyCidade, this.cidade)
      toast.setMessage("Cidade atualizada com sucesso!");
    }
    toast.present();
    this.navCtrl.pop();
  }

}
