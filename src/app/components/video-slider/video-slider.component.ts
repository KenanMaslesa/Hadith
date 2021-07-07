import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.scss']
})
export class VideoSliderComponent implements OnInit {
  @Input() hadith: any;
  
  constructor(public sanitizer: DomSanitizer, public languageService: LanguageService) {

     }

  ngOnInit(): void {
  }

}
