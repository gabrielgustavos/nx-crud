import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalRemoverComponent } from './modal-remover.component';
import { ButtonModule } from '../../button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CommonModule,
    ButtonModule
  ],
  exports: [ModalRemoverComponent],
  declarations: [ModalRemoverComponent],
  providers: [],
})
export class ModalRemoverModule { }
