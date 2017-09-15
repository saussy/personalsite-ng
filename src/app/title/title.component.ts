import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Title, TitleService } from './title.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title: Title;
  fallback: String = "jaredsaussy.com";

  constructor(
    private titleService: TitleService
  ) { }

  ngOnInit() {
    this.titleService.getRandomTitle().then((res)=> {
      console.log(res);
      this.title = res;
    });
    this.title = {
      title: 'Uber, but for sarcasm',
      title_id: '0'
    }
  }

}
