import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time-distinct-until-changed',
  templateUrl: './debounce-time-distinct-until-changed.component.html',
  styleUrls: ['./debounce-time-distinct-until-changed.component.css']
})
export class DebounceTimeDistinctUntilChangedComponent implements AfterViewInit{
  @ViewChild('myInput', {static:true}) myInput: ElementRef 
  @ViewChild('myInput2', {static:true}) myInput2: ElementRef 

  //static - True to resolve query results before change detection runs, false to resolve after change detection. Defaults to false.
  //An ElementRef is backed by a render-specific element. In the browser, this is usually a DOM element
  result: string = '';
  result2: string = '';

  constructor() { }

  ngAfterViewInit(): void {
    // fromEvent(target, eventname)
    //Debounce-time- specified time between output
    //Example 1: Debouncing based on time between input

    const obs1 = fromEvent(this.myInput!.nativeElement, 'keyup').pipe(
     map((e:any)=> e.target.value),
     debounceTime(1000)
    )
    obs1.subscribe((res)=>{
      console.log(res);
      this.result = res;
    });

    // fromEvent(target, eventname)
    //Example 1: distinctUntilChanged based on time between input.
     //distinct-until-changed
     const obs2 = fromEvent(this.myInput2!.nativeElement, 'keyup').pipe(map((e:any)=> e.target.value),
     debounceTime(1000),
     distinctUntilChanged())
     obs2.subscribe((res)=>{
       console.log(res);
       this.result2 = res;
     });
  }
}
