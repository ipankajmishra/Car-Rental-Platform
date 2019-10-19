import { Component } from '@angular/core';
import { NgZone } from "@angular/core";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  hidebar:boolean=false;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'View list of Cars',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Add New Car',
      url: '/addnew',
      icon: 'car'
    }
  ];
  searchQuery: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private zone: NgZone
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  viewresult(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: this.searchQuery
      }
    };
    this.zone.run(() => {
      this.router.navigate(['/result'], navigationExtras);
      this.hidebar=true;
  });
    
  }
}
