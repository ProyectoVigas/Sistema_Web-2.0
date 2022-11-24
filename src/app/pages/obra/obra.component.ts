import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Obra from 'src/app/models/obra.model';
import User from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-obra',
  templateUrl: './obra.component.html',
  styleUrls: ['./obra.component.scss'],
})
export class ObraComponent implements OnInit {
  form: FormGroup;
  user: User = {};

  obra: Obra = {
    NomObra: '',
    CantidadVigas: 0,
    NumEmpleado: 0,
  };
  nomobra: string = '';
  constructor(
    private http: HttpService,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private loading: LoadingService
  ) {
    this.form = this.formBuilder.group({
      NomObra: ['Prueba 2', [Validators.required]],
      CantidadVigas: [10, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  GuardarObra() {
    this.user = this.auth.getUser();
    console.log(this.user);
    let obras = this.form.value;
    this.loading.show();

    this.obra.NomObra = obras.NomObra;
    this.obra.NumEmpleado = this.user.NumEmpleado;
    this.obra.CantidadVigas = obras.CantidadVigas;
    console.log('obra Guardar');
    console.log(this.obra);
    this.http.put('Obra', this.obra).then((res) => {
      this.loading.close();
    });
  }
}
