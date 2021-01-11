import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
} from "@angular/material";
import { MatTableModule } from "@angular/material/table";
import {
  NotificationModule,
} from "src/app/layout/notification/notification.module";

import { ClienteFormComponent } from "./cliente-form/cliente-form.component";
import { ClienteListComponent } from "./cliente-list/cliente-list.component";
import { ClienteRouting } from "./cliente.routing";
import { ClienteApiService } from "./service/clienteApiService";

@NgModule({
  declarations: [ClienteFormComponent, ClienteListComponent],
  imports: [
    CommonModule,
    ClienteRouting,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NotificationModule,
  ],
  exports: [],
  entryComponents: [ClienteFormComponent, ClienteListComponent],
  providers: [ClienteApiService],
})
export class ClienteModule {}
