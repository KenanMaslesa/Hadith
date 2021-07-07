import { Component, OnInit } from '@angular/core';
import { HadithService } from 'src/services/hadith.service';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public languageService: LanguageService, public hadithService: HadithService) { }

  ngOnInit(): void {
  }

}
