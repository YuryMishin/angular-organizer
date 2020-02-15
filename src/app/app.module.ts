import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ClarityModule} from '@clr/angular';
import {NewsListComponent} from './news-list/news-list.component';
import {OrganizerModule} from './organizer/organizer.module';
import {SharedModule} from './shared/shared.module';
import {HttpAuthInterceptor} from './core/intercepter/http.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClarityModule,

    SharedModule,
    OrganizerModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
