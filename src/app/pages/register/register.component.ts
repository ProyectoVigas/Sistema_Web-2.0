import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;

  NumEmpleado: number = 0;
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      NumEmpleado: [0, [Validators.required]],
      password: ['12346578', [Validators.required]],
      confirmPassword: ['12345678', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  register() {
    let user = this.form.value;
    console.log({
      NumEmpleado: user.NumEmpleado,
      contraseña: user.password,
    });
    console.log(user.NumEmpleado);
    console.log(user.password);
    this.loading = true;
    this.http
      .put('Usuarios', {
        NumEmpleado: user.NumEmpleado,
        Contraseña: user.password,
      })
      .then((res) => {
        this.loading = false;
      });
  }
}
