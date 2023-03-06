import { Component, OnInit } from '@angular/core';
import { interval, Observable, of, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
///jab bhi hume original emited value dekhna hai tab hum tab ka use karte hai 
//tap- into the straem without modifyung  mostly use this oprater in debugging .

  constructor() { }
  myColor: string = '';
  ngOnInit() {

    let array = ['red', 'blue','yellow', 'green','silver', 'black'] 
    const data = interval(1500)
    
    //observable=>>> emits  the data    
    let obsSubs: Subscription;
    let test = of(data).pipe(
      ///tap- transprantly perfrom any action or side effects like console log , respones data in console,
      // change value property, emit any value of observer  and perfrom any other action 
      //hamare respones me koi effect nhi padna chiye uske liye iska use karte hai 
      // tap((res: any)=>{
      //   this.myColor = array[res]
      //   if(res == 3){
      //     obsSubs.unsubscribe()
      //   }
      // }),
      tap(res => {
        debugger
        console.log(res)
      }),
      map(res=> {
        
      })
    )
    // test.subscribe(res => {
      
    // })
    // .subscribe((res)=> console.log(array[res]),
    //   (error)=>console.log(error)); 
  }
}
