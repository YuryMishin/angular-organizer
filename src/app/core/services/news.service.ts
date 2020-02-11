import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IApiNews} from '../models/model';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  static ApiUrl = 'https://hn.algolia.com/api/v1/search_by_date/';

  constructor(private http: HttpClient,
              private apiService: ApiService) {
  }

  getNews(): Observable<IApiNews> {
    // const params = {query: 'nodejs', tags: 'story'};
    return this.apiService.get(NewsService.ApiUrl);
  }
}
