import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  isContentType: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showContent(type) {
    type == 'shop' ? this.isContentType = true : this.isContentType = false;
  }

}
