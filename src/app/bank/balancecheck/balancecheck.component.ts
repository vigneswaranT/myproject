import { Component, OnInit } from '@angular/core';
// import { find } from 'rxjs';
// import { checkServerIdentity } from 'tls';

@Component({
  selector: 'app-balancecheck',
  templateUrl: './balancecheck.component.html',
  styleUrls: ['./balancecheck.component.css']
})
export class BalancecheckComponent implements OnInit {
  n1: any;
  nnnn: any;
  spa:any;
  money:any;
  amo: any;
  constructor() { }

  ngOnInit(): void {
    
  //  find(){
  //    this

  //   }

 

  // if(this.n1 ==this.c){

  // alert('');
  }
  ch(n2:any)
  {
    if(n2== localStorage.getItem('phone')){
    this.spa="verfied";
   alert('login');
  }
 else {
     alert('incrroect number');
    
  }
  
 

  
  }
  
butt(){
  this.money=localStorage.getItem('amount')-this.amo;
}





}

