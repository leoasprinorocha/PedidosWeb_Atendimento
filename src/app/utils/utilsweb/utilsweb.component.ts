import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-utilsweb',
  templateUrl: './utilsweb.component.html',
  styleUrls: ['./utilsweb.component.css']
})

@Injectable({
  providedIn: 'root',
})
export class UtilswebComponent {
  atualizaValorSelect(event: any, data:any){
    console.log(event);
  }
}
