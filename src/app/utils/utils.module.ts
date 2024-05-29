import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterComponent } from './toaster/toaster.component';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { UtilswebComponent } from './utilsweb/utilsweb.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    ToasterComponent,
    UtilswebComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ButtonModule
  ],
  exports:[
    ToasterComponent,
    UtilswebComponent,
    SpinnerComponent
  ]
})
export class UtilsModule { }
