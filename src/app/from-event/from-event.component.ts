import { JsonPipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter, map, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent  {
  @ViewChild('inputData', {static:true})   inputData?: ElementRef<HTMLInputElement>
  array :any=[];
  obs : Subscription
  constructor() { }
  ngOnInit() {
    //!.nativeElement means i am sour this is excits
      //fromEvent Creates an Observable from DOM events, and emit the value  or EventEmitter events or others.
    const searchObs = fromEvent(this.inputData!.nativeElement, 'input')
    .pipe(
      debounceTime(1000),
      filter((e: any) =>  e.target.value != ""),
      switchMap((e: any) =>{
        debugger
       return ajax(`https://api.github.com/search/users?q=${e.target.value}`);
    }),
    map((res)=> res.response.items)
  )

  this.obs = searchObs.subscribe((e: any)=>{
      this.array = e;
      console.log(this.array)
    })
    //from event convert in obserables
  }

  ngOnDestroy(){
 this.obs.unsubscribe();
  }
}



