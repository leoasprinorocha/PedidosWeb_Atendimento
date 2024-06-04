import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosRoutingModule } from './pedidos-routing.module';
import { MainpageModule } from '../../mainpage/mainpage/mainpage.module';
import { PedidosComponent } from '../pedidos.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  declarations: [PedidosComponent],
  imports: [
    CommonModule,
    MainpageModule,
    PedidosRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class PedidosModule { }
