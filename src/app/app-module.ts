import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { Menu } from './components/menu/menu';
import { DepartamentosService } from './services/departamentos.service';
import { CrearDepartamento } from './components/crear-departamento/crear-departamento';

@NgModule({
  declarations: [App, Home, Menu, CrearDepartamento],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(), DepartamentosService],
  bootstrap: [App],
})
export class AppModule {}
