import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from '../mainpage.component';
import { MainpageRoutingModule } from './mainpage-rounting.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { UtilsModule } from '../../../app/utils/utils.module';

@NgModule({
  declarations: [MainpageComponent],
  imports: [
    CommonModule,
    MainpageRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    UtilsModule
  ],
  exports: [MainpageComponent],
})
export class MainpageModule {}
