import { Component, OnInit } from '@angular/core';

import { Title, TitleService } from './title.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  private title: Title;

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
