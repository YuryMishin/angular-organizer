import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DateService} from '../core/services/date.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ITask, TasksService} from '../core/services/tasks.service';
import {switchMap} from 'rxjs/operators';
import {IApiHit} from '../core/models/model';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizerComponent implements OnInit, AfterViewInit {


  form: FormGroup;
  tasks: ITask[] = [];

  selectedArticle;

  @Input('article')
  set article(value: IApiHit) {
    this.selectedArticle = value;
    this.initForm();
  }

  constructor(private dateService: DateService,
              private tasksService: TasksService) {
  }

  ngOnInit() {
    this.dateService.date.pipe(
      switchMap(value => this.tasksService.load(value))
    ).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  ngAfterViewInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      title: new FormControl(`Read: ${
        this.selectedArticle.title ? this.selectedArticle.title : this.selectedArticle.story_title
      }`, Validators.required)
    });
  }

  submit() {
    const {title} = this.form.value;
    const task: ITask = {
      title,
      date: this.dateService.date.value.format('DD-MM-YYYY')
    };
    this.tasksService.create(task).subscribe(qtask => {
      this.tasks.push(qtask);
      this.form.reset();
    }, err => console.log('Error FB: ', err));
  }

  remove(task) {
    this.tasksService.remove(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    }, error => console.log('Error: ', error));
  }

}
