import { Component, OnInit, OnDestroy } from '@angular/core';

import {Subscription} from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  isAuth = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService){}

  title = 'AmazonClone';

  ngOnInit(){
      this.authSubscription = this.authService.authChange.subscribe(authStatus => {
        this.isAuth = authStatus;
      })
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
  }

}
