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


@NgModule({
  declarations: [
    AppComponent,
    TapComponent,
    FromEventComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObsComponent,
    PluckComponent,
    TodoDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
