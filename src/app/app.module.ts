import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './pages/menu/menu.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { NavigateComponent } from './navigate/navigate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ObraComponent } from './pages/obra/obra.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { CodigoQRComponent } from './pages/codigo-qr/codigo-qr.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    InformacionComponent,
    ConsultasComponent,
    NavigateComponent,
    ObraComponent,
    EmpleadoComponent,
    CodigoQRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
