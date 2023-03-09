import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, concat, forkJoin, from, fromEvent, generate, iif, interval, merge, of, range, ReplaySubject, Subject, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatMap, debounceTime, filter, map, mergeMap, pluck, take, takeUntil } from 'rxjs/operators';
import { resolve } from 'url';
import { CommonServicesService } from '../common-services.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @ViewChild('inputData', {static:true})   inputData?: ElementRef<HTMLInputElement>
  userName:string
   mySub = new Subject<any>();

  constructor(private commanService: CommonServicesService) {
   }
   


  ngOnInit() {
    this.commanService.name.subscribe(res=>{
      this.userName = res
      console.log(this.userName)
      this.mySub.subscribe(console.log)
    })

    // creation oprater
    // this.ofObs();
    // this.fromObs();
    // this.fromEvent();
    // this.interval();
    this.timer();
    // this.range();
    // this.genrateOprater();
    // this.ajaxRes();
    // this.iifOprater();
    // this.concatObs();
    // this.mergeObs();
    // this.combineLatest();
    // this.forkJoin();
    // this.concatMap();
    // this.merage();
    // this.subjectObs();
    // this.behavObs();
    // this.test();
    // this.demo();
    // this.replaySubject();
    // this.mergeMap();
  }

  /////////////////////////////////
  ofObs = () => {
    let obs = 'test'
    //using string
    of(obs).subscribe(console.log)
    let promises = new Promise((resolve, reject) =>{
      console.log('test')
      resolve("foo")
    });
    //using promoise
    of(promises).subscribe(console.log)
    //using to obs
    let obs3 = from([1,2,3]) 
    of(obs, promises, obs3).subscribe(console.log);
  }

  ///////////////////////////////////////
  fromObs = () => {
    let obs = 'test'
    //using string
    from(obs).subscribe(console.log)
    let promises = new Promise((resolve, reject) =>{
      console.log('test')
      resolve("foo")
    });
    //using promoise
    from(promises).subscribe(console.log)
    //using to obs
    let obs3 = of([1,2,3]) 
    from([obs3, obs, promises]).subscribe(console.log);
  }

///////////////////////////////////////
  fromEvent = () => {
    fromEvent(this.inputData!.nativeElement, 'input').pipe(
      map((res:any) => res.target.value)
    ).subscribe(console.log);
  };
 ///////////////////////////// 
  interval = () => {
    let condition =  timer(3000)
    interval(1000).pipe(
      map(res => res*3),
      takeUntil(condition)
    ).subscribe(console.log);
  }
//////////////////////////////////
  timer = () => {
    let obs1 = timer(3000).subscribe(console.log)
  }
/////////////////////////////////
  range = () => {
    //range(start: number, count?: number, scheduler?: SchedulerLike): Observable<number>
    let  obs2 = range(1, 5).subscribe(console.log)
  }

/////////////////////////////////////////  
  genrateOprater = () =>{
    // generate<T, S>(initialStateOrOptions: T | GenerateBaseOptions<T, S>, condition?: ConditionFunc<T>, iterate?: IterateFunc<T>, resultSelectorOrObservable?: ResultFunc<T, S> | Observable<S>, scheduler?: SchedulerLike): Observable<S>

    generate( {
      initialState: 1, //kha se humko start karna hai 
      condition: (v) => v<10,// the condition is a callback function and must return a boolean value;
      iterate: (v)=> v+1, //the iterate is a callback function and must return next value;
      resultSelector: (v: number)=> 'count'+v
    }).subscribe(console.log);
  }
   
  ajaxRes = () => {
    ajax.getJSON("https://jsonplaceholder.typicode.com/posts").subscribe(console.log)
  };
  
  iifOprater = () => {
    let auth = false;
    let obs1 = of(1,2,3);
    let obs3 = ajax.getJSON('https://jsonplaceholder.typicode.com/posts')
    let obs4 = ajax.getJSON('https://jsonplaceholder.typicode.com/posts/1/comments')
    let obs2 = of([1,2,3]);
    iif(() => auth , obs1 , obs2).subscribe(console.log)
    iif(() => auth , obs3 , obs4).subscribe(console.log)
  }
  //////////////////////////////////
  concatObs = () => {
    let timers = interval(1000);
    let timer2 = interval(2000);
    let obs3 = ajax.getJSON('https://jsonplaceholder.typicode.com/posts')
    let obs4 = ajax.getJSON('https://jsonplaceholder.typicode.com/posts/1/comments')

    let promises = new Promise((resolve, reject) =>{
      resolve("foo")
    });

    let promises2 = new Promise((resolve, reject) =>{
      resolve("foo2")
    });
    concat(timers, timer2).subscribe(console.log);
    concat([obs3, obs4]).subscribe(console.log);
  };
/////////////////////////////
  mergeObs = () => {
    let timers = interval(1000);
    let timer2 = interval(2000);
    merge(timers, timer2).subscribe(console.log);
  }

  //////////////////////////////////
  combineLatest = () => {
    let timers = interval(1000);
    let timer2 = interval(2000);
    let str = of('hello');
    let st2 = of('word');
    combineLatest(timers, timer2).subscribe(console.log);
    combineLatest(str, st2).pipe(map(res => res+'test')).subscribe(console.log);
  }
  //25| concat vs merge vs combineLatest

//////////////////////////////////////////
  forkJoin = () => {
    //jab tak sab value complete na ho jay
    let timerObs = timer(2000);
    let array = of(['test'])
    let array2 = from(['hello'])
    let promises = new Promise((resolve, reject) =>{
      resolve("foo")
    });
    forkJoin([timerObs, array, array2, promises]).subscribe(console.log)
  }

  ///////////////////////////////////////
  concatMap = () => {
    let obs = interval(1000).pipe(
      mergeMap((res) =>{ 
        return of(['test'])})
    ).subscribe(console.log)
    //outerObs.
    // let obs1 = interval(1000).pipe(
    //   concatMap((res) => {
    //     return of(res)//innerobs
    //   })
    // ).subscribe(console.log)
  }

  //////////////////////////////////
  mergeMap = () => {
    let obs = of(interval(1000), interval(2000)).pipe(
      mergeMap(res=> res)
    ).subscribe(console.log)
  }

  subjectObs = () => {
    debugger
    this.commanService.subject2.next(true);
  }

  behavObs = () => {
    this.commanService.username.subscribe(res => {
      console.log(res)
    })
  }

  test = () => {
    let myObs = of('test').pipe(
      map(res=> res+'1')
    ).subscribe(res => {
      this.mySub.next(res)
    });
  }

  replaySubject = () => {
    let newObs = new ReplaySubject<string>(2);
    newObs.next('test1');
    newObs.next('test2');
    newObs.next('test3');
    newObs.next('test4');
    newObs.subscribe(console.log);
  };

  demo = () => {
    let data = [{
        test: 1,
        test2: 2,
      },
      {
        test: 2,
        test2: 2,
      },
      {
        test: 3,
        test2: 2,
      }
    ] 

    // from(data).pipe(
    //   map(res => res.test)
    // ).subscribe(res=> console.log(res))
    from(data).pipe(
      pluck('test')
    ).subscribe(res=> console.log(res))

  }
}







