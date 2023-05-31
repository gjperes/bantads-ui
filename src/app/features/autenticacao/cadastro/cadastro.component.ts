import { Component } from '@angular/core';
import { DadosPessoaisFormComponent } from 'src/app/components/dados-pessoais-form/dados-pessoais-form.component';
import { EnderecoFormComponent } from 'src/app/components/endereco-form/endereco-form.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  isLinear = false;
  isLoading = false;

  steps = [
    { label: 'Dados Pessoais', component: DadosPessoaisFormComponent },
    { label: 'Endereço', component: EnderecoFormComponent },
  ];

  constructor() { }
}
