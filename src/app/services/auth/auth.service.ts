import {Injectable} from '@angular/core';
import {auth} from 'firebase/app';
import {User} from '@model/user';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
  ) {
    this.afAuth.authState.subscribe(user => {
      console.log(`USER: ${user.toJSON()}`);
      this.user = user;
    });
  }

  // Firebase SignInWithPopup
  OAuthProvider(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((res) => {
          this.router.navigateByUrl('products');
      }).catch((error) => {
        window.alert(error);
      });
  }

  signinWithGoogle() {
    return this.OAuthProvider(new auth.GoogleAuthProvider())
      .then(() => {
        console.log('Successfully logged in!');
      }).catch(error => {
        console.error(error);
      });
  }

  signOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigateByUrl('login');
    });
  }
}
