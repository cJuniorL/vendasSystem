import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RegistrarPage } from '../pages/registrar/registrar';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListarCidadePage } from '../pages/listar-cidade/listar-cidade';
import { InserirClientePage } from '../pages/inserir-cliente/inserir-cliente';
import { ListarClientePage } from '../pages/listar-cliente/listar-cliente';
import { ListarProdutoPage } from '../pages/listar-produto/listar-produto';
import { ListarPedidoClientePage } from '../pages/listar-pedido-cliente/listar-pedido-cliente';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.iniciarApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Cidades', component: ListarCidadePage },
      { title: 'Clientes', component: ListarClientePage},
      { title: 'PEdidos de Cliente', component}
      { title: 'Produtos', component: ListarProdutoPage}
    ];
  }

  iniciarApp(){
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  abrirPagina(page){
    this.nav.setRoot(page.component)
  }
}

