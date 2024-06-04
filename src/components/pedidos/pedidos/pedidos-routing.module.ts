import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from '../pedidos.component';



const routes: Routes = [
  {
    path: 'pedidos',
    component: PedidosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class PedidosRoutingModule {}
