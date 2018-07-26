import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";

@Injectable()
export class AppServiceService {

  item_url = 'http://localhost:9000/upload';

  constructor(private http: Http) { }

  uploadItem(data) {
    return this.http.post(this.item_url, data);
  }


}
