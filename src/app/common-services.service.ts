import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {
  subscribe = new Subject<boolean>();
  name = new Subject<string>();
  // username = new Subject<string>();
  username = new BehaviorSubject<string>('Test Demo');
  subject2 = new Subject<boolean>();
  fetchData  =new Subject<any>();
  storeVideo = new ReplaySubject<string>(3);
  asyncStoreVideo = new AsyncSubject;
  
  constructor() { }
}
