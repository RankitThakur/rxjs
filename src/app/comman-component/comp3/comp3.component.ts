import { Component, OnInit } from '@angular/core';
import { CommonServicesService } from 'src/app/common-services.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(private commonService: CommonServicesService) { }

  ngOnInit() {
  }

  onChange = (e:any) => {
    console.log(e.value)
    this.commonService.username.next(e.value)
  }


}
