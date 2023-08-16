import { NgModule } from '@angular/core';

import { ClientsComponent } from './clients.component';
import { RouterModule } from '@angular/router';
import { ClientsRouting } from './clients.routing';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [RouterModule, CdkTableModule, ClientsRouting],
  exports: [],
  declarations: [ClientsComponent, ClientsListComponent],
  providers: [],
})
export class ClientsModule { }
