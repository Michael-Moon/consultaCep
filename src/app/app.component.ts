import { Service } from './service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'consultaCep';


  cep: string='';
  formCep: FormGroup;

  constructor(
    private service: Service,
    private formbuilder: FormBuilder
  ){
    this.formCep = this.formbuilder.group({
      cep: ['']
    })
  }


  getCep(){
    console.log(this.formCep.getRawValue())
    this.service.get(this.formCep.getRawValue()).subscribe( (cep)=> this.cep = cep)
  }

  json(obj: any){
    return JSON.stringify(obj)
  }

   getA(){
     this.service.getA().subscribe( resp=> console.log(resp.json()) )
  }
}
