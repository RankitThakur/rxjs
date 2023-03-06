import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, of, merge } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-merge-operator',
  templateUrl: './merge-operator.component.html',
  styleUrls: ['./merge-operator.component.css']
})
export class MergeOperatorComponent implements OnInit {

@ViewChild('clickEvent', {static: true}) clickEvent: ElementRef<HTMLButtonElement>
  constructor() { }

///merge ==> Turn multiple observables into a single observable. it is creation obserables


  ngOnInit() {

    // Example 1: merging multiple observables, static method

    let obs = interval(1000);
    let obs1 =  of([1,2,3,4,5]);
    let obs2 = from([1,2,3,4,5]);
    let obs3 = fromEvent(this.clickEvent!.nativeElement, 'click');

    // merge(obs1, obs3, 2).subscribe(res => {
    //   console.log(res);
    //   this.get();
    // });
    this.interValMethod();
  };


  //Example 2: merge to ajex request using merge operatot;
  get = () => {
    let obs4  = ajax.getJSON('https://jsonplaceholder.typicode.com/posts/1');
    let obs5  = ajax.getJSON('https://jsonplaceholder.typicode.com/posts');
    merge(obs4, obs5).subscribe(res => console.log(res));
  }

  interValMethod = () => {
    let obs6 = interval(1000); 
    let obs7 = interval(4000); 
    merge(obs6, obs7).subscribe(res => console.log(res))
  }
}

