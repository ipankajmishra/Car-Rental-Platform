import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.page.html',
  styleUrls: ['./addnew.page.scss'],
})
export class AddnewPage implements OnInit {
  fileData: File = null;
  base64textString: string;
  user_image: SafeResourceUrl;
  imageselected:boolean=false;
  rentcharge:any;
  name:any;
  model:any;
  capacity:any;
  vehiclenumber: any;
  uniquenumber: any;
  constructor(private sanitizer: DomSanitizer,public http: HttpClient,private router: Router) { }
  ngOnInit() {
  }
  

public fileUploader(event) {
  var files = event.target.files;
  var file = files[0];

if (files && file) {
    var reader = new FileReader();

    reader.onload =this.handleFile.bind(this);

    reader.readAsBinaryString(file);
}
}



handleFile(event) {
 var binaryString = event.target.result;
        this.base64textString= btoa(binaryString);
        console.log(btoa(binaryString));
        this.loadImage(this.base64textString);
}

loadImage(base64image){
  this.user_image = this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpeg;base64,"+base64image);
  this.imageselected=true;
}

onSubmit(){
  let formdata: any={};
  formdata = {
    "vehicle_number": this.vehiclenumber,
    "model": this.model,
    "seating_capacity": this.capacity,
    "rent_per_day": this.rentcharge,
    "image": "data:image/jpeg;base64,"+this.base64textString
  }
  this.http.post("http://localhost:3000/car/",formdata).subscribe(data=>{
    console.log(data);
    this.router.navigate(['/success'])
  })
  
}
}
