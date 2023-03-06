import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax-operator',
  templateUrl: './ajax-operator.component.html',
  styleUrls: ['./ajax-operator.component.css']
})
export class AjaxOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getData();
  }

  //The ajax operator is used to make an ajax request for the given URL. and this is a Creation Operators in rxjs
 //iski help se ajax request ko perfrom kar shakte hai isme ek object banta hai isme bhut sare type hote hai like 
 //respones and status and more. 

  getData = () => {
    ajax("https://jsonplaceholder.typicode.com/posts").subscribe(
      (res) =>{ console.log(res.response) },
      (err)=> { console.log("404 Error Data not found")},
      );

    ajax.get('https://jsonplaceholder.typicode.com/photos').subscribe(res=>{
      console.log(res.response);
    });

    ajax.getJSON('https://jsonplaceholder.typicode.com/photos').subscribe(res=>{
      console.log(res);
    });
  }


}
