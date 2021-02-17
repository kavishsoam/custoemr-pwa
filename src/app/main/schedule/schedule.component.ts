import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  isContentType: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showContent(type) {
    type == 'upcoming' ? this.isContentType = true : this.isContentType = false;
  }
}
