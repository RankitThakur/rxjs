import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { delay, map, retry, retryWhen, scan, switchMap, toArray } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {
  result:any = [];
  data:any={};
  status: string = 'no Data';
  status2: string = 'no Data';
  fatchdata: boolean = false;
  showData: boolean = false;

  constructor(private http: HttpClient) { };

  ngOnInit() {
    //retry- iski help se hum kisi bhi obserable ko re-subscribe kar shakte hai.    
  }
  //Retry 2 times on error using from oprater with fetch method
  fetchData = () => {
    this.fatchdata = true;
    let respones = "https://jsonplaceholder.typicode.com/users";     
    let retryObs = from(fetch(respones).then(respones => respones.json())).pipe(
      switchMap(respones => respones),
      map(test=>test),
      toArray(),
      retry(3)
    );
    retryObs.subscribe(res=>{
      debugger
      this.result = res;
      this.status = 'data fetch' ,
      (er:any)=>{
        this.status = 'problem to connnect please try aggain',
        console.log(er)
      }
    });
  }

    //RetryWhen delay and scan  using from get method

    getData = () => {
      this.showData = true;
      this.http.get('https://jsonplaceholder.typicode.com/posts/1').pipe(
        // retry(4)
        retryWhen(err=> err.pipe(
          delay(3000),///every 3 sec ke bad ye retry karta he jayga 
          scan((retry)=>{  //A "reducer function". This will be called for each value after an initial state is acquired.//ye har retry ke bad call hoga 
           if(retry>=2){
            console.error('network issue') 
            throw   err     
          }
           else {
            retry = retry + 1;
            console.log('retry===>', retry)
            return retry
           }
          }, 0)
        ))//retry ke ander bhi oprater ki chain bana padti hai

      ).subscribe(res=>{
        this.data = res;
        this.status2 = 'data fetch' ,
        console.log(res),
        (error)=>{
          console.log(error);
        }
      });

  };
}
