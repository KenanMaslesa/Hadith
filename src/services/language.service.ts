import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languages = ["english", "bosanski"];
  currentLanguage = "english";

  constructor() { }

  get isBosnian():boolean{
    return this.currentLanguage == "bosanski";
  }

  get isEnglish():boolean{
    return this.currentLanguage == "english";
  }

}
