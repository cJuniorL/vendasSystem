import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente} from '../../model/cliente';
import { CidadeProvider } from '../../providers/cidade/cidade';
import { FirebaseListObservable } from 'angularfire2/database';
import {  ClienteProvider } from '../../providers/cliente/cliente';

@IonicPage()
@Component({
  selector: 'page-inserir-cliente',
  templateUrl: 'inserir-cliente.html',
})
export class InserirClientePage {

  cliente : Cliente = new Cliente();
  cidades : FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private cidadeProvider : CidadeProvider, private clienteProvider : ClienteProvider) {
    this.cidades = this.cidadeProvider.listCidade();
  }

  cadastroUpdateCliente(){
    this.clienteProvider.create(this.cliente);
    alert("Cliente adicionado");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InserirClientePage');
  }

}
