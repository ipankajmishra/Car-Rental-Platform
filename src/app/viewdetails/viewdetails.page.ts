import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.page.html',
  styleUrls: ['./viewdetails.page.scss'],
})
export class ViewdetailsPage implements OnInit {
  data: any={};
  cardetails:any={};
  modelname:any;
  editbool: boolean=false;
  model:any;
  rentcharge:any;
  capacity:any;
  uniqueNumber:any;
  vehiclenumber: any;
  callfirst(id) {
    this.http.get("http://localhost:3000/car/"+id).subscribe(data=>{
        this.cardetails = data;
        this.modelname = this.cardetails.model;
        this.model=this.modelname;
        this.rentcharge = this.cardetails.rent_per_day;
        this.capacity = this.cardetails.seating_capacity;
        this.uniqueNumber = this.cardetails.uniqueNumber;
        this.vehiclenumber = this.cardetails.vehicle_number;
        console.log(this.cardetails);
    })
  }
  

  constructor(private route: ActivatedRoute, private router: Router,public http: HttpClient) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = params.special;
        this.callfirst(this.data);
      }
    });
  }

  ngOnInit() {
  }

  edit(){
    this.editbool = true;
    
  }

  cancel()
  {
    this.editbool = false;
  }
  update()
  {
    let formdata: any={};
    formdata = {
      "vehicle_number": this.vehiclenumber,
      "model": this.model,
      "seating_capacity": this.capacity,
      "rent_per_day": this.rentcharge,
      "uniqueNumber": this.uniqueNumber
    }
    this.http.patch("http://localhost:3000/car/"+this.data,formdata).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/success'])
    })
  }

}
