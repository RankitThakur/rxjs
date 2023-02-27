import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { CommonServicesService } from '../common-services.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {
  data:any;
  name:string = 'Rxjs'
  constructor(private commanService: CommonServicesService) {
    this.commanService.username.subscribe((res)=>{
      this.name = res;
    });
   }

  ngOnInit() {
    this.subjectData();
    this.commanService.subscribe.next(true)
  }

  //subject--> subject is a spacial type of observel that allows  values to be multicasted to many observers
  //subject are like  event emitters --> data ko emit karna ke ke liye /// subject me next method ko call karna hota hai emit karne ke liye.
  //syntex = new subject <numbet>();
  //isme  intial value nhi dete hai ager intial value dena hai to behavior subject use karnte hai.
  //this is a multicasting observel
   
  subjectData = () => {
    let subject = new Subject<number>()
    subject.subscribe((respones=>{
      this.data = respones
      console.log("subject===>", respones);
    }));
    subject.next(1)
  }

  ngOnDestroy(): void {
    this.commanService.subscribe.next(false)
  }
}

