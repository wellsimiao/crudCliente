import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Service } from "../../../common/store/service/service";
import { Cliente } from "../model/model";

@Injectable()
export class ClienteApiService extends Service {

  protected static url: String = "cliente";

  public getAll(): Observable<Cliente[]> {
    console.log("Procurando cliente...");
    return this.doGet(null, "cliente");
  }

  public save(data): Observable<Cliente> {
    console.log("Salvando obj...");
    return this.doPost("cliente/add", data);
  }

  public update(data): Observable<Cliente> {
    console.log("alterando obj...");
    return this.doPost("cliente/update", data);
  }

  public delete(id): Observable<Cliente> {
    console.log("deletando obj...");
    return this.doDelelete("cliente/delete/" + id);
  }
}
