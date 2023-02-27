import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TapComponent } from './tap/tap.component';
import { FromEventComponent } from './from-event/from-event.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObsComponent } from './custom-obs/custom-obs.component';
import { PluckComponent } from './pluck/pluck.component';
import { TodoDemoComponent } from './todo-demo/todo-demo.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SubjectComponent } from './subject/subject.component';
import { Comp1Component } from './comman-component/comp1/comp1.component';
import { Comp2Component } from './comman-component/comp2/comp2.component';
import { Comp3Component } from './comman-component/comp3/comp3.component';


@NgModule({
  declarations: [
    AppComponent,
    TapComponent,
    FromEventComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObsComponent,
    PluckComponent,
    TodoDemoComponent,
    TakeComponent,
    RetryComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
