import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.page.html',
  styleUrls: ['./booknow.page.scss'],
})
export class BooknowPage implements OnInit {
  heading: any;
  item:any={};
  date:any;
  date1:any;
  date2:any;
  date3:any;
  date4:any;
  date5:any;
  date6:any;
  month: any;
  year: any;
  available1: boolean = false;
  available2: boolean = false;
  available3: boolean = false;
  available4: boolean = false;
  available5: boolean = false;
  available6: boolean = false;
  available7: boolean = false;
  date7: any;
  id: any;
  constructor(private route: ActivatedRoute, private router: Router,public http: HttpClient) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.id = params.special;
        this.callmehere();
      }
    });
  }

  ngOnInit() {
  }

  callmehere(){
    this.http.get("http://localhost:3000/car/"+this.id).subscribe(data=>{
    this.item=data;
    this.heading = this.item.model;
    //console.log(this.item);
    this.http.get("http://localhost:3000/booked_status/"+this.id).subscribe(data=>{
      console.log(data);
      let item:any={};
      item = data;
      this.available1 = item.one;
    this.available2 = item.two;
    this.available3 = item.third;
    this.available4 = item.four;
    this.available5 = item.five;
    this.available6 = item.six;
    this.available7 = item.seven;
    })
    let date = new Date();
    this.date = date.getDate();
    this.month = date.getMonth();
    this.year = date.getFullYear();
    this.date1 = this.date;
    this.date2 = this.date+1;
    this.date3 = this.date+2;
    this.date4 = this.date+3;
    this.date5 = this.date+4;
    this.date6 = this.date+5;
    this.date7 = this.date+6;
    
    
    
    })
  }

  bookcontinue1(data){
    let ss = data;
    let formdata: any={};
    formdata = {
      "one" : true
    }
    this.http.patch("http://localhost:3000/booked_status/"+this.id, formdata).subscribe(data=>{
        console.log("success");
        this.callmehere();
    })
  }
  bookcontinue2(data){
    let ss = data;
    let formdata: any={};
    formdata = {
      "two" : true
    }
    this.http.patch("http://localhost:3000/booked_status/"+this.id, formdata).subscribe(data=>{
        console.log("success");
        this.callmehere();
    })
  }
  bookcontinue3(data){
    let ss = data;
    let formdata: any={};
    formdata = {
      "third" : true
    }
    this.http.patch("http://localhost:3000/booked_status/"+this.id, formdata).subscribe(data=>{
        console.log("success");
        this.callmehere();
    })
  }
  bookcontinue4(data){
    let ss = data;
    let formdata: any={};
    formdata = {
      "four" : true
    }
    this.http.patch("http://localhost:3000/booked_status/"+this.id, formdata).subscribe(data=>{
        console.log("success");
        this.callmehere();
    })
  }
  bookcontinue5(data){
    let ss = data;
    let formdata: any={};
    formdata = {
      "five" : true
    }
    this.http.patch("http://localhost:3000/booked_status/"+this.id, formdata).subscribe(data=>{
        console.log("success");
        this.callmehere();
    })
  }
  bookcontinue6(data){
    let ss = data;
    let formdata: any={};
    formdata = {
      "six" : true
    }
    this.http.patch("http://localhost:3000/booked_status/"+this.id, formdata).subscribe(data=>{
        console.log("success");
        this.callmehere();
    })
  }
  bookcontinue7(data){
    let ss = data;
    let formdata: any={};
    formdata = {
      "seven" : true
    }
    this.http.patch("http://localhost:3000/booked_status/"+this.id, formdata).subscribe(data=>{
        console.log("success");
        this.callmehere();
    })
  }
  

}
