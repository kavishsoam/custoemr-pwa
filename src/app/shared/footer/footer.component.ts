import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isHomeFooter: boolean;

  constructor(
    private route : Router
  ) { }

  ngOnInit(): void {
        this.route.events.subscribe((res)=>{
          console.log(this.route.url);
          if(this.route.url.includes('auth')){
            this.isHomeFooter = false;
          }else {
            this.isHomeFooter = true;
          }
        })
  }

  navigate(url) {
    console.log(url);
    this.route.navigateByUrl(`main/${url}`);
  }

}
