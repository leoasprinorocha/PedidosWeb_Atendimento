import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ToastService } from '../services/toastservice';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  animations: [    
    trigger('toastTrigger', [ // This refers to the @trigger we created in the template      
      state('open', style({ transform: 'translateY(0%)' })), // This is how the 'open' state is styled      
      state('close', style({ transform: 'translateY(-200%)' })), // This is how the 'close' state is styled      
      transition('open <=> close', [ // This is how they're expected to transition from one to the other         
        animate('300ms ease-in-out')
      ])    
    ])  
  ]

})
@Injectable({
  providedIn: 'root',
})
export class ToasterComponent implements OnInit {
  toastClass = ['toast-class']; // Class lists can be added as an array  
  toastMessage = 'This is a toast';  
  showsToast = true;

  constructor(public toast: ToastService) { }  

  ngOnInit(): void {  }

  dismiss(): void {    
    this.toast.dismissToast();  
  }
}
