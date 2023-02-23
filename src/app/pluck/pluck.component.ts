import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  dataValue: any;
  data = [
    { firstName: 'Joe', lastName: 'Smith' },
    { firstName: 'Sally', lastName: 'Brown' },
    { firstName: 'Joe', lastName: 'Smith' },
    { firstName: 'Sally', lastName: 'Smith' },
    { firstName: 'Joe', lastName: 'Smith' },
    { firstName: 'Sally', lastName: 'Smith' },
    { firstName: 'Joe', lastName: 'Smith' },
  ];

  dataNs = [
    { test: 'Joe', test2: { test3: 'data'} },
    { test: 'Joe', test2: { test3: 'data'} },
    { test: 'Joe', test2: { test3: 'data'} },
    { test: 'Joe', test2: { test3: 'data'} },
  ];
  constructor() { }
  ngOnInit() {

    //pluck ----> Maps each source value to its specified nested property.
    let obs1 = from(this.data);
    // Example 1: Pluck object property

    obs1.pipe(pluck('firstName'), toArray()).subscribe((value) => {
      this.dataValue = value
      console.log(value)
    });

    let obs2 = from(this.dataNs);
    // Example 1: Pluck object property

    obs2.pipe(pluck('test2', 'test3'), toArray()).subscribe((value) => {
      this.dataValue = value
      console.log(value)
    })

  }

  // Example 2: Pluck nested properties

}
