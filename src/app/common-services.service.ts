import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {
  subscribe = new Subject<boolean>();
  // username = new Subject<string>();
  username = new BehaviorSubject<string>('Test Demo');
  fetchData  =new Subject<any>();
  storeVideo = new ReplaySubject<string>(3);
  constructor() { }
}
