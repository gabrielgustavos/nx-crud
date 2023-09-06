import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClientsComponent } from './clients.component';
import { ClientsRouting } from './clients.routing';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { CdkTableModule } from '@angular/cdk/table';
import { ClientService, ExcelService } from '@nx-org/services';
import {
  AlertService,
  ButtonModule,
  InputModule,
  ModalService,
  ToggleModule,
  TooltipModule,
} from '@nx-org/components';
import { CadEditClientsComponent } from './clients-list/cad-edit-clients/cad-edit-clients.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CdkTableModule,
    CommonModule,
    ReactiveFormsModule,
    TooltipModule,
    InputModule,
    ToggleModule,
    NgSelectModule,
    ButtonModule,
    ClientsRouting,
  ],
  exports: [],
  declarations: [
    ClientsComponent,
    ClientsListComponent,
    CadEditClientsComponent,
  ],
  providers: [ClientService, ExcelService, ModalService, AlertService],
})
export class ClientsModule {}
