import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';
import { HomePage } from '../pages/home/home';
import { ListarCidadePage } from '../pages/listar-cidade/listar-cidade';
import { CadastroCidadePage } from '../pages/cadastro-cidade/cadastro-cidade';
import { ViewCidadePage} from '../pages/view-cidade/view-cidade';
import { InserirClientePage } from '../pages/inserir-cliente/inserir-cliente';
import { ListarClientePage } from '../pages/listar-cliente/listar-cliente';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { CidadeProvider } from '../providers/cidade/cidade';
import { ClienteProvider } from '../providers/cliente/cliente';

const firebaseConfig = {
     apiKey: "AIzaSyAyqa0oSYtq8DTC2YHlTh6TtiTnr5g8d2M",
    authDomain: "projetobegs.firebaseapp.com",
    databaseURL: "https://projetobegs.firebaseio.com",
    projectId: "projetobegs",
    storageBucket: "projetobegs.appspot.com",
    messagingSenderId: "31699361822"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage,
    ListarCidadePage,
    CadastroCidadePage,
    ViewCidadePage,
    InserirClientePage,
    ListarClientePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage,
    ListarCidadePage,
    CadastroCidadePage,
    ViewCidadePage,
    InserirClientePage,
    ListarClientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AngularFireAuth,
    AuthProvider,
    CidadeProvider,
    ClienteProvider
  ]
})
export class AppModule {}
