import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs';

@Injectable()
export class LocationsService {
  constructor(private http: Http) { }

  getData() {
    return this.http
          .get('assets/data/locations.json')
          .pipe(map(data => data.json()));
  }
}
