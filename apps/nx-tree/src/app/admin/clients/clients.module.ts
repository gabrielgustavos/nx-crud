import { NgModule } from '@angular/core';

import { ClientsComponent } from './clients.component';
import { ClientsRouting } from './clients.routing';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { CdkTableModule } from '@angular/cdk/table';
import { ClientService, ExcelService } from '@nx-org/services';

@NgModule({
  imports: [CdkTableModule, ClientsRouting],
  exports: [],
  declarations: [ClientsComponent, ClientsListComponent],
  providers: [ClientService, ExcelService],
})
export class ClientsModule { }
