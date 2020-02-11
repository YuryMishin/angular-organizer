import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(api: string, params: any = new HttpParams()): Observable<any> {
    return this.http.get(`${api}`, {params})
      .pipe(catchError(this.formatErrors));
  }

  put(api: string, body = {}): Observable<any> {
    return this.http.put(
      `${api}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(api: string, body = {}, options?): Observable<any> {
    return this.http.post(
      `${api}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete(api: string, params: HttpParams = new HttpParams()): Observable<any> {
    const options = {params};
    return this.http.delete(
      `${api}`,
      options
    ).pipe(catchError(this.formatErrors));
  }
}
