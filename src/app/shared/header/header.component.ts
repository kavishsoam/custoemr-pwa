import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isHomeHeader: boolean;
  presentUrl: any;
  authHeader: boolean = true;

  constructor(private route : Router) { }

  ngOnInit(): void {
    this.route.events.subscribe((res)=>{
      console.log(this.route.url);
      if(this.route.url.includes('home')){
        this.isHomeHeader = true;
      }else {
        this.isHomeHeader = false;
        (!this.route.url.includes('auth'))?
        this.presentUrl = this.route.url.split('/')[2]
        : this.presentUrl = '', 
        this.authHeader = false
      }
    })
  }

}
