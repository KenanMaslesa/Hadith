import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HadithService {
  hadiths: any;
  activeHadith: any;

  constructor(private http: HttpClient) { 
    this.getHadiths();
  }

  getHadiths(){
    return this.http.get('assets/hadiths.json').subscribe(response => this.hadiths = response);
  }
}
