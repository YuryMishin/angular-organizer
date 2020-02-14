import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './calendar/calendar.component';
import {SelectorComponent} from './selector/selector.component';
import {OrganizerComponent} from './organizer.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [OrganizerComponent],
})
export class OrganizerModule {
}
