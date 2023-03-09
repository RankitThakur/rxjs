import { Component, OnInit } from '@angular/core';
import { concat, from, interval, merge, of, timer } from 'rxjs';
import { concatMap, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  //  let user = interval(1000).pipe( concatMap((res)=> {
  //   return of(res)
  //  }))
  //  let user2 = interval(2000)
  //  from(user).subscribe(console.log)
    this.test();
  }

  test = () => {
    let user1 = 1000
    let user2 = 1000
    let user3 = 1000

    of((100)).pipe(
      concatMap((res)=>{
        return of(res)
      })).subscribe(console.log)
    // ).subscribe(res => res.subscribe((res) => {
    //     console.log(res)
    // }))
  }
}
