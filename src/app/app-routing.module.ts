import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { VentaProductoComponent } from './pages/venta-producto/venta-producto.component';

const routes: Routes = [
  {path: "formulario", component: FormularioComponent},
  {path: "principal", component: PrincipalComponent},
  {path: "compraProducto", component: VentaProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
