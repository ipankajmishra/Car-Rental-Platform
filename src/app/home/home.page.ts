import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public http: HttpClient,private router: Router) {
    this.callfirst();
  }


  callfirst(){
    this.http.get('http://localhost:3000/car').subscribe(data=>{
console.log(data)
})
  }

  navigatetoList(){
    this.router.navigate(['/list'])
  }
}
