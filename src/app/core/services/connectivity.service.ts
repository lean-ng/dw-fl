import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectivityService {

  online$: Observable<boolean>;
  onlineSource: BehaviorSubject<boolean>;

  constructor() {
    this.onlineSource = new BehaviorSubject(window.navigator.onLine);
    this.online$ = this.onlineSource.asObservable();

    window.addEventListener('online', () => {
      this.onlineSource.next(true);
    });

    window.addEventListener('offline', () => {
      this.onlineSource.next(false);
    })
  }
}
