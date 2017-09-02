import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { ClienteProvider } from '../../providers/cliente/cliente';


@IonicPage()
@Component({
  selector: 'page-listar-cliente',
  templateUrl: 'listar-cliente.html',
})
export class ListarClientePage {

  clientes : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cProvider : ClienteProvider, public alert : AlertController) {
    this.clientes = cProvider.listCliente();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarClientePage');
  }

  adicionarCliente(){

  }

  updateCliente(cliente){

  }

  removerCliente(cliente){
    var key = cliente.$key
    let confirm = this.alert.create({
      title: "Remover Cliente?",
      message: "Deseja remover o cliente " + cliente.nome + "?",
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "Remover",
          handler: () =>
          {
            this.cProvider.removerCliente(cliente.$key);
          }
        }
      ]
    });
    confirm.present();
  }

}
