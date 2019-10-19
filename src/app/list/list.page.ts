import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { NavController } from 'ionic-angular';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  items:any=[];
  constructor(public http: HttpClient,private router: Router) {
       
    
  }
  ngOnInit(){

  }
  delete(id){
    this.http.delete("http://localhost:3000/car/"+id).subscribe(data=>{
      console.log("deleted");
      this.firstrun();
    })
  }
  ionViewWillEnter() {
    this.http.get('http://localhost:3000/car').subscribe(data=>{
    //console.log(data)
    this.items = data;
    console.log(data);
    console.log(this.items[0]);
    })
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  firstrun(){
    this.http.get('http://localhost:3000/car').subscribe(data=>{
    //console.log(data)
    this.items = data;
    console.log(data);
    console.log(this.items[0]);
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

  booknow(item){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: item.id
      }
    };
    this.router.navigate(['/booknow'], navigationExtras)
  }
}
