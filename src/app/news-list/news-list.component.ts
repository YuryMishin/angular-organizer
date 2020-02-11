import { Component, OnInit } from '@angular/core';
import {NewsService} from '../core/services/news.service';
import {IApiHit, IApiNews} from '../core/models/model';
import {ImageService} from '../core/services/image.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor(private newsService: NewsService,
              private imageService: ImageService) { }

  news: IApiHit[];

  ngOnInit() {
    this.newsService.getNews().subscribe(value => {
      console.log('NEW: ', value);
      this.news = value.hits;
    });
    // this.imageService.getImage('angular app').subscribe(value => {
    //   console.log('IMAGE,: ', value);
    // });
  }

}
