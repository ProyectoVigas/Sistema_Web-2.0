import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import User from 'src/app/models/user.model';
import Viga from 'src/app/models/viga.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {
  form: FormGroup;
  clvObra: number = 0;
  user: User = {};
  viga: Viga = {};

  combos: any = {
    obras: []
  };
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private auth: AuthService,
    private message: MessageService,
    private loading: LoadingService) {
    this.form = this.formBuilder.group({
      clvObra: [0, Validators.required],
      ClvViga: [1, Validators.required],
      LargoViga: [0, Validators.required],
      PesoViga: [0, Validators.required],
      Material: ['', Validators.required],
      NumEmpleado: [0, Validators.required]
    });
  }

  getItem(Id: number) {
    this.loading.show();

  }
  ngAfterViewInit(): void {
    this.loading.show();
    this.getCombos("Obra");
  }
  ngOnInit(): void {
    // this.form.controls['ClvViga'].disable();
  }
  getCombos(filter: string) {
    this.http.get(`${filter}`).then(res => {
      console.log('res');
      console.log(res);
      if (res && !res.error) {
        this.combos[filter] = res;
        this.loading.close();

      }
    });
  }
  BuscarViga(){
      this.loading.show();
      let vigas = this.form.value;

    this.http.get('Viga/GetById?ClvViga=' + vigas.ClvViga).then(res => {
      console.log(res);
      if (res && !res.error) {
        console.log(res);
        this.form.controls['clvObra'].setValue(res.clvObra);
        this.form.controls['Material'].setValue(res.material);
        this.form.controls['PesoViga'].setValue(res.pesoViga);
        this.form.controls['LargoViga'].setValue(res.largoViga);
      }else{
        this.form.reset();
        this.form.controls['ClvViga'].setValue(vigas.ClvViga);
        this.message.add({
          severity: 'info',
          summary: 'No se encontró ninguna viga con ese número!!',
          detail: '',
          life: 5000,
        });
      }
      this.loading.close();

    });

  }
  GuardarViga(){
    
    if (this.form.invalid) {
      console.log('invalid');
      this.message.add({
        severity: 'error',
        summary: 'Ingrese todos los campos',
        detail: '',
        life: 5000,
      });
      return;
    } else{
      this.loading.show();
      let vigas = this.form.value;
    this.user = this.auth.getUser();
    this.viga = vigas;
    this.viga.NumEmpleado = this.user.NumEmpleado;
    this.http.put('Viga', this.viga).then((res) => {
      this.loading.close();
      this.form.reset();
      this.message.add({
        severity: 'success',
        summary: 'Viga guardada correctamente!!',
        detail: '',
        life: 5000,
      });
    });
  }
  }

}

