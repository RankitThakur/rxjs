import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';
import { CommonServicesService } from './common-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
subscribe = false;
 
 constructor(private commonService: CommonServicesService) { }
  ngOnInit(){

    this.commonService.subject2.subscribe(res=>{
      this.subscribe = res;
    })
    //observable=>>> emits  the data
    // const demoTest = new Observable((subscriber)=>{
    //   subscriber.next({name: 'test', price:54});
    //   subscriber.next({name: 'test', price:true});
    //   subscriber.next({name: 'test', price:94});
    //   subscriber.complete();
    //   subscriber.next({name: 'test', price:true})
    // }).pipe(
    //   ///tap- transprantly perfrom any action or side effects like console log , respones data in console,
    //   // change value property, emit any value of observer  and perfrom any other action 
    //   tap((test: any)=>{
    //     if(test.price == 94){
    //       console.log('this was error in this place')
    //     }
    //   }),
    //   //filter- filter the value 
    //   filter((test:any)=>test.price == true),
    //   map((test: any )=>
    // {
    //   return test.name;
    // }))
    // console.log(demoTest);

    // //subscriber/observer->>  consumes the emited data
    // demoTest.subscribe({
    //   next:(value: any)=>console.log(value),
    //   error: (error)=>console.log(error),
    //   // complete: ()=> console.log('i am done')
    // });  
  };
}
