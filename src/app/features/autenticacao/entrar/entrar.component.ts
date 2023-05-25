import { Component } from '@angular/core';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styles: [''],
})
export class EntrarComponent {
  email: string = '';
  senha: string = '';

  login() {
    // Lógica de autenticação aqui
    console.log('Nome de usuário:', this.email);
    console.log('Senha:', this.senha);
  }
}
