import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Obra from 'src/app/models/obra.model';


@Component({
  selector: 'app-obra',
  templateUrl: './obra.component.html',
  styleUrls: ['./obra.component.scss']
})
export class ObraComponent implements OnInit {
  form: FormGroup;
  
  obra: Obra={
    NomObra: '',
    CantidadVigas: ''
  }
  nomobra: string='';
  constructor(private http : HttpService, private formBuilder: FormBuilder, ) { 
    this.form = this.formBuilder.group({
      NumEmpleado: [1],
      password: ['Martin', [Validators.required]],
    });}

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
