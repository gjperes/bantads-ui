import { Component } from '@angular/core';
import { AutenticacaoRequest } from '../models/autenticacao-request';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css'],
})
export class EntrarComponent {
  exibirSenha = false;
  carregando = false;

  autenticacaoForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
  });


  constructor(private formBuilder: FormBuilder) { }

  login() {
    // Lógica de autenticação aqui
    if (this.email?.value && this.senha?.value) {
      const request = new AutenticacaoRequest(this.email.value, this.senha.value);
      console.log(request);
    }
    console.warn(this.autenticacaoForm.value);
    this.carregando = true;
    setTimeout(() => this.carregando = false, 1000);
  }

  get email() { return this.autenticacaoForm.get('email'); }
  get senha() { return this.autenticacaoForm.get('senha'); }
}
