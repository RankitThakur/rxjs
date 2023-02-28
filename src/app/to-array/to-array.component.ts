import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  subss: Subscription
  constructor() { }

  ngOnInit() {
    //toArray--> Collects all source emissions and emits them as an array when the source completes.
    //Example 1: get values emitted by interval as an array when interval completes
    let source = interval(1000)
    source.pipe(take(4),
    toArray()).subscribe((value)=> {
      console.log(value)
    }) ;

    let data = [
      { firstName: 'Joe', lastName: 'Smith' },
      { firstName: 'Sally', lastName: 'Brown' }
    ];
   
    //array to object 
    let obs1 = from(data)
    this.subss = obs1.pipe(toArray()).subscribe((value)=>{
      console.log(value)   
    });
  }
}
