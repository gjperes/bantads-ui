import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';
import { SharedDirectiveDirective } from './directives/shared-directive.directive';
import { SharedPipesPipe } from './pipes/shared-pipes.pipe';



@NgModule({
  declarations: [
    SharedButtonComponent,
    SharedDirectiveDirective,
    SharedPipesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
