import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  authStatus: boolean | undefined;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router: Router,
              private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuhenticate;
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log("Sign in successfully!");
        this.authStatus = this.authService.isAuhenticate;
        this.router.navigate(['products']);
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuhenticate;
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return "Vous devez entrer une adresse email"
    }

    return this.email.hasError('email') ? "cet email n'est pas valid" : "";
  }

}
