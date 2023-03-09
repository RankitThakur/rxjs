import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonServicesService } from '../common-services.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {
  //async-subject---> value emit hoti rahati hai hoti raahati hai or humne subscribe bhi kara hota hai but
  //no metter kitni value emit hui hai subcriber ko value tab milti hai jab subcribtion complete ho jata hai 
  //isme last emited value milti hai.
  //last emited value ke liye humko complete ka use karna padega 
  result: any = [];
  @ViewChild('tempData', {static: true}) tempData: ElementRef

  constructor(private commonService: CommonServicesService) {

   }

  ngOnInit() {
    this.commonService.asyncStoreVideo.subscribe(res => {
      this.result.push(res)
    })
  }

  addVideo = (event: any) => {
    this.commonService.asyncStoreVideo.next(event.value);
  };
  
  //Oncomplete
  Oncomplete = () => {
    this.commonService.asyncStoreVideo.complete();
  }
}
