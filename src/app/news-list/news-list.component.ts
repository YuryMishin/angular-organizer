import { Component, OnInit } from '@angular/core';
import {NewsService} from '../core/services/news.service';
import {IApiHit} from '../core/models/model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  news: IApiHit[];

  ngOnInit() {
    this.newsService.getNews().subscribe(value => {
      this.news = value.hits;
    });
  }

}
