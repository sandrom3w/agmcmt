import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  api : string = 'http://www.kashew.tecnologia.ws/agendamacom/';

  constructor(public http: Http) {}


  getData(parans) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + 'login.php', parans, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response) => {return res.json();}
    );
  }

  postData(parans) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + 'register.php', parans, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response) => {return res.json();}
    );
  }

  getStore(){
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + 'stores.php',{
      headers:headers,
      method:"POST"
    }).map(
      (res:Response) => {return res.json();}
    );
  }

}
