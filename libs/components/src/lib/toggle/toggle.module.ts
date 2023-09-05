import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToggleComponent } from './toggle.component';

@NgModule({
  declarations: [ToggleComponent],
  exports: [ToggleComponent],
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class ToggleModule {}
