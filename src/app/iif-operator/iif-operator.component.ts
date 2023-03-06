import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, iif, of } from 'rxjs';
import { FromEventComponent } from '../from-event/from-event.component';

@Component({
  selector: 'app-iif-operator',
  templateUrl: './iif-operator.component.html',
  styleUrls: ['./iif-operator.component.css']
})
export class IifOperatorComponent implements OnInit {
@ViewChild('test', {static:true})   test?: ElementRef<HTMLInputElement>

  constructor() { }

  ngOnInit() {
    this.iifOprator()
  }
  //iif operator==> The iif operator is used to decide which Observable will be subscribed.this is a Creation Operators
 //iif is creator if-else style Observable creation
 //iif oprator => Subscribe to first or second observable based on a condition

 iifOprator = () => {
  // Example 1: simple iif
  let auth: boolean = false;
  // ()=>auth any time callback is new subscriber 
  let obs1 = iif(() => auth, of(['rankit']), of([]) )
   console.log(obs1)
   obs1.subscribe((res=>{
    console.log(res)
   }));

   //Example 2: using set time out 
   auth = true;
   fromEvent(this.test.nativeElement, 'click').subscribe(res=> {
    setTimeout(() => {
      obs1.subscribe((res => {
        console.log(res)
      }));
    }, 2000)
   })   
  };
}
