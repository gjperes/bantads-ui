import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';

@Component({
  selector: 'app-dados-pessoais-form',
  templateUrl: './dados-pessoais-form.component.html',
  styleUrls: ['./dados-pessoais-form.component.css'],
  standalone: true,
  imports: [
    NgxMaskModule,
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCommonModule,
  ],
})
export class DadosPessoaisFormComponent {
  dadosPessoaisForm = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    sobrenome: ['', [Validators.required, Validators.minLength(3)]],
    cpf: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required]],
    salario: [, [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder) { }

  get nome() { return this.dadosPessoaisForm.get('nome'); }
  get sobrenome() { return this.dadosPessoaisForm.get('sobrenome'); }
  get cpf() { return this.dadosPessoaisForm.get('cpf'); }
  get email() { return this.dadosPessoaisForm.get('email'); }
  get telefone() { return this.dadosPessoaisForm.get('telefone'); }
  get salario() { return this.dadosPessoaisForm.get('salario'); }
}
