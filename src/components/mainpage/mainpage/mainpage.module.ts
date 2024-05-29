import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from '../mainpage.component';
import { MainpageRoutingModule } from './mainpage-rounting.module';



@NgModule({
  declarations: [MainpageComponent],
  imports: [
    CommonModule,
    MainpageRoutingModule
  ],
  exports: [MainpageComponent]
})
export class MainpageModule { }
