import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { map, switchMap, toArray } from 'rxjs/operators';
import { CommonServicesService } from '../common-services.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {
  @ViewChild('tempData', {static: true}) tempData: ElementRef
  userList1:any = [];
  userList2:any = [];
  userList3:any = [];
  btnSubmod1:boolean = false;
  btnSubmod2:boolean = false;
  sub1: Subscription;
  sub2: Subscription;

  constructor(private commonService: CommonServicesService) {

   }

  ngOnInit() {
    this.commonService.storeVideo.subscribe(res=>{
      console.log(res)
      this.userList1.push(res)
      // this.userList1 = res
    });
  }

  //replay-subject - multiple old store value/ "Replays" or emits old values to new subscribers //it store value as per requarment

  addVideo = (event: any) => {
    this.commonService.storeVideo.next(event.value)

  };

  btnMod = () => {
    if(this.btnSubmod1){
      this.sub1.unsubscribe();
    }
    else {
      this.sub1 =  this.commonService.storeVideo.subscribe(res=>{
        console.log(res)
          this.userList2.push(res)
          // this.userList2 = res

        })
    }
     this.btnSubmod1 = !this.btnSubmod1;
  };

  btnMod2 = () => {
    debugger
    this.btnSubmod2 = !this.btnSubmod2;
  };

  toggleData = () => {

    let respones = "https://jsonplaceholder.typicode.com/users";     
    let custObs4 = from(fetch(respones).then(respones => respones.json())).pipe(
      switchMap(respones => respones),
      map((test:any) =>test.name),
    );
    custObs4.subscribe((res: any) => {
      this.commonService.storeVideo.next(res)
      console.log(res)
    })
  }
}


