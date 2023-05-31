import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskModule } from 'ngx-mask';
import { TipoEndereco } from 'src/app/shared/enums';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.css'],
  standalone: true,
  imports: [
    NgxMaskModule,
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCommonModule,
  ],
})
export class EnderecoFormComponent {
  enderecoForm = this.formBuilder.group({
    tipoEndereco: [TipoEndereco.RUA, [Validators.required]],
    logradouro: ['', [Validators.required, Validators.minLength(3)]],
    numero: ['', [Validators.required, Validators.min(0)]],
    complemento: [''],
    cep: ['', [Validators.required]],
    bairro: ['', [Validators.required]],
    cidade: ['', [Validators.required]],
    estado: ['', [Validators.required]]
  });

  tiposEndereco: TipoEndereco[] = [TipoEndereco.AVENIDA, TipoEndereco.TRAVESSA, TipoEndereco.RUA];

  constructor(private formBuilder: FormBuilder) { }

  get tipoEndereco() { return this.enderecoForm.get('tipoEndereco'); }
  get logradouro() { return this.enderecoForm.get('logradouro'); }
  get numero() { return this.enderecoForm.get('numero'); }
  get complemento() { return this.enderecoForm.get('complemento'); }
  get cep() { return this.enderecoForm.get('cep'); }
  get bairro() { return this.enderecoForm.get('bairro'); }
  get cidade() { return this.enderecoForm.get('cidade'); }
  get estado() { return this.enderecoForm.get('estado'); }
}
