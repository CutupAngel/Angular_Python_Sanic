import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE} from "../config/storage";
import {User} from "../models/user";
import {Authresponse} from "../models/authresponse";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, @Inject(BROWSER_STORAGE) private storage: Storage) { }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject( error);
  }
  private makeAuthApiCall(urlPath: string, user: User): Promise<Authresponse> {
    const url: string = environment.apiBaseUrl + urlPath;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as Authresponse)
      .catch(this.handleError);
  }
  public getToken(): string {
    return this.storage.getItem('customer-token');
  }
  public saveToken(token: string): void {
    this.storage.setItem('customer-token', token);
  }
  public login(user: any): Promise<any> {
    return this.makeAuthApiCall('login', user).then((authRes: Authresponse) => {
      this.saveToken(authRes.token);
    });
  }
  public register(user: any): Promise<any> {
    return this.makeAuthApiCall('register', user).then((authRes: Authresponse) => {
      this.saveToken(authRes.token);
    });
  }
  public logout(): void {
    this.storage.removeItem('customer-token');
  }
  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }
  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const user = JSON.parse(atob(token.split('.')[1]));
      return new User(user);
    }
  }

}
