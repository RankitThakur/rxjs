import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, of, timer } from 'rxjs';
import { map, switchMap, take, takeLast, takeUntil, timeInterval, toArray } from 'rxjs/operators';


@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  data:any = [
    { firstName: 'Joe', lastName: 'Smith' },
    { firstName: 'Sally', lastName: 'Brown' },
    { firstName: 'Joe', lastName: 'Smith' },
    { firstName: 'Sally', lastName: 'Smith' },
    { firstName: 'Joe', lastName: 'Smith' },
    { firstName: 'Sally', lastName: 'Smith' },
    { firstName: 'Joe', lastName: 'Smith' },
  ];
  result:any = []
  source:any =  '1234'

  constructor() { }

  ngOnInit() {
    //take--Emits only the first count values emitted by the source Observable.//jitna data chiye utna data le shakte hai taje oprater ki help se 
    //example- like there are 8 data but i use only 4 data (take(4))0-0-0-0-0-0-0-0-0-0
    
    ////example 1 - using from  and of 
    // let obs1 =  from(this.data).pipe(
    //   take(4),
    //   toArray()
    // );
    // obs1.subscribe((value) => {
    //   console.log(value)
    //   this.result = value
    // });
    // // Example 1: Take 1 value from source
    // let  obs2  = of(1,2,3).pipe(
    //   take(2)
    // )
    // obs2.subscribe((value)=>{
    //   console.log(value)
    // })

    let respones = "https://jsonplaceholder.typicode.com/photos";     
    let custObs3 = new Observable((obs => {
        fetch(respones).then(respones => respones.json()).then(data => {
          obs.next(data);
          obs.complete();
        }).catch(err => obs.error(err));
      
    })
    ).pipe( take(1));

    custObs3.subscribe((res)=>{
      console.log(res)
            // this.result = res;
    });


    //take until- muje jitni der tak data chiye ye bhi ek observal leta hai 
    let condition =  timer(2000)
    let custObs4 = from(fetch(respones).then(respones => respones.json())).pipe(
      switchMap(respones => respones),
      map(test=>test),
      takeUntil(condition),
      toArray(),
    );

    custObs4.subscribe((res)=>{
      console.log(res);
      this.result = res;
    });

  }

}


