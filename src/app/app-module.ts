import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { Menu } from './components/menu/menu';
import { Departamentos } from './components/departamentos/departamento';
import { DepartamentosService } from './services/departamentos.service';

@NgModule({
  declarations: [App, Home, Menu, Departamentos],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(), DepartamentosService],
  bootstrap: [App],
})
export class AppModule {}
