import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BHService {
  bhsubject = new BehaviorSubject<string>('Start');
  subject = new Subject<string>();
  constructor() {}

  setBH(bh: string) {
    this.bhsubject.next(bh);
  }

  setSubject(bh: string) {
    this.subject.next(bh);
  }

  getBH() {
    return this.bhsubject.asObservable();
  }
  getSubject() {
    return this.subject.asObservable();
  }
}
