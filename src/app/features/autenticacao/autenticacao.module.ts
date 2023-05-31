import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { DadosPessoaisFormComponent } from 'src/app/components/dados-pessoais-form/dados-pessoais-form.component';

@NgModule({
  declarations: [EntrarComponent, CadastroComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    DadosPessoaisFormComponent,
  ],
})
export class AutenticacaoModule { }
