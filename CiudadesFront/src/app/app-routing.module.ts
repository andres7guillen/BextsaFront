import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentoListComponent } from './Components/departamento-list/departamento-list.component';
import { DepartamentoCreateComponent } from './Components/departamento-create/departamento-create.component';
import { DepartamentoDetailComponent } from './Components/departamento-detail/departamento-detail.component';
import { DepartamentoEditComponent } from './Components/departamento-edit/departamento-edit.component';
import { CiudadListComponent } from './Components/ciudad-list/ciudad-list.component';
import { CiudadCreateComponent } from './Components/ciudad-create/ciudad-create.component';
import { CiudadDetailComponent } from './Components/ciudad-detail/ciudad-detail.component';
import { CiudadEditComponent } from './Components/ciudad-edit/ciudad-edit.component';
import { HomeComponent } from './Components/home/home.component';


const ROUTES: Routes = [
{  path:'home', component: HomeComponent },
{  path:'departamentoListar',  component: DepartamentoListComponent },
{  path:'departamentoCrear',  component: DepartamentoCreateComponent },
{  path:'departamentoDetalle/:id', component: DepartamentoDetailComponent  },
{  path:'departamentoEditar/:id', component: DepartamentoEditComponent  },
{  path:'ciudadListar', component: CiudadListComponent },
{  path:'ciudadCrear',  component:CiudadCreateComponent  },
{  path:'ciudadDetalle/:id', component: CiudadDetailComponent  },
{  path:'ciudadActualizar/:id', component: CiudadEditComponent },
{  path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const APP_ROUTING = RouterModule.forRoot(ROUTES,{  useHash: true });
