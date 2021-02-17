import { Injectable } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private apiService : ApiServicesService) { }

 categories = () => this.apiService.get('category');

}
