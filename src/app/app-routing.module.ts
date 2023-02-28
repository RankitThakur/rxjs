import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TapComponent } from './tap/tap.component';
import { FromEventComponent } from  './from-event/from-event.component'
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObsComponent } from './custom-obs/custom-obs.component';
import { PluckComponent } from './pluck/pluck.component';
import { TodoDemoComponent } from './todo-demo/todo-demo.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { SubjectComponent } from './subject/subject.component';
import { DebounceTimeDistinctUntilChangedComponent } from './debounce-time-distinct-until-changed/debounce-time-distinct-until-changed.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';


const routes: Routes = [
  { path: 'app-tap', component: TapComponent },
  { path: 'app-from', component:FromEventComponent },
  { path: 'of-from', component: OfFromComponent },
  { path: 'to-array', component: ToArrayComponent },
  { path: 'custom-obs', component: CustomObsComponent },
  { path: 'pluck', component: PluckComponent },
  { path: 'Todo-demo', component: TodoDemoComponent },
  { path: 'Take', component: TakeComponent },
  { path: 'retry', component: RetryComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'debounce-time', component: DebounceTimeDistinctUntilChangedComponent },
  { path: 'replay-subject', component: ReplaySubjectComponent },
  { path: 'async-subject', component: AsyncSubjectComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

