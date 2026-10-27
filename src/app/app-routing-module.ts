import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Departamentos } from './components/departamentos/departamento';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'departamentos', component: Departamentos },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
