import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientsComponent } from "./clients.component";
import { ClientsListComponent } from "./clients-list/clients-list.component";

const routes: Routes = [
  {
    path: "",
    component: ClientsComponent,
    children: [
      {
        path: "",
        component: ClientsListComponent,
      }
    ],
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRouting { }
