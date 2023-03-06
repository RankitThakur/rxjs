import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, of } from 'rxjs';

@Component({
  selector: 'app-combine-latest-operator',
  templateUrl: './combine-latest-operator.component.html',
  styleUrls: ['./combine-latest-operator.component.css']
})
export class CombineLatestOperatorComponent implements OnInit {

  constructor() { }
//Combine-lastest: - When any observable emits a value, emit the last emitted value from each.
//atlesr

  ngOnInit() {
    let obs1 = interval(1000);
    let obs2 = interval(2000);
    let obs3 = of(`hello`);
    let obs4 = of('world');

    // combineLatest([obs1, obs2]).subscribe((res => {
    //   console.log(res)
    // }))

    combineLatest(obs3, obs2, obs4,obs1).subscribe(res => console.log(res))
    
  }

}
