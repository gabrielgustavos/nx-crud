import { NgModule } from '@angular/core';
import { NgSelectModule } from "@ng-select/ng-select";
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { AdminRouting } from './admin.routing';
import { HeaderModule } from '@nx-org/components';

@NgModule({
  imports: [RouterModule, HeaderModule, AdminRouting, NgxMaskModule.forRoot(), NgSelectModule],
  exports: [],
  declarations: [AdminComponent],
  providers: [],
})
export class AdminModule { }
