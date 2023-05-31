import { Component } from '@angular/core';
import { AutenticacaoRequest } from '../../../shared/models/autenticacao-request';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css'],
})
export class EntrarComponent {
  isHidding = false;
  isLoading = false;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    // Lógica de autenticação aqui
    if (this.email?.value && this.senha?.value) {
      const request = new AutenticacaoRequest(this.email.value, this.senha.value);
      console.log(request);
    }
    console.warn(this.loginForm.value);
    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 1000);
  }

  get email() { return this.loginForm.get('email'); }
  get senha() { return this.loginForm.get('senha'); }
}
