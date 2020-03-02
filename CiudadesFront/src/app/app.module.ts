import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentoCreateComponent } from './Components/departamento-create/departamento-create.component';
import { DepartamentoDetailComponent } from './Components/departamento-detail/departamento-detail.component';
import { DepartamentoListComponent } from './Components/departamento-list/departamento-list.component';
import { CiudadCreateComponent } from './Components/ciudad-create/ciudad-create.component';
import { CiudadDetailComponent } from './Components/ciudad-detail/ciudad-detail.component';
import { CiudadListComponent } from './Components/ciudad-list/ciudad-list.component';
import { NavComponent } from './Components/nav/nav.component';
import { DepartamentoEditComponent } from './Components/departamento-edit/departamento-edit.component';
import { CiudadEditComponent } from './Components/ciudad-edit/ciudad-edit.component';
import { HomeComponent } from './Components/home/home.component';
import { Connections } from './Services/ConnectionService';



@NgModule({
  declarations: [
    AppComponent,
    DepartamentoCreateComponent,
    DepartamentoDetailComponent,
    DepartamentoListComponent,
    CiudadCreateComponent,
    CiudadDetailComponent,
    CiudadListComponent,
    NavComponent,
    DepartamentoEditComponent,
    CiudadEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Connections],
  bootstrap: [AppComponent]
})
export class AppModule { }
