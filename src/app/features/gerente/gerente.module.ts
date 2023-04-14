import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ScopedComponentComponent } from './components/scoped-component/scoped-component.component';
import { ListarClientesComponent } from './pages/listar-clientes/listar-clientes.component';



@NgModule({
  declarations: [
    InicioComponent,
    ScopedComponentComponent,
    ListarClientesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GerenteModule { }
