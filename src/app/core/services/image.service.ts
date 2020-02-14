import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {filter, map} from 'rxjs/operators';
import {IApiDataImg, IApiImages, Image} from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private apiService: ApiService) { }

  getImage(text) {
    return this.apiService.get(`https://api.imgur.com/3/gallery/t/${text}/`)
      .pipe(
        map((gallery: {data: IApiDataImg, success: boolean, status: number}) => {
          const arrImg = gallery.data.items.map(v => v.images);
          let result: Image[] = [];
          arrImg.map(item => result = result.concat(item));
          return result.filter(item => item && item.type !== 'image/gif')
        })
      );
  }

}
