import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { FormulariosListarComponent } from './pages/formularios-listar/formularios-listar.component';
import { PersonaPerfilComponent } from './pages/persona-perfil/persona-perfil.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RegistarproductoComponent } from './pages/registarproducto/registarproducto.component';
import { VentaProductoComponent } from './pages/venta-producto/venta-producto.component';

const routes: Routes = [
  {path: "formulario", component: FormularioComponent},
  {path: "principal", component: PrincipalComponent},
  {path: "compraProducto", component: VentaProductoComponent},
  {path: "crearProducto", component: RegistarproductoComponent},
  {path: "perfil", component:PersonaPerfilComponent},
  {path: "listarFormularios", component: FormulariosListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
