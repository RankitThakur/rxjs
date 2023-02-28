import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { resolve } from 'url';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
  showData:any = [];
  showData2:any;

  constructor() { }

  ngOnInit() {
    //of ->>>Converts the arguments to an observable sequence.

    //example  1- nEmitting a sequence of numbers
    let  obs1 = of(1,2,3,4,5,6,7,8)
    obs1.subscribe(
      (value)=> {
       this.showData.push(value)    
        }
    );
    ///example 2 -Emitting a obj sequence of numbers
    let obs2 = of({a:1,b:2,c:3} )
    obs2.subscribe(
      (value)=>{
        this.showData2 = value;
      }
    );

    //example 3--Emitting an object, array, and function

    let obs3 = of([1,2,3],{a:1,b:2,c:3}, function hello() {
      return 'Hello';
    } )

    obs3.subscribe(
      (value)=> {
        console.log(value)
      }
    );

    ///convert promise in obserable using from oprarter 
    const promise  = new Promise(resolve =>{
      setTimeout(()=> {
      resolve('promise resolve '), 2000
      })
    })

    let obs5  = from(promise)
    obs5.subscribe((value)=> {
      console.log(value)
    })

 //from----> it is convert to stream
//     convert string to observral
//     This operator can be used to convert a promise to an observable!
// 💡 For arrays and iterables, all contained values will be emitted as a sequence!
// 💡 This operator can also be used to emit a string as a sequence of characters!
    let str1 = "welcome to rxjs topic"

    let obs6 = from(str1).subscribe((value)=>{
      console.log(value)
    })
    
      // Observable from
      let array = [1, 2, 3, 4, 5, 6]
      let obs7 = from(array).subscribe((value)=>{
        console.log(value)
      })

  }


}
