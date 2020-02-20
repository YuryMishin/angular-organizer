import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DateService} from '../core/services/date.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ITask, TasksService} from '../core/services/tasks.service';
import {switchMap} from 'rxjs/operators';
import {IApiHit} from '../core/models/model';


@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class OrganizerComponent implements OnInit {


  form: FormGroup;
  tasks: ITask[] = [];

  selectedArticle;

  @Input('article')
  set article(value: IApiHit) {
    this.selectedArticle = value;
    this.initForm();
    this.loadTasksByDateSubject();
  }

  constructor(private dateService: DateService,
              private tasksService: TasksService) {
  }

  ngOnInit() {
  }

  loadTasksByDateSubject() {
    this.dateService.date.pipe(
      switchMap(value => this.tasksService.load(value))
    ).subscribe(tasks => {
      this.tasks = tasks;
    });

  }

  initForm() {
    const title = this.selectedArticle.title ? this.selectedArticle.title : this.selectedArticle.story_title;
    const url = this.selectedArticle.url ? this.selectedArticle.url : this.selectedArticle.story_url;
    this.form = new FormGroup({
      title: new FormControl(`Read: ${title}`, Validators.required),
      url: new FormControl(url)
    });
  }

  submit() {
    const formValue = this.form.value;
    const task: ITask = {
      title: formValue.title,
      url: formValue.url,
      isRead: false,
      date: this.dateService.date.value.format('DD-MM-YYYY')
    };
    this.tasksService.create(task).subscribe(qtask => {
      this.tasks.push(task);
      this.form.get('title').setValue('');
    }, err => console.log('Error FB: ', err));
  }

  remove(task) {
    this.tasksService.remove(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    }, error => console.log('Error: ', error));
  }

  openArticle(task) {
    task.isRead = true;
    this.tasksService.update(task).subscribe(res => {
      console.log('RES UPDATE: ', res);
    });
    location.href = task.url;
  }

}
