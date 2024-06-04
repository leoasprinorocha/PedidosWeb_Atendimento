import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilsweb',
  templateUrl: './utilsweb.component.html',
  styleUrls: ['./utilsweb.component.css']
})

@Injectable({
  providedIn: 'root',
})
export class UtilswebComponent {
  constructor(private router: Router){

  }

  atualizaValorSelect(event: any, data:any){
    console.log(event);
  }

  redirecionaRota(url: string){
    this.router.navigate([url]);
  }
}
