import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuhenticate = false;

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuhenticate = true;
            resolve(true);
          }, 1000
        );
      }
    );
  }

  signOut() {
    this.isAuhenticate = false;
  }

}
