import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HomeServiceService } from './home-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  categoryList: any = [];
  categoryData: any = [];

  constructor(private homeService : HomeServiceService) { }
  recentlyViewed : any = [{
    name : 'Massage'
  },
{
  name : 'Nail'

},{
  name : 'Hair'

},{
  name : 'Beauty'
}];

  ngOnInit(): void {
  }

  ngAfterViewInit () {
    this.homeService.categories().subscribe((res:any)=>{
      this.categoryList = res.result;
      let allData = [];
      this.categoryList.forEach(element => {
        element.category.forEach(ele => {
          let obj = {};
          if(ele.language === 'english'){
            obj['name'] = ele.name
            obj['_id'] = element._id
            obj['image'] = element.image
            allData.push(obj);
          }
        });
      });
      this.categoryData = allData;
      console.log(this.categoryData);
      
      // this.categoryData = {data : allData};
    },err=>{console.log(err)});
   

  }

  setDefaultPic(e) {
    e.target.src = './assets/images/cust_icon.png'
  }

}
