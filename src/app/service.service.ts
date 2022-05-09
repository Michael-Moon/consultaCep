import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class Service {
  baseUrl: string =  "/api"
  constructor(
    private http: HttpClient
  ) { }


  get(cep: any){

    return this.http.get<any>( environment.ViaCep + cep.cep +'/json/');
  }
  getA(){

    return this.http.get<any>( environment.serverUrl +'/users',{});
  }

  sendImage(image){

    return this.http.post<any>( environment.API + '/changeImg', image);
  }

  getImage(){
    return this.http.get<any>( environment.API + '/changeImg');
  }
}
