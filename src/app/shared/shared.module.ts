import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDirectiveDirective } from './directives/shared-directive.directive';
import { SharedPipesPipe } from './pipes/shared-pipes.pipe';

@NgModule({
  declarations: [
    SharedDirectiveDirective,
    SharedPipesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
