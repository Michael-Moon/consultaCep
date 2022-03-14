import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(
    private http: HttpClient
  ) { }


  get(cep: any){

    return this.http.get<any>( environment.ViaCep + cep.cep +'/json/');
  }
}
