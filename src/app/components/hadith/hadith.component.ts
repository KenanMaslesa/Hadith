import { Component, OnInit } from '@angular/core';
import { HadithService } from 'src/services/hadith.service';

@Component({
  selector: 'app-hadith',
  templateUrl: './hadith.component.html',
  styleUrls: ['./hadith.component.scss']
})
export class HadithComponent implements OnInit {
  hadiths: any;
  currentTime: any;
  startSecond: any;
  endSecond: any;
  english = true;
  bosnian = true;

  constructor(private hadithService: HadithService) { }

  ngOnInit(): void {
    this.getHadiths();
  }

  getHadiths(){
    this.hadithService.getHadiths().subscribe(response => {
      this.hadiths = response;
    });
  }

  setAudio(audio, startSecond, endSecond){
    this.startSecond = startSecond;
    this.endSecond = endSecond;
    audio.currentTime = startSecond;
    audio.play();
  }

  updateCurrentTime(audio){
    this.currentTime = audio.currentTime;
    if(this.currentTime >= this.endSecond)
    this.setAudio(audio, this.startSecond, this.endSecond);
  }

  stopAudio(audio){
    audio.pause();
    audio.currentTime = 0;
  }

}
