import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { User } from '../../providers/auth/user'
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth'

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  user: User = new User();
 
  
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   private toastCtrl: ToastController,
   private authProvider: AuthProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  novoRegistro(){
     let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' }); //Cria uma notificação demonstrando uma mensagem.
     
     this.authProvider.createUser(this.user)  //Envia o usuário para inserção
     .then((user: any) => {
          user.sendEmailVerification();
          toast.setMessage('Usuário criado com sucesso.'); 
          toast.present(); //Apresenta o toast
          this.navCtrl.push(LoginPage);
     })
     .catch((error: any) => {
          if (error.code  == 'auth/email-already-in-use') {
            toast.setMessage('O e-mail digitado já está em uso.');
          } else if (error.code  == 'auth/invalid-email') {
            toast.setMessage('O e-mail digitado não é valido.');
          } else if (error.code  == 'auth/operation-not-allowed') {
            toast.setMessage('Não está habilitado criar usuários.');
          } else if (error.code  == 'auth/weak-password') {
            toast.setMessage('A senha digitada é muito fraca.');
          }
          toast.present();
     });
     //Os erros podem ser visto através do link a qual possui a documentação do método
     //Agora eu entendo porque é importante  estar programando com a documentação aberta xD
     //https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword
     
  }

  cancelarRegistro(){
    this.navCtrl.push(LoginPage);
  }


}
