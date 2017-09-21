import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Cliente } from '../../model/cliente';
import { CidadeProvider } from '../../providers/cidade/cidade';
import { FirebaseListObservable } from 'angularfire2/database';
import { ClienteProvider } from '../../providers/cliente/cliente';

@IonicPage()
@Component({
  selector: 'page-inserir-cliente',
  templateUrl: 'inserir-cliente.html',
})
export class InserirClientePage {

  cliente : Cliente = new Cliente();
  keyCliente = null;
  cidades : FirebaseListObservable<any[]>;
  headerTitle : string;
  btnConfirm : string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private cidadeProvider : CidadeProvider, private clienteProvider : ClienteProvider, public toast : ToastController) {
    this.cidades = this.cidadeProvider.listCidade();
    this.verificarEntrada();
  }

  verificarEntrada(){
    if (this.navParams.data.cliente){ //true = possui um parametro de cliente passado
      this.headerTitle = "Atualizar Cliente";
      this.cliente = this.navParams.data.cliente;
      this.btnConfirm = "ATUALIZAR";
      this.keyCliente = this.navParams.data.cliente.$key;
    }
    else{
      this.headerTitle = "Inserir Cliente";
      this.btnConfirm = "GRAVAR";
    }
  }

  cadastroUpdateCliente(){
    let toast = this.toast.create({duration: 3000, position: 'bottom'});
    if (this.keyCliente == null){
      this.cliente.arrumarNull();
      this.clienteProvider.create(this.cliente);
      toast.setMessage("Cliente criado com sucesso!");
    }
    else{
      this.clienteProvider.update(this.keyCliente, this.cliente);
      toast.setMessage("Cliente Atualizado com Sucesso");
    }
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InserirClientePage');
  }

}
