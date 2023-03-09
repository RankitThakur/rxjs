import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map-operator',
  templateUrl: './concat-map-operator.component.html',
  styleUrls: ['./concat-map-operator.component.css']
})
export class ConcatMapOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //concatMap => Map values to inner observable, subscribe and emit in order.
    //concat is creation opra. and map is pipeable oprater 

    from([0,1,2,3,4]).pipe(
      concatMap((n)=>{
        return of(n*2)
      })).subscribe(console.log)
  }

}
