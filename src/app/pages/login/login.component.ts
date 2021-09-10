import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../interfaces";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {specialRegExp, upperCaseRegExp, lowerCaseRegExp} from '../../utils/constants'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  savePassword = true;
  form!: FormGroup

  public uEmail = localStorage.getItem('u-email') || ''
  public uPassword = localStorage.getItem('u-password') || ''

  // private upperCase = /[A-Z]/;
  // private lowerCase = /[a-z]/;
  // private special = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;
  //
  private upperCase = upperCaseRegExp
  private lowerCase = lowerCaseRegExp
  private special = specialRegExp

  constructor (
    private auth: AuthService,
    private router: Router
  ) { }

  public emailCheck(): boolean {
    if (this.form.get('email')?.value.includes('.com')) {
      this.uEmail = this.form.get('email')?.value
      return false
    }
    if (this.form.get('email')?.value.includes('.ru')) {
      this.uEmail = this.form.get('email')?.value
      return false
    }
    if (this.form.get('email')?.value.includes('.ua')) {
      this.uEmail = this.form.get('email')?.value
      return false
    }
    if (this.form.get('email')?.value.includes('dot.net')) {
      this.uEmail = this.form.get('email')?.value
      return false
    }
    if (!this.form.get('email')?.value) {
      return false
    }
    return true

  }

  passwordCheck(): boolean {
    if(this.upperCase.test(this.form.get('password')?.value) &&
       this.lowerCase.test(this.form.get('password')?.value) &&
       this.special.test(this.form.get('password')?.value)
    ) {
      return true
      this.uPassword = this.form.get('password')?.value
    } else {
      return false
    }
  }

  initializeForm() {
    this.form = new FormGroup({
      email: new FormControl(this.uEmail, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.uPassword, [
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }

  ngOnInit(): void {
    this.initializeForm()

  }

  public submit(): void {
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

    if(this.savePassword) {
      localStorage.setItem('u-email', this.form.get('email')?.value)
      localStorage.setItem('u-password', this.form.get('password')?.value)
    } else {
      localStorage.removeItem('u-email')
      localStorage.removeItem('u-password')
    }
    localStorage.setItem('save-password', this.savePassword.toString())

  }

  redirectToSignUp() {
    this.router.navigate(['sign-up'])
  }
}
