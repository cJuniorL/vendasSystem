import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar'
import { User } from '../../providers/auth/user'
import { AuthProvider } from '../../providers/auth/auth'
import { HomePage } from '../home/home'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User = new User();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider : AuthProvider,
    private toast : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  criarConta(){
    this.navCtrl.push(RegistrarPage)
  }

  teste(){
    alert(this.user.email + " " + this.user.senha)
  }

  logarConta(){
    let toast = this.toast.create({ duration: 3000, position: 'bottom' });
    this.authProvider.loginUser(this.user).then((user: any) => {
      toast.setMessage("Login realizado");
      toast.present();
      this.navCtrl.setRoot(HomePage);
    })
    .catch((erro : any) => {
      if (erro.code == "auth/invalid-email"){
        toast.setMessage("E-mail não cadastrado");
      }
      else if (erro.code == "auth/user-disabled"){
        toast.setMessage("Usuário desabilitado");
      }
      else if (erro.code == "auth/user-not-found"){
        toast.setMessage("Usuário não encontrado");
      }
      else if (erro.code == "auth/wrong-password"){
        toast.setMessage("Senha incorreta");
      }
      toast.present();
    });

  }

}
