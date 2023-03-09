import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonServicesService } from 'src/app/common-services.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  subscription:any
  constructor(private commonService: CommonServicesService) {
   }

  ngOnInit() {
    this.subscription = this.commonService.subject2.next(true);
  }

  onChange = (e:any) => {
    console.log(e.value)
    this.commonService.name.next(e.value)
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
