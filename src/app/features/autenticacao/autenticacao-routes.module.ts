import { Routes } from "@angular/router";
import { EntrarComponent } from "./entrar/entrar.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

export const AutenticacaoRoutes: Routes = [
    { path: 'entrar', component: EntrarComponent },
    { path: 'cadastro', component: CadastroComponent }
];