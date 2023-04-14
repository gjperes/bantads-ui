import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ScopedComponentComponent } from './components/scoped-component/scoped-component.component';
import { ConsultarExtratoComponent } from './pages/consultar-extrato/consultar-extrato.component';



@NgModule({
  declarations: [
    InicioComponent,
    ScopedComponentComponent,
    ConsultarExtratoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClienteModule { }
