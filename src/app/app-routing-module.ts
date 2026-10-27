import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CrearDepartamento } from './components/crear-departamento/crear-departamento';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'crear', component: CrearDepartamento },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
