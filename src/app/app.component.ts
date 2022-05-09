import { Service } from './service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'consultaCep';
  sellersPermitString: any;

  cep: string='';
  formCep: FormGroup;
  ma: string;

  constructor(
    private service: Service,
    private formbuilder: FormBuilder
  ){
    this.formCep = this.formbuilder.group({
      cep: ['']
    })
  }
  ngOnInit(): void {
    this.loadImage();
  }


  getCep(){
    console.log(this.formCep.getRawValue())
    this.service.get(this.formCep.getRawValue()).subscribe( (cep)=> this.cep = cep)
  }

  json(obj: any){
    return JSON.stringify(obj)
  }

   getA(){
     this.service.getA().subscribe( resp=> console.log(resp) )
  }

  public picked(event) {
    let fileList: FileList = event.target.files;
    const file: File = fileList[0];
    this.handleInputChange(file); //turn into base64
  }

  handleInputChange(files) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  async _handleReaderLoaded(e) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    //this.imageSrc = base64result;
    console.log(this.sellersPermitString)
    const image = {
      img: base64result
    }
    await this.service.sendImage(image).subscribe( async (response)=> {
      await this.service.getImage().subscribe( (response)=> {
        this.sellersPermitString = response.img;
      })
    })
  }
  async loadImage(){
    await this.service.getImage().subscribe( (response)=> {
      this.sellersPermitString = response.img;
    })
  }
}
