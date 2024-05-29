import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from '../mainpage.component';


const routes: Routes = [
  {
    path: 'mainpage',
    component: MainpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class MainpageRoutingModule {}
