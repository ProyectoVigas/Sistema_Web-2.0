import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from 'src/app/services/loading.service';
import { REGEX_EMAIL } from '../../utils/regular-expressions.utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private loading: LoadingService
  ) {
    this.form = this.formBuilder.group({
      NumEmpleado: [1],
      password: ['Martin', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  handleSignin() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      return;
    } else {
      this.loading.show();

      let value = this.form.value;
      console.log('Peticion');
      this.http.login(value.NumEmpleado, value.password).then((res) => {
        this.loading.close();
      });
    }
  }
}
