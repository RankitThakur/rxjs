import { Component, OnInit } from '@angular/core';
import { from, interval, of, concat, range } from 'rxjs';
import { take } from 'rxjs/operators';
import { resolve } from 'url';

@Component({
  selector: 'app-concat-operator',
  templateUrl: './concat-operator.component.html',
  styleUrls: ['./concat-operator.component.css']
})
export class ConcatOperatorComponent implements OnInit {

  constructor() { }
//Subscribe to observables in order as previous completes
// jab humare pass multiple observables ho or unko order by subscribe karna ho tab isko subscribe kar shakte hai

//Example 1: Basic concat usage with three observables

  ngOnInit() {
    let obs = range(5,9)
    let obs1 =  of([1,2,3,4,5]);
    let obs2 = from([1,2,3,4,5]);
    let obs3 = interval(1000).pipe(
      take(4)
    );
    let obs4 = new Promise((resolve, reject)=>{
      resolve('test')
    })

    concat(obs1, obs2, obs,  obs4,obs3).subscribe(res=>{
      console.log(res)
    })

    // Example 2: (Warning!) concat with source that does not complete

    // concat(interval(1000), of('rankit')).subscribe(res=>{
    //   console.log(res)
    // });

  }


   
}
