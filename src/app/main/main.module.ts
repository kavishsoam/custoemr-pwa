import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LikeComponent } from './like/like.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentModule } from '../shared-components/shared-component.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeServiceService } from './home/home-service.service'
const route : Routes = [
  {
    path : 'home',
    component : HomeComponent,
  },
  {
    path : 'like',
    component : LikeComponent,
  },
  {
    path : 'notifications',
    component : NotificationsComponent,
  },
  {
    path : 'schedule',
    component : ScheduleComponent,
  },

]

@NgModule({
  declarations: [ HomeComponent, ScheduleComponent, LikeComponent, NotificationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedComponentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    HomeComponent, ScheduleComponent, LikeComponent, NotificationsComponent
  ],
  providers:[HomeServiceService]
})
export class MainModule { }
