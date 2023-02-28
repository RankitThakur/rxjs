import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { combineAll, map } from 'rxjs/operators';

@Component({
  selector: 'app-custom-obs',
  templateUrl: './custom-obs.component.html',
  styleUrls: ['./custom-obs.component.css']
})
export class CustomObsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //Create method takes function as a argument with Observer.
    let custObs = new Observable((obs) => {
      setTimeout(() => {
        obs.next('test1')
      }, 1000);
      setTimeout(() => {
        obs.next('test1')
      }, 2000);
      setTimeout(() => {
        obs.next('test1')
        obs.error('test error')
      }, 3000);
      setTimeout(() => {
        obs.next('test1')
      }, 4000);
      setTimeout(() => {
        obs.next('test1')
      }, 5000);
      setTimeout(() => {
        obs.next('test1')
      }, 6000);
    });
     custObs.subscribe((value) => {
      console.log(value)
     },
     (error) => {
      console.log('error')
     },
     () => {
      console.log('done')
     }
    );
    
    let custObs2 = new Observable((obs => {
      let count = 0
      setInterval(()=>{
        obs.next('test');
       if(count<=10){
        obs.error('error emit')
      }
      count++}, 2000)
     })
    );

    custObs2.subscribe((value) =>{
      console.log(value)
    },
    (error) => {
      console.log(error)

    });
  }

  //custom interval obs

}
