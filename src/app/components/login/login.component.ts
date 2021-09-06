import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../interfaces";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  savePassword = true;
  form!: FormGroup

  upperCase = /[A-Z]/;
  lowerCase = /[a-z]/;
  special = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  emailCheck(): boolean {
    if (this.form.get('email')?.value.includes('.com')) {
      return false
    }
    if (this.form.get('email')?.value.includes('.ru')) {
      return false
    }
    if (this.form.get('email')?.value.includes('.ua')) {
      return false
    }
    if (this.form.get('email')?.value.includes('dot.net')) {
      return false
    }
    if (!this.form.get('email')?.value) {
      return false
    }
    return true
  }

  passwordCheck() {
    if(this.upperCase.test(this.form.get('password')?.value) &&
       this.lowerCase.test(this.form.get('password')?.value) &&
       this.special.test(this.form.get('password')?.value)
    ) {
      return true
    } else {
      return false
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
     const user: User = {
       email: this.form.value.email,
       password: this.form.value.password,
       returnSecureToken: true
     }

    this.auth.login(user).subscribe(response => {
      //console.log(response)
      this.form.reset()
      this.router.navigate(['hero-pick'])
    })
  }
}
