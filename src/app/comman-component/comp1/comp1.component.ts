import { Component, OnInit } from '@angular/core';
import { CommonServicesService } from 'src/app/common-services.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private commonService: CommonServicesService) { }

  ngOnInit() {
  }
  
  onChange = (e:any) => {
    console.log(e.value)
    this.commonService.username.next(e.value)
  }

}
