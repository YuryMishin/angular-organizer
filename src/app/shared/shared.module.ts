import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MomentPipe} from './moment.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    MomentPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    MomentPipe,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
