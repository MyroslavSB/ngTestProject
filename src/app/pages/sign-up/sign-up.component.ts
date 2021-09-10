import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {lowerCaseRegExp, specialRegExp, upperCaseRegExp} from "../../utils/constants";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {newUser, User} from "../../interfaces";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form!: FormGroup

  public uEmail = ''
  public uPassword = ''
  public passwordRepeat = ''

  private upperCase = upperCaseRegExp
  private lowerCase = lowerCaseRegExp
  private special = specialRegExp

  constructor(
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
      this.uPassword = this.form.get('password')?.value
      return true
    } else {
      return false
    }
  }

  similarityCheck(): boolean {
    this.passwordRepeat = this.form.get('passwordRepeat')?.value
    if (this.passwordRepeat === this.uPassword) {
      return false
    } else {
      return true
    }
  }
  initializeForm() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      passwordRepeat: new FormControl('' , [
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
    } else {
      const user: newUser = {
        email: this.uEmail,
        password: this.uPassword
      }
      this.auth.signUp(user)
      localStorage.setItem('u-email', this.uEmail)
      localStorage.setItem('u-password', this.uPassword)
      this.router.navigate([''])
    }
  }
}
