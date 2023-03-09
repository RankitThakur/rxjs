import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-demo',
  templateUrl: './todo-demo.component.html',
  styleUrls: ['./todo-demo.component.css']
})
export class TodoDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let test = new Observable((res) => {
      res.next(1);
      res.next(2);
      res.next(3);
   }).pipe(
    map(res => res + 'test')
   );
   test.subscribe(res=>{
    console.log(res);
   });
  }
}
