import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})


export class ResultPage implements OnInit {
  heading:any;
  items:any=[];
  noresult: boolean =false;
  searchQuery:any;
  constructor(private route: ActivatedRoute, private router: Router,public http: HttpClient) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.heading = params.special;
      }
    });
  }
  ngOnInit() {
    this.http.get('http://localhost:3000/car?q='+this.heading).subscribe(data=>{
    //console.log(data)
    this.items = data;
    console.log(data);
    })
  }

  callme() {
    this.http.get('http://localhost:3000/car?q='+this.heading).subscribe(data=>{
    //console.log(data)
    this.items = data;
    console.log(data);
    })
  }

  searchagain(){
    this.http.get('http://localhost:3000/car?q='+this.searchQuery).subscribe(data=>{
    //console.log(data)
    this.heading=this.searchQuery
    this.items = data;
    if(this.items.length == 0)
    {
      this.noresult = true;
    }
    else{
      this.noresult =false;
    }
    console.log(data);
    })
  }
  viewdetails(item)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: item.id
      }
    };
    this.router.navigate(['/viewdetails'], navigationExtras)
  }
  delete(id){
    this.http.delete("http://localhost:3000/car/"+id).subscribe(data=>{
      console.log("deleted");
      this.searchagain();
    })
  }

}
