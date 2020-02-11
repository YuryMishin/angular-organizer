import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {filter, map} from 'rxjs/operators';
import {IApiImages} from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private apiService: ApiService) { }

  getImage(text) {
    return this.apiService.get(`https://api.imgur.com/3/gallery/search/top?q=${text}`)
      .pipe(
        map((gallery: {data: IApiImages[], success: boolean, status: number}) => gallery.data.map(v => v.images)),
        filter(f => f.length > 0)
      );
  }

}
