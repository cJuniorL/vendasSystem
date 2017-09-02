import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController} from 'ionic-angular';
import { CidadeProvider } from '../../providers/cidade/cidade';
import { FirebaseListObservable } from 'angularfire2/database';
import { CadastroCidadePage } from '../cadastro-cidade/cadastro-cidade'
import { ViewCidadePage } from '../view-cidade/view-cidade';

@IonicPage()
@Component({
  selector: 'page-listar-cidade',
  templateUrl: 'listar-cidade.html',
})
export class ListarCidadePage {

  cidade : FirebaseListObservable<any[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private cidadeProvide: CidadeProvider, private alert : AlertController, private modal : ModalController) {
    this.cidade = cidadeProvide.listCidade();
  }

  updateCidade(cidade){
    this.navCtrl.push(CadastroCidadePage, {cidade: cidade})
  }

  removeCidade(cidade){
    var key = cidade.$key
    let confirm = this.alert.create({
      title: "Remover cidade?",
      message: "Deseja remover a cidade de " + cidade.nome + "?",
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "Remover",
          handler: () =>
          {
            this.cidadeProvide.removeCidade(cidade.$key);
          }
        }
      ]
    });
    confirm.present();
  }

  adicionarCidade(){
    this.navCtrl.push(CadastroCidadePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarCidadePage');
  }

  showModal(cidade){
    let modal = this.modal.create(ViewCidadePage, cidade);
    modal.present();
  }
}
