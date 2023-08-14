import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ButtonComponent } from "./button.component";

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [RouterModule, CommonModule, FormsModule]
})
export class ButtonModule { }
