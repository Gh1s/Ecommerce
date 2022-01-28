import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  authStatus: boolean = false;
  //email = new FormControl('');
  password!: NgForm ;
  email!: NgForm ;
  onSignInForm!: FormGroup;

  constructor(private router: Router,
              private authService: AuthenticationService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //this.authStatus = this.authService.isAuhenticate;
    this.initForm();
  }

  onSignIn() {
    const email = this.onSignInForm.get('email')?.value;
    const password = this.onSignInForm.get('password')?.value;

    //this.authService.signIn(this.email.value['email'], this.password.value['password']).then(
    this.authService.signIn(email, password).then(
      () => {
        console.log("Sign in successfully!");
        this.authStatus = true;
        this.router.navigate(['products']);
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = false;
  }


  initForm() {
    this.onSignInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }
}
