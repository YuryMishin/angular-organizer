import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as moment from 'moment';


export interface ITask {
  title: string;
  url: string;
  isRead: boolean;
  id?: string;
  date?: string;
}

interface CreateResponse {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  static url = 'https://ang-fb-organizer.firebaseio.com/tasks';

  constructor(private http: HttpClient) {

  }

  create(task: ITask): Observable<any> {
    return this.http.post<CreateResponse>(`${TasksService.url}/${task.date}.json`, task)
      .pipe(map(res => {
        return {...task, id: res.name};
      }));
  }

  update(task: ITask): Observable<any> {
    return this.http.put(`${TasksService.url}/${task.date}/${task.id}.json`, task);
  }

  load(date: moment.Moment): Observable<ITask[]> {
    return this.http.get<ITask[]>(`${TasksService.url}/${date.format('DD-MM-YYYY')}.json`)
      .pipe(map(tasks => {
        if (!tasks) {
          return [];
        }
        return Object.keys(tasks).map(key => ({...tasks[key], id: key}));
      }));
  }

  remove(task: ITask) {
    return this.http.delete(`${TasksService.url}/${task.date}/${task.id}.json`);
  }
}
