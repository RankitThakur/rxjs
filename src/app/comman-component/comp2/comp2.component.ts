import { Component, OnInit } from '@angular/core';
import { CommonServicesService } from 'src/app/common-services.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private commonService: CommonServicesService) { }

  ngOnInit() {
  }

  onChange = (e:any) => {
    console.log(e.value)
    this.commonService.username.next(e.value)
  }


}
