import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cidade } from '../../model/cidade';
import { CidadeProvider } from '../../providers/cidade/cidade';

@IonicPage()
@Component({
  selector: 'page-view-cidade',
  templateUrl: 'view-cidade.html',
})

export class ViewCidadePage {

  cidade : Cidade;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  private cidadeProvider : CidadeProvider) {
    this.cidade = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewCidadePage');
  }

}
