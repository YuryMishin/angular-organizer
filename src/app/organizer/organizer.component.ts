import {Component, OnInit} from '@angular/core';
import {DateService} from '../core/services/date.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ITask, TasksService} from '../core/services/tasks.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {


  form: FormGroup;
  tasks: ITask[] = [];

  constructor(private dateService: DateService,
              private tasksService: TasksService) {
  }

  ngOnInit() {
    this.dateService.date.pipe(
      switchMap(value => this.tasksService.load(value))
    ).subscribe(tasks => {
      this.tasks = tasks;
    });

    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
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
