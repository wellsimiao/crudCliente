import { Component, Inject, OnInit, Optional } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";

import { Cliente } from "../model/model";
import { ClienteApiService } from "../service/clienteApiService";

@Component({
  selector: "app-cliente-form",
  templateUrl: "./cliente-form.component.html",
  styleUrls: ["./cliente-form.component.css"],
})
export class ClienteFormComponent implements OnInit {
  

  form = this.fb.group({
    id: new FormControl(""),
    nome: new FormControl("", [Validators.required]),
    cpf: new FormControl("", [Validators.required]),
    endereco: this.fb.group({
      id: new FormControl(""),
      pais: new FormControl("", [Validators.required]),
      cidade: new FormControl("", [Validators.required]),
      estado: new FormControl("", [Validators.required]),
      logradouro: new FormControl(""),
      bairro: new FormControl("", [Validators.required]),
      cep: new FormControl(""),
      numero: new FormControl(""),
    }),
  });

   constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public cliente: Cliente,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private api: ClienteApiService,
    private fb: FormBuilder
  ) {}
  
  /**
   *
   */
  ngOnInit(): void {
    console.log(this.cliente);
    if (this.cliente != null || this.cliente != undefined) {
      this.form.patchValue(this.cliente);
    }
  }
  /**
   *
   */
  public close() {
    this.dialog.closeAll();
  }

  /**
   *
   */
  public save() {
    this.cliente = this.form.value;

    if (this.cliente.id) {
      this.api.update(this.cliente).subscribe(
        (res) => {
          this.cliente = res;
          this.snackBar.open("Salvo com sucesso", "FECHAR", {
            duration: 100000,
          });
          this.dialog.closeAll();
        },
        (erro) => {
          this.snackBar.open(erro.error.message, "FECHAR", {
            duration: 100000,
          });
        }
      );
    } else {
      this.api.save(this.cliente).subscribe(
        (res) => {
          this.cliente = res;
          this.snackBar.open("Salvo com sucesso", "FECHAR", {
            duration: 100000,
          });
          this.dialog.closeAll();
        },
        (erro) => {
          this.snackBar.open(erro.error.message, "FECHAR", {
            duration: 100000,
          });
        }
      );
    }
  }
}
