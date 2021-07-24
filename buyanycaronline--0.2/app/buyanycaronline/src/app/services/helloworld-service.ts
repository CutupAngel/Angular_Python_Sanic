import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from "../../environments/environment.prod";
import { Helloworld } from '../models/helloworld';
import {Authresponse} from "../models/authresponse";

@Injectable({ providedIn: 'root' })
export class HelloworldService {

    constructor(private http: HttpClient) { }
    private makeAuthApiCall(urlPath: string): Promise<Helloworld> {
        const url: string = environment.apiBaseUrl + urlPath;
        return this.http
          .get(url)
          .toPromise()
          .then(response => response as Helloworld)
      }
    public getHelloworld(): Promise<any> {
        return this.makeAuthApiCall('advertisement/helloworld').then((authRes: Helloworld) => {
          console.log(authRes);
        });
      }
}