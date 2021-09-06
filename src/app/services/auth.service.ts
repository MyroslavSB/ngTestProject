import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FbAuthResp, User} from "../interfaces";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {tap} from "rxjs/operators";
import {LoginComponent} from "../components/login/login.component";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private http: HttpClient
  ) {
  }

  get token(): any {
    // @ts-ignore
    const expDate = new Date(localStorage.getItem('fb-auth-token-expires'))
    const savePassword = localStorage.getItem('save-password')

    if (savePassword === 'true') {
      return localStorage.getItem('fb-auth-token')
    } else {
      if (new Date() > expDate) {
        this.logout()
        return null
      }
    }
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken)
      )
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated():boolean {
    return !!this.token
  }

  public setToken(resp: any) {
    if (resp) {
      const expDate = new Date(new Date().getTime() + resp.expiresIn * 1000)
      localStorage.setItem('fb-auth-token', resp.idToken)
      localStorage.setItem('fb-auth-token-expires', expDate.toString())
    } else {
      localStorage.clear()
    }
  }
}
