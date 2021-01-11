import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./modules/dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: "cliente",
    loadChildren: () =>
      import("./modules/cliente/cliente.module").then((m) => m.ClienteModule),
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: true,
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const appRoutingProviders: any[] = [];
