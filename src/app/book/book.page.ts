import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  heading: any;

  constructor(private route: ActivatedRoute, private router: Router,public http: HttpClient) { 
    
   
  }

  ngOnInit() {
  }

}
