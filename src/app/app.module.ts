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
import { DebounceTimeDistinctUntilChangedComponent } from './debounce-time-distinct-until-changed/debounce-time-distinct-until-changed.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { GenerateOperatorComponent } from './generate-operator/generate-operator.component';
import { AjaxOperatorComponent } from './ajax-operator/ajax-operator.component';
import { IifOperatorComponent } from './iif-operator/iif-operator.component';
import { ConcatOperatorComponent } from './concat-operator/concat-operator.component';
import { MergeOperatorComponent } from './merge-operator/merge-operator.component';
import { CombineLatestOperatorComponent } from './combine-latest-operator/combine-latest-operator.component';
import { ConcatMapOperatorComponent } from './concat-map-operator/concat-map-operator.component';


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
    Comp3Component,
    DebounceTimeDistinctUntilChangedComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    GenerateOperatorComponent,
    AjaxOperatorComponent,
    IifOperatorComponent,
    ConcatOperatorComponent,
    MergeOperatorComponent,
    CombineLatestOperatorComponent,
    ConcatMapOperatorComponent
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
