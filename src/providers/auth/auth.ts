import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {

  constructor(private angularFireAuth: AngularFireAuth) { }

  createUser(user: User){
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.senha);
  }

  loginUser(user: User){
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.senha);
  }

}
