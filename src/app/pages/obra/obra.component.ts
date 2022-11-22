import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import Obra from 'src/app/models/obra.model';


@Component({
  selector: 'app-obra',
  templateUrl: './obra.component.html',
  styleUrls: ['./obra.component.scss']
})
export class ObraComponent implements OnInit {
  // validacionesForm = new FormGroup({
  //   NomObra: new FormControl(' ', Validators.compose([Validators.required,Validators.pattern(/^[\S][/,.,-,Á,É,Í,Ó,Ú,Ñ,á,é,í,ó,ú,ñ,a-zA-Z0-9 ]+$/)])),
  //   NumEmpleado: new FormControl(' ', Validators.compose([Validators.required,Validators.pattern(/^\d+$/)])),
  //   CantidadVidas: new FormControl(' ', Validators.compose([Validators.required,Validators.pattern(/^\d+$/)]))
  // })
  obra: Obra={
    NomObra: '',
    CantidadVigas: ''
  }
  nomobra: string='';
  constructor(private http : HttpService ) { }

  ngOnInit(): void {
  }

  GuardarObra(){
    // let obras=this.validacionesForm.value;
    this.obra.NomObra = this.nomobra;
    this.obra.NumEmpleado='9999';
    this.obra.CantidadVigas= this.obra.CantidadVigas;
    this.http.post('/Obra',this.obra).then((res)=> { })
  }

}
