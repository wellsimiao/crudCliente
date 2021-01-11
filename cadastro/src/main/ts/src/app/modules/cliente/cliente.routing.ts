import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ClienteFormComponent } from "./cliente-form/cliente-form.component";
import { ClienteListComponent } from "./cliente-list/cliente-list.component";

const clienteRoutes: Routes = [
  {
    path: "",
    component: ClienteListComponent,
  },
  {
    path: "nova",
    component: ClienteFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(clienteRoutes)],
  exports: [RouterModule],
})
export class ClienteRouting {}
