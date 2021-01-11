import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import {
  ConfirmationDialogComponent,
} from "src/app/layout/notification/confirm/confirmation-dialog.component";

import { ClienteFormComponent } from "../cliente-form/cliente-form.component";
import { ClienteApiService } from "../service/clienteApiService";
import { Cliente } from "../model/model";

@Component({
  selector: "app-heroes-list",
  templateUrl: "./cliente-list.component.html",
  styleUrls: ["./cliente-list.component.css"],
})
export class ClienteListComponent implements OnInit {
  constructor(public dialog: MatDialog, private api: ClienteApiService) {}

  public cliente: Cliente[];
  displayedColumns: string[] = ["nome", "cpf", "acoes"];

  ngOnInit(): void {
    
  }

  private findClientes() {
    this.api.getAll().subscribe((res) => {
      console.log(res);
      this.cliente = res;
    });
  }

  public add() {
    const dialogRef = this.dialog.open(ClienteFormComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      this.findClientes();
    });
  }

  public edit(cliente: Cliente) {
    const dialogRef = this.dialog.open(ClienteFormComponent, { data: cliente });
    dialogRef.afterClosed().subscribe((result) => {
      this.findClientes();
    });
  }

  public delete(cliente: Cliente) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: "350px",
      data: "Voce realmente deseja deletar o cliente " + cliente.nome + "?",
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.api.delete(cliente.id).subscribe((res) => {
          this.findClientes;
        });
      }
    });
  }
}
