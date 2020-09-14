import { Injectable, NgZone } from '@angular/core';
import { User } from '@model/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private firebaseAuth: AngularFireAuth,
    private toastr: ToastrService
  ) {
    this.firebaseAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  signingWithGoogle() {
    return this.OAuthProvider(new firebase.auth.GoogleAuthProvider());
  }

  OAuthProvider(provider) {
    return this.firebaseAuth.auth.signInWithPopup(provider)
      .then((res) => {
          this.ngZone.run(() => {
           this.toastr.info(`${res.user.displayName}`, 'Welcome', {timeOut: 1000});
           this.router.navigateByUrl('products');
          });
      }).catch((error) => {
        console.error(error);
      });
  }

  signOut() {
    return this.firebaseAuth.auth.signOut().then(() => {
      this.router.navigateByUrl('login');
    });
  }
}
