import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoRoutes } from './features/autenticacao/autenticacao-routes.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'entrar'
  },
  { path: '', children: [...AutenticacaoRoutes] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
