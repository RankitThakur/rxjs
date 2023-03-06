import { Component, OnInit } from '@angular/core';
import { from, generate } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-generate-operator',
  templateUrl: './generate-operator.component.html',
  styleUrls: ['./generate-operator.component.css']
})
export class GenerateOperatorComponent implements OnInit {
  startDate = new Date('06/03/2023');
  endDate = new Date('06/10/2023');
  result:any = [];
  result2:any = [];

  constructor() { }

  ngOnInit() {
    this.generateDemo();
    this.changeDate();
    this.photoShow();
  }

 //Generate Operator is a creation oprator like loop(syntex) oprateor 
// Example:1 =>  Use options object with condition and iterate function


  generateDemo = () => {
    let opration = generate({
      initialState: 1, //kha se humko start karna hai 
      condition: (v) => v<10,// the condition is a callback function and must return a boolean value;
      iterate: (v)=> v+1, //the iterate is a callback function and must return next value;
      resultSelector: (v: number)=> 'count'+v
    });
    opration.subscribe((res)=>{
    console.log(res)
    });
  }

/////////////////////////////////////////////Example-2///////////////////////////
  nextDate = (date: Date) => {
    return new Date(date.setDate(date.getDate()+ 1));
  };

  
  changeDate = () => {
    let dateChange= generate({
      initialState: this.startDate, //kha se humko start karna hai 
      condition: (d) => d<this.endDate,// the condition is a callback function and must return a boolean value;
      iterate: this.nextDate, //the iterate is a callback function and must return next value;
      resultSelector: (v:Date)=> v.toDateString()

    });
    dateChange.subscribe(res => {
      console.log(res);
      this.result.push(res)
    });
  };


  photoShow = () => {    
    let test  = from((fetch("https://jsonplaceholder.typicode.com/photos").then(respones => respones.json()))).pipe(
      switchMap((res)=>{
        return res
      }),
      map((res: any)=> {
        return res.url;
      })
    )

    // let dateChange= generate({
    //   initialState: this.startDate, //kha se humko start karna hai 
    //   condition: (d) => d<this.endDate,// the condition is a callback function and must return a boolean value;
    //   iterate: this.nextDate, //the iterate is a callback function and must return next value;
    //   resultSelector: (v:Date)=> v.toDateString()

    // });
    test.subscribe(res => {
      this.result2 = res
      console.log(this.result2)
    });
  };

  show = () => {
    let dateChange= generate({
      initialState: this.result2, //kha se humko start karna hai 
      condition: (d) => d<this.result2,// the condition is a callback function and must return a boolean value;
      iterate: this.nextDate, //the iterate is a callback function and must return next value;
      resultSelector: (v:Date)=> v.toDateString()

    });
    dateChange.subscribe(res => {
      console.log(res);
      this.result.push(res)
    });
  };


}
