import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationsService } from '../commons/locations.service';

@Component({
  selector: 'app-root',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  selloc = {};

  constructor( public routerServiceOb:ActivatedRoute, public locationsservice: LocationsService ) {} 

  getLocations(): void {
    this.locationsservice.getData().subscribe(serviceLocations => {
      var aboutID = this.routerServiceOb.snapshot.params['aid'];
      this.selloc = serviceLocations.dataArr[aboutID];
    });    
  }

  ngOnInit() {
    this.getLocations();
  }
}
