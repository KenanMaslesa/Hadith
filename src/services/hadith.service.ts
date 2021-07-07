import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HadithService {

  constructor(private http: HttpClient) { }

  getHadiths(){
    return this.http.get('assets/hadiths.json');
  }
}
